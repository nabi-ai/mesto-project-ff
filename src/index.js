import { createCard } from './components/card';
import { closeModal, onOpenModal } from './components/modal';
import { enableValidation, clearValidation } from './components/validation';
import { getUserData, getInitialCards, editProfileInfo, postCard, deleteCardOnServer, putLikeCard, deleteLikeCard, updateAvatar } from './components/api';
import './styles/index.css';

// Глобальные переменные
const cardElementSelector = '.places__item.card';
const cardImageSelector = '.card__image';
const cardTitleSelector = '.card__title';
const cardDeleteBtnSelector = '.card__delete-button';
const cardLikeBtnSelector = '.card__like-button';
const cardLikesCountSelector = '.like-button__count';
const cardLikeBtnIsActiveClassname = 'card__like-button_is-active';
const popupIsOpenedClassname = 'popup_is-opened';
const popupCommonClassname = 'popup';
const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};
let currentUser = null;

// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

/*** DOM узлы ***/
const placesList = document.querySelector('.places__list');
const openEditPopupBtn = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector(`.${popupCommonClassname}.popup_type_edit`);
const newCardPopup = document.querySelector(`.${popupCommonClassname}.popup_type_new-card`);
const cardImagePopup = document.querySelector(`.${popupCommonClassname}.popup_type_image`);
const avatarPopup = document.querySelector(`.${popupCommonClassname}.popup_type_avatar`);
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const addNewCardBtn = document.querySelector('.profile__add-button');
const cardImagePopupImg = cardImagePopup.querySelector('.popup__image');
const cardImagePopupCaption = cardImagePopup.querySelector('.popup__caption');
const userAvatar = document.querySelector('.profile__image');
// форма редактирования профиля
const editProfileForm = document.querySelector('.popup__form[name="edit-profile"]');
const nameInput = editProfileForm.querySelector('.popup__input_type_name');
const jobInput = editProfileForm.querySelector('.popup__input_type_description');
const saveProfileBtn = editProfileForm.querySelector('.popup__button.button[type="submit"]');
// форма добавления карточки
const addNewPlaceForm = document.querySelector('.popup__form[name="new-place"]');
const cardName = addNewPlaceForm.querySelector('.popup__input_type_card-name');
const urlInput = addNewPlaceForm.querySelector('.popup__input_type_url');
const addNewPlaceBtn = addNewPlaceForm.querySelector('.popup__button.button[type="submit"]');
// форма обновления аватара
const avatarForm = document.querySelector('.popup__form[name="new-avatar"]');
const avatarUrlInput = avatarForm.querySelector('.popup__input_type_url');
const updateAvatarBtn = avatarForm.querySelector('.popup__button.button[type="submit"]');
/*** ======== ***/

// функция для открытия модалки изображения карточки
const onOpenImage = (imageLink, imageName) => {
    onOpenModal(cardImagePopup, popupIsOpenedClassname, popupCommonClassname);
    cardImagePopupImg.src = imageLink;
    cardImagePopupImg.alt = imageName;
    cardImagePopupCaption.textContent = imageName;
}

const updateProfileInfo = ({ title, about, avatar }) => {
    profileDescription.textContent = about;
    profileTitle.textContent = title;

    if (avatar) {
        userAvatar.style.backgroundImage = `url(${avatar})`;
    }
}

// Функция удаления карточки
export const removeCard = (domElement) => {
    const cardId = domElement.dataset.id;
    deleteCardOnServer(cardId)
    .then(() => {
        domElement.remove();
    })
    .catch(err => console.log(err));
}

// Выводим карточки на страницу
const renderCards = (cardsData) => { 
    cardsData.forEach((item) => {
        placesList.append(createCard(
            cardTemplate, 
            cardElementSelector, 
            cardImageSelector, 
            cardLikeBtnSelector,
            cardDeleteBtnSelector, 
            cardLikesCountSelector,
            {
                card: item,
                currentUser: currentUser,
                cardTitleSelector, 
                onRemoveCallback: removeCard,
                cardLikeBtnIsActiveClassname,
                onLike,
                onOpenImage
            }
        ));
    });
}

// Открытие модалки редактирования профиля по клику на кнопку
openEditPopupBtn.addEventListener('click', () => onOpenModal(editPopup, popupIsOpenedClassname, popupCommonClassname, () => {
    clearValidation(editProfileForm, validationSettings);

    jobInput.value = currentUser.about;
    nameInput.value = currentUser.name;
})); 
// Открытие модалки добавления новой карточки по клику на кнопку
addNewCardBtn.addEventListener('click', () => onOpenModal(newCardPopup, popupIsOpenedClassname, popupCommonClassname, () => { 
    clearValidation(addNewPlaceForm, validationSettings);
})); 
// Открытие модалки обновления аватара по клику на аватар
userAvatar.addEventListener('click', () => onOpenModal(avatarPopup, popupIsOpenedClassname, popupCommonClassname, () => {
    clearValidation(avatarForm, validationSettings);
}));

/*** Форма редактирования профиля ***/

// Обработчик «отправки» формы редактирования профиля
const handleProfileEditForm = (evt) => {
    // Эта строчка отменяет стандартную отправку формы
    evt.preventDefault();

    const jobInputValue = jobInput.value;
    const nameInputValue = nameInput.value;

    profileTitle.textContent = nameInputValue;
    profileDescription.textContent = jobInputValue;

    saveProfileBtn.textContent = "Сохранение...";
    editProfileInfo({ name: nameInputValue, about: jobInputValue })
        .then((res) => {
            currentUser = res;
             updateProfileInfo({ title: currentUser.name, about: currentUser.about });

             closeModal(editPopup, popupIsOpenedClassname);
             evt.target.reset();
        })
        .catch(err => console.log(err))
        .finally(() => {
            saveProfileBtn.textContent = "Сохранить";
        });
}

editProfileForm.addEventListener('submit', handleProfileEditForm);
 
/*** ==================== ***/

/*** Форма редактирования профиля ***/

// Обработчик «отправки» формы обновления аватара
const handleAvatarUpdatingForm = (evt) => {
    // Эта строчка отменяет стандартную отправку формы
    evt.preventDefault();

    const avatarUrlInputValue = avatarUrlInput.value;

    updateAvatarBtn.textContent = "Сохранение...";
    updateAvatar({ avatar: avatarUrlInputValue })
        .then((res) => {
            currentUser = res;
            updateProfileInfo({ title: currentUser.name, about: currentUser.about, avatar: currentUser.avatar });
            
            closeModal(avatarPopup, popupIsOpenedClassname);
            evt.target.reset();
        })
        .catch(err => console.log(err))
        .finally(() => {
            updateAvatarBtn.textContent = "Сохранить";
        });
}

avatarForm.addEventListener('submit', handleAvatarUpdatingForm);
 
/*** ==================== ***/

/*** Форма добавления карточек ***/

// Обработчик «отправки» формы добавления новой карточки
const handleAddNewPlaceForm = (evt) => {
    // Эта строчка отменяет стандартную отправку формы
    evt.preventDefault();

    const cardNameValue = cardName.value;
    const urlInputValue = urlInput.value;

    addNewPlaceBtn.textContent = "Сохранение...";
    postCard({ imageName: cardNameValue, imageLink: urlInputValue })
        .then((card) => {
            placesList.prepend(createCard(
                cardTemplate, 
                cardElementSelector, 
                cardImageSelector, 
                cardLikeBtnSelector,
                cardDeleteBtnSelector, 
                cardLikesCountSelector,
                {
                    card,
                    currentUser,
                    cardTitleSelector, 
                    onRemoveCallback: removeCard,
                    cardLikeBtnIsActiveClassname,
                    onLike,
                    onOpenImage
                }
            ));

            closeModal(newCardPopup, popupIsOpenedClassname);
            evt.target.reset();
        })
        .catch(err => console.log(err))
        .finally(() => {
            addNewPlaceBtn.textContent = "Сохранить";
        });
}

addNewPlaceForm.addEventListener('submit', handleAddNewPlaceForm);

/*** ==================== ***/
// "Лайк" карточки
const onLike = (evt) => {
    const cardContainer = evt.target.closest(cardElementSelector);
    const cardId = cardContainer.dataset.id;
    const isLikedByMe = cardContainer.dataset.likedByMe === 'true';

    const cardLikesCount = evt.target.nextElementSibling;

    const likeMethod = isLikedByMe ? deleteLikeCard : putLikeCard;
    likeMethod(cardId) 
        .then((card) => {
           cardLikesCount.textContent = card.likes.length; 
            evt.target.classList.toggle(cardLikeBtnIsActiveClassname); 
            cardContainer.dataset.likedByMe = !isLikedByMe; 
        })
        .catch(err => console.log(err));
}

enableValidation(validationSettings);

/*** ==================== ***/
Promise.all([getUserData(), getInitialCards()])
    .then(([userData, initialCards]) => {
        
        currentUser = userData;
        updateProfileInfo({ title: currentUser.name, about: currentUser.about, avatar: currentUser.avatar });
        
        renderCards(initialCards);
    })
    .catch(err => console.log(err));


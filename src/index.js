import { createCard, removeCard, like, openImage } from './components/card';
import { closeModal, onOpenModal } from './components/modal';
import { initialCards } from './components/cards';
import './styles/index.css';

// Глобальные переменные
const cardElementSelector = '.places__item.card';
const cardImageSelector = '.card__image';
const cardTitleSelector = '.card__title';
const cardDeleteBtnSelector = '.card__delete-button';
const cardLikeBtnSelector = '.card__like-button';
const cardLikeBtnIsActiveClassname =  'card__like-button_is-active';
const popupIsOpenedClassname = 'popup_is-opened';
const popupCommonClassname = 'popup';

// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

/*** DOM узлы ***/
const placesList = document.querySelector('.places__list');
const openEditPopupBtn = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector(`.${popupCommonClassname}.popup_type_edit`);
const newCardPopup = document.querySelector(`.${popupCommonClassname}.popup_type_new-card`);
const cardImagePopup = document.querySelector(`.${popupCommonClassname}.popup_type_image`);
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const addNewCardBtn = document.querySelector('.profile__add-button');
const cardImagePopupImg = cardImagePopup.querySelector('.popup__image');
const cardImagePopupCaption = cardImagePopup.querySelector('.popup__caption');
// форма редактирования профиля
const editProfileForm = document.querySelector('.popup__form[name="edit-profile"]');
const nameInput = editProfileForm.querySelector('.popup__input_type_name');
const jobInput = editProfileForm.querySelector('.popup__input_type_description');
// форма добавления карточки
const addNewPlaceForm = document.querySelector('.popup__form[name="new-place"]');
const cardName = addNewPlaceForm.querySelector('.popup__input_type_card-name');
const urlInput = addNewPlaceForm.querySelector('.popup__input_type_url');
/*** ======== ***/

// Выводим карточки на страницу
initialCards.forEach(({ name, link }) => {
    placesList.append(createCard(
        cardTemplate, 
        cardElementSelector, 
        cardImageSelector, 
        link, 
        name,
        cardTitleSelector, 
        cardDeleteBtnSelector, 
        removeCard,
        cardLikeBtnSelector,
        cardLikeBtnIsActiveClassname,
        like,
        openImage,
        onOpenModal,
        popupIsOpenedClassname,
        cardImagePopup,
        popupCommonClassname,
        cardImagePopupImg, 
        cardImagePopupCaption
    ));
});

// Открытие модалки редактирования профиля по клику на кнопку
openEditPopupBtn.addEventListener('click', () => onOpenModal(editPopup, popupIsOpenedClassname, popupCommonClassname, () => {
    jobInput.value = profileDescription.textContent;
    nameInput.value = profileTitle.textContent;
})); 
// Открытие модалки добавления новой карточки по клику на кнопку
addNewCardBtn.addEventListener('click', () => onOpenModal(newCardPopup, popupIsOpenedClassname, popupCommonClassname)); 

/*** Форма редактирования профиля ***/

// Обработчик «отправки» формы редактирования профиля
const handleProfileEditForm = (evt) => {
    // Эта строчка отменяет стандартную отправку формы
    evt.preventDefault();

    const jobInputValue = jobInput.value;
    const nameInputValue = nameInput.value;

    profileTitle.textContent = nameInputValue;
    profileDescription.textContent = jobInputValue;

    closeModal(editPopup, popupIsOpenedClassname);

    evt.target.reset();
}

editProfileForm.addEventListener('submit', handleProfileEditForm);
 
/*** ==================== ***/


/*** Форма добавления карточек ***/

// Обработчик «отправки» формы добавления новой карточки
const handleAddNewPlaceForm = (evt) => {
    // Эта строчка отменяет стандартную отправку формы
    evt.preventDefault();

    const cardNameValue = cardName.value;
    const urlInputValue = urlInput.value;

    placesList.prepend(createCard(
        cardTemplate, 
        cardElementSelector, 
        cardImageSelector, 
        urlInputValue, 
        cardNameValue,
        cardTitleSelector, 
        cardDeleteBtnSelector, 
        removeCard,
        cardLikeBtnSelector,
        cardLikeBtnIsActiveClassname,
        like,
        openImage,
        onOpenModal,
        popupIsOpenedClassname,
        cardImagePopup,
        popupCommonClassname,
        cardImagePopupImg, 
        cardImagePopupCaption
    ));

    closeModal(newCardPopup, popupIsOpenedClassname);

    evt.target.reset();
}

addNewPlaceForm.addEventListener('submit', handleAddNewPlaceForm);

/*** ==================== ***/



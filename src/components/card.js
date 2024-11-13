// Функция создания карточки
export const createCard = (
    cardTemplate, 
    cardElementSelector, 
    cardImageSelector,
    imageLink, 
    imageName, 
    cardTitleSelector, 
    cardDeleteBtnSelector, 
    onRemoveCallback,
    cardLikeBtnSelector,
    cardLikeBtnIsActiveClassname,
    onLike,
    onOpenImage,
    onOpenModal,
    popupIsOpenedClassname,
    cardImagePopup,
    popupCommonClassname,
    cardImagePopupImg, 
    cardImagePopupCaption,
    showDeleteBtn,
    cardId,
    likedByMe,
    cardLikesCountSelector,
    likesCount
) => {
    const cardElement = cardTemplate.querySelector(cardElementSelector).cloneNode(true);
    const cardImage = cardElement.querySelector(cardImageSelector);
    const likeBtn = cardElement.querySelector(cardLikeBtnSelector);
    const cardDeleteBtn = cardElement.querySelector(cardDeleteBtnSelector);
    const cardLikesCountElement = cardElement.querySelector(cardLikesCountSelector);

    cardDeleteBtn.hidden = !showDeleteBtn;

    cardElement.dataset.id = cardId;
    cardElement.dataset.likedByMe = likedByMe;

    cardImage.src = imageLink; 
    cardImage.alt = imageName;
    cardElement.querySelector(cardTitleSelector).textContent = imageName;

    if (likedByMe) {
        likeBtn.classList.toggle(cardLikeBtnIsActiveClassname);
    }

    cardLikesCountElement.textContent = likesCount;
    
    cardDeleteBtn.addEventListener('click', () => onRemoveCallback(cardElement));
    likeBtn.addEventListener('click', (evt) => onLike(evt, cardLikeBtnIsActiveClassname));
    cardImage.addEventListener('click', () => onOpenImage(onOpenModal, popupIsOpenedClassname, cardImagePopup, popupCommonClassname, imageLink, imageName, cardImagePopupImg, cardImagePopupCaption));

    return cardElement;
}
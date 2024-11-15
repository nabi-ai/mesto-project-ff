// Функция создания карточки
export const createCard = (
    cardTemplate, 
    cardElementSelector, 
    cardImageSelector,
    cardLikeBtnSelector,
    cardDeleteBtnSelector, 
    cardLikesCountSelector,
    {
        card,
        currentUser,
        imageLink, 
        imageName, 
        cardTitleSelector, 
        onRemoveCallback,
        cardLikeBtnIsActiveClassname,
        onLike,
        onOpenImage,
        onOpenModal,
        popupIsOpenedClassname,
        cardImagePopup,
        popupCommonClassname,
        cardImagePopupImg, 
        cardImagePopupCaption,
    }
) => {
    const cardElement = cardTemplate.querySelector(cardElementSelector).cloneNode(true);
    const cardImage = cardElement.querySelector(cardImageSelector);
    const likeBtn = cardElement.querySelector(cardLikeBtnSelector);
    const cardDeleteBtn = cardElement.querySelector(cardDeleteBtnSelector);
    const cardLikesCountElement = cardElement.querySelector(cardLikesCountSelector);

    cardDeleteBtn.hidden = card.owner._id !== currentUser._id;

    cardElement.dataset.id = card._id;
    cardElement.dataset.likedByMe = !!card.likes.find(item => item._id === currentUser._id);

    cardImage.src = imageLink; 
    cardImage.alt = imageName;
    cardElement.querySelector(cardTitleSelector).textContent = imageName;

    if (cardElement.dataset.likedByMe === "true") {
        likeBtn.classList.toggle(cardLikeBtnIsActiveClassname);
    }

    cardLikesCountElement.textContent = card.likes.length;
    
    if (!cardDeleteBtn.hidden) {
        cardDeleteBtn.addEventListener('click', () => onRemoveCallback(cardElement));
    }

    likeBtn.addEventListener('click', (evt) => onLike(evt, cardLikeBtnIsActiveClassname));
    cardImage.addEventListener('click', () => onOpenImage(onOpenModal, popupIsOpenedClassname, cardImagePopup, popupCommonClassname, imageLink, imageName, cardImagePopupImg, cardImagePopupCaption));

    return cardElement;
}
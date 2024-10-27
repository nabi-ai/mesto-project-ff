// Функция удаления карточки
export const removeCard = (domElement) => domElement.remove();

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
    popupCommonClassname
) => {
    const cardElement = cardTemplate.querySelector(cardElementSelector).cloneNode(true);
    const cardImage = cardElement.querySelector(cardImageSelector);
    const likeBtn = cardElement.querySelector(cardLikeBtnSelector);
    
    cardImage.src = imageLink; 
    cardImage.alt = imageName;
    cardElement.querySelector(cardTitleSelector).textContent = imageName;
    
    cardElement.querySelector(cardDeleteBtnSelector).addEventListener('click', () => onRemoveCallback(cardElement));
    likeBtn.addEventListener('click', (evt) => onLike(evt, cardLikeBtnIsActiveClassname));
    cardImage.addEventListener('click', (evt) => onOpenImage(onOpenModal, popupIsOpenedClassname, cardImagePopup, popupCommonClassname, imageLink, imageName));

    return cardElement;
}

export const like = (evt, cardLikeBtnIsActiveClassname) => {
    evt.target.classList.toggle(cardLikeBtnIsActiveClassname);
}

export const openImage = (onOpenModal, popupIsOpenedClassname, cardImagePopup, popupCommonClassname, imageLink, imageName) => {
    onOpenModal(cardImagePopup, popupIsOpenedClassname, popupCommonClassname);
    const img = cardImagePopup.querySelector('.popup__image');
    const caption = cardImagePopup.querySelector('.popup__caption');
    img.src = imageLink;
    caption.textContent = imageName;
}


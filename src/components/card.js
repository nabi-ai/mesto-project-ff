// Функция удаления карточки
export const onRemoveCard = (domElement) => domElement.remove();

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
    onLike
) => {
    const cardElement = cardTemplate.querySelector(cardElementSelector).cloneNode(true);
    const cardImage = cardElement.querySelector(cardImageSelector);
    const likeBtn = cardElement.querySelector(cardLikeBtnSelector);
    
    cardImage.src = imageLink; 
    cardImage.alt = imageName;
    cardElement.querySelector(cardTitleSelector).textContent = imageName;
    cardElement.querySelector(cardDeleteBtnSelector).addEventListener('click', () => onRemoveCallback(cardElement));
    likeBtn.addEventListener('click', (evt) => onLike(evt, cardLikeBtnIsActiveClassname));

    return cardElement;
}

export const like = (evt, cardLikeBtnIsActiveClassname) => {
    evt.target.classList.toggle(cardLikeBtnIsActiveClassname);
}
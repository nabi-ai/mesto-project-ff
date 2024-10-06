// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;


// @todo: DOM узлы

const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки

const createCard = (name, link, onRemoveCallback) => {
    const cardElement = cardTemplate.querySelector('.places__item.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    
    cardImage.src = link; 
    cardImage.alt = name;
    cardElement.querySelector('.card__title').textContent = name;
    cardElement.querySelector('.card__delete-button').addEventListener('click', () => onRemoveCallback(cardElement));

    return cardElement;
}

// @todo: Функция удаления карточки

const removeCard = (domElement) => domElement.remove();

// @todo: Вывести карточки на страницу

initialCards.forEach(({ name, link }) => {
    placesList.append(createCard(name, link, removeCard));
});
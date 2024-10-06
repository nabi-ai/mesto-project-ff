// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;


// @todo: DOM узлы

const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки

const createCard = (name, link, onRemoveCallback) => {
    const cardElement = cardTemplate.querySelector('.places__item.card').cloneNode(true);

    cardElement.querySelector('.card__image').src = link;
    cardElement.querySelector('.card__title').textContent = name;
    cardElement.querySelector('.card__delete-button').addEventListener('click', () => onRemoveCallback(cardElement));

    return cardElement;
}

// @todo: Функция удаления карточки

const removeCard = (domElement) => domElement.remove();

// @todo: Вывести карточки на страницу

initialCards.forEach((item) => {
    placesList.append(createCard(item.name, item.link, removeCard));
});
// конфиг когорты
const config = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-25',
    headers: {
        authorization: "46908f7e-a1b1-44c1-ba9d-cf52254e0372",
        "Content-Type": "application/json",
    },
};

// проверка ответа
const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      }
};

// получение данных о пользователе
export const getUserData = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers,
    }).then(checkResponse); 
};

//получение карточек
export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers
    }).then(checkResponse);
};

//обновление данных пользователя
export const editProfileInfo = ({ name, about }) => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(checkResponse);
};

//добавление новой карточки на сервер
export const postCard = ({ imageName, imageLink }) => {
    return fetch(`${config.baseUrl}/cards`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify({
        name: imageName,
        link: imageLink,
      }),
    }).then(checkResponse);
};

// запрос на удаление карточки
export const deleteCardOnServer = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    }).then(checkResponse);
};

// запрос на лайк карточки
export const putLikeCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: config.headers,
    }).then(checkResponse);
};

//удаление лайка с карточки
export const deleteLikeCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    }).then(checkResponse);
};

// запрос на изменение аватара
export const updateAvatar = (data) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify(data),
    }).then(checkResponse);
};
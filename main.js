/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteCardOnServer: () => (/* binding */ deleteCardOnServer),\n/* harmony export */   deleteLikeCard: () => (/* binding */ deleteLikeCard),\n/* harmony export */   editProfileInfo: () => (/* binding */ editProfileInfo),\n/* harmony export */   getInitialCards: () => (/* binding */ getInitialCards),\n/* harmony export */   getUserData: () => (/* binding */ getUserData),\n/* harmony export */   postCard: () => (/* binding */ postCard),\n/* harmony export */   putLikeCard: () => (/* binding */ putLikeCard),\n/* harmony export */   updateAvatar: () => (/* binding */ updateAvatar)\n/* harmony export */ });\n// конфиг когорты\nvar config = {\n  baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-25',\n  headers: {\n    authorization: \"46908f7e-a1b1-44c1-ba9d-cf52254e0372\",\n    \"Content-Type\": \"application/json\"\n  }\n};\n\n// проверка ответа\nvar checkResponse = function checkResponse(res) {\n  if (res.ok) {\n    return res.json();\n  } else {\n    return Promise.reject(\"\\u0427\\u0442\\u043E-\\u0442\\u043E \\u043F\\u043E\\u0448\\u043B\\u043E \\u043D\\u0435 \\u0442\\u0430\\u043A: \".concat(res.status));\n  }\n};\n\n// получение данных о пользователе\nvar getUserData = function getUserData() {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    headers: config.headers\n  }).then(checkResponse);\n};\n\n//получение карточек\nvar getInitialCards = function getInitialCards() {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    headers: config.headers\n  }).then(checkResponse);\n};\n\n//обновление данных пользователя\nvar editProfileInfo = function editProfileInfo(_ref) {\n  var name = _ref.name,\n    about = _ref.about;\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    method: \"PATCH\",\n    headers: config.headers,\n    body: JSON.stringify({\n      name: name,\n      about: about\n    })\n  }).then(checkResponse);\n};\n\n//добавление новой карточки на сервер\nvar postCard = function postCard(_ref2) {\n  var imageName = _ref2.imageName,\n    imageLink = _ref2.imageLink;\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    method: \"POST\",\n    headers: config.headers,\n    body: JSON.stringify({\n      name: imageName,\n      link: imageLink\n    })\n  }).then(checkResponse);\n};\n\n// запрос на удаление карточки\nvar deleteCardOnServer = function deleteCardOnServer(cardId) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/\").concat(cardId), {\n    method: \"DELETE\",\n    headers: config.headers\n  }).then(checkResponse);\n};\n\n// запрос на лайк карточки\nvar putLikeCard = function putLikeCard(cardId) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(cardId), {\n    method: \"PUT\",\n    headers: config.headers\n  }).then(checkResponse);\n};\n\n//удаление лайка с карточки\nvar deleteLikeCard = function deleteLikeCard(cardId) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(cardId), {\n    method: \"DELETE\",\n    headers: config.headers\n  }).then(checkResponse);\n};\n\n// запрос на изменение аватара\nvar updateAvatar = function updateAvatar(data) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me/avatar\"), {\n    method: \"PATCH\",\n    headers: config.headers,\n    body: JSON.stringify(data)\n  }).then(checkResponse);\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/api.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard)\n/* harmony export */ });\n// Функция создания карточки\nvar createCard = function createCard(cardTemplate, cardElementSelector, cardImageSelector, cardLikeBtnSelector, cardDeleteBtnSelector, cardLikesCountSelector, _ref) {\n  var card = _ref.card,\n    currentUser = _ref.currentUser,\n    cardTitleSelector = _ref.cardTitleSelector,\n    onRemoveCallback = _ref.onRemoveCallback,\n    cardLikeBtnIsActiveClassname = _ref.cardLikeBtnIsActiveClassname,\n    onLike = _ref.onLike,\n    onOpenImage = _ref.onOpenImage;\n  var cardElement = cardTemplate.querySelector(cardElementSelector).cloneNode(true);\n  var cardImage = cardElement.querySelector(cardImageSelector);\n  var likeBtn = cardElement.querySelector(cardLikeBtnSelector);\n  var cardDeleteBtn = cardElement.querySelector(cardDeleteBtnSelector);\n  var cardLikesCountElement = cardElement.querySelector(cardLikesCountSelector);\n  cardDeleteBtn.hidden = card.owner._id !== currentUser._id;\n  cardElement.dataset.id = card._id;\n  cardElement.dataset.likedByMe = !!card.likes.find(function (item) {\n    return item._id === currentUser._id;\n  });\n  cardImage.src = card.link;\n  cardImage.alt = card.name;\n  cardElement.querySelector(cardTitleSelector).textContent = card.name;\n  if (cardElement.dataset.likedByMe === \"true\") {\n    likeBtn.classList.toggle(cardLikeBtnIsActiveClassname);\n  }\n  cardLikesCountElement.textContent = card.likes.length;\n  if (!cardDeleteBtn.hidden) {\n    cardDeleteBtn.addEventListener('click', function () {\n      return onRemoveCallback(cardElement);\n    });\n  }\n  likeBtn.addEventListener('click', function (evt) {\n    return onLike(evt, cardLikeBtnIsActiveClassname);\n  });\n  cardImage.addEventListener('click', function () {\n    return onOpenImage(card.link, card.name);\n  });\n  return cardElement;\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   onOpenModal: () => (/* binding */ onOpenModal)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar initialCloseModalHandlers = {\n  // закрытие модалки по нажатию на крестик\n  onClickCloseBtn: null,\n  // закрытие модалки по клику на overlay\n  onClickOverlay: null,\n  // закрытие модалки по нажатию на ESC\n  onPressEscBtn: null\n};\nvar currentModal = {\n  closePopupBtn: null,\n  closeModalHandlers: _objectSpread({}, initialCloseModalHandlers)\n};\nvar resetCurrentModalObj = function resetCurrentModalObj() {\n  currentModal.closePopupBtn = null;\n  currentModal.closeModalHandlers = _objectSpread({}, initialCloseModalHandlers);\n};\nvar openPopup = function openPopup(popupElement, popupIsOpenedClassname, modalHasBeenOpenedCallback) {\n  popupElement.classList.add(popupIsOpenedClassname);\n  modalHasBeenOpenedCallback();\n};\nvar closeModal = function closeModal(popupElement, popupIsOpenedClassname) {\n  popupElement.classList.remove(popupIsOpenedClassname);\n  currentModal.closePopupBtn.removeEventListener('click', currentModal.closeModalHandlers.onClickCloseBtn);\n  popupElement.removeEventListener('click', currentModal.closeModalHandlers.onClickOverlay);\n  document.removeEventListener('keydown', currentModal.closeModalHandlers.onPressEscBtn);\n  resetCurrentModalObj();\n};\n\n// общая функция для навешивания слушателей событий закрытия модалки\nvar addClosePopupListeners = function addClosePopupListeners(popupElement, popupIsOpenedClassname, popupCommonClassname) {\n  var closeModalCallback = function closeModalCallback() {\n    return closeModal(popupElement, popupIsOpenedClassname);\n  };\n  currentModal.closeModalHandlers.onClickCloseBtn = function () {\n    closeModalCallback();\n  };\n  currentModal.closeModalHandlers.onClickOverlay = function (evt) {\n    if (evt.target.classList.contains(popupCommonClassname)) {\n      closeModalCallback();\n    }\n  };\n  currentModal.closeModalHandlers.onPressEscBtn = function (evt) {\n    if (evt.key === 'Escape') {\n      closeModalCallback();\n    }\n  };\n  currentModal.closePopupBtn.addEventListener('click', currentModal.closeModalHandlers.onClickCloseBtn);\n  popupElement.addEventListener('click', currentModal.closeModalHandlers.onClickOverlay);\n  document.addEventListener('keydown', currentModal.closeModalHandlers.onPressEscBtn);\n};\n\n// обработчик для слушателя открытия модалки\nvar onOpenModal = function onOpenModal(popupElement, popupIsOpenedClassname, popupCommonClassname) {\n  var modalHasBeenOpenedCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};\n  currentModal.closePopupBtn = popupElement.querySelector('.popup__close');\n  openPopup(popupElement, popupIsOpenedClassname, modalHasBeenOpenedCallback);\n  addClosePopupListeners(popupElement, popupIsOpenedClassname, popupCommonClassname);\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/modal.js?");

/***/ }),

/***/ "./src/components/validation.js":
/*!**************************************!*\
  !*** ./src/components/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearValidation: () => (/* binding */ clearValidation),\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation)\n/* harmony export */ });\n// Функция, показывающая ошибку\nvar showInputError = function showInputError(formElement, inputElement, errorMessage, validationSettings) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.add(validationSettings.inputErrorClass);\n  errorElement.textContent = errorMessage;\n  errorElement.classList.add(validationSettings.errorClass);\n};\n\n// Функция, скрывающая ошибку\nvar hideInputError = function hideInputError(formElement, inputElement, validationSettings) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.remove(validationSettings.inputErrorClass);\n  errorElement.classList.remove(validationSettings.errorClass);\n  errorElement.textContent = \"\";\n};\n\n// Функция, проверяющая на ошибку\nvar isValid = function isValid(formElement, inputElement, validationSettings) {\n  // сброс кастомного текста ошибки\n  inputElement.setCustomValidity('');\n  var dataset = inputElement.dataset,\n    validity = inputElement.validity;\n  var errorMessage = dataset.errorMessage;\n  var patternMismatch = validity.patternMismatch,\n    valid = validity.valid;\n  if (!valid) {\n    if (patternMismatch) {\n      inputElement.setCustomValidity(errorMessage);\n    }\n    showInputError(formElement, inputElement, inputElement.validationMessage, validationSettings);\n  } else {\n    hideInputError(formElement, inputElement, validationSettings);\n  }\n};\nvar hasInvalidImput = function hasInvalidImput(inputList) {\n  return inputList.some(function (inputElement) {\n    return !inputElement.validity.valid;\n  });\n};\nvar disableButton = function disableButton(buttonElement, validationSettings) {\n  buttonElement.classList.add(validationSettings.inactiveButtonClass);\n  buttonElement.disabled = true;\n};\nvar enableButton = function enableButton(buttonElement, validationSettings) {\n  buttonElement.disabled = false;\n  buttonElement.classList.remove(validationSettings.inactiveButtonClass);\n};\nvar toggleButtonState = function toggleButtonState(inputList, buttonElement, validationSettings) {\n  if (hasInvalidImput(inputList)) {\n    disableButton(buttonElement, validationSettings);\n  } else {\n    enableButton(buttonElement, validationSettings);\n  }\n};\n\n// Функция добавления слушателя событий всем полям ввода внутри формы\nvar setEventListeners = function setEventListeners(formElement, validationSettings) {\n  var inputList = Array.from(formElement.querySelectorAll(validationSettings.inputSelector));\n  var buttonElement = formElement.querySelector(validationSettings.submitButtonSelector);\n  toggleButtonState(inputList, buttonElement, validationSettings);\n  inputList.forEach(function (inputElement) {\n    inputElement.addEventListener(\"input\", function () {\n      isValid(formElement, inputElement, validationSettings);\n      toggleButtonState(inputList, buttonElement, validationSettings);\n    });\n  });\n};\nvar enableValidation = function enableValidation(validationSettings) {\n  var formList = Array.from(document.querySelectorAll(validationSettings.formSelector));\n  formList.forEach(function (formElement) {\n    formElement.addEventListener('submit', function (evt) {\n      evt.preventDefault();\n    });\n    setEventListeners(formElement, validationSettings);\n  });\n};\nvar clearValidation = function clearValidation(formElement, validationSettings) {\n  var inputList = Array.from(formElement.querySelectorAll(validationSettings.inputSelector));\n  var buttonElement = formElement.querySelector(validationSettings.submitButtonSelector);\n  inputList.forEach(function (inputElement) {\n    hideInputError(formElement, inputElement, validationSettings);\n    inputElement.value = \"\";\n  });\n  disableButton(buttonElement, validationSettings);\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeCard: () => (/* binding */ removeCard)\n/* harmony export */ });\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/card */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal */ \"./src/components/modal.js\");\n/* harmony import */ var _components_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/validation */ \"./src/components/validation.js\");\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/api */ \"./src/components/api.js\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n\n\n\n\n// Глобальные переменные\nvar cardElementSelector = '.places__item.card';\nvar cardImageSelector = '.card__image';\nvar cardTitleSelector = '.card__title';\nvar cardDeleteBtnSelector = '.card__delete-button';\nvar cardLikeBtnSelector = '.card__like-button';\nvar cardLikesCountSelector = '.like-button__count';\nvar cardLikeBtnIsActiveClassname = 'card__like-button_is-active';\nvar popupIsOpenedClassname = 'popup_is-opened';\nvar popupCommonClassname = 'popup';\nvar validationSettings = {\n  formSelector: '.popup__form',\n  inputSelector: '.popup__input',\n  submitButtonSelector: '.popup__button',\n  inactiveButtonClass: 'popup__button_disabled',\n  inputErrorClass: 'popup__input_type_error',\n  errorClass: 'popup__error_visible'\n};\nvar currentUser = null;\n\n// Темплейт карточки\nvar cardTemplate = document.querySelector('#card-template').content;\n\n/*** DOM узлы ***/\nvar placesList = document.querySelector('.places__list');\nvar openEditPopupBtn = document.querySelector('.profile__edit-button');\nvar editPopup = document.querySelector(\".\".concat(popupCommonClassname, \".popup_type_edit\"));\nvar newCardPopup = document.querySelector(\".\".concat(popupCommonClassname, \".popup_type_new-card\"));\nvar cardImagePopup = document.querySelector(\".\".concat(popupCommonClassname, \".popup_type_image\"));\nvar avatarPopup = document.querySelector(\".\".concat(popupCommonClassname, \".popup_type_avatar\"));\nvar profileTitle = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\nvar addNewCardBtn = document.querySelector('.profile__add-button');\nvar cardImagePopupImg = cardImagePopup.querySelector('.popup__image');\nvar cardImagePopupCaption = cardImagePopup.querySelector('.popup__caption');\nvar userAvatar = document.querySelector('.profile__image');\n// форма редактирования профиля\nvar editProfileForm = document.querySelector('.popup__form[name=\"edit-profile\"]');\nvar nameInput = editProfileForm.querySelector('.popup__input_type_name');\nvar jobInput = editProfileForm.querySelector('.popup__input_type_description');\nvar saveProfileBtn = editProfileForm.querySelector('.popup__button.button[type=\"submit\"]');\n// форма добавления карточки\nvar addNewPlaceForm = document.querySelector('.popup__form[name=\"new-place\"]');\nvar cardName = addNewPlaceForm.querySelector('.popup__input_type_card-name');\nvar urlInput = addNewPlaceForm.querySelector('.popup__input_type_url');\nvar addNewPlaceBtn = addNewPlaceForm.querySelector('.popup__button.button[type=\"submit\"]');\n// форма обновления аватара\nvar avatarForm = document.querySelector('.popup__form[name=\"new-avatar\"]');\nvar avatarUrlInput = avatarForm.querySelector('.popup__input_type_url');\nvar updateAvatarBtn = avatarForm.querySelector('.popup__button.button[type=\"submit\"]');\n/*** ======== ***/\n\n// функция для открытия модалки изображения карточки\nvar onOpenImage = function onOpenImage(imageLink, imageName) {\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.onOpenModal)(cardImagePopup, popupIsOpenedClassname, popupCommonClassname);\n  cardImagePopupImg.src = imageLink;\n  cardImagePopupImg.alt = imageName;\n  cardImagePopupCaption.textContent = imageName;\n};\nvar updateProfileInfo = function updateProfileInfo(_ref) {\n  var title = _ref.title,\n    about = _ref.about,\n    avatar = _ref.avatar;\n  profileDescription.textContent = about;\n  profileTitle.textContent = title;\n  if (avatar) {\n    userAvatar.style.backgroundImage = \"url(\".concat(avatar, \")\");\n  }\n};\n\n// Функция удаления карточки\nvar removeCard = function removeCard(domElement) {\n  var cardId = domElement.dataset.id;\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_3__.deleteCardOnServer)(cardId).then(function () {\n    domElement.remove();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\n// Выводим карточки на страницу\nvar renderCards = function renderCards(cardsData) {\n  cardsData.forEach(function (item) {\n    placesList.append((0,_components_card__WEBPACK_IMPORTED_MODULE_0__.createCard)(cardTemplate, cardElementSelector, cardImageSelector, cardLikeBtnSelector, cardDeleteBtnSelector, cardLikesCountSelector, {\n      card: item,\n      currentUser: currentUser,\n      cardTitleSelector: cardTitleSelector,\n      onRemoveCallback: removeCard,\n      cardLikeBtnIsActiveClassname: cardLikeBtnIsActiveClassname,\n      onLike: onLike,\n      onOpenImage: onOpenImage\n    }));\n  });\n};\n\n// Открытие модалки редактирования профиля по клику на кнопку\nopenEditPopupBtn.addEventListener('click', function () {\n  return (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.onOpenModal)(editPopup, popupIsOpenedClassname, popupCommonClassname, function () {\n    (0,_components_validation__WEBPACK_IMPORTED_MODULE_2__.clearValidation)(editProfileForm, validationSettings);\n    jobInput.value = currentUser.about;\n    nameInput.value = currentUser.name;\n  });\n});\n// Открытие модалки добавления новой карточки по клику на кнопку\naddNewCardBtn.addEventListener('click', function () {\n  return (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.onOpenModal)(newCardPopup, popupIsOpenedClassname, popupCommonClassname, function () {\n    (0,_components_validation__WEBPACK_IMPORTED_MODULE_2__.clearValidation)(addNewPlaceForm, validationSettings);\n  });\n});\n// Открытие модалки обновления аватара по клику на аватар\nuserAvatar.addEventListener('click', function () {\n  return (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.onOpenModal)(avatarPopup, popupIsOpenedClassname, popupCommonClassname, function () {\n    (0,_components_validation__WEBPACK_IMPORTED_MODULE_2__.clearValidation)(avatarForm, validationSettings);\n  });\n});\n\n/*** Форма редактирования профиля ***/\n\n// Обработчик «отправки» формы редактирования профиля\nvar handleProfileEditForm = function handleProfileEditForm(evt) {\n  // Эта строчка отменяет стандартную отправку формы\n  evt.preventDefault();\n  var jobInputValue = jobInput.value;\n  var nameInputValue = nameInput.value;\n  profileTitle.textContent = nameInputValue;\n  profileDescription.textContent = jobInputValue;\n  saveProfileBtn.textContent = \"Сохранение...\";\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_3__.editProfileInfo)({\n    name: nameInputValue,\n    about: jobInputValue\n  }).then(function (res) {\n    currentUser = res;\n    updateProfileInfo({\n      title: currentUser.name,\n      about: currentUser.about\n    });\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(editPopup, popupIsOpenedClassname);\n    evt.target.reset();\n  }).catch(function (err) {\n    return console.log(err);\n  }).finally(function () {\n    saveProfileBtn.textContent = \"Сохранить\";\n  });\n};\neditProfileForm.addEventListener('submit', handleProfileEditForm);\n\n/*** ==================== ***/\n\n/*** Форма редактирования профиля ***/\n\n// Обработчик «отправки» формы обновления аватара\nvar handleAvatarUpdatingForm = function handleAvatarUpdatingForm(evt) {\n  // Эта строчка отменяет стандартную отправку формы\n  evt.preventDefault();\n  var avatarUrlInputValue = avatarUrlInput.value;\n  updateAvatarBtn.textContent = \"Сохранение...\";\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_3__.updateAvatar)({\n    avatar: avatarUrlInputValue\n  }).then(function (res) {\n    currentUser = res;\n    updateProfileInfo({\n      title: currentUser.name,\n      about: currentUser.about,\n      avatar: currentUser.avatar\n    });\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(avatarPopup, popupIsOpenedClassname);\n    evt.target.reset();\n  }).catch(function (err) {\n    return console.log(err);\n  }).finally(function () {\n    updateAvatarBtn.textContent = \"Сохранить\";\n  });\n};\navatarForm.addEventListener('submit', handleAvatarUpdatingForm);\n\n/*** ==================== ***/\n\n/*** Форма добавления карточек ***/\n\n// Обработчик «отправки» формы добавления новой карточки\nvar handleAddNewPlaceForm = function handleAddNewPlaceForm(evt) {\n  // Эта строчка отменяет стандартную отправку формы\n  evt.preventDefault();\n  var cardNameValue = cardName.value;\n  var urlInputValue = urlInput.value;\n  addNewPlaceBtn.textContent = \"Сохранение...\";\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_3__.postCard)({\n    imageName: cardNameValue,\n    imageLink: urlInputValue\n  }).then(function (card) {\n    placesList.prepend((0,_components_card__WEBPACK_IMPORTED_MODULE_0__.createCard)(cardTemplate, cardElementSelector, cardImageSelector, cardLikeBtnSelector, cardDeleteBtnSelector, cardLikesCountSelector, {\n      card: card,\n      currentUser: currentUser,\n      cardTitleSelector: cardTitleSelector,\n      onRemoveCallback: removeCard,\n      cardLikeBtnIsActiveClassname: cardLikeBtnIsActiveClassname,\n      onLike: onLike,\n      onOpenImage: onOpenImage\n    }));\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(newCardPopup, popupIsOpenedClassname);\n    evt.target.reset();\n  }).catch(function (err) {\n    return console.log(err);\n  }).finally(function () {\n    addNewPlaceBtn.textContent = \"Сохранить\";\n  });\n};\naddNewPlaceForm.addEventListener('submit', handleAddNewPlaceForm);\n\n/*** ==================== ***/\n// \"Лайк\" карточки\nvar onLike = function onLike(evt) {\n  var cardContainer = evt.target.closest(cardElementSelector);\n  var cardId = cardContainer.dataset.id;\n  var isLikedByMe = cardContainer.dataset.likedByMe === 'true';\n  var cardLikesCount = evt.target.nextElementSibling;\n  var likeMethod = isLikedByMe ? _components_api__WEBPACK_IMPORTED_MODULE_3__.deleteLikeCard : _components_api__WEBPACK_IMPORTED_MODULE_3__.putLikeCard;\n  likeMethod(cardId).then(function (card) {\n    cardLikesCount.textContent = card.likes.length;\n    evt.target.classList.toggle(cardLikeBtnIsActiveClassname);\n    cardContainer.dataset.likedByMe = !isLikedByMe;\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n(0,_components_validation__WEBPACK_IMPORTED_MODULE_2__.enableValidation)(validationSettings);\n\n/*** ==================== ***/\nPromise.all([(0,_components_api__WEBPACK_IMPORTED_MODULE_3__.getUserData)(), (0,_components_api__WEBPACK_IMPORTED_MODULE_3__.getInitialCards)()]).then(function (_ref2) {\n  var _ref3 = _slicedToArray(_ref2, 2),\n    userData = _ref3[0],\n    initialCards = _ref3[1];\n  currentUser = userData;\n  updateProfileInfo({\n    title: currentUser.name,\n    about: currentUser.about,\n    avatar: currentUser.avatar\n  });\n  renderCards(initialCards);\n}).catch(function (err) {\n  return console.log(err);\n});\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/styles/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
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

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   like: () => (/* binding */ like),\n/* harmony export */   removeCard: () => (/* binding */ removeCard)\n/* harmony export */ });\n// Функция удаления карточки\nvar removeCard = function removeCard(domElement) {\n  return domElement.remove();\n};\n\n// Функция создания карточки\nvar createCard = function createCard(cardTemplate, cardElementSelector, cardImageSelector, imageLink, imageName, cardTitleSelector, cardDeleteBtnSelector, onRemoveCallback, cardLikeBtnSelector, cardLikeBtnIsActiveClassname, onLike, onOpenImage, onOpenModal, popupIsOpenedClassname, cardImagePopup, popupCommonClassname, cardImagePopupImg, cardImagePopupCaption) {\n  var cardElement = cardTemplate.querySelector(cardElementSelector).cloneNode(true);\n  var cardImage = cardElement.querySelector(cardImageSelector);\n  var likeBtn = cardElement.querySelector(cardLikeBtnSelector);\n  cardImage.src = imageLink;\n  cardImage.alt = imageName;\n  cardElement.querySelector(cardTitleSelector).textContent = imageName;\n  cardElement.querySelector(cardDeleteBtnSelector).addEventListener('click', function () {\n    return onRemoveCallback(cardElement);\n  });\n  likeBtn.addEventListener('click', function (evt) {\n    return onLike(evt, cardLikeBtnIsActiveClassname);\n  });\n  cardImage.addEventListener('click', function () {\n    return onOpenImage(onOpenModal, popupIsOpenedClassname, cardImagePopup, popupCommonClassname, imageLink, imageName, cardImagePopupImg, cardImagePopupCaption);\n  });\n  return cardElement;\n};\nvar like = function like(evt, cardLikeBtnIsActiveClassname) {\n  evt.target.classList.toggle(cardLikeBtnIsActiveClassname);\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

/***/ }),

/***/ "./src/components/cards.js":
/*!*********************************!*\
  !*** ./src/components/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/cards.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   onOpenModal: () => (/* binding */ onOpenModal)\n/* harmony export */ });\nvar openPopup = function openPopup(popupElement, popupIsOpenedClassname, modalHasBeenOpenedCallback) {\n  popupElement.classList.add(popupIsOpenedClassname);\n  modalHasBeenOpenedCallback();\n};\nvar closeModal = function closeModal(popupElement, popupIsOpenedClassname, closePopupBtn, closeModalHandlers) {\n  popupElement.classList.remove(popupIsOpenedClassname);\n  closePopupBtn.removeEventListener('click', closeModalHandlers.onClickCloseBtn);\n  popupElement.removeEventListener('click', closeModalHandlers.onClickOverlay);\n  document.removeEventListener('keydown', closeModalHandlers.onPressEscBtn);\n};\n\n// общая функция для навешивания слушателей событий закрытия модалки\nvar addClosePopupListeners = function addClosePopupListeners(popupElement, popupIsOpenedClassname, popupCommonClassname) {\n  var closePopupBtn = popupElement.querySelector('.popup__close');\n  var closeModalCallback = function closeModalCallback() {\n    return closeModal(popupElement, popupIsOpenedClassname, closePopupBtn, closeModalHandlers);\n  };\n  var closeModalHandlers = {\n    // закрытие модалки по нажатию на крестик\n    onClickCloseBtn: function onClickCloseBtn(evt) {\n      closeModalCallback();\n    },\n    // закрытие модалки по клику на overlay\n    onClickOverlay: function onClickOverlay(evt) {\n      if (evt.target.classList.contains(popupCommonClassname)) {\n        closeModalCallback();\n      }\n    },\n    // закрытие модалки по нажатию на ESC\n    onPressEscBtn: function onPressEscBtn(evt) {\n      if (evt.key === 'Escape') {\n        closeModalCallback();\n      }\n    }\n  };\n  closePopupBtn.addEventListener('click', closeModalHandlers.onClickCloseBtn);\n  popupElement.addEventListener('click', closeModalHandlers.onClickOverlay);\n  document.addEventListener('keydown', closeModalHandlers.onPressEscBtn);\n};\n\n// обработчик для слушателя открытия модалки\nvar onOpenModal = function onOpenModal(popupElement, popupIsOpenedClassname, popupCommonClassname) {\n  var modalHasBeenOpenedCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};\n  openPopup(popupElement, popupIsOpenedClassname, modalHasBeenOpenedCallback);\n  addClosePopupListeners(popupElement, popupIsOpenedClassname, popupCommonClassname);\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/modal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/card */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal */ \"./src/components/modal.js\");\n/* harmony import */ var _components_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cards */ \"./src/components/cards.js\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n\n\n\n\n\n// Глобальные переменные\nvar cardElementSelector = '.places__item.card';\nvar cardImageSelector = '.card__image';\nvar cardTitleSelector = '.card__title';\nvar cardDeleteBtnSelector = '.card__delete-button';\nvar cardLikeBtnSelector = '.card__like-button';\nvar cardLikeBtnIsActiveClassname = 'card__like-button_is-active';\nvar popupIsOpenedClassname = 'popup_is-opened';\nvar popupCommonClassname = 'popup';\n\n// Темплейт карточки\nvar cardTemplate = document.querySelector('#card-template').content;\n\n/*** DOM узлы ***/\nvar placesList = document.querySelector('.places__list');\nvar openEditPopupBtn = document.querySelector('.profile__edit-button');\nvar editPopup = document.querySelector(\".\".concat(popupCommonClassname, \".popup_type_edit\"));\nvar newCardPopup = document.querySelector(\".\".concat(popupCommonClassname, \".popup_type_new-card\"));\nvar cardImagePopup = document.querySelector(\".\".concat(popupCommonClassname, \".popup_type_image\"));\nvar profileTitle = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\nvar addNewCardBtn = document.querySelector('.profile__add-button');\nvar cardImagePopupImg = cardImagePopup.querySelector('.popup__image');\nvar cardImagePopupCaption = cardImagePopup.querySelector('.popup__caption');\n// форма редактирования профиля\nvar editProfileForm = document.querySelector('.popup__form[name=\"edit-profile\"]');\nvar nameInput = editProfileForm.querySelector('.popup__input_type_name');\nvar jobInput = editProfileForm.querySelector('.popup__input_type_description');\n// форма добавления карточки\nvar addNewPlaceForm = document.querySelector('.popup__form[name=\"new-place\"]');\nvar cardName = addNewPlaceForm.querySelector('.popup__input_type_card-name');\nvar urlInput = addNewPlaceForm.querySelector('.popup__input_type_url');\n/*** ======== ***/\n\n// функция для открытия модалки изображения карточки\nvar openImage = function openImage(onOpenModal, popupIsOpenedClassname, cardImagePopup, popupCommonClassname, imageLink, imageName, cardImagePopupImg, cardImagePopupCaption) {\n  onOpenModal(cardImagePopup, popupIsOpenedClassname, popupCommonClassname);\n  cardImagePopupImg.src = imageLink;\n  cardImagePopupImg.alt = imageName;\n  cardImagePopupCaption.textContent = imageName;\n};\n\n// Выводим карточки на страницу\n_components_cards__WEBPACK_IMPORTED_MODULE_2__.initialCards.forEach(function (_ref) {\n  var name = _ref.name,\n    link = _ref.link;\n  placesList.append((0,_components_card__WEBPACK_IMPORTED_MODULE_0__.createCard)(cardTemplate, cardElementSelector, cardImageSelector, link, name, cardTitleSelector, cardDeleteBtnSelector, _components_card__WEBPACK_IMPORTED_MODULE_0__.removeCard, cardLikeBtnSelector, cardLikeBtnIsActiveClassname, _components_card__WEBPACK_IMPORTED_MODULE_0__.like, openImage, _components_modal__WEBPACK_IMPORTED_MODULE_1__.onOpenModal, popupIsOpenedClassname, cardImagePopup, popupCommonClassname, cardImagePopupImg, cardImagePopupCaption));\n});\n\n// Открытие модалки редактирования профиля по клику на кнопку\nopenEditPopupBtn.addEventListener('click', function () {\n  return (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.onOpenModal)(editPopup, popupIsOpenedClassname, popupCommonClassname, function () {\n    jobInput.value = profileDescription.textContent;\n    nameInput.value = profileTitle.textContent;\n  });\n});\n// Открытие модалки добавления новой карточки по клику на кнопку\naddNewCardBtn.addEventListener('click', function () {\n  return (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.onOpenModal)(newCardPopup, popupIsOpenedClassname, popupCommonClassname);\n});\n\n/*** Форма редактирования профиля ***/\n\n// Обработчик «отправки» формы редактирования профиля\nvar handleProfileEditForm = function handleProfileEditForm(evt) {\n  // Эта строчка отменяет стандартную отправку формы\n  evt.preventDefault();\n  var jobInputValue = jobInput.value;\n  var nameInputValue = nameInput.value;\n  profileTitle.textContent = nameInputValue;\n  profileDescription.textContent = jobInputValue;\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(editPopup, popupIsOpenedClassname);\n  evt.target.reset();\n};\neditProfileForm.addEventListener('submit', handleProfileEditForm);\n\n/*** ==================== ***/\n\n/*** Форма добавления карточек ***/\n\n// Обработчик «отправки» формы добавления новой карточки\nvar handleAddNewPlaceForm = function handleAddNewPlaceForm(evt) {\n  // Эта строчка отменяет стандартную отправку формы\n  evt.preventDefault();\n  var cardNameValue = cardName.value;\n  var urlInputValue = urlInput.value;\n  placesList.prepend((0,_components_card__WEBPACK_IMPORTED_MODULE_0__.createCard)(cardTemplate, cardElementSelector, cardImageSelector, urlInputValue, cardNameValue, cardTitleSelector, cardDeleteBtnSelector, _components_card__WEBPACK_IMPORTED_MODULE_0__.removeCard, cardLikeBtnSelector, cardLikeBtnIsActiveClassname, _components_card__WEBPACK_IMPORTED_MODULE_0__.like, openImage, _components_modal__WEBPACK_IMPORTED_MODULE_1__.onOpenModal, popupIsOpenedClassname, cardImagePopup, popupCommonClassname, cardImagePopupImg, cardImagePopupCaption));\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(newCardPopup, popupIsOpenedClassname);\n  evt.target.reset();\n};\naddNewPlaceForm.addEventListener('submit', handleAddNewPlaceForm);\n\n/*** ==================== ***/\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

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
const openPopup = (popupElement, popupIsOpenedClassname, modalHasBeenOpenedCallback) => {
    popupElement.classList.add(popupIsOpenedClassname);
    modalHasBeenOpenedCallback();
}

export const closeModal = (popupElement, popupIsOpenedClassname, closePopupBtn, closeModalHandlers) => {
    popupElement.classList.remove(popupIsOpenedClassname);
    
    closePopupBtn.removeEventListener('click', closeModalHandlers.onClickCloseBtn);
    popupElement.removeEventListener('click', closeModalHandlers.onClickOverlay);
    document.removeEventListener('keydown', closeModalHandlers.onPressEscBtn);
}

// общая функция для навешивания слушателей событий закрытия модалки
const addClosePopupListeners = (popupElement, popupIsOpenedClassname, popupCommonClassname) => {
    const closePopupBtn = popupElement.querySelector('.popup__close');
    const closeModalCallback = () => closeModal(popupElement, popupIsOpenedClassname, closePopupBtn, closeModalHandlers);

    const closeModalHandlers = {
        // закрытие модалки по нажатию на крестик
        onClickCloseBtn: (evt) => {
            closeModalCallback();
        },
        // закрытие модалки по клику на overlay
        onClickOverlay: (evt) => {
            if (evt.target.classList.contains(popupCommonClassname)) {
                closeModalCallback();
            }
        },
        // закрытие модалки по нажатию на ESC
        onPressEscBtn: (evt) => {
            if (evt.key === 'Escape') {
                closeModalCallback();
            }
        }
    };

    closePopupBtn.addEventListener('click', closeModalHandlers.onClickCloseBtn);
    popupElement.addEventListener('click', closeModalHandlers.onClickOverlay);
    document.addEventListener('keydown', closeModalHandlers.onPressEscBtn);
}

// обработчик для слушателя открытия модалки
export const onOpenModal = (popupElement, popupIsOpenedClassname, popupCommonClassname, modalHasBeenOpenedCallback = () => {}) => { 
    openPopup(popupElement, popupIsOpenedClassname, modalHasBeenOpenedCallback);
    addClosePopupListeners(popupElement, popupIsOpenedClassname, popupCommonClassname);
}
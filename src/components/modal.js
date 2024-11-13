const initialCloseModalHandlers = {
    // закрытие модалки по нажатию на крестик
    onClickCloseBtn: null,
    // закрытие модалки по клику на overlay
    onClickOverlay: null,
    // закрытие модалки по нажатию на ESC
    onPressEscBtn: null
};

const currentModal = {
    closePopupBtn: null,
    closeModalHandlers: {...initialCloseModalHandlers}
};

const resetCurrentModalObj = () => {
    currentModal.closePopupBtn = null;
    currentModal.closeModalHandlers = {...initialCloseModalHandlers};
}

const openPopup = (popupElement, popupIsOpenedClassname, modalHasBeenOpenedCallback) => {
    popupElement.classList.add(popupIsOpenedClassname);
    modalHasBeenOpenedCallback();
}

export const closeModal = (popupElement, popupIsOpenedClassname) => {
    popupElement.classList.remove(popupIsOpenedClassname);
    
    currentModal.closePopupBtn.removeEventListener('click', currentModal.closeModalHandlers.onClickCloseBtn);
    popupElement.removeEventListener('click', currentModal.closeModalHandlers.onClickOverlay);
    document.removeEventListener('keydown', currentModal.closeModalHandlers.onPressEscBtn);

    resetCurrentModalObj();
}

// общая функция для навешивания слушателей событий закрытия модалки
const addClosePopupListeners = (popupElement, popupIsOpenedClassname, popupCommonClassname) => {
    const closeModalCallback = () => closeModal(popupElement, popupIsOpenedClassname);

    currentModal.closeModalHandlers.onClickCloseBtn = () => {
        closeModalCallback();
    };
    currentModal.closeModalHandlers.onClickOverlay = (evt) => {
        if (evt.target.classList.contains(popupCommonClassname)) {
            closeModalCallback();
        }
    };
    currentModal.closeModalHandlers.onPressEscBtn = (evt) => {
        if (evt.key === 'Escape') {
            closeModalCallback();
        }
    };

    currentModal.closePopupBtn.addEventListener('click', currentModal.closeModalHandlers.onClickCloseBtn);
    popupElement.addEventListener('click', currentModal.closeModalHandlers.onClickOverlay);
    document.addEventListener('keydown', currentModal.closeModalHandlers.onPressEscBtn);
}

// обработчик для слушателя открытия модалки
export const onOpenModal = (popupElement, popupIsOpenedClassname, popupCommonClassname, modalHasBeenOpenedCallback = () => {}) => { 
    currentModal.closePopupBtn = popupElement.querySelector('.popup__close');

    openPopup(popupElement, popupIsOpenedClassname, modalHasBeenOpenedCallback);
    addClosePopupListeners(popupElement, popupIsOpenedClassname, popupCommonClassname);
}
const openPopup = (popupElement, popupIsOpenedClassname) => {
    popupElement.classList.add(popupIsOpenedClassname);
}

export const closeModal = (popupElement, popupIsOpenedClassname) => {
    popupElement.classList.remove(popupIsOpenedClassname);
}

// общая функция для навешивания слушателей событий закрытия модалки
const addClosePopupListeners = (popupElement, popupIsOpenedClassname, popupCommonClassname) => {
    const closePopupBtn = popupElement.querySelector('.popup__close');

    // закрытие модалки по нажатию на крестик
    const onClickCloseBtn = (evt) => {
        closeModal(popupElement, popupIsOpenedClassname);
        closePopupBtn.removeEventListener('click', onClickCloseBtn);
    }
    closePopupBtn.addEventListener('click', onClickCloseBtn);

    // закрытие модалки по клику на overlay
    const onClickOverlay = (evt) => {
        if (evt.target.classList.contains(popupCommonClassname)) {
            closeModal(popupElement, popupIsOpenedClassname);
            popupElement.removeEventListener('click', onClickOverlay);
        }
    }
    popupElement.addEventListener('click', onClickOverlay);

    // закрытие модалки по нажатию на ESC
    const onPressEscBtn = (evt) => {
        if (evt.key === 'Escape') {
            closeModal(popupElement, popupIsOpenedClassname);
            document.removeEventListener('keydown', onPressEscBtn);
        }
    }
    document.addEventListener('keydown', onPressEscBtn);
}

// обработчик для слушателя открытия модалки
export const onOpenModal = (popupElement, popupIsOpenedClassname, popupCommonClassname) => { 
    openPopup(popupElement, popupIsOpenedClassname);
    addClosePopupListeners(popupElement, popupIsOpenedClassname, popupCommonClassname);
}
export const openPopup = (popupElement, popupIsOpenedClassname) => {
    popupElement.classList.add(popupIsOpenedClassname);
}

export const closeModal = (popupElement, popupIsOpenedClassname) => {
    popupElement.classList.remove(popupIsOpenedClassname);
}
// Функция, показывающая ошибку
const showInputError = (
    formElement,
    inputElement,
    errorMessage,
    validationSettings
) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationSettings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationSettings.errorClass);
};

// Функция, скрывающая ошибку
const hideInputError = (formElement, inputElement, validationSettings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationSettings.inputErrorClass);
    errorElement.classList.remove(validationSettings.errorClass);
    errorElement.textContent = "";
};

// Функция, проверяющая на ошибку
const isValid = (formElement, inputElement, validationSettings) => {
    const { dataset, validity } = inputElement;
    const { valueMissingErrorMessage } = dataset;
    const { valueMissing, valid } = validity;

    if (valueMissing && valueMissingErrorMessage) {
        inputElement.setCustomValidity(valueMissingErrorMessage);
    }

    if (!valid) {
        showInputError(
          formElement,
          inputElement,
          inputElement.validationMessage,
          validationSettings
        );
    } else {
        hideInputError(formElement, inputElement, validationSettings);
    }
};

const hasInvalidImput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};
    
const disableButton = (buttonElement, validationSettings) => {
    buttonElement.classList.add(validationSettings.inactiveButtonClass);
    buttonElement.disabled = true;
};

const enableButton = (buttonElement, validationSettings) => {
    buttonElement.disabled = false;
    buttonElement.classList.remove(validationSettings.inactiveButtonClass);
}
    
const toggleButtonState = (inputList, buttonElement, validationSettings) => {
    if (hasInvalidImput(inputList)) {
        disableButton(buttonElement, validationSettings);
    } else {
        enableButton(buttonElement, validationSettings);
    }
};

// Функция добавления слушателя событий всем полям ввода внутри формы
const setEventListeners = (formElement, validationSettings) => {
    const inputList = Array.from(
      formElement.querySelectorAll(validationSettings.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      validationSettings.submitButtonSelector
    );
    toggleButtonState(inputList, buttonElement, validationSettings);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        isValid(formElement, inputElement, validationSettings);
        toggleButtonState(inputList, buttonElement, validationSettings);
      });
    });
};

export const enableValidation = (validationSettings) => {
    const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
          evt.preventDefault();
        });
        setEventListeners(formElement, validationSettings);
    });
};

export const clearValidation = (formElement, validationSettings) => {
    const inputList = Array.from(
        formElement.querySelectorAll(validationSettings.inputSelector)
    );
    const buttonElement = formElement.querySelector(
        validationSettings.submitButtonSelector
    );
    inputList.forEach((inputElement) => {
        hideInputError(formElement, inputElement, validationSettings);
        inputElement.value = "";
    });
    disableButton(buttonElement, validationSettings);
};
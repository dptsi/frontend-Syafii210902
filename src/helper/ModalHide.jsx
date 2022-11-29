export const hideModal = (elementId) => {
    
    const { Modal } = require("bootstrap/dist/js/bootstrap.bundle");
    Modal.getOrCreateInstance(elementId).hide()

    return false
}
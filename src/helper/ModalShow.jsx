export const showModal = (elementId) => {
    
    const { Modal } = require("bootstrap/dist/js/bootstrap.bundle");
    new Modal(elementId).show()

    return false
}
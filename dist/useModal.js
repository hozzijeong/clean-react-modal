import { useContext } from "react";
import { ModalContext } from "./ModalContext";
function useModal() {
    var _a = useContext(ModalContext), isModalOpen = _a[0], setIsModalOpen = _a[1];
    var closeModal = function () {
        if (!setIsModalOpen)
            return;
        setIsModalOpen(false);
    };
    var openModal = function () {
        if (!setIsModalOpen)
            return;
        setIsModalOpen(true);
    };
    return { isModalOpen: isModalOpen, openModal: openModal, closeModal: closeModal };
}
export default useModal;

/// <reference types="react" />
export type Dicrection = "top" | "bottom" | "right" | "left" | "center";
interface Props {
    direction: Dicrection;
    children: React.ReactNode;
    closeEvent: () => void;
}
declare function Modal({ children, closeEvent, direction }: Props): import("react").ReactPortal;
export default Modal;

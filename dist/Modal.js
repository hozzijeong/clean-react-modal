var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import ReactDom from "react-dom";
import { Styled as S, cssDirection } from "./Modal.styles";
function Modal(_a) {
    var children = _a.children, closeEvent = _a.closeEvent, direction = _a.direction;
    var $modalRoot = document.getElementById("modal-root");
    var dialogKeyDownListener = function (event) {
        if (event.key === "Escape") {
            closeEvent();
        }
    };
    var dialogBackdropListener = function (event) {
        if (event.target === event.currentTarget) {
            closeEvent();
        }
    };
    return ReactDom.createPortal(_jsx(S.Dialog, __assign({ onKeyDown: dialogKeyDownListener, onClick: dialogBackdropListener }, { children: _jsx(S.ModalContent, __assign({ direction: direction, customInputStyle: cssDirection[direction], height: "228px" }, { children: children })) })), $modalRoot !== null && $modalRoot !== void 0 ? $modalRoot : document.body);
}
export default Modal;

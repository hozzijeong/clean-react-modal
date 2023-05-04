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
import { createContext, useContext, useState } from "react";
export var ModalContext = createContext([false, null]);
export function ModalProvider(_a) {
    var children = _a.children;
    var initialModalState = useContext(ModalContext)[0];
    var _b = useState(initialModalState), modalState = _b[0], setModalState = _b[1];
    return (_jsx(ModalContext.Provider, __assign({ value: [modalState, setModalState] }, { children: children })));
}

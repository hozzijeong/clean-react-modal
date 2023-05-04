var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css, keyframes } from "styled-components";
var animationDirection = {
    top: keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    from {\n      transform: translateY(-100%);\n    }\n    to {\n      transform: translateY(0);\n    }\n  "], ["\n    from {\n      transform: translateY(-100%);\n    }\n    to {\n      transform: translateY(0);\n    }\n  "]))),
    bottom: keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    from {\n      transform: translateY(100%);\n    }\n    to {\n      transform: translateY(0);\n    }\n  "], ["\n    from {\n      transform: translateY(100%);\n    }\n    to {\n      transform: translateY(0);\n    }\n  "]))),
    right: keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    from {\n      transform: translateX(100%);\n    }\n    to {\n      transform: translateX(0);\n    }\n  "], ["\n    from {\n      transform: translateX(100%);\n    }\n    to {\n      transform: translateX(0);\n    }\n  "]))),
    left: keyframes(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    from {\n      transform: translateX(-100%);\n    }\n    to {\n      transform: translateX(0%);\n    }\n  "], ["\n    from {\n      transform: translateX(-100%);\n    }\n    to {\n      transform: translateX(0%);\n    }\n  "]))),
    center: keyframes(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n   from {\n      transform: scale(0);\n    }\n    to {\n      transform: scale(1);\n    }\n    "], ["\n   from {\n      transform: scale(0);\n    }\n    to {\n      transform: scale(1);\n    }\n    "]))),
};
export var cssDirection = {
    top: css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    top: 0;\n    border-radius: 0 0 5px 5px;\n  "], ["\n    top: 0;\n    border-radius: 0 0 5px 5px;\n  "]))),
    bottom: css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    bottom: 0;\n    border-radius: 5px 5px 0 0;\n  "], ["\n    bottom: 0;\n    border-radius: 5px 5px 0 0;\n  "]))),
    right: css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    right: 0;\n    border-radius: 5px 0 0 5px;\n  "], ["\n    right: 0;\n    border-radius: 5px 0 0 5px;\n  "]))),
    left: css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    left: 0;\n    border-radius: 0 5px 5px 0;\n  "], ["\n    left: 0;\n    border-radius: 0 5px 5px 0;\n  "]))),
    center: css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n  "], ["\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n  "]))),
};
export var Styled = {
    Dialog: styled.dialog(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n\n    display: block;\n    position: fixed;\n    background: rgba(0, 0, 0, 0.55);\n\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n\n    margin: 0;\n    padding: 0;\n\n    border: none;\n\n    &::backdrop {\n      background: rgba(0, 0, 0, 0.5);\n    }\n  "], ["\n    width: 100%;\n    height: 100%;\n\n    display: block;\n    position: fixed;\n    background: rgba(0, 0, 0, 0.55);\n\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n\n    margin: 0;\n    padding: 0;\n\n    border: none;\n\n    &::backdrop {\n      background: rgba(0, 0, 0, 0.5);\n    }\n  "]))),
    ModalContent: styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    position: fixed;\n    display: flex;\n    justify-content: center;\n\n    width: ", ";\n    height: ", ";\n\n    padding: 34px 0;\n    background: #fff;\n\n    animation: ", " 1s ease-in-out\n      0s both;\n\n    ", ";\n  "], ["\n    position: fixed;\n    display: flex;\n    justify-content: center;\n\n    width: ", ";\n    height: ", ";\n\n    padding: 34px 0;\n    background: #fff;\n\n    animation: ", " 1s ease-in-out\n      0s both;\n\n    ", ";\n  "])), function (_a) {
        var width = _a.width;
        return width !== null && width !== void 0 ? width : "100%";
    }, function (_a) {
        var height = _a.height;
        return height !== null && height !== void 0 ? height : "100%";
    }, function (props) { return animationDirection[props.direction]; }, function (_a) {
        var customInputStyle = _a.customInputStyle;
        return customInputStyle && customInputStyle;
    }),
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;

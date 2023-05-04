import { CSSProp } from "styled-components";
import { Dicrection } from "./Modal";
interface StyleInputProps {
    customInputStyle?: CSSProp;
    direction: Dicrection;
    width?: string;
    height?: string;
}
export declare const cssDirection: {
    top: import("styled-components").FlattenSimpleInterpolation;
    bottom: import("styled-components").FlattenSimpleInterpolation;
    right: import("styled-components").FlattenSimpleInterpolation;
    left: import("styled-components").FlattenSimpleInterpolation;
    center: import("styled-components").FlattenSimpleInterpolation;
};
export declare const Styled: {
    Dialog: import("styled-components").StyledComponent<"dialog", any, {}, never>;
    ModalContent: import("styled-components").StyledComponent<"div", any, StyleInputProps, never>;
};
export {};

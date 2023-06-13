/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyButton {
        "disabled": boolean;
        "focus": () => Promise<void>;
    }
}
export interface MyButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyButtonElement;
}
declare global {
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLElementTagNameMap {
        "my-button": HTMLMyButtonElement;
    }
}
declare namespace LocalJSX {
    interface MyButton {
        "disabled"?: boolean;
        "onZClick"?: (event: MyButtonCustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "my-button": MyButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
        }
    }
}

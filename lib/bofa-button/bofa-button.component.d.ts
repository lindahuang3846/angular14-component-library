import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare type BofaButtonVariant = 'primary' | 'secondary' | 'text';
export declare type BofaButtonSize = 'small' | 'medium' | 'large';
export declare class BofaButtonComponent {
    variant: BofaButtonVariant;
    size: BofaButtonSize;
    disabled: boolean;
    fullWidth: boolean;
    type: 'button' | 'submit' | 'reset';
    clicked: EventEmitter<MouseEvent>;
    onClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BofaButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BofaButtonComponent, "bofa-button", never, { "variant": "variant"; "size": "size"; "disabled": "disabled"; "fullWidth": "fullWidth"; "type": "type"; }, { "clicked": "clicked"; }, never, ["*"], false>;
}

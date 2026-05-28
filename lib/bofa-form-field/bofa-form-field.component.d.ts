import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare type BofaFormFieldType = 'text' | 'email' | 'password' | 'number' | 'tel';
export declare class BofaFormFieldComponent {
    label: string;
    placeholder: string;
    type: BofaFormFieldType;
    value: string;
    required: boolean;
    disabled: boolean;
    errorMessage: string;
    hint: string;
    valueChange: EventEmitter<string>;
    focused: boolean;
    get hasError(): boolean;
    onInput(event: Event): void;
    onFocus(): void;
    onBlur(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BofaFormFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BofaFormFieldComponent, "bofa-form-field", never, { "label": "label"; "placeholder": "placeholder"; "type": "type"; "value": "value"; "required": "required"; "disabled": "disabled"; "errorMessage": "errorMessage"; "hint": "hint"; }, { "valueChange": "valueChange"; }, never, never, false>;
}

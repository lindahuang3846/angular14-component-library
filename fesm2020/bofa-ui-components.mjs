import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class BofaUiComponentsService {
    constructor() { }
}
BofaUiComponentsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BofaUiComponentsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
BofaUiComponentsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BofaUiComponentsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BofaUiComponentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class BofaUiComponentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
BofaUiComponentsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BofaUiComponentsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BofaUiComponentsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: BofaUiComponentsComponent, selector: "lib-bofa-ui-components", ngImport: i0, template: `
    <p>
      bofa-ui-components works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BofaUiComponentsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-bofa-ui-components', template: `
    <p>
      bofa-ui-components works!
    </p>
  ` }]
        }], ctorParameters: function () { return []; } });

class BofaButtonComponent {
    constructor() {
        this.variant = 'primary';
        this.size = 'medium';
        this.disabled = false;
        this.fullWidth = false;
        this.type = 'button';
        this.clicked = new EventEmitter();
    }
    onClick(event) {
        if (!this.disabled) {
            this.clicked.emit(event);
        }
    }
}
BofaButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BofaButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BofaButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: BofaButtonComponent, selector: "bofa-button", inputs: { variant: "variant", size: "size", disabled: "disabled", fullWidth: "fullWidth", type: "type" }, outputs: { clicked: "clicked" }, ngImport: i0, template: "<button\n  [type]=\"type\"\n  [disabled]=\"disabled\"\n  [class]=\"'bofa-btn bofa-btn--' + variant + ' bofa-btn--' + size\"\n  [class.bofa-btn--full-width]=\"fullWidth\"\n  [class.bofa-btn--disabled]=\"disabled\"\n  (click)=\"onClick($event)\">\n  <ng-content></ng-content>\n</button>\n", styles: [":host{display:inline-block}.bofa-btn{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-weight:600;border:2px solid transparent;border-radius:4px;cursor:pointer;transition:background-color .2s ease,border-color .2s ease,color .2s ease;letter-spacing:.025em}.bofa-btn--small{padding:6px 16px;font-size:.8rem}.bofa-btn--medium{padding:10px 24px;font-size:.95rem}.bofa-btn--large{padding:14px 32px;font-size:1.1rem}.bofa-btn--primary{background-color:#012169;color:#fff;border-color:#012169}.bofa-btn--primary:hover:not(.bofa-btn--disabled){background-color:#001a4e;border-color:#001a4e}.bofa-btn--secondary{background-color:#fff;color:#012169;border-color:#012169}.bofa-btn--secondary:hover:not(.bofa-btn--disabled){background-color:#f0f4fa}.bofa-btn--text{background-color:transparent;color:#012169;border-color:transparent}.bofa-btn--text:hover:not(.bofa-btn--disabled){background-color:#f0f4fa}.bofa-btn--full-width{width:100%}.bofa-btn--disabled{opacity:.5;cursor:not-allowed}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BofaButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bofa-button', template: "<button\n  [type]=\"type\"\n  [disabled]=\"disabled\"\n  [class]=\"'bofa-btn bofa-btn--' + variant + ' bofa-btn--' + size\"\n  [class.bofa-btn--full-width]=\"fullWidth\"\n  [class.bofa-btn--disabled]=\"disabled\"\n  (click)=\"onClick($event)\">\n  <ng-content></ng-content>\n</button>\n", styles: [":host{display:inline-block}.bofa-btn{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-weight:600;border:2px solid transparent;border-radius:4px;cursor:pointer;transition:background-color .2s ease,border-color .2s ease,color .2s ease;letter-spacing:.025em}.bofa-btn--small{padding:6px 16px;font-size:.8rem}.bofa-btn--medium{padding:10px 24px;font-size:.95rem}.bofa-btn--large{padding:14px 32px;font-size:1.1rem}.bofa-btn--primary{background-color:#012169;color:#fff;border-color:#012169}.bofa-btn--primary:hover:not(.bofa-btn--disabled){background-color:#001a4e;border-color:#001a4e}.bofa-btn--secondary{background-color:#fff;color:#012169;border-color:#012169}.bofa-btn--secondary:hover:not(.bofa-btn--disabled){background-color:#f0f4fa}.bofa-btn--text{background-color:transparent;color:#012169;border-color:transparent}.bofa-btn--text:hover:not(.bofa-btn--disabled){background-color:#f0f4fa}.bofa-btn--full-width{width:100%}.bofa-btn--disabled{opacity:.5;cursor:not-allowed}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], size: [{
                type: Input
            }], disabled: [{
                type: Input
            }], fullWidth: [{
                type: Input
            }], type: [{
                type: Input
            }], clicked: [{
                type: Output
            }] } });

class BofaFormFieldComponent {
    constructor() {
        this.label = '';
        this.placeholder = '';
        this.type = 'text';
        this.value = '';
        this.required = false;
        this.disabled = false;
        this.errorMessage = '';
        this.hint = '';
        this.valueChange = new EventEmitter();
        this.focused = false;
    }
    get hasError() {
        return this.errorMessage.length > 0;
    }
    onInput(event) {
        const target = event.target;
        this.value = target.value;
        this.valueChange.emit(this.value);
    }
    onFocus() {
        this.focused = true;
    }
    onBlur() {
        this.focused = false;
    }
}
BofaFormFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BofaFormFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BofaFormFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: BofaFormFieldComponent, selector: "bofa-form-field", inputs: { label: "label", placeholder: "placeholder", type: "type", value: "value", required: "required", disabled: "disabled", errorMessage: "errorMessage", hint: "hint" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: "<div class=\"bofa-form-field\"\n     [class.bofa-form-field--focused]=\"focused\"\n     [class.bofa-form-field--error]=\"hasError\"\n     [class.bofa-form-field--disabled]=\"disabled\">\n  <label *ngIf=\"label\" class=\"bofa-form-field__label\">\n    {{ label }}\n    <span *ngIf=\"required\" class=\"bofa-form-field__required\">*</span>\n  </label>\n  <input\n    class=\"bofa-form-field__input\"\n    [type]=\"type\"\n    [placeholder]=\"placeholder\"\n    [value]=\"value\"\n    [disabled]=\"disabled\"\n    [required]=\"required\"\n    (input)=\"onInput($event)\"\n    (focus)=\"onFocus()\"\n    (blur)=\"onBlur()\" />\n  <span *ngIf=\"hint && !hasError\" class=\"bofa-form-field__hint\">{{ hint }}</span>\n  <span *ngIf=\"hasError\" class=\"bofa-form-field__error\">{{ errorMessage }}</span>\n</div>\n", styles: [".bofa-form-field{display:flex;flex-direction:column;gap:4px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.bofa-form-field__label{font-size:.85rem;font-weight:600;color:#333}.bofa-form-field__required{color:#dc1431;margin-left:2px}.bofa-form-field__input{padding:10px 12px;font-size:1rem;border:1px solid #cccccc;border-radius:4px;outline:none;transition:border-color .2s ease,box-shadow .2s ease;color:#333}.bofa-form-field--focused .bofa-form-field__input{border-color:#012169;box-shadow:0 0 0 2px #01216926}.bofa-form-field--error .bofa-form-field__input{border-color:#dc1431;box-shadow:0 0 0 2px #dc14311a}.bofa-form-field--disabled .bofa-form-field__input{background-color:#f5f5f5;color:#999;cursor:not-allowed}.bofa-form-field__hint{font-size:.8rem;color:#666}.bofa-form-field__error{font-size:.8rem;color:#dc1431;font-weight:500}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BofaFormFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bofa-form-field', template: "<div class=\"bofa-form-field\"\n     [class.bofa-form-field--focused]=\"focused\"\n     [class.bofa-form-field--error]=\"hasError\"\n     [class.bofa-form-field--disabled]=\"disabled\">\n  <label *ngIf=\"label\" class=\"bofa-form-field__label\">\n    {{ label }}\n    <span *ngIf=\"required\" class=\"bofa-form-field__required\">*</span>\n  </label>\n  <input\n    class=\"bofa-form-field__input\"\n    [type]=\"type\"\n    [placeholder]=\"placeholder\"\n    [value]=\"value\"\n    [disabled]=\"disabled\"\n    [required]=\"required\"\n    (input)=\"onInput($event)\"\n    (focus)=\"onFocus()\"\n    (blur)=\"onBlur()\" />\n  <span *ngIf=\"hint && !hasError\" class=\"bofa-form-field__hint\">{{ hint }}</span>\n  <span *ngIf=\"hasError\" class=\"bofa-form-field__error\">{{ errorMessage }}</span>\n</div>\n", styles: [".bofa-form-field{display:flex;flex-direction:column;gap:4px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.bofa-form-field__label{font-size:.85rem;font-weight:600;color:#333}.bofa-form-field__required{color:#dc1431;margin-left:2px}.bofa-form-field__input{padding:10px 12px;font-size:1rem;border:1px solid #cccccc;border-radius:4px;outline:none;transition:border-color .2s ease,box-shadow .2s ease;color:#333}.bofa-form-field--focused .bofa-form-field__input{border-color:#012169;box-shadow:0 0 0 2px #01216926}.bofa-form-field--error .bofa-form-field__input{border-color:#dc1431;box-shadow:0 0 0 2px #dc14311a}.bofa-form-field--disabled .bofa-form-field__input{background-color:#f5f5f5;color:#999;cursor:not-allowed}.bofa-form-field__hint{font-size:.8rem;color:#666}.bofa-form-field__error{font-size:.8rem;color:#dc1431;font-weight:500}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], type: [{
                type: Input
            }], value: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], hint: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });

class BofaUiComponentsModule {
}
BofaUiComponentsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BofaUiComponentsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BofaUiComponentsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: BofaUiComponentsModule, declarations: [BofaUiComponentsComponent,
        BofaButtonComponent,
        BofaFormFieldComponent], imports: [CommonModule], exports: [BofaUiComponentsComponent,
        BofaButtonComponent,
        BofaFormFieldComponent] });
BofaUiComponentsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BofaUiComponentsModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BofaUiComponentsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BofaUiComponentsComponent,
                        BofaButtonComponent,
                        BofaFormFieldComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        BofaUiComponentsComponent,
                        BofaButtonComponent,
                        BofaFormFieldComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of bofa-ui-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BofaButtonComponent, BofaFormFieldComponent, BofaUiComponentsComponent, BofaUiComponentsModule, BofaUiComponentsService };
//# sourceMappingURL=bofa-ui-components.mjs.map

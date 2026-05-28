import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class BofaFormFieldComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9mYS1mb3JtLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2JvZmEtdWktY29tcG9uZW50cy9zcmMvbGliL2JvZmEtZm9ybS1maWVsZC9ib2ZhLWZvcm0tZmllbGQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYm9mYS11aS1jb21wb25lbnRzL3NyYy9saWIvYm9mYS1mb3JtLWZpZWxkL2JvZmEtZm9ybS1maWVsZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFTdkUsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU1XLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixTQUFJLEdBQXNCLE1BQU0sQ0FBQztRQUNqQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFbkQsWUFBTyxHQUFHLEtBQUssQ0FBQztLQW1CakI7SUFqQkMsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFZO1FBQ2xCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUEwQixDQUFDO1FBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7O21IQTdCVSxzQkFBc0I7dUdBQXRCLHNCQUFzQiw4UUNUbkMsd3lCQXFCQTsyRkRaYSxzQkFBc0I7a0JBTGxDLFNBQVM7K0JBQ0UsaUJBQWlCOzhCQUtsQixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDSSxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgQm9mYUZvcm1GaWVsZFR5cGUgPSAndGV4dCcgfCAnZW1haWwnIHwgJ3Bhc3N3b3JkJyB8ICdudW1iZXInIHwgJ3RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvZmEtZm9ybS1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9ib2ZhLWZvcm0tZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ib2ZhLWZvcm0tZmllbGQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJvZmFGb3JtRmllbGRDb21wb25lbnQge1xuICBASW5wdXQoKSBsYWJlbCA9ICcnO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xuICBASW5wdXQoKSB0eXBlOiBCb2ZhRm9ybUZpZWxkVHlwZSA9ICd0ZXh0JztcbiAgQElucHV0KCkgdmFsdWUgPSAnJztcbiAgQElucHV0KCkgcmVxdWlyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZXJyb3JNZXNzYWdlID0gJyc7XG4gIEBJbnB1dCgpIGhpbnQgPSAnJztcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgZm9jdXNlZCA9IGZhbHNlO1xuXG4gIGdldCBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvck1lc3NhZ2UubGVuZ3RoID4gMDtcbiAgfVxuXG4gIG9uSW5wdXQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy52YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gIH1cblxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJib2ZhLWZvcm0tZmllbGRcIlxuICAgICBbY2xhc3MuYm9mYS1mb3JtLWZpZWxkLS1mb2N1c2VkXT1cImZvY3VzZWRcIlxuICAgICBbY2xhc3MuYm9mYS1mb3JtLWZpZWxkLS1lcnJvcl09XCJoYXNFcnJvclwiXG4gICAgIFtjbGFzcy5ib2ZhLWZvcm0tZmllbGQtLWRpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gIDxsYWJlbCAqbmdJZj1cImxhYmVsXCIgY2xhc3M9XCJib2ZhLWZvcm0tZmllbGRfX2xhYmVsXCI+XG4gICAge3sgbGFiZWwgfX1cbiAgICA8c3BhbiAqbmdJZj1cInJlcXVpcmVkXCIgY2xhc3M9XCJib2ZhLWZvcm0tZmllbGRfX3JlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgPC9sYWJlbD5cbiAgPGlucHV0XG4gICAgY2xhc3M9XCJib2ZhLWZvcm0tZmllbGRfX2lucHV0XCJcbiAgICBbdHlwZV09XCJ0eXBlXCJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgIChpbnB1dCk9XCJvbklucHV0KCRldmVudClcIlxuICAgIChmb2N1cyk9XCJvbkZvY3VzKClcIlxuICAgIChibHVyKT1cIm9uQmx1cigpXCIgLz5cbiAgPHNwYW4gKm5nSWY9XCJoaW50ICYmICFoYXNFcnJvclwiIGNsYXNzPVwiYm9mYS1mb3JtLWZpZWxkX19oaW50XCI+e3sgaGludCB9fTwvc3Bhbj5cbiAgPHNwYW4gKm5nSWY9XCJoYXNFcnJvclwiIGNsYXNzPVwiYm9mYS1mb3JtLWZpZWxkX19lcnJvclwiPnt7IGVycm9yTWVzc2FnZSB9fTwvc3Bhbj5cbjwvZGl2PlxuIl19
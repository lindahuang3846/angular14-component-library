import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class BofaButtonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9mYS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYm9mYS11aS1jb21wb25lbnRzL3NyYy9saWIvYm9mYS1idXR0b24vYm9mYS1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYm9mYS11aS1jb21wb25lbnRzL3NyYy9saWIvYm9mYS1idXR0b24vYm9mYS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFVdkUsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU1XLFlBQU8sR0FBc0IsU0FBUyxDQUFDO1FBQ3ZDLFNBQUksR0FBbUIsUUFBUSxDQUFDO1FBQ2hDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixTQUFJLEdBQWtDLFFBQVEsQ0FBQztRQUM5QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztLQU9wRDtJQUxDLE9BQU8sQ0FBQyxLQUFpQjtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7O2dIQVpVLG1CQUFtQjtvR0FBbkIsbUJBQW1CLDhMQ1ZoQyxnU0FTQTsyRkRDYSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsYUFBYTs4QkFLZCxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0ksT0FBTztzQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIEJvZmFCdXR0b25WYXJpYW50ID0gJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAndGV4dCc7XG5leHBvcnQgdHlwZSBCb2ZhQnV0dG9uU2l6ZSA9ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvZmEtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JvZmEtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYm9mYS1idXR0b24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJvZmFCdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKSB2YXJpYW50OiBCb2ZhQnV0dG9uVmFyaWFudCA9ICdwcmltYXJ5JztcbiAgQElucHV0KCkgc2l6ZTogQm9mYUJ1dHRvblNpemUgPSAnbWVkaXVtJztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZnVsbFdpZHRoID0gZmFsc2U7XG4gIEBJbnB1dCgpIHR5cGU6ICdidXR0b24nIHwgJ3N1Ym1pdCcgfCAncmVzZXQnID0gJ2J1dHRvbic7XG4gIEBPdXRwdXQoKSBjbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xpY2tlZC5lbWl0KGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cbiIsIjxidXR0b25cbiAgW3R5cGVdPVwidHlwZVwiXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gIFtjbGFzc109XCInYm9mYS1idG4gYm9mYS1idG4tLScgKyB2YXJpYW50ICsgJyBib2ZhLWJ0bi0tJyArIHNpemVcIlxuICBbY2xhc3MuYm9mYS1idG4tLWZ1bGwtd2lkdGhdPVwiZnVsbFdpZHRoXCJcbiAgW2NsYXNzLmJvZmEtYnRuLS1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9idXR0b24+XG4iXX0=
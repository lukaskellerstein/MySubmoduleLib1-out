(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ui-components', ['exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (factory((global['ui-components'] = {}),global.ng.core,global.ng.common,global.ng.forms));
}(this, (function (exports,core,common,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MyButtonComponent = (function () {
        function MyButtonComponent() {
        }
        MyButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-my-button',
                        template: "<div class=\"dynamic-field form-button\" [formGroup]=\"group\">\n  <button [disabled]=\"config.disabled\" type=\"submit\">\n    {{ config.label }}\n  </button>\n</div>",
                        styles: [""]
                    },] },
        ];
        return MyButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MyInputComponent = (function () {
        function MyInputComponent() {
        }
        MyInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-my-input',
                        template: "<div class=\"dynamic-field form-input\" [formGroup]=\"group\">\n  <label>{{ config.label }}</label>\n  <input type=\"text\" [attr.placeholder]=\"config.placeholder\" [formControlName]=\"config.name\">\n</div>",
                        styles: [""]
                    },] },
        ];
        return MyInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MySelectComponent = (function () {
        function MySelectComponent() {
        }
        MySelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-my-select',
                        template: "<div class=\"dynamic-field form-select\" [formGroup]=\"group\">\n  <label>{{ config.label }}</label>\n  <select [formControlName]=\"config.name\">\n    <option value=\"\">{{ config.placeholder }}</option>\n    <option *ngFor=\"let option of config.options\">\n      {{ option }}\n    </option>\n  </select>\n</div>",
                        styles: [""]
                    },] },
        ];
        return MySelectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UiComponentsModule = (function () {
        function UiComponentsModule() {
        }
        UiComponentsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule
                        ],
                        declarations: [MyInputComponent, MyButtonComponent, MySelectComponent],
                        exports: [MyInputComponent, MyButtonComponent, MySelectComponent],
                        entryComponents: [MyInputComponent, MyButtonComponent, MySelectComponent]
                    },] },
        ];
        return UiComponentsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.MyButtonComponent = MyButtonComponent;
    exports.MyInputComponent = MyInputComponent;
    exports.MySelectComponent = MySelectComponent;
    exports.UiComponentsModule = UiComponentsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY29tcG9uZW50cy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL3VpLWNvbXBvbmVudHMvbGliL215LWJ1dHRvbi9teS1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly91aS1jb21wb25lbnRzL2xpYi9teS1pbnB1dC9teS1pbnB1dC5jb21wb25lbnQudHMiLCJuZzovL3VpLWNvbXBvbmVudHMvbGliL215LXNlbGVjdC9teS1zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly91aS1jb21wb25lbnRzL2xpYi91aS1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9iYXNlL2ZpZWxkJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vYmFzZS9maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbXktYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZHluYW1pYy1maWVsZCBmb3JtLWJ1dHRvblwiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cbiAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiY29uZmlnLmRpc2FibGVkXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgIHt7IGNvbmZpZy5sYWJlbCB9fVxuICA8L2J1dHRvbj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBNeUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEZpZWxkIHtcbiAgY29uZmlnOiBGaWVsZENvbmZpZztcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uL2Jhc2UvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vYmFzZS9maWVsZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1teS1pbnB1dCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImR5bmFtaWMtZmllbGQgZm9ybS1pbnB1dFwiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cbiAgPGxhYmVsPnt7IGNvbmZpZy5sYWJlbCB9fTwvbGFiZWw+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIFthdHRyLnBsYWNlaG9sZGVyXT1cImNvbmZpZy5wbGFjZWhvbGRlclwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29uZmlnLm5hbWVcIj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBNeUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgRmllbGQgIHtcblxuICBjb25maWc6IEZpZWxkQ29uZmlnO1xuICBncm91cDogRm9ybUdyb3VwO1xuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9iYXNlL2ZpZWxkJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vYmFzZS9maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbXktc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZHluYW1pYy1maWVsZCBmb3JtLXNlbGVjdFwiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cbiAgPGxhYmVsPnt7IGNvbmZpZy5sYWJlbCB9fTwvbGFiZWw+XG4gIDxzZWxlY3QgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPlxuICAgIDxvcHRpb24gdmFsdWU9XCJcIj57eyBjb25maWcucGxhY2Vob2xkZXIgfX08L29wdGlvbj5cbiAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29uZmlnLm9wdGlvbnNcIj5cbiAgICAgIHt7IG9wdGlvbiB9fVxuICAgIDwvb3B0aW9uPlxuICA8L3NlbGVjdD5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBNeVNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIEZpZWxkIHtcblxuICBjb25maWc6IEZpZWxkQ29uZmlnO1xuICBncm91cDogRm9ybUdyb3VwO1xuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE15SW5wdXRDb21wb25lbnQgfSBmcm9tICcuL215LWlucHV0L215LWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNeUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vbXktYnV0dG9uL215LWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXlTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL215LXNlbGVjdC9teS1zZWxlY3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW015SW5wdXRDb21wb25lbnQsIE15QnV0dG9uQ29tcG9uZW50LCBNeVNlbGVjdENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtNeUlucHV0Q29tcG9uZW50LCBNeUJ1dHRvbkNvbXBvbmVudCwgTXlTZWxlY3RDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtNeUlucHV0Q29tcG9uZW50LCBNeUJ1dHRvbkNvbXBvbmVudCwgTXlTZWxlY3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFVpQ29tcG9uZW50c01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O29CQUtDQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBRSx5S0FJTDt3QkFDTCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ2I7O2dDQWJEOzs7Ozs7O0FDQUE7Ozs7b0JBS0NBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLGtOQUdMO3dCQUNMLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztxQkFDYjs7K0JBWkQ7Ozs7Ozs7QUNBQTs7OztvQkFLQ0EsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsNFRBUUw7d0JBQ0wsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO3FCQUNiOztnQ0FqQkQ7Ozs7Ozs7QUNBQTs7OztvQkFRQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7NEJBQ1pDLGlCQUFXOzRCQUNYQyx5QkFBbUI7eUJBQ3BCO3dCQUNELFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO3dCQUN0RSxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQzt3QkFDakUsZUFBZSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7cUJBQzFFOztpQ0FqQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "kendo.menu.min"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class MyContextMenu {
        constructor(element) {
            this.log = aurelia_framework_1.LogManager.getLogger("my-contextmenu-logger");
            this.element = element;
        }
        attached() {
            var me = this;
            let options = {
                target: jQuery(this.targetElement),
                select: function (e) {
                    me.menuItemSelected(e);
                },
                alignToAnchor: true,
                closeOnClick: true,
                direction: 'default',
                orientation: 'vertical',
            };
            if (this.showOnClick) {
                options.showOn = 'contextmenu hold click'; // http://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu#configuration-showOn
            }
            let jqContainer = jQuery(this.menuContainer);
            this.instance = jqContainer.kendoContextMenu(options).data('kendoContextMenu');
        }
        detached() {
            if (this.instance) {
                this.instance.destroy();
            }
        }
        menuItemSelected(e) {
            this.log.debug('Selected:', e);
            let attr = e.item.attributes.getNamedItem('data-menuitem-id');
            if (!(attr))
                return;
            let menuitemId = attr.value;
            let event = aurelia_framework_1.DOM.createCustomEvent('itemselected', { bubbles: true, cancelable: false, detail: menuitemId });
            this.element.dispatchEvent(event);
        }
    }
    __decorate([
        aurelia_framework_1.bindable
    ], MyContextMenu.prototype, "targetElement", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MyContextMenu.prototype, "showOnClick", void 0);
    exports.MyContextMenu = MyContextMenu;
});

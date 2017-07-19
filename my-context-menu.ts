import { autoinject, bindable, DOM, LogManager } from 'aurelia-framework';
import 'kendo.menu.min';

export class MyContextMenu {
    private log = LogManager.getLogger("my-contextmenu-logger");
    private instance: kendo.ui.ContextMenu;
    private element: Element;

    @bindable public targetElement: Element;
    @bindable public showOnClick: boolean;
    public menuContainer: Element;

    public constructor(element: Element) {
        this.element = element;
    }

    public attached(): void {
        var me = this;
        let options: kendo.ui.ContextMenuOptions = {
            target: jQuery(this.targetElement),
            select: function (e: kendo.ui.ContextMenuSelectEvent) {
                me.menuItemSelected(e);
            },
            alignToAnchor: true,
            closeOnClick: true,
            direction: 'default', // default|top|bottom|left|right
            orientation: 'vertical', // horizontal|vertical
        };
        if (this.showOnClick) {
            options.showOn = 'contextmenu hold click'; // http://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu#configuration-showOn
        }
        let jqContainer = jQuery(this.menuContainer);
        this.instance = jqContainer.kendoContextMenu(options).data('kendoContextMenu');
    }

    public detached(): void {
        if (this.instance) {
            this.instance.destroy();
        }
    }

    private menuItemSelected(e: kendo.ui.ContextMenuSelectEvent) {
        this.log.debug('Selected:', e);
        let attr: Attr = e.item.attributes.getNamedItem('data-menuitem-id');
        if (!(attr)) return;
        let menuitemId: string = attr.value;
        let event = DOM.createCustomEvent('itemselected', { bubbles: true, cancelable: false, detail: menuitemId });
        this.element.dispatchEvent(event);
    }

}
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "./my-thing"], function (require, exports, aurelia_framework_1, my_thing_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class MyPanel {
        constructor() {
            this.things = new Array();
            let vm1 = new my_thing_1.MyThing();
            this.things.push({ vmInstance: vm1, model: { isMiniMode: this.isMiniMode } });
            let vm2 = new my_thing_1.MyThing();
            this.things.push({ vmInstance: vm2, model: { isMiniMode: this.isMiniMode } });
        }
        isMiniModeChanged(newMiniMode, oldMiniMode) {
            for (let thing of this.things) {
                thing.model.isMiniMode = newMiniMode;
            }
        }
    }
    __decorate([
        aurelia_framework_1.bindable
    ], MyPanel.prototype, "isMiniMode", void 0);
    exports.MyPanel = MyPanel;
});

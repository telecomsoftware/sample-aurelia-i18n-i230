import { bindable } from 'aurelia-framework';

import { MyThing } from './my-thing';

export type ThingModel = { vmInstance: any, model: { isMiniMode: boolean } };

export class MyPanel {
    @bindable isMiniMode: boolean;
    public things: Array<ThingModel>;

    public constructor() {
        this.things = new Array<ThingModel>();
        let vm1 = new MyThing();
        this.things.push({ vmInstance: vm1, model: { isMiniMode: this.isMiniMode } });
        let vm2 = new MyThing();
        this.things.push({ vmInstance: vm2, model: { isMiniMode: this.isMiniMode } });
    }

    public isMiniModeChanged(newMiniMode: boolean, oldMiniMode: boolean): void {
        for (let thing of this.things) {
            thing.model.isMiniMode = newMiniMode;
        }
    }
}
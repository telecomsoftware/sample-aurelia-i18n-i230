export class App {

    public showPanel: boolean;

    public constructor() {
        this.showPanel = true;
    }

    public toggleIt() {
        this.showPanel = !this.showPanel;
    }
}
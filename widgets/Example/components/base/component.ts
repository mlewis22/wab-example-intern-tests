/// <amd-dependency path="dojo/text!./template/template.html" name="template" />
/// <amd-dependency path="xstyle/css!./css/style.css" name="style" />
declare var template: any;
declare var style: any;

// dojo
import on from 'dojo/on';
import lang from 'dojo/_base/lang';

// dijit
import WidgetBase from 'dijit/_WidgetBase';
import TemplatedMixin from 'dijit/_TemplatedMixin';
import WidgetsInTemplateMixin from 'dijit/_WidgetsInTemplateMixin';

// esri
import Map from 'esri/map';

// local
import declare from 'widgets/Example/support/declareDecorator';
// import IConfig = require("./resources/IConfigMy");

@declare(WidgetBase, TemplatedMixin, WidgetsInTemplateMixin)
class BaseComponent {

    // public properties
    public domNode: HTMLElement;
    public count: number = 0;

    // template dom
    public countBtn: HTMLElement;
    public countLabel: HTMLElement;

    // private properties
    private baseClass: string = 'base-component';
    private templateString: string = template;

    // private config: IConfig;
    private map: Map;

    /**
     * Creates an instance of My.
     * @param {*} params parameters automatically assigned to class properties
     * @param {dojo.NodeOrString} [srcNodeRef] optional node/node id to place widget on
     * @memberof BaseComponent
     */
    constructor(params?: any, srcNodeRef?: dojo.NodeOrString) {
        lang.mixin(this, params);
    }

    /** increase count by 1 */
    increaseCount() {
        this.count++;
    }

    /** dojo lifecyle */
    private postCreate(args: any): void {
        const self: any = this;
        self.inherited(arguments);
        console.log(this.baseClass + '::postCreate');
        // watch for button clicks
        this.onCountBtnClick();
    }

    /** handle on click event */
    private onCountBtnClick() {

        on(this.countBtn, 'click', () => {
            this.increaseCount();
            this.countLabel.innerHTML = 'Count: ' + this.count;
        });
    }
}

export = BaseComponent;

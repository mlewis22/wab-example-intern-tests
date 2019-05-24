// jIMU (WAB) imports:
/// <amd-dependency path="jimu/BaseWidget" name="BaseWidget" />
declare var BaseWidget: any; // there is no ts definition of BaseWidget (yet!)

// declareDecorator - to enable us to export this module with Dojo's "declare()" syntax so WAB can load it:
import declare from 'widgets/Example/support/declareDecorator';

// esri imports:
import EsriMap from 'esri/map';

// components import
import BaseComponent from 'widgets/Example/components/base/component';

interface IConfig {
  serviceUrl: string;
}

interface IWidget {
  baseClass: string;
  config?: IConfig;
}

@declare(BaseWidget)
class Widget implements IWidget {
  public baseClass: string = 'example';
  public config: IConfig;

  private map: EsriMap;
  private baseComponent: HTMLElement;

  private postCreate(args: any): void {
    const self: any = this;
    self.inherited(arguments);
    console.log('Example::postCreate');
  }

  private startup(): void {
    const self: any = this;
    self.inherited(arguments);
    console.log('Example::startup');

    // pull in a component outside of widget so we can test
    const baseComponent = new BaseComponent({}, this.baseComponent);

  }

  // private onOpen(): void {
  //   console.log('Example::onOpen');
  // };
  // private onClose(): void {
  //   console.log('Example::onClose');
  // };
  // private onMinimize(): void {
  //   console.log('Example::onMinimize');
  // };
  // private onMaximize(): void {
  //   console.log('Example::onMaximize');
  // };
  // private onSignIn(credential): void {
  //   console.log('Example::onSignIn', credential);
  // };
  // private onSignOut(): void {
  //   console.log('Example::onSignOut');
  // };
  // private onPositionChange(): void {
  //   console.log('Example::onPositionChange');
  // };
  // private resize(): void {
  //   console.log('Example::resize');
  // };
}

export = Widget;

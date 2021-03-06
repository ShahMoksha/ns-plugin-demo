import { validateOptions } from "./ns-plugin-demo.common";

export class NsPluginDemo {
  public getNative() {
    let screen = UIScreen.mainScreen;
    let currentBrightness = screen.brightness;
    return currentBrightness;
  }

  public get() {
    return Math.round(this.getNative() * 100);
  }

  public set(options) {
    validateOptions(options);
    let screen = UIScreen.mainScreen;
    screen.brightness = options.intensity / 100;
  }
}

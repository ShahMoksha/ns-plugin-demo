import * as applicationModule from "tns-core-modules/application/application";
import { topmost } from "tns-core-modules/ui/frame";
import { validateOptions } from "./ns-plugin-demo.common";
import { Utils, Device } from "@nativescript/core";
import * as utils from "tns-core-modules/utils/utils";

export class NsPluginDemo {
  public getNative() {
    // let context = applicationModule.android.context;
    let cResolver = utils.ad.getApplicationContext().getContentResolver();
    return android.provider.Settings.System.getInt(
      cResolver,
      android.provider.Settings.System.SCREEN_BRIGHTNESS
    );
    // return org.nativescript.brightness.Brightness.getScreenBrightness(context);
  }

  public get() {
    console.log(this.getNative());
    return Math.round((this.getNative() / 255) * 100);
  }

  public set(options) {
    validateOptions(options);

    if (android.os.Build.VERSION.SDK_INT < 23) {
      const topFrame = topmost();
      if (topFrame && topFrame.android && topFrame.android.activity) {
        const attr = topFrame.android.activity.getWindow().getAttributes();
        attr.screenBrightness = options.intensity / 100;
        topFrame.android.activity.getWindow().setAttributes(attr);
      }
    } else {
      let context = applicationModule.android.foregroundActivity;
      if (context) {
        let brightnessValue = Math.round((options.intensity * 255) / 100);

 let cResolver = utils.ad.getApplicationContext().getContentResolver();
     android.provider.Settings.System.putInt(
      cResolver,
      android.provider.Settings.System.SCREEN_BRIGHTNESS,brightnessValue
    );

   
      }
    }
  }
}

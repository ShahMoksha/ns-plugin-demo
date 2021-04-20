export declare class NsPluginDemo {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
  public set(options: BrightnessOptions);

  public getNative(): number;

  public get(): number;
}

export interface BrightnessOptions {
  intensity: number;
}

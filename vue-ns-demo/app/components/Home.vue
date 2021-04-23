<template>
  <Page>
    <ActionBar class="action-bar">
      <Label
        class="action-bar-title"
        text="NativeScript-Vue Brightness demo"
      ></Label>
    </ActionBar>

    <StackLayout>
      <Label class="t-20 text-center c-black" textWrap="true">
        <span>Your screen brightness is {{ currentValue }}</span>
      </Label>
      <GridLayout class="m-15" rows="auto" columns="50 * 50">
        <Label class="h3" text="0" textWrap="true" row="0" col="0"></Label>
        <Slider
          minValue="0"
          maxValue="100"
          v-model="sliderValue"
          @valueChange="onValueChanged"
          row="0"
          col="1"
        ></Slider>
        <Label class="h3" text="100" textWrap="true" row="0" col="2"></Label>
      </GridLayout>
    </StackLayout>
  </Page>
</template>

<script>
import { NsPluginDemo } from "nativescript-ns-plugin-demo";
const permissions = require("nativescript-permissions");
// let brightness = new NsPluginDemo();

export default {
  data() {
    return {
      brightness: null,
      currentValue: 100,
      sliderValue: 100
    };
  },

  created() {
    this.brightness = new NsPluginDemo();
    this.currentValue = this.brightness.get();
    this.brightness.set({ intensity: this.currentValue });
    this.sliderValue = this.currentValue;
    permissions
      .requestPermission(
        android.Manifest.permission.WRITE_SETTINGS,
        "I need these permissions because I'm cool"
      )
      .then(() => {
        console.log("Woo Hoo, I have the power!");
      })
      .catch(() => {
        console.log("Uh oh, no permissions - plan B time!");
      });
  },

  methods: {
    onValueChanged: function(e) {
      let value = Math.round(e.value);
      if (this.brightness && value !== this.currentValue) {
        this.brightness.set({ intensity: value });
        this.currentValue = value;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>

<template>
  <ui5-shellbar primary-title="Dashboard">
    <ui5-button icon="menu" slot="startButton" id="toggle"></ui5-button>
    <ui5-avatar ref="profileButton" slot="profile">
      <img style="max-height: 20px" :src="defaultAvatar" />
    </ui5-avatar>
    <ui5-button
      slot="assistant"
      ref="button1"
      icon="feedback"
      id="surveyButton"
    ></ui5-button>
    <ui5-shellbar-item
      ref="button2"
      icon="dark-mode"
      @click="
        (event) => {
          if (popover2.open) {
            popover2.open = false;
          } else {
            console.log('event.detail.targetRef is: ', event.detail.targetRef);
            console.log('button2.value is: ', button2);
            popover2.opener = event.detail.targetRef;
            popover2.open = true;
          }
        }
      "
      text="Enable light mode"
      title="Enable light mode"
    ></ui5-shellbar-item>
  </ui5-shellbar>
  <ui5-popover ref="popover1" placement="Bottom">
    <div class="popover-content">Tooltip #1 you will see me automatically.</div>
  </ui5-popover>
  <ui5-popover ref="popover2" placement="Bottom">
    <div class="popover-content">
      <ui5-text>
        Tooltip #2, you only see me when manually clicked :/
      </ui5-text>
    </div>
  </ui5-popover>
  <p class="content">
    This is a demo page. Upon loading the page, a tooltip should appear on the
    feedback button as well as the theme button.
    <br />
    However, the second tooltip does not appear.
    <br />
    Problem: the ui5-shellbar-item is not the dom element rendered in the
    shellbar, instead a ui5-button is generated under the hood and it is not
    possible to get this button programmatically out of the shadow dom and use
    it as an opener for the popover.
    <br />
    Trigger popovers manually:
    <br />
    <ui5-button @click="openPopover1">Open Popover 1</ui5-button>
    <br />
    <ui5-button @click="openPopover2">Open Popover 2</ui5-button>
    <br />
    Opening the popover2 does not work programmatically, however clicking on the
    theme button in the toolbar will open the tooltip and you can see the
    differene in the ui5-shellbar-item value and the actual rendered dom element
    which can be used as an opener.
  </p>
</template>

<style lang="css">
html,
body {
  height: 100%;
  margin: 0;
}

body {
  background-color: lightgrey !important;
}

.content {
  padding: 2rem;
}

.popover-content {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}
</style>

<script setup>
import defaultAvatar from "./assets/images/default_avatar.jpg";
import { ref, onMounted } from "vue";

import "@ui5/webcomponents-icons/dist/AllIcons.js";

import "@ui5/webcomponents-fiori/dist/ShellBar.js";
import "@ui5/webcomponents-fiori/dist/ShellBarItem.js";

import "@ui5/webcomponents/dist/Avatar.js";
import "@ui5/webcomponents/dist/Bar.js";
import "@ui5/webcomponents/dist/CheckBox.js";
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Popover.js";

const popover1 = ref(null);
const popover2 = ref(null);

const button1 = ref(null);
const button2 = ref(null);

onMounted(() => {
  console.log("Opening both popvers in 2s");
  setTimeout(() => {
    openPopover1();
    openPopover2();
  }, 2000);
});

function openPopover1() {
  if (popover1.value) {
    console.log("button1.value is: ", button1.value);
    popover1.value.opener = button1.value;
    popover1.value.open = true;
  }
}

function openPopover2() {
  if (popover2.value) {
    console.log("button2.value is: ", button2.value);
    popover2.value.opener = button2.value;
    popover2.value.open = true;
  }
}
</script>

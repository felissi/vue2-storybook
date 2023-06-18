<template>
  <div id="app">
    <Main />
    <AdobeSwitch />
  </div>
</template>

<script>
import Main from "@/components/Main";
import AdobeSwitch from "./components/AdobeSwitch.vue";
export default {
  name: "App",
  components: {
    Main,
    AdobeSwitch
  },
};
</script>

<template>
  <h3>AsyncComponent子级组件</h3>
  <h4>{{ msg }}</h4>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AsyncComponent",
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          msg: "what are you no sha lei",
        });
      }, 2000);
    });
  },
});
</script>

<style></style>


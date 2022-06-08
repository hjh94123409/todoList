<template>
  <h4 :style="{ color }">GrandSon孙级组件</h4>
  <hr />
  <Test />
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import Test from "./Test.vue";
export default defineComponent({
  name: "GrandSon",
  components: { Test },
  setup() {
    const color = inject("color");
    return {
      color,
    };
  },
});
</script>

<style></style>

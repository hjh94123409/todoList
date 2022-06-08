<template>
  <h5>测试Test后代组件{{ color }}</h5>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
export default defineComponent({
  name: "Test_",
  setup() {
      const color = inject("color");
    return {color};
  },
});
</script>

<style></style>

<template>
  <h2>App父级组件</h2>
  <ModalButton />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalButton from "@/ModalButton.vue";
export default defineComponent({
  name: "App",
  components: {
    ModalButton,
  },
  setup() {
    return {};
  },
});
</script>

<style></style>

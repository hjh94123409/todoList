<template>
  <h3>子级组件</h3>
  <h4>{{ msg }}</h4>
  <button @click="emitXXX">分发事件</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MyChild",
  props: ["msg"],
  emits: ["myName"],
  setup(props, context) {
    function emitXXX() {
      context.emit("myName", "++");
    }
    return { emitXXX };
  },
});
</script>

<style></style>

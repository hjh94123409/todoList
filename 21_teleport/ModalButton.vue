<template>
  <button @click="modalOpen = true">打开一个对话框</button>

  <teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div>这是对话框</div>
      <button @click="modalOpen = false">关闭对话框</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ModalButton",
  setup() {
    const modalOpen = ref(false);
    return {
      modalOpen,
    };
  },
});
</script>

<style>
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: blanchedalmond;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: beige;
  width: 300px;
  height: 300px;
  padding: 10px;
}
</style>

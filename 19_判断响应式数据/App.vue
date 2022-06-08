<template>
  <h2>响应式数据的判断</h2>
</template>

<script lang="ts">
import { defineComponent, isRef, ref, isReactive, reactive, isReadonly, readonly,isProxy } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    console.log(isRef(ref({})));
    console.log(isReactive(reactive({})));
    console.log(isReadonly(readonly({})))
    console.log(isProxy(readonly({})))
    

    return {};
  },
});
</script>

<style></style>

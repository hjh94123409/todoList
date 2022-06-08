<template>
  <h2>父级组件</h2>
  <h2>{{ msg }}</h2>
  <button @click="msg += '+='">更新数据</button>
  <hr />
  <MyChild :msg="msg" @myName="hehele" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MyChild from "./components/Child/index.vue";
export default defineComponent({
  name: "App",
  components: {
    MyChild,
  },
  
  setup() {
    const msg = ref("what are you nong sha lei");

    function hehele(txt: string) {
      msg.value += txt;
    }

    return { msg, hehele };
  },
});
</script>

<style></style>

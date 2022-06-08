<template>
  <h2>reactive与ref细节问题</h2>
  <h3>m1:{{ m1 }}</h3>
  <h3>m2:{{ m2 }}</h3>
  <h3>m3:{{ m3 }}</h3>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const m1 = ref("abc");
    const m2 = reactive({
      name: "小明",
      wife: {
        name: "小红",
      },
    });
    const m3 = ref({
      name: "小明",
      wife: {
        name: "小红",
      },
    });

    const update = () => {
      console.log(m3); //RefImpl对象，m3.value Proxy对象
      m1.value += "***";
      m2.wife.name += "###";
      m3.value.wife.name += "@@@";
      console.log(m3.value.wife); //Proxy对象
    };

    return {
      m1,
      m2,
      m3,
      update,
    };
  },
});
</script>

<style></style>

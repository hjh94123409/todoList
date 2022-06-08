<template>
  <h2>toRefs的使用</h2>
  <!-- <h3>name: {{ state.name }}</h3>
  <h3>age: {{ state.age }}</h3> -->
  <h3>name: {{ name }}</h3>
  <h3>age: {{ age }}</h3>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      name: "自来也",
      age: 47,
    });

    //toRefs可以把一个响应式对象转换成普通对象，该普通对象的每个 Property 都是一个ref 对象
    // const state2 = toRefs(state);
    // console.log(state2);
    const { name, age } = toRefs(state);
    // console.log(name, age);

    setInterval(() => {
      // state.name += "== ";
      // state2.name.value += "== ";
      name.value += "== ";
    }, 2000);

    return {
      // state
      // ...state, //不是响应式数据了
      // ...state2, // 使用toRefs后变为响应式对象
      name,
      age,
    };
  },
});
</script>

<style></style>

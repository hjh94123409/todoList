<template>
  <h2>setup和ref的基本使用</h2>
  <h3>{{ count }}</h3>
  <button @click="updateCount">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  //vue2实现
  // data() {
  //   return {
  //     count: 0,
  //   };
  // },
  // methods: {
  //   updateCount() {
  //     this.count++;
  //   },
  // },

  // vue3实现
  setup() {
    // 此时的数据并不是响应式的数据
    // let count = 0;
    // ref是一个函数，定义一个响应式的数据
    // 返回一个Ref对象，对象中有一个value属性
    const count = ref(0);

    function updateCount() {
      console.log("====");
      //报错原因：count是一个Ref对象
      // count++;
      count.value++;
    }

    return {
      count,
      updateCount,
    };
  },
});
</script>

<style></style>

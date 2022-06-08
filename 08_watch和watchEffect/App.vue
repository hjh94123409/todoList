<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input
      type="text"
      placeholder="请输入姓氏"
      v-model="user.firstName"
    />
    <br />
    名字：<input type="text" placeholder="请输入名字" v-model="user.lastName" />
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName1" />
    <br />
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName2" />
    <br />
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName3" />
  </fieldset>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watch,
  watchEffect,
} from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const user = reactive({
      firstName: "东方",
      lastName: "不败",
    });
    //第一个姓名
    //计算属性的函数，如果只传入一个回调函数，表示的是get
    const fullName1 = computed(() => {
      return user.firstName + "_" + user.lastName;
    });
    // console.log(fullName1); //返回的是一个Ref类型的对象

    //第二个姓名：
    const fullName2 = computed({
      get() {
        return user.firstName + "_" + user.lastName;
      },
      set(val: string) {
        // console.log("**", val);
        const names = val.split("_");
        user.firstName = names[0];
        user.lastName = names[1];
      },
    });

    // 第三个姓名：
    //监视 --- 监视指定的数据
    // immediate 默认会执行一次
    // deep 深度监视
    const fullName3 = ref("");
    watch(
      user,
      ({ firstName, lastName }) => {
        fullName3.value = firstName + "_" + lastName;
      },
      { immediate: true, deep: true }
    );

    //不需要配置immediate，本身就是执行一次
    // watchEffect(() => {
    //   fullName3.value = user.firstName + "_" + user.lastName;
    // });

    watchEffect(() => {
      const names = fullName3.value.split("_");
      user.firstName = names[0];
      user.lastName = names[1];
    });

    //监视非响应数据，需要使用回调函数写法
    watch([() => user.firstName, () => user.lastName], () => {
      console.log("====");
    });

    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    };
  },
});
</script>

<style></style>

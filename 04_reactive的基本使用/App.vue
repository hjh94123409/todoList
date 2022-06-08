<template>
  <h2>reactive的使用</h2>
  <h3>名字：{{ user.name }}</h3>
  <h3>年龄：{{ user.age }}</h3>
  <h3 v-if="user.gender">性别：{{ user.gender }}</h3>
  <h3>媳妇：{{ user.wife }}</h3>
  <hr />
  <button @click="updateUser">更新数据</button>
  <button @click="deleteUser">删除数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const user = reactive<any>({
      name: "小明",
      age: 20,
      wife: {
        name: "小甜甜",
        age: 18,
        cars: ["奔驰", "宝马"],
      },
    });

    const updateUser = () => {
      user.name += "+=";
      user.age += 2;
      user.wife.name += "++";
      user.gender = "男";
    };

    const deleteUser = () => {
      delete user.wife.age;
    };

    return {
      user,
      updateUser,
      deleteUser,
    };
  },
});
</script>

<style></style>

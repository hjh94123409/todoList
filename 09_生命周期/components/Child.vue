<template>
  <h2>Child子级组件</h2>
  <h4>msg: {{ msg }}</h4>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
export default defineComponent({
  name: "MyChild",
  beforeCreate() {
    console.log("2.x中的beforeCreate...");
  },
  created() {
    console.log("2.x中的created...");
  },
  beforeMount() {
    console.log("2.x中的beforeMount...");
  },
  mounted() {
    console.log("2.x中的mounted...");
  },
  beforeUpdate() {
    console.log("2.x中的beforeUpdate...");
  },
  updated() {
    console.log("2.x中的updated...");
  },
  // beforeDestroy destroyed
  beforeUnmount() {
    console.log("2.x中的beforeDestroy...");
  },
  unmounted() {
    console.log("2.x中的destroyed...");
  },
  setup() {
    const msg = ref("abc");
    const update = () => {
      msg.value += "===";
    };

    console.log("3.x中的setup...");

    onBeforeMount(() => {
      console.log("3.x中的onBeforeMount...");
    });

    onMounted(() => {
      console.log("3.x中的onMounted...");
    });

    onBeforeUpdate(() => {
      console.log("3.x中的onBeforeUpdate...");
    });

    onUpdated(() => {
      console.log("3.x中的onUpdated...");
    });

    onBeforeUnmount(() => {
      console.log("3.x中的onBeforeUnmount...");
    });

    onUnmounted(() => {
      console.log("3.x中的onUnmounted...");
    });

    return {
      msg,
      update,
    };
  },
});
</script>

<style></style>

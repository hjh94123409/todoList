<template>
  <h2>CustomRef的使用</h2>
  <input type="text" v-model="keyword" />
  <p>{{ keyword }}</p>
</template>

<script lang="ts">
import { customRef, defineComponent, ref } from "vue";

function useDebouncedRef<T>(value: T, delay = 200) {
  let timeOutId: number;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue: T) {
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      },
    };
  });
}

export default defineComponent({
  name: "App",
  setup() {
    // const keyword = ref("abc");
    const keyword = useDebouncedRef("abc", 500);
    return {
      keyword,
    };
  },
});
</script>

<style></style>

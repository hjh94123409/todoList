<template>
  <h2>App父级组件: Suspense</h2>
  <Suspense>
    <template #default>
      <!-- 异步组件 -->
      <AsyncComponent></AsyncComponent>
    </template>
    <template v-slot:fallback>
      <!-- loading -->
      <div>
        <h2>loading...</h2>
      </div>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

//vue2中动态引入 (在vue3中这种写法不行)
// const AsyncComponent = () => import('./AsyncComponent.vue')

// const AsyncComponent = defineAsyncComponent(
//   () => import("./AsyncComponent.vue")
// );

import AsyncComponent from "./AsyncComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    AsyncComponent,
  },
  setup() {
    return {};
  },
});
</script>

<style></style>


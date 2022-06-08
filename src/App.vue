<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo_test" />
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
      <Footer
        :todos="todos"
        :checkAll="checkAll"
        :clearAllCompletedTodos="clearAllCompletedTodos"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from "vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";

import { ITodo } from "./types/todo";

import { saveTodos, readTodos } from "./utils/localStorageUtils";

export default defineComponent({
  name: "App",
  components: {
    Header,
    List,
    Footer,
  },

  setup() {
    // const state = reactive<{ todos: ITodo[] }>({
    //   todos: [
    //     { id: 1, title: "奔驰", isCompleted: false },
    //     { id: 2, title: "宝马", isCompleted: true },
    //     { id: 3, title: "奥迪", isCompleted: false },
    //   ],
    // });

    const state = reactive<{ todos: ITodo[] }>({
      todos: [],
    });

    onMounted(() => {
      setTimeout(() => {
        state.todos = readTodos();
      }, 1000);
    });

    const addTodo_test = (todo: ITodo) => {
      state.todos.unshift(todo);
    };

    const deleteTodo = (index: number) => {
      state.todos.splice(index, 1);
    };

    const updateTodo = (todo: ITodo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted;
      // console.log(todo);
    };

    const checkAll = (isCompleted: boolean) => {
      state.todos.forEach((todo) => {
        todo.isCompleted = isCompleted;
      });
    };

    const clearAllCompletedTodos = () => {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
    };

    // watch(
    //   () => state.todos,
    //   (value) => {
    //     // localStorage.setItem("todos_key", JSON.stringify(value));
    //     saveTodos(value);
    //   },
    //   { deep: true }
    // );
    watch(() => state.todos, saveTodos, { deep: true });

    return {
      ...toRefs(state),
      addTodo_test,
      deleteTodo,
      updateTodo,
      checkAll,
      clearAllCompletedTodos,
    };
  },
});
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>


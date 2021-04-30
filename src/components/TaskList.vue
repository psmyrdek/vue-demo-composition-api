<template>
  <div>
    <div v-for="todo of todos" :key="todo.id" class="bg-white rounded-md shadow p-4 mt-4">
      <div class="flex flex-row items-center">
        <input class="w-8 h-8" type="checkbox" :checked="todo.completed" @change="onTodoChange(todo.id)"/>
        <p class="ml-4 flex-grow text-xl font-bold">{{ todo.todo }}</p>
        <button class="rounded bg-red-400 hover:bg-red-600 px-6 py-2 text-white" @click="onTodoDelete(todo.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  emits: ['changed', 'deleted'],
  props: {
    todos: Array
  },
  methods: {
    onTodoDelete(id) {
      this.$emit('deleted', id)
    },
    onTodoChange(id) {
      this.$emit('changed', id)
    }
  }
}
</script>

<style scoped>

</style>
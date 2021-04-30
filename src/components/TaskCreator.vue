<template>
  <div class="bg-white rounded-md shadow p-4">
    <form @submit.prevent="onCreate()">
      <h2 class="font-bold text-xl mb-4">Add new task</h2>
      <div class="flex flex-row items-center">
        <input autocomplete="off" id="todo" class="bg-gray-100 p-2 my-2 w-full flex-grow rounded" type="text" v-model="newTodo">
        <div class="ml-4">
          <button type="button" class="rounded bg-green-400 hover:bg-green-600 px-8 py-2 text-white" @click="onCreate()">Add</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "TaskCreator",
  emits: ['created'],
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    onCreate() {
      if (this.newTodo === '') {
        return;
      }
      this.$emit('created', {
        id: new Date().getTime(),
        todo: this.newTodo,
        completed: false
      })
      this.newTodo = ''
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="divide-y divide-green-300">
    <div class="container mx-auto py-8">
      <TaskCreator @created="onTodoCreated($event)"/>
      <TaskList :todos="todos" @changed="onTodoChanged($event)" @deleted="onTodoDeleted($event)"/>
    </div>
    <div class="container mx-auto">
      <Notepad />
    </div>
  </div>
</template>
<script>


import TaskCreator from "./TaskCreator";
import TaskList from "./TaskList";
import {useTodos} from "../composables/useTodos";
import {useLocalStorage} from "../composables/useLocalStorage";
import Notepad from "./Notepad";

export default {
  name: 'App',
  components: {Notepad, TaskCreator, TaskList},
  setup() {

    const {
      todos,
      onTodoCreated,
      onTodoDeleted,
      onTodoChanged
    } = useTodos()

    useLocalStorage('todos', todos)

    return {
      todos,
      onTodoCreated,
      onTodoDeleted,
      onTodoChanged
    }
  }
}
</script>

<style>

</style>

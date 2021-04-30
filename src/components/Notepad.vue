<template>
  <div class="bg-white rounded-md shadow p-4 mt-8">
    <h2 class="font-bold text-xl mb-4">Add some notes!</h2>
    <textarea class="bg-gray-100 w-full p-2" rows="3" v-model="notes"></textarea>
    <div class="flex flex-row justify-end">
      <button @click="clearEntry('')" class="rounded bg-gray-100 hover:text-red-800 hover:bg-red-200 px-6 py-2 text-red-500">Clear</button>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useLocalStorage} from "../composables/useLocalStorage";

export default {
  name: "Notepad",
  setup() {
    let notes = ref('')
    const {clearEntry} = useLocalStorage('note', notes)

    return {
      notes,
      clearEntry
    }
  }
}
</script>

<style scoped>

</style>
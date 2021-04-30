import {ref} from 'vue'

export function useTodos() {
    let todos = ref([])

    const onTodoCreated = (todo) => {
        todos.value = [...todos.value, todo]
    }

    const onTodoDeleted = (id) => {
        todos.value = todos.value.filter(t => t.id !== id)
    }

    const onTodoChanged = (id) => {
        const index = todos.value.findIndex(t => t.id === id)
        const item = todos.value[index]

        todos.value = [
            ...todos.value.slice(0, index),
            {
                ...item,
                completed: !item.completed
            },
            ...todos.value.slice(index + 1)
        ]
    }

    return {
        todos,
        onTodoCreated,
        onTodoDeleted,
        onTodoChanged
    }
}
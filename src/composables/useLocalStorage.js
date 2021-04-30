import { onBeforeMount, watch } from 'vue'

export function useLocalStorage(key, ref) {

    onBeforeMount(() => {
        const value = window.localStorage.getItem(key)
        if (value) {
            ref.value = JSON.parse(value)
        }
    })

    watch(ref, () => {
        window.localStorage.setItem(key, JSON.stringify(ref.value))
    })

    const clearEntry = (refValue) => {
        ref.value = refValue
        window.localStorage.setItem(key, refValue)
    }

    return {
        clearEntry
    }

}
<script setup>
import { ref } from 'vue'
import { useHabitsStore } from '@/stores/habitsStore.js'

const habitsStore = useHabitsStore()
const newHabitName = ref('')

function handleSubmit() {
  if (!newHabitName.value.trim()) return

  habitsStore.addHabit({
    name: newHabitName.value.trim(),
  })

  newHabitName.value = ''
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="newHabitName" placeholder="New habit name" />
      <button type="submit">Add Habit</button>
    </form>
  </div>
</template>

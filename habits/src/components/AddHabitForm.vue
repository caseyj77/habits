<script setup>
import { ref } from 'vue'
import { useHabitsStore } from '@/stores/habitsStore.js'

const habitsStore = useHabitsStore()
const newHabitName = ref('')
const newHabitDescription = ref('')

function handleSubmit() {
  if (!newHabitName.value.trim()) return

  habitsStore.addHabit({
    name: newHabitName.value.trim(),
    description: newHabitDescription.value.trim()
  })

  newHabitName.value = ''
  newHabitDescription.value = ''
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="newHabitName" placeholder="New habit name" />
      <input v-model="newHabitDescription" placeholder="New Habit Description" />
      <button type="submit">Add Habit</button>
    </form>
  </div>
</template>

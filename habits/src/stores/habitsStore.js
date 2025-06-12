import { ref } from 'vue'
import { defineStore } from 'pinia'

// Export the store so it can be used in components
export const useHabitStore = defineStore('habit', () => {
  const habits = ref([
    {
      id: 1,
      name: 'Drink Water',
      description: '8 glasses a day',
      completed: false,
    },
    {
      id: 2,
      name: 'Exercise',
      description: '30 minutes daily',
      completed: false,
    },
  ])

  const toggleHabit = (id) => {
    const habit = habits.value.find((h) => h.id === id)
    if (habit) habit.completed = !habit.completed
  }

  return {
    habits,
    toggleHabit,
  }
})

// HabitsStore.js
import { ref } from 'vue'
import { defineStore } from 'pinia'

// Export the store so it can be used in components
export const useHabitsStore = defineStore('habit', () => {
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

    console.log(`Toggling habit with id: ${id}`)
  }

  const addHabit = ({ name, description }) => {
    const newHabit = {
      id: Date.now(),
      name,
      description,
      completed: false,
    }
    habits.value.push(newHabit)
  }


  return {
    habits,
    toggleHabit,
    addHabit,
  }
})

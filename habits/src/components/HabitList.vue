//HabitList.vue list of each habit
<script setup lang="js">
import { useHabitsStore } from '@/stores/habitsStore'
import HabitCard from '@/components/HabitCard.vue'

const habitsStore = useHabitsStore()
</script>

<template>
  <div class="habit-list">
    <HabitCard
      v-for="habit in habitsStore.habits"
      :key="habit.id"
      :id="habit.id"
      :name="habit.name"
      :description="habit.description"
      :completed="habit.completed"
    />
  </div>
</template>

<style scoped>
.habit-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>

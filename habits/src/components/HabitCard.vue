// HabitCard.vue
<script setup>
import { useHabitsStore } from '@/stores/habitsStore.js'

const habitsStore = useHabitsStore()

const props = defineProps({
  id: Number,
  name: String,
  description: String,
  completed: Boolean,
})


</script>

<template>
  <div class="habit-card">
    <div class="habit-card__header">
      <h2>{{ name }}</h2>
      <input
        type="checkbox"
        :checked="completed"
        @change="habitsStore.toggleHabit(id)"
      />

    </div>
    <div class="habit-card__content">
      <p class="habit-description">{{ description }}</p>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.habit-card {
  border: 1px solid var(--border-light);
  border-radius: 10px;
  padding: 1rem;
  background-color: var(--bg-card);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
  transition: background-color 0.3s ease;
}

.habit-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.habit-card__header h2 {
  font-size: 1.2rem;
  margin: 0;
  color: var(--btn-primary); /* orange */
}

.habit-card__content {
  font-size: 0.9rem;
  color: var(--text-primary);
  margin-top: 0.5rem;
}

/* Optional hover effect */
.habit-card:hover {
  background-color: var(--bg-accent); /* yellow accent */
}
</style>

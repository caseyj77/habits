//HabitView.vue shold be used as the homepage
<script setup>
import HabitList from '@/components/HabitList.vue'
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">Habit Tracker</h1>
    <p>Welcome! Ready to build better habits?</p>

    <HabitList />
  </div>
</template>

<style scoped>
.p-4 {
  padding: 1rem;
}

h1 {
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1.5rem;
}
</style>

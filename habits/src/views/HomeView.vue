//HabitView.vue shold be used as the homepage
<script setup>
import HabitList from '@/components/HabitList.vue'
import AddHabitForm from '@/components/AddHabitForm.vue'
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">Habit Tracker</h1>
    
    <HabitList />
    <AddHabitForm />
  </div>
</template>

<style scoped>
.p-4 {
  padding: 1 rem;
}

h1 {
  margin-bottom: 0.5 rem;
}

</style>

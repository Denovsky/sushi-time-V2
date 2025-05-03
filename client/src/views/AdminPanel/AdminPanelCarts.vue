<script setup>
// import { ref } from 'vue'
import WelcomeItem from '@/components/AdminCartItem.vue'
import { usersStore } from '@/store/users';
import { storeToRefs } from 'pinia'

const users = usersStore();

onMounted(() => {
  users.fetchUsers();
});

function changeUserData(user) {
  users.changeUserData
}
</script>

<template>
  <header>

  </header>

  <main>
    <div class="orders-grid" v-for="users in user" :key="user.id">
      <WelcomeItem :user="user" @updateUserState="changeUserData"></WelcomeItem>
    </div>
      <div>{{ cart.totalItems }}</div>
    <button @click="updateMessage">{{ cart.totalItems }}</button>
  </main>
</template>

<style scoped>
.orders-grid {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}
</style>

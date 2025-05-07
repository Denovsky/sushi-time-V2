<template>
  <div class="app">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/views/components/User/Header.vue'
import Footer from '@/views/components/User/Footer.vue'
</script>
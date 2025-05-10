<template>
  <div class="app">
    <FloatingButton />
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
import About from '@/views/components/User/About.vue'
import FloatingButton from '@/views/components/User/FloatingButton.vue'
</script>
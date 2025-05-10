<script setup lang="ts">
import ProductItem from '@/views/components/User/ProductItem.vue'
import Slider from '@/views/components/User/Slider.vue'
import About from '@/views/components/User/About.vue'
import CategoryLayout from '@/views/layouts/CategoryLayout.vue'
import { Product } from '@/store/interfaces'
import { ref } from 'vue'

const categories = ref<Product[]>([])
const isLoading = ref(false)
const error = ref(null)

async function fetchData() {
  try {
    isLoading.value = true
    const response = await fetch('http://localhost:3000/api/best-products')
    if (!response.ok) throw new Error('Network error')

    categories.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    isLoading.value = false
  }
}

fetchData()
</script>

<template>
  <template v-if="categories">
    <Slider/>
    <CategoryLayout 
      :category="'Популярные товары'"
    >
      <ProductItem 
        v-for="product in categories" 
        :key="product.id"
        :product="product"
      />
    </CategoryLayout>
  </template>
  <div v-if="isLoading">Loading...</div>
  <div v-if="error" class="error">{{ error }}</div>
    <About />
  
</template>

<style scoped>
</style>
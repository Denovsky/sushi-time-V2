<script setup lang="ts">
import ProductItem from '@/views/components/User/ProductItem.vue'
import { Product } from '@/store/interfaces'
import CategoryLayout from '@/views/layouts/CategoryLayout.vue'
import { ref } from 'vue'

interface Category {
  id: number
  title: string
  products: Product[]
}

const categories = ref<Category[]>([])
const isLoading = ref(false)
const error = ref(null)

async function fetchData() {
  try {
    isLoading.value = true
    const response = await fetch(`http://localhost:3000/api/products-categories`)
    if (!response.ok) throw new Error('Network error')

    const data = await response.json()
    const result: Category[] = []
    
    Object.entries(data).forEach(([title, products], index) => {
      result.push({
        id: index,
        title: title,
        products: products as Product[]
      })
    })
    console.log(result)
    categories.value = result

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
    <CategoryLayout 
      v-for="category in categories" 
      :key="category.id"
      :category="category.title"
    >
      <ProductItem 
        v-for="product in category.products" 
        :key="product.id"
        :product="product"
      />
    </CategoryLayout>
  </template>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
</template>

<style scoped>
</style>
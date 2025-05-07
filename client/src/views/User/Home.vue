<script lang="ts">
import Product from '@/views/components/User/Product.vue'
import CategoryLayout from '@/views/layouts/CategoryLayout.vue'
import { onMounted, ref } from 'vue'


const data = ref(null)
const isLoading = ref(false)
const error = ref(null)

onMounted(async ()=> {
  data.value = await fetchData()
})

async function fetchData() {
  try {
    isLoading.value = true
    const response = await fetch('http://localhost:3000/api/products-categories')
    if (!response.ok) throw new Error('Network error')
    data.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    isLoading.value = false
  }
}

</script>

<template>
  <!-- Slider Section -->
  <!-- <div class="slider-container">
        <div class="slider" id="slider">
            <div class="slide slide-1">
                <div class="slide-bg parallax"></div>
                <div class="slide-content">
                    <div class="slide-text">
                        <h2>Свежие продукты со скидкой 30%</h2>
                        <p>Только этой неделю специальные предложения на фрукты и овощи</p>
                        <a href="#" class="btn">Подробнее</a>
                    </div>
                </div>
            </div>
            <div class="slide slide-2">
                <div class="slide-bg parallax"></div>
                <div class="slide-content">
                    <div class="slide-text">
                        <h2>Бесплатная доставка</h2>
                        <p>При заказе от 2000 рублей - доставка бесплатно</p>
                        <a href="#" class="btn">Сделать заказ</a>
                    </div>
                </div>
            </div>
            <div class="slide slide-3">
                <div class="slide-bg parallax"></div>
                <div class="slide-content">
                    <div class="slide-text">
                        <h2>Новые поступления</h2>
                        <p>Попробуйте экзотические фрукты из разных стран мира</p>
                        <a href="#" class="btn">В каталог</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider-controls">
            <div class="slider-dot active" data-slide="0"></div>
            <div class="slider-dot" data-slide="1"></div>
            <div class="slider-dot" data-slide="2"></div>
        </div>
    </div> -->

    <!-- Main Container with Products -->
    <CategoryLayout v-for="category in data" :category="category">
      <Product v-for="item in category" :product="item"/>
    </CategoryLayout>
    <button @click="console.log(data.value)">Click!</button>
</template>

<style scoped>
</style>
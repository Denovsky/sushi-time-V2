<script setup lang="ts">
import {useCartStore} from '@/store/cart'
import {Product} from '@/store/interfaces'

const cart = useCartStore()

const product1: Product = {
  id: 1,
  title: "string",
  description: "string",
  price: 15,
  weight: 2,
  status: 0,
  item_discount: 0,
  created_at: new Date,
  changed_at: new Date
}

const product2: Product = {
  id: 2,
  title: "string",
  description: "string",
  price: 20,
  weight: 2,
  status: 0,
  item_discount: 0,
  created_at: new Date,
  changed_at: new Date
}

</script>

<template>
  <header>
    
  </header>

  <main>
    <div>{{ cart.quantity }}</div>
    <div>{{ cart.total }}</div>
    <button @click="cart.clearCart()">Clear cart</button>
    <div>
      <div>1 product</div>
      <button @click="cart.addItem(product1)">Add product1</button>
      <button @click="cart.decreaseItem(product1)">Decrease product1</button>
      <button @click="cart.removeItem(product1)">Remove product1</button>
    </div>
    <div>
      <div>2 product</div>
      <button @click="cart.addItem(product2)">Add product2</button>
      <button @click="cart.decreaseItem(product2)">Decrease product2</button>
      <button @click="cart.removeItem(product2)">Remove product2</button>
    </div>
  </main>
</template>

<style scoped>

</style>

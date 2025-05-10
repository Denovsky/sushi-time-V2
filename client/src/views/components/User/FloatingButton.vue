<script setup lang="ts">
import { useCartStore } from '@/store/cart';
import { computed } from 'vue';
import { ref } from 'vue';
const cart = useCartStore();

const isOpen = ref(false)

function openCloseMenu() {
    isOpen.value = isOpen.value ? false : true
    console.log(isOpen.value)
}
</script>
<template>
    <div v-if="cart.quantity > 0" class="floating-menu">
        <button @click="openCloseMenu()" class="menu-btn" id="menuBtn">Cart</button>
        <div v-if="isOpen" class="menu-content" id="menuContent">
            <a v-for="[id, item] in cart.items" :key="id" href="#" class="menu-item">{{ item.product.title + ": " + item.quantity  }}
                <button class="menu-inner-item" @click="cart.removeItem(item.product)">Remove</button>
                <button class="menu-inner-item" @click="cart.decreaseItem(item.product)">-</button>
                <div class="menu-inner-item quantity-display">{{ computed(() => cart.getQuantityByID(item.product.id)) }}</div>
                <button class="menu-inner-item" @click="cart.addItem(item.product)">+</button>
            </a>
            <a href="/cart">To Cart</a>
        </div>
    </div>
</template>
<style scoped>
/* Floating menu */
.floating-menu {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1000;
}
.menu-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-orange), var(--primary-green));
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
}
.menu-btn:hover {
    transform: scale(1.1);
}
.menu-content {
    position: absolute;
    top: 60px;
    left: 0;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    width: 200px;
    padding: 10px 0;
}
.menu-content.show {
    display: block;
}
.menu-item {
    padding: 12px 20px;
    color: var(--dark-gray);
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: all 0.3s;
}
.menu-item:hover {
    background-color: #f9f9f9;
    color: var(--primary-orange);
}
.menu-item.active {
    color: var(--primary-green);
    font-weight: 600;
}
.menu-inner-item {
    padding-left: 5px;
    padding-right: 5px;
}
</style>
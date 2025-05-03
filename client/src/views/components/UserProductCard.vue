<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/store/cart';

interface Product {
    id: number,
    title: String,
    description: String,
    price: number,
    weight: number,
    item_discount: number,
    // attributes: JSON
}

defineProps<{
  product: Product
}>();

const cart = useCartStore();
const { getItemByID } = storeToRefs(cart)

</script>

<template>
    <div class="product-card">
      <div v-if="product.item_discount!==0" class="badge">{{ `-${product.item_discount}%` }}</div>
      <div class="product-image">
          <img src="https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Апельсины">
      </div>
      <div class="product-info">
          <h3 class="product-title">{{ product.title }}</h3>
          <p class="product-description">{{ product.description }}</p>
          <div class="product-price">
                <div v-if="product.item_discount!==0">
                    <span class="old-price">{{ product.price }} ₽</span>
                    <span class="price">{{ product.price*product.item_discount/100 }}  ₽</span>
                </div>
                <div v-else>
                    <span class="price">{{ product.price }}  ₽</span>
                </div>

                <div v-if="getQuantityByID(product.id)!==undefined" class="quantity-controls active">
                    <button class="quantity-btn minus-btn">
                        <i class="fas fa-minus"></i>
                    </button>
                    <div class="quantity-display">{{ }}</div>
                    <button class="quantity-btn plus-btn">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>

                <button v-else @click="cart.addItem(product)" class="add-to-cart" style="display: none;">
                    <i class="fas fa-shopping-cart"></i>
                </button>
          </div>
      </div>
    </div>
</template>

<style scoped>
        .products-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
        }

        .product-card {
            background-color: var(--white);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            position: relative;
        }

        .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .product-card .badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: var(--orange-primary);
            color: var(--white);
            padding: 0.3rem 0.6rem;
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: 600;
            z-index: 2;
        }

        .product-card .product-image {
            height: 180px;
            overflow: hidden;
            position: relative;
        }

        .product-card .product-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .product-card:hover .product-image img {
            transform: scale(1.1);
        }

        .product-card .product-info {
            padding: 1.2rem;
        }

        .product-card .product-title {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: var(--black);
        }

        .product-card .product-description {
            font-size: 0.8rem;
            color: #666;
            margin-bottom: 1rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .product-card .product-price {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .product-card .price {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--green-primary);
        }

        .product-card .old-price {
            font-size: 0.9rem;
            text-decoration: line-through;
            color: #999;
            margin-right: 0.5rem;
        }

        .product-card .add-to-cart {
            background-color: var(--orange-primary);
            color: var(--white);
            border: none;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .product-card .add-to-cart:hover {
            background-color: var(--orange-secondary);
            transform: rotate(15deg) scale(1.1);
        }

        /* Новые стили для модифицированной кнопки */
        .product-card .quantity-controls {
            display: none;
            align-items: center;
            gap: 5px;
        }

        .product-card .quantity-controls.active {
            display: flex;
            animation: fadeIn 0.3s ease;
        }

        .product-card .quantity-btn {
            background-color: var(--orange-primary);
            color: var(--white);
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .product-card .quantity-btn:hover {
            background-color: var(--orange-secondary);
            transform: scale(1.1);
        }

        .product-card .quantity-btn:active {
            transform: scale(0.9);
        }

        .product-card .quantity-display {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--green-light);
            color: var(--green-primary);
            border-radius: 50%;
            font-weight: 600;
            transition: all 0.2s ease;
        }

        .product-card .quantity-btn:active+.quantity-display {
            animation: pulse 0.3s ease;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
            }

            50% {
                transform: scale(1.2);
            }

            100% {
                transform: scale(1);
            }
        }
</style>

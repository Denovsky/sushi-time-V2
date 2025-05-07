<script setup lang="ts">
interface Cart {
    id: String,
    name: String,
    verified: Boolean,
    phone: String 
}

defineProps<{
  user: Cart
}>();

const emit = defineEmits(['updateCartState']);

</script>

<template>
  <div class="order-card">
      <div class="order-header">
          <span class="order-id">#FM-2456</span>
          <span class="order-status">В обработке</span>
      </div>
      <div class="order-details">
          <div class="order-detail">
              <span class="label">Клиент:</span>
              <span class="value">Иван Петров</span>
          </div>
          <div class="order-detail">
              <span class="label">Дата:</span>
              <span class="value">12.10.2023 14:30</span>
          </div>
          <div class="order-detail">
              <span class="label">Сумма:</span>
              <span class="value">₽ 4,250</span>
          </div>
          <div class="order-detail">
              <span class="label">Товаров:</span>
              <span class="value">8</span>
          </div>
      </div>
      <div class="order-actions">
          <button class="btn btn-outline">Подробнее</button>
          <button class="btn btn-primary">Принять</button>
      </div>
  </div>
</template>

<style scoped>
.order-card {
    background-color: var(--white);
    border-radius: 8px;
    padding: 20px;
    flex: 1 1 calc(33.333% - 20px);
    min-width: 300px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    border-left: 4px solid var(--primary-orange);
    transition: transform 0.3s, box-shadow 0.3s;
}

.order-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.order-card.green {
    border-left-color: var(--primary-green);
}

.order-card.blue {
    border-left-color: #3498DB;
}

        .order-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
        }

        .order-id {
            font-weight: 600;
            color: var(--primary-orange);
        }

        .order-status {
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            background-color: rgba(46, 204, 113, 0.1);
            color: var(--primary-green);
        }

        .order-details {
            margin-bottom: 15px;
        }

        .order-detail {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            font-size: 14px;
        }

        .order-detail .label {
            color: #777;
        }

        .order-detail .value {
            font-weight: 500;
        }

        .order-actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
        }

        .btn {
            padding: 8px 15px;
            border-radius: 5px;
            border: none;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s;
        }

        .btn-primary {
            background-color: var(--primary-orange);
            color: white;
        }

        .btn-primary:hover {
            background-color: var(--dark-orange);
        }

        .btn-outline {
            background-color: transparent;
            border: 1px solid #ddd;
            color: var(--dark-gray);
        }

        .btn-outline:hover {
            background-color: #f9f9f9;
        }

@media (max-width: 1024px) {
    .order-card {
        flex: 1 1 calc(50% - 20px);
    }
}

@media (max-width: 768px) {
    .order-card {
        flex: 1 1 100%;
    }
    .stats-cards {
        flex-direction: column;
    }
}
</style>

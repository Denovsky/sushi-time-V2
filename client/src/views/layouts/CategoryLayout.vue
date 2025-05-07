<script setup lang="ts">
const props = defineProps<{
  category: string;
}>();
</script>
<template>
    <div class="main-container">
        <div class="section-title">
            <h2>{{ props.category }}</h2>
        </div>
        <div class="products-grid">
          <slot />
        </div>
    </div>
</template>
<style scoped>
.main-container {
    max-width: 1200px;
    margin: 3rem auto;
    padding: 0 1rem;
}

.section-title {
    text-align: center;
    margin-bottom: 2.5rem;
    position: relative;
}

.section-title h2 {
    font-size: 2rem;
    color: var(--green-primary);
    display: inline-block;
    padding: 0 1rem;
    background-color: var(--gray);
    position: relative;
    z-index: 2;
}

.section-title::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, var(--orange-primary), var(--green-primary));
    z-index: 1;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
}
</style>
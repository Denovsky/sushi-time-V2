<script setup lang="ts">
import { ref } from 'vue';

const currentSlide = ref(0)
const slideCount = ref(3)

function goToSlide(index) {
    if (index < 0) index = slideCount.value - 1;
    if (index >= slideCount.value) index = 0;

    currentSlide.value = index;
}

setInterval(() =>{
    goToSlide(currentSlide.value+1)
}, 5000)

</script>

<template>
    <div class="slider-container">
        <div :style="{transform: `translateX(-${currentSlide * 100}%)`}" class="slider" id="slider">
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
            <div @click="currentSlide=0" class="slider-dot" :class="{ active: currentSlide%slideCount==0 ? true : false }"></div>
            <div @click="currentSlide=1" class="slider-dot" :class="{ active: currentSlide%slideCount==1 ? true : false }"></div>
            <div @click="currentSlide=2" class="slider-dot" :class="{ active: currentSlide%slideCount==2 ? true : false }"></div>
        </div>
    </div>
</template>

<style scoped>
/* Slider Styles */
.slider-container {
    position: relative;
    max-width: 1200px;
    margin: 2rem auto;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    height: 400px;
}

.slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 100%;
}

.slide {
    min-width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.slide-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 5%;
    z-index: 2;
}

.slide-text {
    max-width: 50%;
    color: var(--white);
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.slide-text h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    animation: slideInLeft 0.8s ease-out;
}

.slide-text p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    animation: slideInLeft 1s ease-out;
}

.slide-text .btn {
    display: inline-block;
    padding: 0.8rem 1.8rem;
    background-color: var(--white);
    color: var(--orange-primary);
    text-decoration: none;
    font-weight: 600;
    border-radius: 50px;
    transition: all 0.3s ease;
    animation: fadeIn 1.2s ease-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.slide-text .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.slide-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: 1;
}

.slide-1 .slide-bg {
    background: linear-gradient(45deg, rgba(255, 123, 37, 0.8), rgba(46, 139, 87, 0.8)), url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
}

.slide-2 .slide-bg {
    background: linear-gradient(45deg, rgba(255, 154, 86, 0.8), rgba(90, 165, 123, 0.8)), url('https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80');
}

.slide-3 .slide-bg {
    background: linear-gradient(45deg, rgba(255, 209, 176, 0.8), rgba(184, 230, 204, 0.8)), url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
    background-position: center 70%;
}

.slider-controls {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    z-index: 3;
}

.slider-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 0 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.slider-dot.active {
    background-color: var(--white);
    transform: scale(1.2);
}

@media (max-width: 576px) {
    nav {
        display: none;
        width: 100%;
        margin-top: 1rem;
    }

    nav.active {
        display: block;
    }
}
</style>
<script setup lang="ts">
</script>
<template>
    <div class="about-container">
        <div class="about-content">
            <div class="about-text">
                <h2>О нашем магазине</h2>
                <p>Sushi-Time - это современный интернет-магазин свежих роллов, суш, пицц и всего съестного с доставкой на дом. Мы работаем
                    только с проверенными поставщиками, чтобы гарантировать качество наших товаров.</p>
                <p>Наша миссия - сделать покупку продуктов удобной, быстрой и приятной. Мы тщательно отбираем каждый
                    товар, чтобы вы получали только самое лучшее.</p>

                <div class="about-features">
                    <div class="feature-item">
                        <i class="fas fa-truck"></i>
                        <h3>Быстрая доставка</h3>
                        <p>Доставим ваш заказ в течение 2 часов</p>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-leaf"></i>
                        <h3>Свежие продукты</h3>
                        <p>Только свежие и качественные товары</p>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-percent"></i>
                        <h3>Скидки</h3>
                        <p>Регулярные акции и специальные предложения</p>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-headset"></i>
                        <h3>Поддержка</h3>
                        <p>Круглосуточная поддержка клиентов</p>
                    </div>
                </div>
            </div>
            <div class="about-image">
                <img src="https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="О нашем магазине">
            </div>
        </div>
    </div>
</template>
<style scoped>
.about-container {
    max-width: 1200px;
    margin: 5rem auto;
    padding: 3rem 2rem;
    background: linear-gradient(135deg, var(--green-light), var(--orange-light));
    border-radius: 15px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.about-container::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 200%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path fill="rgba(255,255,255,0.1)" d="M0,0 L100,0 L100,100 L0,100 Z" /></svg>') repeat;
    transform: rotate(15deg);
    z-index: 1;
}

.about-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.about-text {
    flex: 1;
    min-width: 300px;
    padding-right: 2rem;
}

.about-text h2 {
    font-size: 2rem;
    color: var(--green-primary);
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
}

.about-text h2::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: var(--orange-primary);
    border-radius: 2px;
}

.about-text p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: var(--black);
}

.about-features {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.feature-item {
    flex: 1;
    min-width: 120px;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 1.2rem;
    border-radius: 8px;
    text-align: center;
    transition: all 0.3s ease;
}

.feature-item:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.feature-item i {
    font-size: 1.8rem;
    color: var(--orange-primary);
    margin-bottom: 0.8rem;
}

.feature-item h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: var(--green-primary);
}

.feature-item p {
    font-size: 0.8rem;
    color: #666;
    margin-bottom: 0;
}

.about-image {
    flex: 1;
    min-width: 300px;
    position: relative;
    height: 400px;
    margin-top: 2rem;
}

.about-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
</style>
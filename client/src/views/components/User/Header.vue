<template>
  <header>
    <div class="header-container">
        <a href="#" class="logo">
            <i class="fas fa-shopping-basket floating"></i>
            Sushi-Time
        </a>
        <button class="mobile-menu-btn" id="mobileMenuBtn">
            <i class="fas fa-bars"></i>
        </button>
        <nav id="mainNav">
            <ul>
                <li><router-link :to="'/'">Главная</router-link></li>
                <li><router-link :to="'/catalog'">Каталог</router-link></li>
                <li><router-link :to="'/announcement'">Объявления</router-link></li>
                <li><router-link :to="'/about'">О нас</router-link></li>
            </ul>
        </nav>
    </div>
  </header>
</template>

<style scoped>
/* Header Styles */
header {
    background: linear-gradient(135deg, var(--orange-primary), var(--green-primary));
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.logo {
    display: flex;
    align-items: center;
    color: var(--white);
    font-weight: 700;
    font-size: 1.5rem;
    text-decoration: none;
}

@media (max-width: 768px) {
    .logo {
        margin-bottom: 1rem;
    }
}

.logo i {
    margin-right: 0.5rem;
    font-size: 1.8rem;
    color: var(--orange-light);
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 1.5rem;
}

nav ul li a {
    color: var(--white);
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.3s ease;
    padding: 0.5rem 0.8rem;
    border-radius: 4px;
}

nav ul li a:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    color: var(--white);
    font-size: 1.5rem;
    cursor: pointer;
}
@keyframes float {

0%,
100% {
    transform: translateY(0);
}

50% {
    transform: translateY(-10px);
}
}

.floating {
animation: float 3s ease-in-out infinite;
}
</style>

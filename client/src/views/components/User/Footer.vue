<template>
    <footer>
        <div class="footer-container">
            <div class="footer-logo">
                <a href="#"><i class="fas fa-shopping-basket"></i>FreshMarket</a>
            </div>
            <div class="footer-column">
                <h3>Магазин</h3>
                <ul>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Каталог</a></li>
                    <li><a href="#">Акции</a></li>
                    <li><a href="#">Новинки</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Помощь</h3>
                <ul>
                    <li><a href="#">Доставка и оплата</a></li>
                    <li><a href="#">Возврат</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Контакты</h3>
                <ul>
                    <li><a href="tel:+78005553535">8 (800) 555-35-35</a></li>
                    <li><a href="mailto:info@freshmarket.ru">info@freshmarket.ru</a></li>
                    <li><a href="#">Москва, ул. Свежая, 15</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Соцсети</h3>
                <ul>
                    <li><a href="#"><i class="fab fa-vk"></i> ВКонтакте</a></li>
                    <li><a href="#"><i class="fab fa-telegram"></i> Telegram</a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
                </ul>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 FreshMarket. Все права защищены.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>

/* Footer Styles */
footer {
    background: linear-gradient(135deg, var(--green-primary), var(--black));
    color: var(--white);
    padding: 3rem 2rem 1.5rem;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
}

.footer-logo {
    grid-column: span 4;
    text-align: center;
    margin-bottom: 1rem;
}

.footer-logo a {
    color: var(--white);
    font-size: 1.8rem;
    font-weight: 700;
    text-decoration: none;
}

.footer-logo a i {
    color: var(--orange-light);
    margin-right: 0.5rem;
}

.footer-column h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;
}

.footer-column h3::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: var(--orange-primary);
}

.footer-column ul {
    list-style: none;
}

.footer-column ul li {
    margin-bottom: 0.8rem;
}

.footer-column ul li a {
    color: var(--white);
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    opacity: 0.8;
}

.footer-column ul li a:hover {
    opacity: 1;
    padding-left: 5px;
    color: var(--orange-light);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    margin-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.9rem;
    opacity: 0.7;
}

@media (max-width: 768px) {
    .footer-container {
        grid-template-columns: repeat(2, 1fr);
    }

    .about-content {
        flex-direction: column;
    }

    .about-text {
        padding-right: 0;
        margin-bottom: 2rem;
    }
}

@media (max-width: 576px) {
    .footer-container {
        grid-template-columns: 1fr;
    }
}
</style>
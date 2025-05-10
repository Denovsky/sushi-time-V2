<script setup>
import { ref } from 'vue';


const text = ref("")

function editPhone(event) {
    text = event.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
}
</script>
<template>
    <div class="container">
        <div class="logo">
            <h1>Sushi-<span>Time</span></h1>
            <p>Регистрация нового пользователя</p>
        </div>
        
        <!-- Форма регистрации -->
        <form id="registrationForm">
            <div class="input-group">
                <label for="phone">Номер телефона</label>
                <input :value="text" @input="editPhone()" type="tel" placeholder="+7 (___) ___-__-__" required>
            </div>
            <div class="input-group">
                <label for="name">Ваше имя</label>
                <input type="text" id="name" placeholder="Введите ваше имя" required>
            </div>
            <button type="submit" class="btn">Продолжить</button>
        </form>
    </div>
</template>
<style scoped>
.container {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    padding: 40px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-orange), var(--primary-green));
}

.logo {
    margin-bottom: 30px;
}

.logo h1 {
    color: var(--dark-gray);
    font-size: 24px;
    margin-bottom: 5px;
}

.logo span {
    color: var(--primary-green);
}

.logo p {
    color: #777;
    font-size: 14px;
}

.input-group {
    margin-bottom: 20px;
    text-align: left;
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    color: var(--dark-gray);
    font-weight: 500;
}

.input-group input {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    transition: all 0.3s;
}

.input-group input:focus {
    border-color: var(--primary-orange);
    outline: none;
    box-shadow: 0 0 0 3px rgba(255,140,0,0.2);
}

.btn {
    width: 100%;
    padding: 12px;
    background: linear-gradient(90deg, var(--primary-orange), var(--primary-green));
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 10px;
}

.btn:hover {
    background: linear-gradient(90deg, var(--dark-orange), var(--dark-green));
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.btn-outline {
    background: transparent;
    border: 1px solid var(--primary-orange);
    color: var(--primary-orange);
}

.btn-outline:hover {
    background: rgba(255,140,0,0.1);
}
</style>
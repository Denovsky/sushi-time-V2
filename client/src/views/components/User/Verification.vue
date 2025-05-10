<script setup>
</script>
<template>
    <div id="verificationModal" class="modal-overlay">
        <div class="modal">
            <div class="modal-header">
                <h3>Подтверждение номера</h3>
            </div>
            <div class="modal-body">
                <p>На номер <span id="displayPhone"></span> отправлен код подтверждения.</p>
                <p>Пожалуйста, введите код из SMS для завершения регистрации.</p>
                <div class="input-group">
                    <input type="text" id="verificationCode" placeholder="Код из SMS" maxlength="6">
                </div>
            </div>
            <div class="modal-footer">
                <button id="skipVerification" class="btn-outline">Пропустить верификацию</button>
                <button id="changePhone" class="btn-outline">Изменить номер телефона</button>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>

    
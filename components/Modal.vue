<template>
    <div v-if="isOpen" class="popup" @click.self="close">
        <div class="popup-content">
            <span class="close" @click="close">&times;</span>
            <div class="icon-popup">
                <img :src="telephone" alt="telephone">
            </div>
            <div class="modal-title-subtitle">
                <h2 class="modal-title">Связаться с нами</h2>
                <span class="modal-subtitle">Оставьте номер телефона и мы свяжемся с вами в течение 5 минут</span>
            </div>
            <div class="your-name">
                <span class="title-box">Ваше имя</span>
                <div class="field">
                    <input type="text" class="field-input" placeholder="Введите Ваше имя" />
                </div>
            </div>
            <div class="phone-number">
                <span class="title-box">Номер телефона</span>
                <div class="field">
                    <input type="tel" class="field-input" placeholder="+7 777-777-77-77"/>
                </div>
            </div>
            <button class="send-number">Отправить номер</button>
            <span class="privacy-policy">
                Нажимая на кнопку, вы соглашаетесь с
                <span class="highlight">политикой конфиденциальности</span>
            </span>
        </div>
    </div>
</template>

<script setup>
import telephone from "@/assets/images/Modal/telephone.svg";
const props = defineProps({
    isOpen: Boolean
})
const emit = defineEmits(['close'])

function close() {
    emit('close')
}

</script>
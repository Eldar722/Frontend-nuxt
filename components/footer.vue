<template>
    <footer class="footer">
        <div class="footer-group">
            <div class="logo-social">
                <img :src="logo" alt="logo" class="logo">
                <div class="social">
                    <img :src="telegram" alt="tg" class="social-icon">
                    <img :src="instagram" alt="insta" class="social-icon">
                    <img :src="whatsapp" alt="whatsapp" class="social-icon">
                </div>
            </div>
            <div class="help-faq">
                <ul class="list-footer">
                    <li class="list-item">Помощь</li>
                    <li class="list-item">FAQ</li>
                    <li class="list-item">Возврат и доставка</li>
                    <li class="list-item">Политика конфиденциальности</li>
                    <li class="list-item">Пользовательское соглашение</li>
                </ul>
            </div>
            <div class="contacts">
                <ul class="list-footer">
                    <li class="list-item">Контакты</li>
                    <li class="list-item">support@vitax.kz</li>
                    <li class="list-item">+7 (777) 777 77 77</li>
                    <li class="list-item">Пн–Пт 10:00–18:00</li>
                </ul>
            </div>
        </div>
        <div class="underfooter container">
            <div class="underfooter-line"></div>
            <p class="footer-copy">© 2025 Vitax</p>
        </div>
    </footer>
</template>

<script setup>
import logo from "@/assets/images/Footer/logo.svg"
import instagram from "@/assets/images/Footer/insta.svg"
import telegram from "@/assets/images/Footer/tg.svg"
import whatsapp from "@/assets/images/Footer/whatsapp.svg"
</script>


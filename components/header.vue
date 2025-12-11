<template>
    <header class="header">
        <div class="container-for-header">
            <img :src="logo" alt="logo" class="logo">
            <nav class="nav">
                <a class="nav-link active" aria-current="page" href="#">Ассортимент</a>
                <a class="nav-link" href="#">Получить скидку</a>
                <a class="nav-link" href="#">Корзина</a>
            </nav>
            <button type="button" class="btn btn-success">Связаться с нами</button>
        </div>
    </header>
</template>

<script setup>
import logo from "@/assets/images/MainPage/logo.svg";
</script>
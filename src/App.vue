<script setup lang="ts">
// import { reactive, computed, markRaw } from "vue";
// import { createRouter, createWebHistory } from 'vue-router'

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

fetchBackgroundImageUrl();
async function fetchBackgroundImageUrl() {
    try {
        // const response = await fetch("/bing-image");
        const response = await fetch("https://yuany3721.site/bing-pic");
        const data = await response.json();
        // console.log(data);
        const imageUrl = "https://cn.bing.com" + data.images[0].url;
        document.body.style.backgroundImage = `url(${imageUrl})`;
    } catch (error) {
        console.error("Failed to fetch background image:", error);
    }
}
</script>

<template>
    <Header />
    <el-container>
        <el-main> <router-view /></el-main>
    </el-container>
    <Footer />
    <el-backtop :right="20" :bottom="20" class="totop" />
</template>

<style>
body {
    padding: 0;
    margin: 0;
    /* background-image: url("https://api.dujin.org/bing/1920.php"); */
    background-attachment: fixed;
    background-size: cover;
}
.totop {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
}
.totop:hover {
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
    background-color: #f1f5fb;
}
</style>

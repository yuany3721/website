<script setup lang="ts">
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Cards from "../components/Cards/Cards.vue";
</script>

<template>
    <Header />
    <Cards />
    <Footer />
    <el-backtop :right="20" :bottom="20" class="totop" />
</template>

<style scoped>
.totop {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
}
.totop:hover {
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
    background-color: #f1f5fb;
}
</style>

<script setup lang="ts">
import { reactive, computed, markRaw } from "vue";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import HelloWorld from "./views/HelloWorld/HelloWorld.vue";
import Gadget from "./views/Gadget.vue";
import Tools from "./views/Tools/Tools.vue";

const data: any = reactive({
    currentPath: window.location.pathname,
    routes: {
        "/": markRaw(HelloWorld),
        "/gadget": markRaw(Gadget),
        "/tools": markRaw(Tools),
    },
});

window.addEventListener("hashchange", () => {
    data.currentPath = window.location.hash;
});

const currentView = computed(() => {
    return data.routes[data.currentPath.slice(1) || "/"] || HelloWorld;
});
</script>

<template>
    <Header />
    <el-container>
        <el-main> <component :is="currentView" /></el-main>
    </el-container>
    <Footer />
    <el-backtop :right="20" :bottom="20" class="totop" />
</template>

<style>
body {
    padding: 0;
    margin: 0;
    background-image: url("https://api.dujin.org/bing/1920.php");
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

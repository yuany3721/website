<script setup lang="ts">
import HelloWorld from "./views/HelloWorld.vue";
import Gadget from "./views/Gadget.vue";
import { reactive, computed, markRaw } from "vue";

const data: any = reactive({
    currentPath: window.location.pathname,
    routes: {
        "/": markRaw(HelloWorld),
        "/gadget": markRaw(Gadget),
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
    <component :is="currentView" />
</template>

<style>
body {
    padding: 0;
    margin: 0;
    background-image: url("https://api.dujin.org/bing/1920.php");
    background-attachment: fixed;
    background-size: cover;
}
</style>

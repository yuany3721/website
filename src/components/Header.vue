<template>
    <el-container>
        <el-main class="header">
            <div class="title">
                <img src="../assets/logo.png" alt="" style="height: 50px; margin: 5px" />
                <el-link href="./" class="title">
                    {{ title }}
                </el-link>
            </div>

            <div class="nav">
                <el-link href="./"> 首页 </el-link>
                <el-link href="/gadget"> 小玩意 </el-link>
                <el-link href="/tools"> 工具 </el-link>
                <el-link href="https://blog.yuany3721.site/updatelog/"> 更新日志 </el-link>
            </div>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
const title = ref("website-yuany3721");
</script>

<style scoped>
.header {
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    background-color: rgba(255, 255, 255, 0.75);
}
.title,
.nav {
    display: inline-flex;
    align-items: center;
    /* height: 100%; */
    font-size: 20px;
    font-weight: 500;
    text-shadow: 0px 0px 3px white;
}
.title:hover,
.nav:hover {
    color: black;
}
.title::after,
.nav::after {
    display: none;
}
.nav {
    align-items: flex-end;
}
.title:deep(.el-link) {
    font-size: smaller;
    color: black;
}
.title:deep(.el-link:hover) {
    color: #2172f3;
}
.nav:deep(.el-link) {
    margin: 0 0.8em 0 0;
    padding: 0.2em 0.5em;
    font-size: smaller;
    color: black;
    /* border: 1px solid black; */
}
.nav:deep(.el-link:hover) {
    color: #2172f3;
}
</style>

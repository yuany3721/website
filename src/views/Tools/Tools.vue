<script setup lang="ts">
import PlateLoc from "./PlateLoc/PlateLoc.vue";
import NumberConverter from "./NumberConverter.vue";

// import { ref } from "vue";

// const activeName = ref("first");
</script>

<template>
    <!-- <el-container>
        <el-main class="tools-main">
            <el-tabs v-model="activeName" class="demo-tabs">
                <el-tab-pane label="车牌号归属地查询" name="first"></el-tab-pane>
                <el-tab-pane label="进制转换"> </el-tab-pane>
            </el-tabs>
        </el-main>
    </el-container> -->
    <PlateLoc />
    <NumberConverter />
</template>

<style scoped>
/* .tools-main {
    max-width: 850px;
    margin: 0 auto;
    background-color: rgba(240, 248, 255, 0.8);
    border-radius: 1em 1em 1em 1em;
} */
</style>

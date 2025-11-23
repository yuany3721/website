<script setup lang="ts"></script>

<template>
    <el-container class="container" :style="{ boxShadow: `var(--el-box-shadow)` }">
        <el-header>
            <Header />
        </el-header>
        <!-- <AuthLoading v-if="!authorized" /> -->

        <!-- <el-aside width="100px" v-if="authorized">
            <el-menu :default-active="activeIndex" @select="handleSelect" :router="true">
                <el-menu-item index="/note">note</el-menu-item>
                <el-menu-item index="/cost">cost</el-menu-item>
            </el-menu>
        </el-aside> -->

        <el-main>
            <router-view />
        </el-main>
        <!-- <el-footer> -->
        <Footer />
        <!-- </el-footer> -->
    </el-container>
</template>

<style scoped>
.el-header,
.el-container,
.el-main {
    margin: 0;
    padding: 0;
}
.el-header {
    position: relative;
}

.el-aside {
    border-right: 1px solid #eee;
}

.el-menu {
    border-right: none;
}
</style>

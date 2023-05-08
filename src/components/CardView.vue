<template>
    <el-container>
        <el-card>
            <template #header> <slot name="header"></slot> </template>
            <slot></slot>
        </el-card>
        <div class="ref">
            <slot name="ref"></slot>
        </div>
    </el-container>
</template>

<script lang="ts" setup></script>

<style scoped>
.el-container {
    max-width: 800px;
    display: block;
    margin: 1em auto;
    background-color: aliceblue;
    padding: 0.5em;
    border-radius: 1em 1em 1em 1em;
    box-shadow: 1px 1px 5px 1px lightslategrey;
}

.el-card {
    background-color: inherit;
    box-shadow: none;
    border: none;
}
.ref {
    color: lightgray;
    margin: 0 1em 1em 1em;
}
.ref > a {
    color: lightblue;
}
</style>

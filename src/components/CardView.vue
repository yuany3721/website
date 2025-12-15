<template>
    <el-container>
        <el-card>
            <template #header class="elh">
                <a :href="'#' + title" class="anchor">#</a>
                <a :name="title" class="anchor-title"><slot name="header"></slot></a>
            </template>
            <slot></slot>
        </el-card>
        <div class="ref">
            <slot name="ref"></slot>
        </div>
    </el-container>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'
const props = defineProps({
    title: String, // card header
})
const { title } = toRefs(props)
</script>

<style scoped>
a {
    text-decoration: none;
}
.anchor {
    display: inline-block;
    position: relative;
    /* margin-right: 0.2em; */
    font-size: x-large;
    right: 10px;
    opacity: 0;
    transition: 0.5s;
}
.anchor-title {
    display: inline-block;
}
.anchor:hover {
    opacity: 1;
}
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
:deep(.el-card .el-card__header) {
    padding: 0;
    padding-left: 1em;
}
.ref {
    color: lightgray;
    margin: 0 1em 1em 1em;
}
.ref > a {
    color: lightblue;
}
</style>

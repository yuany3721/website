<template>
    <el-container>
        <el-tabs model-value="1">
            <el-tab-pane disabled class="header">
                <template #label>
                    <h2 class="h2">
                        <a href="#换算工具" class="anchor">#</a>
                        <a name="换算工具" class="anchor-title">换算工具</a>
                    </h2>
                </template>
            </el-tab-pane>
            <el-tab-pane label="光功率单位转换" class="item">
                <PowerConv />
            </el-tab-pane>
        </el-tabs>
    </el-container>
</template>

<script lang="ts" setup>
import PowerConv from './PowerConv.vue'
</script>

<style scoped>
a {
    text-decoration: none;
}
.h2 {
    padding-left: 0.5em;
    padding-bottom: 1em;
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
    color: black;
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
.item {
    padding: 20px;
}
</style>

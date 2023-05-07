<template>
    <CardView>
        <template #header><h2>车牌号归属地查询</h2></template>

        <el-input v-model="input" placeholder="输入车牌后缀" class="input-with-select" @input="onchange">
            <template #prepend>
                <el-select v-model="province" placeholder="选择省份" style="min-width: 7em" @change="onchange">
                    <el-option v-for="item in provinces" :key="item.value" :label="item.value" :value="item.value">
                        <span style="float: left; margin-right: 1em">{{ item.value }}</span>
                        <span style="float: right; color: var(--el-text-color-secondary)">{{ item.label }}</span>
                    </el-option>
                </el-select>
            </template>
        </el-input>
        <el-tag type="info">{{ infotext }}</el-tag>

        <template #ref>
            参考：<a href="https://github.com/golyu/license-plate-number-search">golyu/license-plate-number-search</a>
        </template>
    </CardView>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { getFirstName } from "./Province";

import CardView from "../../../components/CardView.vue";

function onchange() {
    var s: string = province.value + input.value;
    s = s.toLocaleUpperCase();
    infotext.value = getFirstName(s.split("")).toString().replaceAll(",", " ");
}
const province = ref("");
const input = ref("");
const infotext = ref("请输入车牌");
const provinces = [
    { value: "京", label: "北京市" },
    { value: "津", label: "天津市" },
    { value: "沪", label: "上海市" },
    { value: "渝", label: "重庆市" },
    { value: "苏", label: "江苏省" },
    { value: "浙", label: "浙江省" },
    { value: "豫", label: "河南省" },
    { value: "粤", label: "广东省" },
    { value: "川", label: "四川省" },
    { value: "陕", label: "陕西省" },
    { value: "冀", label: "河北省" },
    { value: "辽", label: "辽宁省" },
    { value: "吉", label: "吉林省" },
    { value: "皖", label: "安徽省" },
    { value: "闽", label: "福建省" },
    { value: "鄂", label: "湖北省" },
    { value: "湘", label: "湖南省" },
    { value: "鲁", label: "山东省" },
    { value: "晋", label: "山西省" },
    { value: "黑", label: "黑龙江省" },
    { value: "赣", label: "江西省" },
    { value: "贵", label: "贵州省" },
    { value: "甘", label: "甘肃省" },
    { value: "桂", label: "广西壮族自治区" },
    { value: "琼", label: "海南省" },
    { value: "云", label: "云南省" },
    { value: "青", label: "青海省" },
    { value: "蒙", label: "内蒙古自治区" },
    { value: "藏", label: "西藏自治区" },
    { value: "宁", label: "宁夏回族自治区" },
    { value: "新", label: "新疆维吾尔自治区" },
];
</script>

<style scoped>
.el-tag {
    /* display: block; */
    min-width: 300px;
    height: 2.5em;
    font-size: larger;
    margin: 0.5em 0;
    padding: 0.5em;
}
.input-with-select {
    font-size: large;
    margin-bottom: 1em;
}
</style>

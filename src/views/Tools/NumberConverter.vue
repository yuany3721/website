<template>
    <CardView>
        <template #header><h2>进制转换工具</h2></template>

        <el-form>
            <el-form-item label="输入数字">
                <el-input v-model="inputNumber"></el-input>
            </el-form-item>

            <el-form-item label="原进制">
                <el-select v-model="sourceBase" placeholder="选择进制">
                    <el-option v-for="base in bases" :key="base" :label="`Base ${base}`" :value="base"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="目标进制">
                <el-select v-model="targetBase" placeholder="选择进制">
                    <el-option v-for="base in bases" :key="base" :label="`Base ${base}`" :value="base"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="convert">转换</el-button>
            </el-form-item>

            <el-form-item label="转换结果">
                <el-input v-model="result" readonly></el-input>
            </el-form-item>

            <el-form-item v-if="error" class="custom-error" :error="error"> </el-form-item>
        </el-form>
    </CardView>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import CardView from "../../components/CardView.vue";

const bases = [2, 8, 10, 16];

const inputNumber = ref("");
const sourceBase = ref(10);
const targetBase = ref(16);
const result = ref("");
const error = ref("");

function convert() {
    error.value = "";

    // 输入校验
    const number = Number(inputNumber.value);
    if (isNaN(number)) {
        error.value = "输入的数字无效";
        return;
    }

    const source = sourceBase.value;
    const target = targetBase.value;

    // 原进制校验
    if (!isValidBase(number, source)) {
        error.value = `输入的数字不是有效的 ${source} 进制数`;
        return;
    }

    const converted = number.toString(target);
    result.value = converted.toUpperCase();
}

function isValidBase(number: number, base: number): boolean {
    const numberString = number.toString();
    const validDigits = getValidDigits(base);
    const regex = new RegExp(`^[${validDigits}]+$`);
    return regex.test(numberString);
}

function getValidDigits(base: number): string {
    let validDigits = "";
    for (let i = 0; i < base; i++) {
        validDigits += i.toString(base);
    }
    return validDigits.toUpperCase();
}
</script>

<style scoped>
.custom-error {
    color: red;
}
</style>

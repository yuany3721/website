<template>
    <CardView title="进制转换工具">
        <template #header><h2>进制转换工具</h2></template>

        <el-form>
            <el-form-item label="输入数字">
                <el-input v-model="inputNumber" @input="convert"></el-input>
            </el-form-item>

            <div class="form-row">
                <el-form-item label="原进制" class="flex-item">
                    <el-select v-model="sourceBase" placeholder="选择进制" @change="convert">
                        <el-option v-for="base in bases" :key="base" :label="`Base ${base}`" :value="base"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="目标进制" class="flex-item">
                    <el-select v-model="targetBase" placeholder="选择进制" @change="convert">
                        <el-option v-for="base in bases" :key="base" :label="`Base ${base}`" :value="base"></el-option>
                    </el-select>
                </el-form-item>
            </div>

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

const bases: number[] = [2, 8, 10, 16];
const inputNumber = ref<string>("");
const sourceBase = ref<number>(10);
const targetBase = ref<number>(16);
const result = ref<string>("");
const error = ref<string>("");

function convert(): void {
    error.value = "";

    const source: number = sourceBase.value;
    const target: number = targetBase.value;

    // 根据源进制将输入的数字转换为十进制
    const number: number = parseInt(inputNumber.value, source);
    if (isNaN(number)) {
        error.value = "输入的数字无效";
        return;
    }

    // 转换为目标进制
    const converted: string = number.toString(target);
    result.value = converted.toUpperCase();
}
</script>

<style scoped>
.custom-error {
    color: red;
}
.form-row {
    display: flex;
}

.flex-item {
    flex: 1;
    margin-right: 10px;
}
.flex-item .el-select {
    min-width: 8em;
}
</style>

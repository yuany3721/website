<template>
    <el-form>
        <el-form-item label="W">
            <el-input v-model="W" @input="convert(1)" class="input"></el-input>
        </el-form-item>
        <div class="form-row">
            <el-form-item label="dBm" class="flex-item">
                <el-input v-model="dBm" @input="convert(2)" class="input"></el-input>
            </el-form-item>
            <el-form-item label="dBW" class="flex-item">
                <el-input v-model="dBW" @input="convert(3)" class="input"></el-input>
            </el-form-item>
        </div>
        <el-form-item label="单光子功率计算">
            <el-switch v-model="count" />
        </el-form-item>
        <template v-if="count">
            <div class="form-row">
                <el-form-item label="波长(nm)" class="flex-item">
                    <el-input v-model="lambda" @input="convert(4)" class="input"></el-input>
                </el-form-item>
                <el-form-item label="单光子能量(J)" class="flex-item">
                    <el-input v-model="J" @input="convert(5)" class="input"></el-input>
                </el-form-item>
            </div>
            <el-form-item label="每秒光子数">
                <el-input v-model="cps" @input="convert(6)" class="input"></el-input>
            </el-form-item>
        </template>
    </el-form>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const lambda = ref<number>(1550);
const J = ref<number>(1.28e-28);
const W = ref<number>(1.28e-13);
const dBW = ref<number>(-128.92);
const dBm = ref<number>(-98.92);
const count = ref<boolean>(false);
const cps = ref<string>("1e6");

function convert(type: number): void {
    const h = 6.626e-34;
    const c = 2.998e8;
    switch (type) {
        case 1:
            dBW.value = 10 * Math.log10(W.value);
            dBm.value = dBW.value + 30;
            break;
        case 2:
            dBW.value = dBm.value - 30;
            W.value = Math.pow(10, dBW.value / 10);
            break;
        case 3:
            W.value = Math.pow(10, dBW.value / 10);
            dBm.value = dBW.value + 30;
            break;
        case 4:
            // 计算单光子能量、每秒cps个光子的功率
            J.value = ((h * c) / lambda.value) * 1e9;
            W.value = J.value * Number(cps.value);
            dBW.value = 10 * Math.log10(W.value);
            dBm.value = dBW.value + 30;
            break;
        case 5:
            // 计算单光子能量对应的波长、每秒cps个光子的功率
            lambda.value = ((h * c) / J.value) * 1e9;
            W.value = J.value * Number(cps.value);
            dBW.value = 10 * Math.log10(W.value);
            dBm.value = dBW.value + 30;
            break;
        case 6:
            // 计算每秒cps个光子的功率
            W.value = J.value * Number(cps.value);
            dBW.value = 10 * Math.log10(W.value);
            dBm.value = dBW.value + 30;
            break;
    }
}
</script>

<style scoped>
.input {
    max-width: 15em;
}

.form-row {
    display: flex;
}

.flex-item {
    flex: 1;
    margin-right: 10px;
}
</style>

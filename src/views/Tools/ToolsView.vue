<script setup lang="ts">
import PlateLoc from './PlateLoc/PlateLocTool.vue'
import NumberConverter from './NumberConverterTool.vue'
import ConvTab from './ConvTab/ConvTool.vue'
import Gadget from './GadgetTool.vue'
import { fetchBackgroundImageUrl } from '@/global'
fetchBackgroundImageUrl()
</script>

<template>
    <NumberConverter />
    <ConvTab />
    <PlateLoc />
    <Gadget />
</template>

<style scoped></style>

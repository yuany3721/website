<script setup lang="ts">
import PlateLoc from './PlateLoc/PlateLoc.vue'
import NumberConverter from './NumberConverter.vue'
import ConvTab from './ConvTab/ConvTab.vue'
import Gadget from './Gadget.vue'
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

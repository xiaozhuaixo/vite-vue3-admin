<template>
    <el-row justify="center">
        <el-col class="svg-icon-border" :span="4" v-for="item in svgMenuIcons">
            <svg-icon class="svg-icon-font" :icon-class="item"></svg-icon>
            <p>
                {{item}}
            </p>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref } from 'vue'
import svgIcons from '@/utils/svg-icons'
const svgMenuIcons = ref(svgIcons)
</script>

<style scoped>
.svg-icon-border {
    border: 1px solid #eee;
    padding: 15px;
    text-align: center;
}
.svg-icon-font {
    font-size: 30px;
    color: var(--el-color-info)
}
</style>

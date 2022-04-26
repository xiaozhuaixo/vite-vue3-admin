<template>
    <el-row justify="center">
        <el-col class="el-icons" :span="4" v-for="item in elIcons">
            <el-icon class="el-icons-font">
                <component :is="item"></component>
            </el-icon>
            <p class="font-title">
                {{item}}
            </p>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref } from 'vue'
import elementIcons from '@/utils/element-icons'
let size = ref(20)
const elIcons = ref(elementIcons)

</script>

<style scoped>
.el-icons {
    border: 1px solid #eee;
    padding: 15px;
    text-align: center;
}
.el-icons-font {
    font-size: 40px;
    color: var(--el-color-info);
}
.font-title {
    color: #1f2d3d;
}
</style>

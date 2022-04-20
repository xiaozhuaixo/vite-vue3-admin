<template>
    <el-row class="app-container" :gutter="10">
        <el-col :span="8">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
        </el-col>
        <el-col :span="16">
            <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
                <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
            </ul>
        </el-col>
    </el-row>
</template>
s
<script setup>
import { ref } from 'vue'

const data = [
    {
        label: 'Level one 1',
        children: [
            {
                label: 'Level two 1-1',
                children: [
                    {
                        label: 'Level three 1-1-1',
                    },
                ],
            },
        ],
    },
    {
        label: 'Level one 2',
        children: [
            {
                label: 'Level two 2-1',
                children: [
                    {
                        label: 'Level three 2-1-1',
                    },
                ],
            },
            {
                label: 'Level two 2-2',
                children: [
                    {
                        label: 'Level three 2-2-1',
                    },
                ],
            },
        ],
    },
    {
        label: 'Level one 3',
        children: [
            {
                label: 'Level two 3-1',
                children: [
                    {
                        label: 'Level three 3-1-1',
                    },
                ],
            },
            {
                label: 'Level two 3-2',
                children: [
                    {
                        label: 'Level three 3-2-1',
                    },
                ],
            },
        ],
    },
]

const defaultProps = {
    children: 'children',
    label: 'label',
}

const count = ref(0)
const load = () => {
    count.value += 2
}

const handleNodeClick = (data) => {
    console.log(data)
}

</script>

<style scoped>
.infinite-list {
    height: 300px;
    padding: 0;
    margin: 0;
    list-style: none;
}
.infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-primary-light-9);
    margin: 10px;
    color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
    margin-top: 10px;
}
</style>

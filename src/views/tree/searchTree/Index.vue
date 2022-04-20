<template>
    <el-row class="app-container">
        <el-col>
            <el-input
                    v-model="query"
                    placeholder="Please enter keyword"
                    @input="onQueryChanged"
            />
            <el-tree-v2
                    ref="treeRef"
                    :data="data"
                    :props="props"
                    :filter-method="filterMethod"
                    :height="208"
            />
        </el-col>
    </el-row>
</template>

<script setup>
import { ref } from 'vue'



const getKey = (prefix, id) => {
    return `${prefix}-${id}`
}

const createData = (
    maxDeep,
    maxChildren,
    minNodesNumber,
    deep = 1,
    key = 'node'
) => {
    let id = 0
    return Array.from({ length: minNodesNumber })
        .fill(deep)
        .map(() => {
            const childrenNumber =
                deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
            const nodeKey = getKey(key, ++id)
            return {
                id: nodeKey,
                label: nodeKey,
                children: childrenNumber
                    ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
                    : undefined,
            }
        })
}

const query = ref('')
const treeRef = ref()
const data = createData(4, 30, 5)
const props = {
    value: 'id',
    label: 'label',
    children: 'children',
}

const onQueryChanged = (query) => {
    // TODO: fix typing when refactor tree-v2
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    treeRef.value.filter(query)
}
const filterMethod = (query, node ) => {
    return node.label.includes(query)
}
</script>

<style scoped>

</style>

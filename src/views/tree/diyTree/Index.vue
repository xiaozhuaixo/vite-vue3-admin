<template>
    <el-row class="app-container" :gutter="10">
        <el-col :span="8">
            <el-card>
                <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom: 15px;"/>
                <el-tree
                        ref="treeRef"
                        :props="props"
                        :load="loadNode"
                        show-checkbox
                        lazy
                        node-key="id"

                        highlight-current
                        :expand-on-click-node="true"
                        :filter-node-method="filterNode"
                >
                    <template #default="{ node, data }">
                    <span class="prefix">
                        <el-icon>
                          <folder v-if="!data.isClick"/>
                          <folder-opened v-else/>
                      </el-icon>
                    </span>
                        <span>
                      {{node.isLeaf}}
                      {{ node.label }}
                    </span>
                    </template>
                </el-tree>
            </el-card>
        </el-col>
        <el-col :span="16">
            <el-card>
                <el-skeleton />
                <br />
                <el-skeleton style="--el-skeleton-circle-size: 100px">
                    <template #template>
                        <el-skeleton-item variant="circle" />
                        <el-skeleton-item variant="p" />
                        <el-skeleton-item variant="h1" />
                        <el-skeleton-item variant="text" />
                        <el-skeleton-item variant="caption" />
                        <el-skeleton-item variant="button" />
                        <el-skeleton-item variant="image" />
                        <el-skeleton-item variant="rect" />
                    </template>
                </el-skeleton>

            </el-card>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref, watch } from 'vue'

let id = 1
let count = 1

const treeRef = ref(null)
const filterText = ref('')
watch(filterText, (val) => {
    treeRef.value.filter(val)
})

const filterNode = (value, data) => {
    if (!value){
        return true
    }
    return data.name.includes(value)
}

const props = {
    label: 'name',
    children: 'zones',
    isLeaf: 'leaf',
    disabled: 'disabled',
}

const loadNode = (node, resolve) => {
    if (node.level === 0) {
        return resolve([{ name: 'Root123', isClick: false,disabled: false, }, { name: 'Root2',isClick: false,disabled: false }])
    }
    node.data.isClick = !node.data.isClick;

    let hasChild = Math.random() > 0.5

    setTimeout(() => {
        let data = []
        if (hasChild) {
            data = [
                {
                    name: `zone${count++}`,
                    isClick: false,
                    disabled: false
                },
                {
                    name: `zone${count++}`,
                    isClick: false,
                    disabled: false
                },
            ]
        } else {
            data = []
            node.isLeaf = true;
            node.data.disabled = true;
        }

        resolve(data)
    }, 500)
}

</script>

<style scoped>
.prefix {
    color: var(--el-color-primary);
    font-size: 25px;
}
.prefix.is-leaf {
    color: var(--el-color-success);
}
</style>

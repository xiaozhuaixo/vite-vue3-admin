<template>
    <el-row class="app-container" :gutter="10">
        <el-col :span="8">
            <el-card>
                <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom: 15px;"/>
                <el-tree
                        ref="treeRef"
                        :props="props"
                        :data="treeData"
                        show-checkbox
                        node-key="id"
                        @node-click="handleNodeClick"
                        highlight-current
                        :expand-on-click-node="true"
                        :filter-node-method="filterNode"
                >
                    <template #default="{ node, data }">
                    <span class="prefix">
                        <el-icon>
                          <component :is="data.icon" />
                      </el-icon>
                    </span>
                        <span>
                      {{ node.label }}
                    </span>
                    </template>
                </el-tree>
            </el-card>
        </el-col>
        <el-col :span="16">
            <el-card>
                <el-row :gutter="10">
                    <el-col :span="6" v-for="item in folders" v-if="folders.length > 0">
                        <div>
                            <div class="folder">
                                <el-icon>
                                    <component :is="item.icon"/>
                                </el-icon>
                            </div>
                            <div>{{item.name}}</div>
                        </div>
                    </el-col>
                    <el-col v-else>
                        <el-empty description="暂无数据" />
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref, watch, h, resolveComponent } from 'vue'

let id = 1
let count = 1

let folders = ref([])

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
    children: 'children',
    isLeaf: 'leaf',
    disabled: 'disabled',
}

let treeData = [
    {
        name: '项目',
        isClick: false,
        disabled: false,
        icon: 'folder',
        leaf: false,
        children: [
            {
                name: '主节点',
                isClick: false,
                disabled: false,
                icon: 'folder',
                leaf: false,
                children: [
                    {
                        name: '主项目',
                        isClick: false,
                        disabled: false,
                        icon: 'school',
                        leaf: false,
                        children: [
                            {
                                name: '环境',
                                isClick: false,
                                disabled: false,
                                icon: 'wind-power',
                                leaf: true,
                            },
                            {
                                name: 'A点',
                                isClick: false,
                                disabled: false,
                                icon: 'office-building',
                                leaf: true,
                            },
                            {
                                name: 'B点',
                                isClick: false,
                                disabled: false,
                                icon: 'office-building',
                                leaf: true,
                            },
                            {
                                name: 'C点',
                                isClick: false,
                                disabled: false,
                                icon: 'office-building',
                                leaf: true,
                            }
                        ]
                    }
                ]
            },
            {
                name: '主项目2',
                isClick: false,
                disabled: false,
                icon: 'folder',
                leaf: false,
            }
        ]
    }
]

const configFolders = (nodes) => {
    folders.value = nodes.map(node => {
        return {
            isLeaf: node.isLeaf,
            name: node.data.name,
            icon: node.data.icon
        }
    })
}


const handleNodeClick = (data, node, event) => {
    console.log(node.childNodes, node.childNodes.length)
    configFolders(node.childNodes)
}

const renderIcon = (node) => {
    let elIcon = resolveComponent("el-icon");
    let elIconChart = resolveComponent(node.icon)
    return h(elIcon, {}, [
        elIconChart
    ])
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

.folder {
    font-size: 50px;
}
</style>

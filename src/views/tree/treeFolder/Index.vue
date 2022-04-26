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
                        node-key="key"
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
        <el-col :span="8">
            <el-card>
                <el-row :gutter="10">
                    <el-col :span="6" v-for="item in folders" v-if="folders.length > 0">
                        <div @dblclick="handleDoubleClick(item)">
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
        <el-col :span="8">
            <el-card>

            </el-card>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref, watch } from 'vue'

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
        key: 'project',
        isClick: false,
        disabled: false,
        icon: 'folder',
        leaf: false,
        children: [
            {
                name: '主节点',
                key: 'main_node',
                isClick: false,
                disabled: false,
                icon: 'folder',
                leaf: false,
                children: [
                    {
                        name: '主项目',
                        key: 'main_project',
                        isClick: false,
                        disabled: false,
                        icon: 'school',
                        leaf: false,
                        children: [
                            {
                                name: '环境',
                                key: 'p',
                                isClick: false,
                                disabled: false,
                                icon: 'wind-power',
                                leaf: true,
                            },
                            {
                                name: 'A点',
                                key: 'point_a',
                                isClick: false,
                                disabled: false,
                                icon: 'office-building',
                                leaf: true,
                            },
                            {
                                name: 'B点',
                                key: 'point_b',
                                isClick: false,
                                disabled: false,
                                icon: 'office-building',
                                leaf: true,
                            },
                            {
                                name: 'C点',
                                key: 'point_c',
                                isClick: false,
                                disabled: false,
                                icon: 'office-building',
                                leaf: true,
                            }
                        ]
                    },
                    {
                        name: '从项目',
                        key: 'slave_project',
                        isClick: false,
                        disabled: false,
                        icon: 'school',
                        leaf: false,
                        children: [
                            {
                                name: '环境slave',
                                key: 'slave_p',
                                isClick: false,
                                disabled: false,
                                icon: 'wind-power',
                                leaf: true,
                            },
                            {
                                name: 'A点1',
                                key: 'slave_point_a',
                                isClick: false,
                                disabled: false,
                                icon: 'office-building',
                                leaf: true,
                            },
                            {
                                name: 'B点1',
                                key: 'slave_point_b',
                                isClick: false,
                                disabled: false,
                                icon: 'office-building',
                                leaf: true,
                            },
                            {
                                name: 'C点1',
                                key: 'slave_point_c',
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
                key: 'project_2',
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
        console.log(node);
        return {
            id:  node.id,
            isLeaf: node.isLeaf,
            name: node.data.name,
            icon: node.data.icon,
            children: node.data.children,
            key: node.data.key,
        }
    })
}


const handleNodeClick = (data, node, event) => {
    if(node.isLeaf){
        return;
    }
    configFolders(node.childNodes)
}

const handleDoubleClick = (data) => {
    if(data.isLeaf){
        return;
    }
    treeRef.value.setCurrentKey(data.key);
    let node = treeRef.value.getNode(data.key);
    if(node.isLeaf){
        return;
    }
    configFolders(node.childNodes)
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

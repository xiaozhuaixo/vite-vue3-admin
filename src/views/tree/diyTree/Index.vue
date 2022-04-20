<template>
    <el-row class="app-container" :gutter="10">
        <el-col :span="8">
            <el-card>
                <el-tree
                        :props="props"
                        :load="loadNode"
                        show-checkbox
                        lazy
                        node-key="id"
                        @node-click="handleNodeClick"
                        highlight-current
                        :expand-on-click-node="true"
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
import { ref } from 'vue'

let id = 1
let count = 1

const append = (data) => {
    const newChild = { id: id++, label: 'testtest', children: [] }
    if (!data.children) {
        data.children = []
    }
    data.children.push(newChild)

}

const remove = (node, data) => {
    const parent = node.parent
    const children = parent.data.children || parent.data
    const index = children.findIndex((d) => d.id === data.id)
    children.splice(index, 1)

}

const props = {
    label: 'name',
    children: 'zones',
    isLeaf: 'leaf',
    isClick: false,
}

const loadNode = (node, resolve) => {
    if (node.level === 0) {
        return resolve([{ name: 'Root123', isClick: true, }, { name: 'Root2',isClick: false, }])
    }
    if (node.level > 3) return resolve([])

    let hasChild = false
    if (node.data.name === 'region1') {
        hasChild = true
    } else if (node.data.name === 'region2') {
        hasChild = false
    } else {
        hasChild = Math.random() > 0.5
    }

    setTimeout(() => {
        let data = []
        if (hasChild) {
            data = [
                {
                    name: `zone${count++}`,
                    isClick: false,
                },
                {
                    name: `zone${count++}`,
                    isClick: false,
                },
            ]
        } else {
            data = []
        }

        resolve(data)
    }, 500)
}

const handleNodeClick = (data,  node, event) => {
    data.isClick = !data.isClick;
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

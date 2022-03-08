<template>
    <el-table
            :data="list"
            border
    >
        <el-table-column
                align="center"
                prop="id"
                label="id"
        >
        </el-table-column>
    </el-table>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'Index',
    data(){
        return {
            list: [{
                id: 1,
            },{
                id: 2
            },{
                id: 3
            }]
        }
    },
})
</script>

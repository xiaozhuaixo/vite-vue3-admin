<template>
    <div class="dashboard-editor-container">

        <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
            <count-to :startVal='startVal' :endVal='endVal' :duration='3000'></count-to>
        </el-row>

        <el-row :gutter="32">
            <el-col :xs="24" :sm="24" :lg="8">
                <div class="chart-wrapper">
                    <count-to :startVal='startVal' :endVal='endVal' :duration='3000'></count-to>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :lg="8">
                <div class="chart-wrapper">
                    <count-to :startVal='startVal' :endVal='endVal' :duration='3000'></count-to>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :lg="8">
                <div class="chart-wrapper">
                    <count-to :startVal='startVal' :endVal='endVal' :duration='3000'></count-to>
                </div>
            </el-col>
        </el-row>

        <el-row :gutter="8">
            <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
                <count-to :startVal='startVal' :endVal='endVal' :duration='3000'></count-to>
            </el-col>
            <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
                <count-to :startVal='startVal' :endVal='endVal' :duration='3000'></count-to>
            </el-col>
            <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
                <count-to :startVal='startVal' :endVal='endVal' :duration='3000'></count-to>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'
export default defineComponent({
    name: 'index',
    components: {
        countTo: defineAsyncComponent(() => import('@/components/vueCountTo/vue-countTo'))
    },
    data(){
        return {
            startVal: 0,
            endVal: 2000,
        }
    },
})
</script>


<style lang="scss" scoped>
.dashboard-editor-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    position: relative;

    .github-corner {
        position: absolute;
        top: 0px;
        border: 0;
        right: 0;
    }

    .chart-wrapper {
        background: #fff;
        padding: 16px 16px 0;
        margin-bottom: 32px;
    }
}

@media (max-width:1024px) {
    .chart-wrapper {
        padding: 8px;
    }
}
</style>

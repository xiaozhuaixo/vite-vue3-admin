<template>
    <div class="dashboard-container">
        <component :is="current"/>
    </div>
</template>

<script setup>

</script>

<script>
import { defineAsyncComponent } from 'vue'

export default{
    name: 'index',
    components: {
        adminDashboard: defineAsyncComponent(() => import('./admin'))
    },
    data(){
        return {
            current: 'adminDashboard'
        }
    },
}
</script>

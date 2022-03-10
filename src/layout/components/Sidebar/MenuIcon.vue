<script>
import { h, resolveComponent , defineComponent } from 'vue'
export default defineComponent({
    name: 'MenuIcon',
    functional: true,
    props: {
        icon: {
            type: String,
            default: ''
        },
    },
    render() {
        const { icon } = this.$props;
        const vnodes = []
        if (icon) {
            let elIcon = resolveComponent("el-icon");
            if (icon.includes('el-')) {
                let elIconChart = resolveComponent(icon.replace('el-', ''))
                vnodes.push(h(elIcon, {class: ['sub-el-icon']},
                    () => [
                        h(elIconChart, {} )
                    ]))
            } else {
                let svgIcon = resolveComponent('svg-icon')
                vnodes.push(h(elIcon, {className: ["svg-icon-size"]},
                    () => [
                        h(svgIcon, {iconClass: icon} )
                    ]))
            }
        }
        return vnodes
    }
})
</script>

<style scoped>
.sub-el-icon {
    color: currentColor;
    width: 1em;
    height: 1em;
}

.svg-icon-size {
    width: 32px;
}
</style>

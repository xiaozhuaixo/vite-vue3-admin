<script>
import { h, resolveComponent } from 'vue'
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render() {
    const { icon, title } = this.$props;
    const vnodes = []
    if (icon) {
      if (icon.includes('el-icon')) {
          vnodes.push(h('i', {className: [icon, 'sub-el-icon']}))
      } else {
          let svgIcon = resolveComponent('svg-icon')
          vnodes.push(h(svgIcon, {iconClass: icon}))
      }
    }
    if (title) {
        vnodes.push(h('span', {}, title))
    }
    return vnodes
  }
}
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>

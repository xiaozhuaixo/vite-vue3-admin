<script>
import { h, resolveComponent } from 'vue'
export default {
  name: 'MenuItem',
    functional: true,
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  render() {
    const { title } = this.$props;
    const vnodes = []
    if (title) {
        vnodes.push(h('span', {}, title))
    }
    return vnodes
  }
}
</script>

<style scoped>
</style>

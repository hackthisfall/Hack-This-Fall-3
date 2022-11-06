<template>
  <div class="container">
    <HeadingVue front="Narratives" back="PREVIOUS" />
  </div>
</template>
<script>
import HeadingVue from './HeadingComponent.vue'
export default {
  components: {
    HeadingVue,
  },
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  background: transparent;
  min-height: 500px;
  padding-bottom: 150px;
}
</style>

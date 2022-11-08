<template>
  <ContainerVue id="speakers" name="speakers">
    <HeadingVue front="Past Speakers" back="SPEAKERS" />
  </ContainerVue>
</template>
<script>
import HeadingVue from './HeadingComponent.vue'
import ContainerVue from './Container.vue'

export default {
  components: {
    HeadingVue,
    ContainerVue,
  },
}
</script>
<style lang="scss" scoped></style>

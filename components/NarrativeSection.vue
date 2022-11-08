<template>
  <ContainerVue id="narrative" name="narrative">
    <HeadingVue front="Narratives" back="PREVIOUS" />
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

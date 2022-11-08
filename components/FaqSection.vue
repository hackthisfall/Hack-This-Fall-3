<template>
  <ContainerVue id="faq" name="faq">
    <HeadingVue front="Questions" back="FAQs" />
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

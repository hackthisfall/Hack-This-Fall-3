<template>
  <ContainerVue id="glimpse" name="glimpse">
    <HeadingVue front="Previous Events" back="GLIMPSES" />
    <CFlex px="50px" pt="30px" justify="center">
      <img width="100%" src="~/assets/glimpses.png" />
    </CFlex>
  </ContainerVue>
</template>
<script>
import { CFlex } from '@chakra-ui/vue'
import HeadingVue from './HeadingComponent.vue'
import ContainerVue from './Container.vue'

export default {
  components: {
    HeadingVue,
    ContainerVue,
    CFlex,
  },
}
</script>
<style lang="scss" scoped></style>

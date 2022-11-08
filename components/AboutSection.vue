<template>
  <ContainerVue id="about" name="about">
    <HeadingVue front="About Us" back="ABOUT US" />
    <CFlex align="center" px="50px" gap="100px">
      <p class="text">
        Hack This Fall began with a mindset of encouraging new hackers to build
        unique projects regardless of the tech or field. The only focus was to
        create something meaningful and enjoy the process of building, while
        also solving the shared struggles of our surroundings.
        <br /><br />
        For this season, we are breaking the virtual barrier and will be hosting
        a
        <span style="font-weight: 600; color: #f46d24"
          >36 Hours In-person Hackathon</span
        >; where we are aiming to promote hackers and help them nurture their
        new ideas and prototypes in various domains.
      </p>
      <img height="400px" src="~/assets/about.png" />
    </CFlex>
  </ContainerVue>
</template>
<script>
import { CFlex } from '@chakra-ui/vue'
import ContainerVue from './Container.vue'
import HeadingVue from './HeadingComponent.vue'
export default {
  components: {
    HeadingVue,
    CFlex,
    ContainerVue,
  },
}
</script>
<style lang="scss" scoped>
.text {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: justify;
  letter-spacing: 0.02em;
  padding-top: 35px;
  color: #ffffff;
}
</style>

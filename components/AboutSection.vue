<template>
  <ContainerVue id="about" name="about">
    <HeadingVue front="About Us" back="ABOUT US" />
    <CFlex
      align="center"
      :px="{ base: '1rem', sm: '50px' }"
      :gap="{ base: '1rem', sm: '100px' }"
      :direction="{ base: 'column-reverse', lg: 'row' }"
      mt="3rem"
    >
      <p class="text">
        Hack This Fall began with a mindset of encouraging new hackers to build
        unique projects regardless of the tech or field; the only focus was to
        create something meaningful and enjoy building while also solving the
        shared struggles of our surroundings.
        <br /><br />
        The community encourages
        <span style="font-weight: 600; color: #f46d24">Inclusion</span> and
        <span style="font-weight: 600; color: #f46d24">Diversity</span> at its
        core and has various events and happenings around the same as well to
        keep hackers engaged in a meaningful way. All in all, we want hackers to
        not just participate but
        <span style="font-weight: 600; color: #f46d24"
          >experience a hackathon</span
        >
        in a true sense.
      </p>
      <img src="~/assets/about.png" />
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
#about {
  margin-top: 4rem;
  padding-top: 4rem;

  @include respond-below(xs) {
    padding-top: 4rem;
  }
}

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

  @include respond-below(xs) {
    font-size: 0.75rem;
    line-height: 1.125rem;
  }
}

img {
  width: 31rem;
  max-width: 50%;

  @include respond-below(md) {
    max-width: 70vw;
  }
}
</style>

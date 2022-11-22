<template>
  <ContainerVue id="sponsors" name="sponsors">
    <HeadingVue front="Past Sponsors" back="SPONSORS" />
    <CFlex :mx="{ base: '1rem', sm: '50px' }" justify="center">
      <CGrid
        :gap="{ base: '1rem', sm: '50px' }"
        :template-columns="{ base: 'repeat(2, 1fr)', sm: 'repeat(6, 1fr)' }"
      >
        <CGridItem
          v-for="(sponsor, index) in sponsors"
          :key="index"
          class="sponsor"
          borderRadius="30px"
        >
          <img :src="sponsor.image" />
        </CGridItem>
      </CGrid>
    </CFlex>
  </ContainerVue>
</template>
<script>
import { CFlex, CGrid, CGridItem } from '@chakra-ui/vue'
import HeadingVue from './HeadingComponent.vue'
import ContainerVue from './Container.vue'

export default {
  components: {
    HeadingVue,
    ContainerVue,
    CFlex,
    CGrid,
    CGridItem,
  },
  data() {
    return {
      sponsors: [
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
        {
          image: require('~/assets/sponsors/mlh.png'),
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.sponsor {
  background: linear-gradient(
    180deg,
    #142137 0%,
    #0b121f 99.99%,
    rgba(20, 33, 55, 0) 100%
  );
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 35px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(180deg, #0b3b52 3.72%, #0b121f 141.1%);
  }

  .img {
    width: 55%;
  }
}
</style>

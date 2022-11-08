<template>
  <ContainerVue id="tracks" name="tracks">
    <HeadingVue front="Tracks" back="TRACKS" />
    <CFlex px="50px" pt="20px" justify="center">
      <CGrid
        gap="50px"
        template-rows="repeat(2, 1fr)"
        template-columns="repeat(4, 1fr)"
      >
        <CGridItem
          v-for="(track, index) in tracks"
          :key="index"
          class="track"
          :colSpan="track.span ? track.span : '1'"
          px="30px"
          py="30px"
        >
          <img :height="track.height" :src="track.icon" />
          <p>{{ track.name }}</p>
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
    CGrid,
    CFlex,
    CGridItem,
    ContainerVue,
  },
  data() {
    return {
      tracks: [
        {
          name: 'Blockchain & Crypto',
          icon: require('~/assets/tracks/blockchain.png'),
          height: '120px',
        },
        {
          name: 'Internet of Things',
          icon: require('~/assets/tracks/iot.png'),
          height: '110px',
        },
        {
          name: 'Augmented and Virtual Reality',
          icon: require('~/assets/tracks/ar.png'),
          height: '120px',
        },
        {
          name: 'AI & Machine Learning',
          icon: require('~/assets/tracks/ml.png'),
          height: '110px',
        },
        {
          name: 'Cloud & Devops',
          icon: require('~/assets/tracks/cloud.png'),
          height: '70px',
        },
        {
          name: 'Open Innovation',
          icon: require('~/assets/tracks/open.png'),
          height: '100px',
          span: '2',
        },
        {
          name: 'Security & Audits',
          icon: require('~/assets/tracks/security.png'),
          height: '110px',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.track {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: flex-end;
  background: linear-gradient(
    180deg,
    #142137 0%,
    #0b121f 99.99%,
    rgba(20, 33, 55, 0) 100%
  );
  border-radius: 15px;

  img {
    margin-bottom: 25px;
  }

  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #ffffff;
  }
}
</style>

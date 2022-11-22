<template>
  <ContainerVue id="tracks" name="tracks">
    <HeadingVue front="Tracks" back="TRACKS" />
    <CFlex :px="{ base: '1rem', sm: '50px' }" pt="20px" justify="center">
      <CGrid
        :gap="{ base: '0.725rm', sm: '50px' }"
        :template-rows="{ base: 'repeat(4, 1fr)', sm: 'repeat(2, 1fr)' }"
        :template-columns="{ base: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }"
      >
        <CGridItem
          v-for="(track, index) in tracks"
          :key="index"
          class="track"
          :colSpan="track.span ? track.span : '1'"
          :px="{ base: '1rem', sm: '30px' }"
          :py="{ base: '1rem', sm: '30px' }"
          :rowStart="{ base: track.mobileRow, sm: track.desktopRow }"
          :colStart="{ base: track.mobileCol, sm: track.desktopCol }"
        >
          <img width="50px" :src="track.icon" />
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
          height: '100px',
          mobileRow: '1',
          mobileCol: '1',
          desktopRow: '1',
          desktopCol: '1',
        },
        {
          name: 'Internet of Things',
          icon: require('~/assets/tracks/iot.png'),
          height: '90px',
          mobileRow: '2',
          mobileCol: '2',
          desktopRow: '1',
          desktopCol: '2',
        },
        {
          name: 'Augmented and Virtual Reality',
          icon: require('~/assets/tracks/ar.png'),
          height: '100px',
          mobileRow: '2',
          mobileCol: '1',
          desktopRow: '1',
          desktopCol: '3',
        },
        {
          name: 'AI & Machine Learning',
          icon: require('~/assets/tracks/ml.png'),
          height: '90px',
          mobileRow: '4',
          mobileCol: '2',
          desktopRow: '1',
          desktopCol: '4',
        },
        {
          name: 'Cloud & Devops',
          icon: require('~/assets/tracks/cloud.png'),
          height: '50px',
          mobileRow: '1',
          mobileCol: '2',
          desktopRow: '2',
          desktopCol: '1',
        },
        {
          name: 'Open Innovation',
          icon: require('~/assets/tracks/open.png'),
          height: '90px',
          span: '2',
          mobileRow: '3',
          mobileCol: '1',
          desktopRow: '2',
          desktopCol: '2',
        },
        {
          name: 'Security & Audits',
          icon: require('~/assets/tracks/security.png'),
          height: '90px',
          mobileRow: '4',
          mobileCol: '1',
          desktopRow: '2',
          desktopCol: '4',
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

    @include respond-below(mobile) {
      font-size: 1rem;
    }
  }
}
</style>

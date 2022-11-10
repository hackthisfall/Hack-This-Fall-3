<template>
  <ContainerVue id="speakers" name="speakers">
    <HeadingVue front="Past Speakers" back="SPEAKERS" />
    <CFlex mx="50px">
      <CGrid gap="50px" template-columns="repeat(4, 1fr)">
        <CGridItem
          v-for="(speaker, index) in speakers"
          :key="index"
          class="speaker"
          borderRadius="30px"
        >
          <div class="overlay"></div>
          <img :src="speaker.image" width="100%" />
          <div class="text">
            <h2>{{ speaker.name }}</h2>
            <p>{{ speaker.description }}</p>
          </div>
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
      speakers: [
        {
          name: 'Shambhavi Mishra',
          description: 'well-rounded famous web publisher',
          image: require('~/assets/speakers/shambhavi.png'),
        },
        {
          name: 'Shambhavi Mishra',
          description: 'well-rounded famous web publisher',
          image: require('~/assets/speakers/shambhavi.png'),
        },
        {
          name: 'Shambhavi Mishra',
          description: 'well-rounded famous web publisher',
          image: require('~/assets/speakers/shambhavi.png'),
        },
        {
          name: 'Shambhavi Mishra',
          description: 'well-rounded famous web publisher',
          image: require('~/assets/speakers/shambhavi.png'),
        },
        {
          name: 'Shambhavi Mishra',
          description: 'well-rounded famous web publisher',
          image: require('~/assets/speakers/shambhavi.png'),
        },
        {
          name: 'Shambhavi Mishra',
          description: 'well-rounded famous web publisher',
          image: require('~/assets/speakers/shambhavi.png'),
        },
        {
          name: 'Shambhavi Mishra',
          description: 'well-rounded famous web publisher',
          image: require('~/assets/speakers/shambhavi.png'),
        },
        {
          name: 'Shambhavi Mishra',
          description: 'well-rounded famous web publisher',
          image: require('~/assets/speakers/shambhavi.png'),
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.speaker {
  position: relative;
  overflow: hidden;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    border-radius: 30px;
    background: linear-gradient(
      180deg,
      rgba(8, 16, 29, 0) 55.73%,
      rgba(8, 16, 29, 0.6) 64.58%,
      #08101d 100%
    );
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;

    &:hover {
      transform: translateY(30%);
    }

    &:hover ~ .text {
      transform: translateY(10px);
    }
  }

  .text {
    position: absolute;
    width: 100%;
    z-index: 3;
    display: flex;
    flex-direction: column;
    background: transparent;
    bottom: 0;
    justify-content: center;
    align-items: center;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;

    h2 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      color: #fefaf4;
      bottom: 10px;
      left: 30px;
    }

    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      color: #fefaf4;
      margin-bottom: 30px;
    }
  }
}
</style>

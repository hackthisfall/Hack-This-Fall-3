<template>
  <ContainerVue id="narrative" name="narrative">
    <HeadingVue front="Narratives" back="PREVIOUS" />
    <CFlex :mx="{ base: '0rem', sm: '50px' }" justify="center">
      <CGrid
        :gap="{ base: '1rem', sm: '50px' }"
        :template-columns="{ base: 'repeat(1, 1fr)', sm: 'repeat(4, 1fr)' }"
      >
        <CGridItem
          v-for="(narrative, index) in narratives"
          :key="index"
          class="narrative"
        >
          <div class="image">
            <img class="narrator" :src="narrative.image" />
            <img class="play" src="~/assets/play-icon.png" />
          </div>
          <div class="text">
            <h2>{{ narrative.name }}</h2>
            <p>{{ narrative.description }}</p>
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
      narratives: [
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
.narrative {
  border-radius: 40px;
  background: linear-gradient(
    180deg,
    #142137 0%,
    #0b121f 99.99%,
    rgba(20, 33, 55, 0) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(180deg, #0b3b52 3.72%, #0b121f 141.1%);

    .image {
      border: 3px solid #fefaf4;

      .play {
        opacity: 1;
      }
    }
  }

  .image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid transparent;
    position: relative;

    .narrator {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    .play {
      position: absolute;
      width: 40px;
      height: 40px;
      bottom: -18px;
      z-index: 3;
      right: calc(50% - 20px);
      opacity: 0.5;
    }
  }

  .text {
    margin-top: 20px;
    h2 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 28px;
      color: #fefaf4;
      text-align: center;
    }

    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 0.7rem;
      line-height: 19px;
      text-align: center;
      color: #fefaf4;
      text-align: center;
    }
  }
}
</style>

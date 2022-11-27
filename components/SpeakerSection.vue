<template>
  <ContainerVue id="speakers" name="speakers">
    <HeadingVue front="Past Speakers" back="SPEAKERS" />
    <CFlex :mx="{ base: '0rem', sm: '50px' }" mt="5rem" justify="center">
      <CGrid
        :gap="{ base: '0.75rem', sm: '3rem' }"
        :template-columns="{ base: 'repeat(2, 1fr)', sm: 'repeat(5, 1fr)' }"
      >
        <CGridItem
          v-for="(speaker, index) in speakers"
          :key="index"
          class="speaker"
        >
          <a :href="speaker.url" target="_blank">
            <div class="overlay"></div>
            <img :src="speaker.picture" width="100%" />
            <div class="text">
              <h2>{{ speaker.name }}</h2>
              <p>{{ speaker.description }}</p>
            </div>
          </a>
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
          description: 'Founder, EddieHub',
          name: 'Eddie Jaoude',
          url: 'https://twitter.com/eddiejaoude/',
          picture: require('~/assets/speakers/eddie.jpg'),
        },
        {
          description: 'Software Engineer, Microsoft',
          name: 'Khushboo Verma',
          url: 'https://twitter.com/khushbooverma_',
          picture: require('~/assets/speakers/khushboo.jpg'),
        },
        {
          description: 'DevRel Engineer, Storyblok',
          name: 'Facundo Giuliani',
          url: 'https://twitter.com/facundozurdo',
          picture: require('~/assets/speakers/facundo.jpg'),
        },
        {
          description: 'Senior Community Engineer, Gitpod',
          name: 'Pauline Narvas',
          url: 'https://twitter.com/paulienuh',
          picture: require('~/assets/speakers/pauline.jpg'),
        },
        {
          description: 'Developer Relations Lead, Strapi',
          name: 'Daniel Phiri',
          url: 'https://twitter.com/malgamves',
          picture: require('~/assets/speakers/daniel.jpg'),
        },
        {
          description: 'CEO, Agoric',
          name: 'Dean Tribble',
          url: 'https://twitter.com/deantribble',
          picture: require('~/assets/speakers/dean.jpeg'),
        },
        {
          description: 'Software Engineer, Agoric',
          name: 'Kate Sills',
          url: 'https://twitter.com/kate_sills',
          picture: require('~/assets/speakers/kate.jpeg'),
        },
        {
          description: 'Chief Business Officer, Unschool',
          name: 'Narayanan S',
          url: 'https://www.linkedin.com/in/chalkmeout/',
          picture: require('~/assets/speakers/narayanan.png'),
        },
        {
          description: 'Engineer,Web DataWorks',
          name: 'Nishu Goel',
          url: 'https://twitter.com/TheNishuGoel',
          picture: require('~/assets/speakers/nishu.png'),
        },
        {
          description: 'Associate Solution Architect, Red Hat',
          name: 'Gourav Sharma',
          url: 'https://twitter.com/rhcasharma',
          picture: require('~/assets/speakers/gourav.jpg'),
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
#speakers {
  margin-top: 4rem;
  padding-top: 4rem;

  @include respond-below(mobile) {
    padding-top: 4rem;
  }
}

.speaker {
  position: relative;
  overflow: hidden;
  border-radius: 1.75rem;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(
      180deg,
      rgba(8, 16, 29, 0) 67.73%,
      rgba(8, 16, 29, 0.6) 76.58%,
      #08101d 100%
    );
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
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
      font-size: 1rem;
      line-height: 28px;
      color: #fefaf4;
      bottom: 10px;
      left: 30px;
    }

    p {
      font-family: 'Poppins';
      font-style: normal;
      text-align: center;
      font-weight: 400;
      font-size: 0.6rem;
      line-height: 19px;
      color: #fefaf4;
      margin-bottom: 0.75rem;
    }
  }

  &:hover {
    .overlay {
      transform: translateY(35%);
    }

    .text {
      transform: translateY(10px);
      -webkit-transform: translateY(10px);
      -o-transform: translateY(10px);
      -moz-transform: translateY(10px);
    }
  }
}
</style>

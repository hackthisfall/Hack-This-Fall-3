<template>
  <ContainerVue id="speakers" name="speakers">
    <HeadingVue front="Past Speakers" back="SPEAKERS" />
    <CFlex :mx="{ base: '0rem', sm: '50px' }" justify="center">
      <CGrid
        :gap="{ base: '0.75rem', sm: '3rem' }"
        :template-columns="{ base: 'repeat(1, 1fr)', sm: 'repeat(4, 1fr)' }"
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
          description: 'Lead-Engineering, SAWO Labs',
          name: 'Soumaya Ranjan',
          url: 'https://www.linkedin.com/in/soumayaranjan/',
          picture: require('~/assets/speakers/soumaya.jpeg'),
        },
        {
          description: 'Curriculum Manager, InspiritAI',
          name: 'Amanda Somvilay',
          url: 'https://twitter.com/hackthisfall',
          picture: require('~/assets/speakers/amanda.png'),
        },
        {
          description: 'Developer Relations Engineer, Storyblok',
          name: 'Facundo Giuliani',
          url: 'https://twitter.com/facundozurdo',
          picture: require('~/assets/speakers/facundo.jpg'),
        },
        {
          description: 'Head of Developer Relations, Storyblok',
          name: 'Samuel Snopko',
          url: 'https://twitter.com/samuelsnopko',
          picture: require('~/assets/speakers/samuel.jpg'),
        },
        {
          description: 'Product Manager, Agoric',
          name: 'Rowland Graus',
          url: 'https://twitter.com/rowlandgraus',
          picture: require('~/assets/speakers/rowland.jpeg'),
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
          description: 'COO, Filebase',
          name: 'Zac Cohen',
          url: 'https://www.linkedin.com/in/zaccohen427/',
          picture: require('~/assets/speakers/zac.jpg'),
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
  border-radius: 1.75rem;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
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
      font-size: 0.75rem;
      line-height: 19px;
      color: #fefaf4;
      margin-bottom: 30px;
    }
  }

  &:hover {
    .overlay {
      transform: translateY(30%);
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

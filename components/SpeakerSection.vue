<template>
  <ContainerVue id="speakers" name="speakers">
    <HeadingVue front="Speakers, Mentors and Judges" back="PEOPLE" />
    <CFlex :mx="{ base: '0.5rem', sm: '50px' }" mt="5rem" justify="center">
      <CGrid
        :gap="{ base: '0.75rem', sm: '3rem' }"
        :template-columns="{
          base: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
          xl: 'repeat(5, 1fr)',
        }"
      >
        <CGridItem
          v-for="(speaker, index) in speakers"
          :key="index"
          class="speaker"
        >
          <a :href="speaker.url" target="_blank">
            <div class="overlay"></div>
            <img :src="speaker.image" width="100%" height="auto" />
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
          description: 'Developer Advocate, Postman',
          name: 'Ali Mustufa',
          url: 'https://twitter.com/ialimustufa',
          image: require('~/assets/speakers/ali.jpg'),
        },
        {
          description: 'Developer Advocate, ApyHub',
          name: 'Sohail Pathan',
          url: 'https://twitter.com/iamspathan',
          image: require('~/assets/speakers/sohail.jpg'),
        },
        {
          description: 'Technical Analyst and Consultant, 5ire',
          name: 'Aravind Makkam',
          url: 'https://www.5ire.org',
          image: require('~/assets/speakers/aravind.jpeg'),
        },
        {
          description: 'Engineer, Web DataWorks',
          name: 'Nishu Goel',
          url: 'https://twitter.com/TheNishuGoel',
          picture: require('~/assets/speakers/nishu.png'),
        },
        {
          description: 'Developer Relations Lead, Strapi',
          name: 'Daniel Phiri',
          url: 'https://twitter.com/malgamves',
          picture: require('~/assets/speakers/daniel.jpg'),
        },
        {
          description: 'DevRel Engineer, Storyblok',
          name: 'Facundo Giuliani',
          url: 'https://twitter.com/facundozurdo',
          picture: require('~/assets/speakers/facundo.jpg'),
        },
        {
          description: 'Founder, EddieHub',
          name: 'Eddie Jaoude',
          url: 'https://twitter.com/eddiejaoude/',
          picture: require('~/assets/speakers/eddie.jpg'),
        },
        {
          description: 'Software Engineer, Appwrite',
          name: 'Khushboo Verma',
          url: 'https://twitter.com/khushbooverma_',
          picture: require('~/assets/speakers/khushboo.jpg'),
        },
        {
          description: 'Head of Community, Gitpod',
          name: 'Pauline Narvas',
          url: 'https://twitter.com/paulienuh',
          picture: require('~/assets/speakers/pauline.jpg'),
        },
        {
          description: 'Software Engineer, Google',
          name: 'Sashrika Kaur',
          url: 'https://twitter.com/sashrikakaur',
          picture: require('~/assets/speakers/sashrika.jpg'),
        },
      ],
    }
  },
  mounted() {
    this.speakers.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
  },
}
</script>
<style lang="scss" scoped>
#speakers {
  margin-top: 4rem;
  padding-top: 4rem;

  @include respond-below(xs) {
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
      margin-bottom: 0.5rem;
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

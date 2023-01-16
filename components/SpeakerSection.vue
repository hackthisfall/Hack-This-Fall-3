<template>
  <ContainerVue id="speakers" name="speakers">
    <HeadingVue front="Mentors" back="PEOPLE" />
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
          description: 'Technical Customer Success Manager, Edgio',
          name: 'Rishi Raj Jain',
          url: 'https://twitter.com/rishi_raj_jain_',
          image: require('~/assets/mentors/rishi.jpeg'),
        },
        {
          description: 'Full Stack Developer, Ironforge',
          name: 'Dhiraj Chauhan',
          url: 'https://twitter.com/cdhiraj40',
          image: require('~/assets/mentors/dhiraj.jpeg'),
        },
        {
          description: 'Ambassador, Kubesimplify Community',
          name: 'Avinesh Tripathi',
          url: 'https://twitter.com/Avinesh__T',
          image: require('~/assets/mentors/avinesh.jpeg'),
        },
        {
          description: 'Software Engineer, Capgemini India',
          name: 'Aryan Kaushik',
          url: 'https://twitter.com/aryankaushik21',
          image: require('~/assets/mentors/aryan.jpg'),
        },
        {
          description: 'SDE, Posist',
          name: 'Ghulam Yazdani',
          url: 'https://twitter.com/iamyazreza',
          image: require('~/assets/mentors/ghulam.jpeg'),
        },
        {
          description: 'Blockchain Protocol Engineer, Polygon',
          name: 'Manav Darji',
          url: 'https://twitter.com/manav24_',
          image: require('~/assets/mentors/manav.jpg'),
        },
        {
          description: 'Developer Advocate, ChiselStrike',
          name: 'Swastika Yadav',
          url: 'https://twitter.com/swastika0015',
          image: require('~/assets/mentors/swastika.png'),
        },
        {
          description: 'Developer Advocate, 100ms',
          name: 'Aditya Thakur',
          url: 'https://twitter.com/adityathakurxd',
          image: require('~/assets/mentors/aditya.jpg'),
        },
        {
          description: 'Developer, TensorFlow User Group Mumbai',
          name: 'Shubham Sah',
          url: 'https://twitter.com/ishubhamsah',
          image: require('~/assets/mentors/shubham.jpg'),
        },
        {
          description: 'Lead DevRel India region, Showwcase',
          name: 'Insha Ramin',
          url: 'https://twitter.com/Insharamin',
          image: require('~/assets/mentors/insha.jpg'),
        },
        {
          description: 'Co-founder, Version Labs',
          name: 'Daxeel Soni',
          url: 'https://twitter.com/daxeelsoni',
          image: require('~/assets/mentors/daxeel.jpg'),
        },
        {
          description: 'CTO, Pedals Up',
          name: 'Harsh Shah',
          url: 'https://twitter.com/harshcrop',
          image: require('~/assets/mentors/harsh.jpg'),
        },
        {
          description: 'Jr. Staff AI Engineer, Detect Technologies',
          name: 'Bhargav Patel',
          url: 'https://www.linkedin.com/in/bhargav-p-patel/',
          image: require('~/assets/mentors/bhargav.jpg'),
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

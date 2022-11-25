<template>
  <ContainerVue id="s3-team" name="s3-team">
    <HeadingVue front="Previous Seasons" back="Team" />
    <CFlex :mx="{ base: '0rem', sm: '50px' }" justify="center">
      <CGrid
        :gap="{ base: '1rem', sm: '50px' }"
        :template-columns="{ base: 'repeat(1, 1fr)', sm: 'repeat(4, 1fr)' }"
      >
        <CGridItem v-for="(person, index) in people" :key="index">
          <a :href="person.url" class="narrative animate-ease">
            <div class="image animate-ease">
              <img class="narrator" :src="person.image" />
            </div>
            <div class="text">
              <h2>{{ person.name }}</h2>
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
      people: [
        {
          name: 'Siddharth Dayalwal',
          url: 'https://twitter.com/siddharth_hacks',
          image: require('~/assets/team/siddharth.png'),
        },
        {
          name: 'Sahil Sen',
          url: 'https://www.linkedin.com/in/sahil-sen-528647ba/',
          image: require('~/assets/team/sahilsen.webp'),
        },
        {
          name: 'Paras Gupta',
          url: 'https://www.linkedin.com/in/parasg1999/',
          image: require('~/assets/team/paras.jpeg'),
        },
        {
          name: 'Ojasvi Khurana',
          url: 'https://www.linkedin.com/in/ojasvikhurana/',
          image: require('~/assets/team/ojasvi.jpeg'),
        },
        {
          name: 'Apoorv Dwivedi',
          url: 'https://www.linkedin.com/in/apoorvdwi',
          image: require('~/assets/team/apoorv.jpg'),
        },
        {
          name: 'Vaibhav Toshniwal',
          url: 'https://www.linkedin.com/in/vaibhav-vinay-toshniwal-252ba8187/',
          image: require('~/assets/team/vaibhav.jpeg'),
        },
        {
          name: "Dennis D'mello",
          url: 'https://www.linkedin.com/in/dendemello/',
          image: require('~/assets/team/dennis.jpeg'),
        },
        {
          name: 'Sahil Bhatiya',
          url: 'https://www.linkedin.com/in/sahil-bhatiya-73790719a/',
          image: require('~/assets/team/sahil.jpeg'),
        },
        {
          name: 'Aaishika S Bhattacharya',
          url: 'https://www.linkedin.com/in/aaishika/',
          image: require('~/assets/team/aaishika.png'),
        },
        {
          name: 'Rishabh Bansal',
          url: 'https://www.linkedin.com/in/rishabhbansal97',
          image: require('~/assets/team/rishabh.jpeg'),
        },

        {
          name: 'Dhvanan Kotecha',
          url: 'https://www.linkedin.com/in/dkots111/',
          image: require('~/assets/team/dhvanan.webp'),
        },
        {
          name: 'Naivedh Shah',
          url: 'https://www.linkedin.com/in/naivedh-shah/',
          image: require('~/assets/team/naivedh.webp'),
        },
        {
          name: 'Abhishek Doshi',
          url: 'https://www.linkedin.com/in/abhishek-doshi-520983199/',
          image: require('~/assets/team/abhi.webp'),
        },
        {
          name: 'Tushar',
          url: 'https://www.linkedin.com/in/tushar-ba401a136/',
          image: require('~/assets/team/tushar.webp'),
        },
        {
          name: 'Tirthak Patel',
          url: 'https://www.linkedin.com/in/tirthakpatel/',
          image: require('~/assets/team/tirthak.webp'),
        },
        {
          name: 'Perin Shah',
          url: 'https://www.linkedin.com/in/shahperin/',
          image: require('~/assets/team/perin.webp'),
        },
        {
          name: 'Sagar Parmar',
          url: 'https://www.linkedin.com/in/sagarparmar881/',
          image: require('~/assets/team/sagar.jpeg'),
        },
      ],
    }
  },
  mounted() {
    this.people.sort((a, b) => {
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

  &:hover {
    background: linear-gradient(180deg, #0b3b52 3.72%, #0b121f 141.1%);

    .image {
      border: 3px solid #fefaf4;
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
  }
}
</style>

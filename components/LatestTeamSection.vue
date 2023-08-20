<template>
  <ContainerVue id="s4-team" name="s4-team">
    <HeadingVue front="Season 4" back="TEAM" />
    <CBox
      :mx="{ base: '0rem', sm: '50px' }"
      justify="center"
      :mt="{ base: '2rem', sm: '5rem' }"
    >
      <CGrid
        :gap="{ base: '1rem', sm: '3rem' }"
        :template-columns="{
          base: 'repeat(2, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)',
        }"
      >
        <CGridItem v-for="(person, index) in people" :key="index">
          <a :href="person.url" class="narrative animate-ease" target="_blank">
            <div class="image animate-ease">
              <img class="narrator" :src="person.image" />
            </div>
            <div class="text">
              <h2>{{ person.name }}</h2>
            </div>
          </a>
        </CGridItem>
      </CGrid>
    </CBox>
  </ContainerVue>
</template>

<script>
import { CBox, CGrid, CGridItem } from '@chakra-ui/vue'
import HeadingVue from './HeadingComponent.vue'
import ContainerVue from './Container.vue'
export default {
  components: {
    HeadingVue,
    ContainerVue,
    CBox,
    CGrid,
    CGridItem,
  },
  data() {
    return {
      people: [
        {
          name: 'Siddharth Dayalwal',
          url: 'https://twitter.com/siddharth_hacks',
          image: require('~/assets/team/siddharth.jpg'),
        },
        {
          name: 'Sahil Sen',
          url: 'https://www.linkedin.com/in/sahil-sen-528647ba/',
          image: require('~/assets/team/sahilsen.webp'),
        },
        {
          name: "Dennis D'mello",
          url: 'https://www.linkedin.com/in/dendemello/',
          image: require('~/assets/team/dennis.jpeg'),
        },
        {
          name: 'Paras Gupta',
          url: 'https://twitter.com/parasg1999/',
          image: require('~/assets/team/paras.jpeg'),
        },
        {
          name: 'Vaibhav Toshniwal',
          url: 'https://www.linkedin.com/in/vaibhav-vinay-toshniwal-252ba8187/',
          image: require('~/assets/team/vaibhav.jpeg'),
        },
        {
          name: 'Apoorv Dwivedi',
          url: 'https://www.linkedin.com/in/apoorvdwi',
          image: require('~/assets/team/apoorv.jpg'),
        },
        {
          name: 'Shitiz Aggarwal',
          url: 'https://twitter.com/Shitiz_Agg',
          image: require('~/assets/team/shitiz.jpg'),
        },
        {
          name: 'Rohan Kambli',
          url: 'https://twitter.com/rohannrk',
          image: require('~/assets/team/rohan.jpg'),
        },
        {
          name: 'Priti Priya',
          url: 'https://twitter.com/pritisinghhhh',
          image: require('~/assets/team/priti.jpeg'),
        },
        {
          name: 'Kriyanshi Shah',
          url: 'https://twitter.com/ShahKriyanshi',
          image: require('~/assets/team/kriyanshi.jpg'),
        },
        {
          name: 'Vedant Kakde',
          url: 'https://twitter.com/vedantstwt',
          image: require('~/assets/team/vedant.png'),
        },
        {
          name: 'Ali Mustufa Shaikh',
          url: 'https://twitter.com/ialimustufa',
          image: require('~/assets/speakers/ali.jpg'),
        },
        {
          name: 'Devanshi Pandya',
          url: 'https://twitter.com/DevanshiPandy11',
          image: require('~/assets/team/devanshi.jpeg'),
        },
        {
          name: 'Sakshi Hardwani',
          url: 'https://www.linkedin.com/in/sakshi-hardwani/',
          image: require('~/assets/team/sakshi.jpeg'),
        },
        {
          name: 'Toukir Khan',
          url: 'https://twitter.com/_toukirkhan_',
          image: require('~/assets/team/toukir.jpeg'),
        },
        {
          name: 'Vishwa Mehta',
          url: 'https://twitter.com/vishwamehta30/',
          image: require('~/assets/team/vishwa.jpeg'),
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
  justify-content: flex-start;
  height: 100%;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
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

  @include respond-below(xs) {
    padding: 1rem;
    .image {
      width: 100px;
      height: 100px;
    }

    .text {
      h2 {
        font-size: 1rem;
        line-height: 1.2rem;
      }

      p {
        font-size: 0.6rem;
        line-height: 19px;
      }
    }
  }
}
</style>

<template>
  <ContainerVue id="s3-team" name="s3-team">
    <HeadingVue front="Previous Seasons" back="TEAM" />
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
          name: 'Ojasvi Khurana',
          url: 'https://www.linkedin.com/in/ojasvikhurana/',
          image: require('~/assets/team/ojasvi.jpeg'),
        },
        {
          name: 'Sahil Bhatiya',
          url: 'https://www.linkedin.com/in/sahil-bhatiya-73790719a/',
          image: require('~/assets/team/sahil.jpeg'),
        },
        {
          name: 'Aaishika',
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
#s3-team {
  margin-top: 4rem;
}

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

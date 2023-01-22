<template>
  <ContainerVue id="narrative" name="narrative">
    <HeadingVue front="Narratives" back="PREVIOUS" />
    <CBox :mx="{ base: '0rem', sm: '50px' }" mt="5rem">
      <CGrid
        :gap="{ base: '1rem', sm: '50px' }"
        :template-columns="{
          base: 'repeat(2, 1fr)',
          sm: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)',
        }"
      >
        <CGridItem v-for="(narrative, index) in narratives" :key="index">
          <a
            :href="narrative.url"
            class="narrative animate-ease"
            target="_blank"
          >
            <div class="image animate-ease">
              <img class="narrator" :src="narrative.image" />
              <img class="play animate-ease" src="~/assets/play-icon.png" />
            </div>
            <div class="text">
              <h2>{{ narrative.name }}</h2>
              <p>{{ narrative.description }}</p>
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
    CGrid,
    CGridItem,
    CBox,
  },
  data() {
    return {
      narratives: [
        {
          name: 'Abel Mathew',
          description: 'Speaker & Judge',
          image: require('~/assets/narratives/abel.jpg'),
          url: 'https://www.youtube.com/watch?v=-qTyl6XexM4',
        },
        {
          name: 'Ashwin Uppala',
          description: 'Mentor',
          image: require('~/assets/narratives/ashwin.jpg'),
          url: 'https://www.youtube.com/watch?v=SlQquXE1ymo',
        },
        {
          name: 'Akanksha Bhasin',
          description: 'Speaker',
          image: require('~/assets/narratives/akanksha.jpeg'),
          url: 'https://www.youtube.com/watch?v=bQFSG6AYdnc',
        },
        {
          name: 'Vaishnavi Dwivedi',
          description: 'Speaker',
          image: require('~/assets/narratives/vaishnavi.jpg'),
          url: 'https://www.youtube.com/watch?v=UGAbOxu-PO8',
        },
        {
          name: 'Prince Canuma',
          description: 'Mentor',
          image: require('~/assets/narratives/prince.jpeg'),
          url: 'https://www.youtube.com/watch?v=591aJpAkN7M',
        },
        {
          name: 'Gita Alekhya Paul',
          description: 'Winner',
          image: require('~/assets/narratives/alekhya.jpg'),
          url: 'https://www.youtube.com/watch?v=wJsQ_1AWZhA',
        },
        {
          name: 'Aditya Oberai',
          description: 'Mentor',
          image: require('~/assets/narratives/aditya.jpg'),
          url: 'https://www.youtube.com/watch?v=PEQKT8iPxe4',
        },
        {
          name: 'Praveen Kumar',
          description: 'Mentor and Speaker',
          image: require('~/assets/narratives/praveen.png'),
          url: 'https://www.youtube.com/watch?v=r1KZf2kWX0o',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
#narrative {
  margin-top: 4rem;
  padding-top: 4rem;

  @include respond-below(xs) {
    padding-top: 4rem;
  }
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
  position: relative;
  flex-basis: 1;
  flex-grow: 1;

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

  @include respond-below(xs) {
    padding: 1rem;
    .image {
      width: 100px;
      height: 100px;

      .play {
        width: 30px;
        height: 30px;
        right: calc(50% - 15px);
      }
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

<template>
  <ContainerVue id="sponsors" name="sponsors">
    <HeadingVue front="Previous Partners" back="PARTNERS" />
    <CFlex
      :mx="{ base: '0.5rem', sm: '50px' }"
      mt="5rem"
      justify="center"
      align="start"
      direction="column"
    >
      <CFlex v-for="(tiers, index) in sponsors" :key="index" direction="column">
        <div
          :class="[
            'tier-heading',
            index === 0 ? null : 'space-up',
            tiers.category,
          ]"
        >
          <span> {{ tiers.category }}</span>
        </div>
        <CGrid
          :row-gap="{ base: '1rem', sm: '1.75rem' }"
          :column-gap="{
            base: '1rem',
            sm: '2rem',
            lg: '2rem',
            xl: '2rem',
            '2xl': '3.4rem',
          }"
          :grid-template-columns="{
            base: `repeat(2, 1fr)`,
            sm: `repeat(3,1fr)`,
            lg: `repeat(4,1fr)`,
            xl: `repeat(5,1fr)`,
          }"
        >
          <a
            v-for="(sponsor, index) in tiers.sponsors"
            :key="index"
            :href="sponsor.url"
            target="_blank"
            :class="['sponsor animate-ease', sponsor.specialClass]"
            borderRadius="30px"
          >
            <img :src="sponsor.image" />
          </a>
        </CGrid>
      </CFlex>
    </CFlex>
  </ContainerVue>
</template>
<script>
import { CFlex, CGrid } from '@chakra-ui/vue'
import HeadingVue from './HeadingComponent.vue'
import ContainerVue from './Container.vue'

export default {
  components: {
    HeadingVue,
    ContainerVue,
    CFlex,
    CGrid,
  },
  props: ['community'],
  data() {
    return {
      sponsors: [
        {
          sponsors: [
            {
              url: 'https://hackp.ac/appwrite',
              image: require('~/assets/sponsors/appwrite.svg'),
            },
            {
              url: 'https://bit.ly/apyhub-htf3',
              image: require('~/assets/sponsors/apyhub.svg'),
            },
            {
              url: 'https://balsamiq.com/',
              image: require('~/assets/sponsors/balsamiq.svg'),
            },
            {
              url: 'https://www.courier.com/',
              image: require('~/assets/sponsors/courier.svg'),
            },
            {
              url: 'https://dev.to/',
              image: require('~/assets/sponsors/dev-to.svg'),
            },
            {
              url: 'https://www.digitalocean.com/',
              image: require('~/assets/sponsors/digitalocean.svg'),
            },
            {
              url: 'https://bit.ly/htf3-sdp',
              image: require('~/assets/sponsors/github.svg'),
            },
            // google dev library
            {
              url: 'https://www.linode.com/',
              image: require('~/assets/sponsors/linode.svg'),
            },
            {
              url: 'https://bit.ly/htf4-logitech',
              image: require('~/assets/sponsors/logitech.png'),
            },
            {
              url: 'https://hackp.ac/microsoft',
              image: require('~/assets/sponsors/azure.png'),
            },
            {
              url: 'https://mlh.io/',
              image: require('~/assets/sponsors/mlh.svg'),
            },
            {
              url: 'https://hackp.ac/MongoDB',
              image: require('~/assets/sponsors/mongodb.svg'),
            },
            {
              url: 'https://bit.ly/htf4-neurelo',
              image: require('~/assets/sponsors/neurelo.png'),
            },
            {
              url: 'https://nhost.io/',
              image: require('~/assets/sponsors/nhost.svg'),
            },
            {
              url: 'https://bit.ly/htf4-con-repo',
              image: require('~/assets/sponsors/orkes.svg'),
            },
            {
              url: 'https://peerlist.io/',
              image: require('~/assets/sponsors/peerlist.png'),
            },
            {
              url: 'https://polygon.technology/',
              image: require('~/assets/sponsors/polygon.svg'),
            },
            {
              url: 'https://www.postman.com/',
              image: require('~/assets/sponsors/postman.svg'),
            },
            {
              url: 'https://www.quicknode.com/',
              image: require('~/assets/sponsors/quicknode.png'),
            },
            {
              url: 'https://replit.com/',
              image: require('~/assets/sponsors/replit.webp'),
            },
            {
              url: 'https://www.solana.com/',
              image: require('~/assets/sponsors/solana.svg'),
            },
            {
              url: 'https://www.storyblok.com/',
              image: require('~/assets/sponsors/storyblok.svg'),
            },
            {
              url: 'https://hackp.ac/Twilio',
              image: require('~/assets/sponsors/twilio.png'),
            },
            {
              url: 'https://www.getunleash.io/',
              image: require('~/assets/sponsors/unleash.svg'),
            },
            {
              url: 'https://bit.ly/htf4-vonage',
              image: require('~/assets/sponsors/vonage.svg'),
            },
            {
              url: 'https://bit.ly/zeeve-htf3',
              image: require('~/assets/sponsors/zeeve.svg'),
            },
            {
              url: 'https://5ire.org/',
              image: require('~/assets/sponsors/5ire.svg'),
            },

            {
              url: '#',
              image: require('~/assets/sponsors/more.svg'),
            },
          ],
        },
      ],
      partners: [
        {
          url: 'https://hackplus.io/',
          image: require('~/assets/sponsors/hackplus.svg'),
          text: 'Fiscal</br>Partner',
          name: 'hackplus',
        },
        {
          url: 'http://hackp.ac/mlh-StandOutStickers-hackathons',
          image: require('~/assets/sponsors/standout-stickers.svg'),
          text: 'Sticker</br>Partner',
          name: 'standout-stickers',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
#sponsors {
  margin-top: 4rem;
  padding-top: 4rem;

  @include respond-below(xs) {
    padding-top: 4rem;
  }

  .tier-heading {
    font-family: 'Poppins';
    color: white;
    display: flex;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    align-items: center;

    &.space-up {
      margin-top: 1.5rem;
    }

    &.Platinium {
      color: #e2806d;
    }

    &.Gold {
      color: #f5ef7b;
    }

    &.Silver {
      color: #97c1cc;
    }

    &.Bronze {
      color: #385e9c;
    }

    // img {
    //   width: 2rem;
    //   margin-right: 1rem;
    // }
  }

  .sponsor-button {
    align-self: center;
  }
}

.sponsor {
  background: linear-gradient(
    180deg,
    #142137 0%,
    #0b121f 99.99%,
    rgba(20, 33, 55, 0) 100%
  );
  height: 100px;
  min-width: 12rem;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: linear-gradient(180deg, #0b3b52 3.72%, #0b121f 141.1%);
  }

  img {
    max-width: 8rem;
    max-height: 4rem;
  }

  @include respond-below(sm) {
    height: 5rem;
    min-width: 8rem;
    padding: 0.5rem 0.75rem;

    img {
      max-width: 6rem;
      max-height: 3rem;
    }
  }

  &.Platinium {
    min-width: 20rem;

    img {
      max-width: 16rem;
      max-height: 8rem;
    }

    @include respond-below(sm) {
      min-width: 16rem;
      padding: 0.5rem 0.75rem;

      img {
        max-width: 12rem;
        max-height: 8rem;
      }
    }
  }

  &.Gold {
    min-width: 16rem;

    img {
      max-width: 10.66rem;
      max-height: 5.33rem;
    }

    @include respond-below(md) {
      min-width: 12rem;
      padding: 0.5rem 0.75rem;

      img {
        max-width: 8rem;
        max-height: 4rem;
      }
    }

    @include respond-below(sm) {
      height: 5rem;
      min-width: 8rem;
      padding: 0.5rem 0.75rem;

      img {
        max-width: 6rem;
        max-height: 3rem;
      }
    }
  }

  // &.Previous {
  //   min-width: 7rem;
  //   padding: 0.5rem;
  //   height: 50px;

  //   img {
  //     max-width: 4rem;
  //     max-height: 2rem;
  //   }

  //   @include respond-below(sm) {
  //     height: 2.5rem;
  //     min-width: 4rem;
  //     padding: 0.25rem 0.375rem;

  //     img {
  //       max-width: 3rem;
  //       max-height: 1.5rem;
  //     }

  //   }
  // }
}

.partner {
  background: linear-gradient(
    180deg,
    #142137 0%,
    #0b121f 99.99%,
    rgba(20, 33, 55, 0) 100%
  );
  height: 16rem;
  min-width: 16rem;
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #f46d24;
  font-weight: 400;
  font-family: 'Poppins';
  font-size: 1.5rem;
  line-height: 1.5rem;
  justify-content: space-between;

  span {
    margin-top: 1rem;
    justify-self: flex-end;
  }

  &:hover {
    background: linear-gradient(180deg, #0b3b52 3.72%, #0b121f 141.1%);
  }

  .image {
    flex-grow: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      align-self: center;
      justify-self: center;
      width: auto;
      height: auto;
      max-width: 12rem;
      max-height: 8rem;
    }
  }

  @include respond-below(md) {
    height: 12rem;
    min-width: 12rem;
    padding: 1rem 0.75rem;
    font-size: 1.2rem;
    line-height: 1.25rem;

    .image {
      img {
        max-width: 9rem;
        max-height: 4.5rem;
      }
    }
  }

  @include respond-below(sm) {
    height: 8rem;
    min-width: 8rem;
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
    line-height: 1rem;

    .image {
      img {
        max-width: 6rem;
        max-height: 4rem;
      }
    }
  }
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  // height: 55px;
  background: #d04d29;
  border: 2px solid #f46d24;
  box-shadow: 2px 2px 0px #f46d24;
  border-radius: 12.4124px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  color: white;
  margin-top: 4rem;

  &:hover {
    background: rgb(244, 109, 36);
  }

  @include respond-below(xs) {
    margin-top: 2rem;
    max-width: 70vw;
  }
}
</style>

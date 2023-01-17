<template>
  <ContainerVue id="sponsors" name="sponsors">
    <HeadingVue front="Season 3 Sponsors" back="SPONSORS" />
    <CFlex
      :mx="{ base: '1rem', sm: '50px' }"
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
            base: `repeat(2,1fr)`,
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
            :class="[
              'sponsor animate-ease',
              sponsor.specialClass,
              tiers.category,
            ]"
            borderRadius="30px"
          >
            <img :src="sponsor.image" :class="[tiers.category]" />
          </a>
        </CGrid>
      </CFlex>

      <div :class="['tier-heading', 'space-up']">
        <span>Featured Partners</span>
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
          lg: `repeat(3,1fr)`,
          xl: `repeat(4,1fr)`,
        }"
        wrap="wrap"
      >
        <a
          v-for="(sponsor, index) in partners"
          :key="index"
          :href="sponsor.url"
          target="_blank"
          :class="['partner animate-ease', sponsor.specialClass]"
          borderRadius="30px"
        >
          <div :class="['image', sponsor.name]">
            <img :src="sponsor.image" />
          </div>
          <span v-html="sponsor.text"></span>
        </a>
      </CGrid>

      <CFlex v-if="community" direction="column">
        <div :class="['tier-heading', 'space-up']">
          <span> Community Partners</span>
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
            base: `repeat(2,1fr)`,
            sm: `repeat(3,1fr)`,
            lg: `repeat(4,1fr)`,
            xl: `repeat(5,1fr)`,
          }"
        >
          <a
            v-for="(sponsor, index) in communityPartners"
            :key="index"
            :href="sponsor.url"
            target="_blank"
            :class="['sponsor animate-ease', sponsor.specialClass, 'Previous']"
            borderRadius="30px"
          >
            <img :src="sponsor.image" />
          </a>
        </CGrid>
      </CFlex>

      <NuxtLink v-if="!community" to="/sponsors" class="sponsor-button">
        <CButton class="button animate-ease">
          <span> View More! </span>
        </CButton>
      </NuxtLink>
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
          category: 'Platinium',
          sponsors: [
            {
              url: 'https://www.storyblok.com/',
              image: require('~/assets/sponsors/storyblok.svg'),
            },
          ],
        },
        {
          category: 'Gold',
          sponsors: [
            {
              url: 'https://bit.ly/htf3-sdp',
              image: require('~/assets/sponsors/github.svg'),
            },
            {
              url: 'https://apyhub.com/',
              image: require('~/assets/sponsors/apyhub.svg'),
            },
          ],
        },
        {
          category: 'Silver',
          sponsors: [
            {
              url: 'https://solana.com/',
              image: require('~/assets/sponsors/solana.svg'),
            },
            {
              url: 'https://deepfence.io/',
              image: require('~/assets/sponsors/deepfence.svg'),
            },
          ],
        },
        {
          category: 'Bronze',
          sponsors: [
            {
              url: 'https://www.postman.com/',
              image: require('~/assets/sponsors/postman.svg'),
            },
            {
              url: 'https://www.digitalocean.com/',
              image: require('~/assets/sponsors/digitalocean.svg'),
            },
            {
              url: 'https://scrollme.today/',
              image: require('~/assets/sponsors/scrollme.svg'),
            },
            {
              url: 'https://fossunited.org/',
              image: require('~/assets/sponsors/foss.svg'),
            },
          ],
        },
        {
          category: 'In-Kind Partners',
          sponsors: [
            {
              url: 'https://www.wolfram.com/',
              image: require('~/assets/sponsors/wolfram.png'),
            },
            {
              url: 'https://www.echo3d.com/',
              image: require('~/assets/sponsors/echoar.webp'),
            },
            {
              url: 'https://www.axure.com/',
              image: require('~/assets/sponsors/axure.svg'),
            },
            {
              url: 'https://www.taskade.com/',
              image: require('~/assets/sponsors/taskade.png'),
            },
            {
              url: 'https://gen.xyz/',
              image: require('~/assets/sponsors/xyz.svg'),
            },
            {
              url: 'https://artofproblemsolving.com/',
              image: require('~/assets/sponsors/aops.png'),
            },
            {
              url: 'https://nostarch.com/',
              image: require('~/assets/sponsors/no-starch.png'),
            },
          ],
        },
      ],
      partners: [
        {
          url: 'https://karnavatiuniversity.edu.in/',
          image: require('~/assets/sponsors/karnavati.svg'),
          text: 'Venue<br/>Partner',
          name: 'karnavati',
        },
        {
          url: 'https://karnavatiuniversity.edu.in/kiif/',
          image: require('~/assets/sponsors/kiif.svg'),
          text: 'Incubation</br>Partner',
          name: 'kiif',
        },
        {
          url: 'https://mlh.io/',
          image: require('~/assets/sponsors/mlh.svg'),
          text: 'Hackathon</br>Partner',
          name: 'mlh',
        },
        {
          url: 'https://peerlist.io/',
          image: require('~/assets/sponsors/peerlist.png'),
          text: 'Professional</br>Network Partner',
          name: 'peerlist',
        },
        {
          url: 'https://www.redbull.com/',
          image: require('~/assets/sponsors/redbull.svg'),
          text: 'Drinks</br>Partner',
          name: 'redbull',
        },
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
      communityPartners: [
        {
          image: require('~/assets/community/versiton.jpg'),
        },
        {
          image: require('~/assets/community/bios.svg'),
        },
        {
          image: require('~/assets/community/csg.png'),
        },
        {
          image: require('~/assets/community/datacode.png'),
        },
        {
          image: require('~/assets/community/rgpv.png'),
        },
        {
          image: require('~/assets/community/codefamily.png'),
        },
        {
          image: require('~/assets/community/nitr.png'),
        },
        {
          image: require('~/assets/community/supercontri.png'),
        },
        {
          image: require('~/assets/community/techbrewers.png'),
        },
        {
          image: require('~/assets/community/codedu.png'),
        },
        {
          image: require('~/assets/community/we-build-pune.png'),
        },
        {
          image: require('~/assets/community/oreodroiders.png'),
        },
        {
          image: require('~/assets/community/elevate.png'),
        },
        {
          image: require('~/assets/community/codesapiens.png'),
        },
        {
          image: require('~/assets/community/ppsavani.png'),
        },
        {
          image: require('~/assets/community/hackerabad.png'),
        },
        {
          image: require('~/assets/community/hack-for-code.png'),
        },
        {
          image: require('~/assets/community/cc.png'),
        },
        {
          image: require('~/assets/community/gdsc-jagdalpur.png'),
        },
        {
          image: require('~/assets/community/swc.jpg'),
        },
        {
          image: require('~/assets/community/devcode.png'),
        },
        {
          image: require('~/assets/community/gs-siliguri.png'),
        },
        {
          image: require('~/assets/community/hackcbs.png'),
        },
        {
          image: require('~/assets/community/kotlin.png'),
        },
        {
          image: require('~/assets/community/hack-bengal.png'),
        },
        {
          image: require('~/assets/community/frontend.svg'),
        },
        {
          image: require('~/assets/community/pypro.png'),
        },
        {
          image: require('~/assets/community/devrelo.png'),
        },
        {
          image: require('~/assets/community/newton.png'),
        },
        {
          image: require('~/assets/community/brainseed.png'),
        },
        {
          image: require('~/assets/community/oo.jpg'),
        },
        {
          image: require('~/assets/community/abilify.png'),
        },
        {
          image: require('~/assets/community/cocode.png'),
        },
        {
          image: require('~/assets/community/devsintech.png'),
        },
        {
          image: require('~/assets/community/punedev.png'),
        },
        {
          image: require('~/assets/community/onestop.png'),
        },
        {
          image: require('~/assets/community/tps.jpg'),
        },
        {
          image: require('~/assets/community/eduhub.png'),
        },
        {
          image: require('~/assets/community/founderstank.png'),
        },
        {
          image: require('~/assets/community/keepup.jpg'),
        },
        {
          image: require('~/assets/community/irlamigo.jpg'),
        },
        {
          image: require('~/assets/community/everyday-design.svg'),
        },
        {
          image: require('~/assets/community/devsdungeon.png'),
        },
        {
          image: require('~/assets/community/codingvets.png'),
        },
        {
          image: require('~/assets/community/gdsc-gandhinagar.png'),
        },
        {
          image: require('~/assets/community/gdsc-vishwakarma.png'),
        },
        {
          image: require('~/assets/community/gdsc-bit.png'),
        },
        {
          image: require('~/assets/community/htm.png'),
        },
        {
          image: require('~/assets/community/sudans.png'),
        },
        {
          image: require('~/assets/community/product-hub.png'),
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

  &.godaddy {
    padding: 1rem 0.5rem;
    img {
      max-width: 10rem;
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

    &.godaddy {
      padding: 0.25rem 0.25rem;
      img {
        max-width: 7rem;
      }
    }
  }

  &.Platinium {
    min-width: 24rem;

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

    @include respond-below(sm) {
      min-width: 8rem;
      padding: 0.5rem 0.75rem;

      img {
        max-width: 8rem;
        max-height: 6rem;
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

  //   &.godaddy {
  //     padding: 0.5rem 0.25rem;
  //     img {
  //       max-width: 5rem;
  //     }
  //   }

  //   @include respond-below(sm) {
  //     height: 2.5rem;
  //     min-width: 4rem;
  //     padding: 0.25rem 0.375rem;

  //     img {
  //       max-width: 3rem;
  //       max-height: 1.5rem;
  //     }

  //     &.godaddy {
  //       padding: 0.125rem 0.125rem;
  //       img {
  //         max-width: 3.5rem;
  //       }
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
  padding: 1.5rem 1rem;
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

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
            base: `repeat(${
              tiers.category === 'Previous Sponsors' ? '3' : '2'
            }, 1fr)`,
            sm: `repeat(${
              tiers.category === 'Previous Sponsors' ? '5' : '3'
            },1fr)`,
            lg: `repeat(${
              tiers.category === 'Previous Sponsors' ? '6' : '4'
            },1fr)`,
            xl: `repeat(${
              tiers.category === 'Previous Sponsors' ? '8' : '5'
            },1fr)`,
          }"
          wrap="wrap"
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

      <!-- <a href="https://bit.ly/htf3-sponsor" class="sponsor-button">
        <CButton class="button animate-ease">
          <span> Sponsor us! </span>
        </CButton>
      </a> -->
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
        // {
        //   category: 'Previous Sponsors',
        //   sponsors: [
        //     {
        //       url: 'https://mlh.io/',
        //       image: require('~/assets/sponsors/mlh.svg'),
        //     },
        //     {
        //       url: 'https://www.storyblok.com/',
        //       image: require('~/assets/sponsors/storyblok.svg'),
        //     },
        //     {
        //       url: 'https://education.github.com/discount_requests/student_application?utm_source=2021-10-22-hackthisfall',
        //       image: require('~/assets/sponsors/github.svg'),
        //     },
        //     {
        //       url: 'https://www.quicknode.com/',
        //       image: require('~/assets/sponsors/quicknode.png'),
        //     },
        //     {
        //       url: 'https://www.twilio.com/',
        //       image: require('~/assets/sponsors/twilio.png'),
        //     },
        //     {
        //       url: 'https://polygon.technology/',
        //       image: require('~/assets/sponsors/polygon.svg'),
        //     },
        //     {
        //       url: 'https://www.digitalocean.com/',
        //       image: require('~/assets/sponsors/digitalocean.svg'),
        //     },
        //     {
        //       url: 'https://agoric.com/',
        //       image: require('~/assets/sponsors/agoric.svg'),
        //     },
        //     {
        //       url: 'https://symbl.ai/',
        //       image: require('~/assets/sponsors/symbl.svg'),
        //     },
        //     {
        //       url: 'https://wrx.gg/htf',
        //       image: require('~/assets/sponsors/wazirx.png'),
        //     },
        //     {
        //       url: 'https://atsign.com/',
        //       image: require('~/assets/sponsors/atsign.svg'),
        //     },
        //     {
        //       url: 'https://www.linode.com/',
        //       image: require('~/assets/sponsors/linode.svg'),
        //     },
        //     {
        //       url: 'https://balsamiq.com/',
        //       image: require('~/assets/sponsors/balsamiq.svg'),
        //     },
        //     {
        //       url: 'https://www.courier.com/',
        //       image: require('~/assets/sponsors/courier.svg'),
        //     },
        //     {
        //       url: 'https://registry.godaddy/',
        //       image: require('~/assets/sponsors/godaddy.png'),
        //       specialClass: 'godaddy',
        //     },
        //     {
        //       url: 'https://tezos.com/',
        //       image: require('~/assets/sponsors/tezos.svg'),
        //     },
        //     {
        //       url: 'https://www.egghead.io/',
        //       image: require('~/assets/sponsors/egghead.png'),
        //     },
        //     {
        //       url: 'https://gen.xyz/',
        //       image: require('~/assets/sponsors/xyz.svg'),
        //     },
        //     {
        //       url: 'https://replit.com/',
        //       image: require('~/assets/sponsors/replit.webp'),
        //     },
        //     {
        //       url: 'https://filebase.com/?utm_source=website&utm_medium=sponsor&utm_campaign=hackthisfall',
        //       image: require('~/assets/sponsors/filebase.svg'),
        //     },
        //     {
        //       url: 'https://dev.to/',
        //       image: require('~/assets/sponsors/devto.png'),
        //     },
        //     {
        //       url: 'https://1password.com/',
        //       image: require('~/assets/sponsors/1p.svg'),
        //     },
        //     {
        //       url: 'https://hackp.ac/mlh-stickermule-hackathons',
        //       image: require('~/assets/sponsors/stickermule.png'),
        //     },
        //     {
        //       url: 'https://sketch.com',
        //       image: require('~/assets/sponsors/sketch.png'),
        //     },
        //     // {
        //     //   url: 'https://defhacks.co/',
        //     //   image: require('~/assets/sponsors/defhacks.png'),
        //     // },
        //     // {
        //     //   url: 'https://www.portis.io/',
        //     //   image: require('~/assets/sponsors/portis.png'),
        //     // },
        //     // {
        //     //   url: 'https://fold.money/',
        //     //   image: require('~/assets/sponsors/fold.png'),
        //     // },
        //     // {
        //     //   url: 'https://xinfin.org/',
        //     //   image: require('~/assets/sponsors/xdc.png'),
        //     // },
        //     // {
        //     //   url: 'https://coil.com/',
        //     //   image: require('~/assets/sponsors/coil.jpg'),
        //     // },

        //     // {
        //     //   url: 'https://draftbit.com/',
        //     //   image: require('~/assets/sponsors/draftbit.png'),
        //     // },
        //     // {
        //     //   url: 'https://www.sashido.io/',
        //     //   image: require('~/assets/sponsors/sashido.png'),
        //     // },
        //     // {
        //     //   url: 'https://www.devhood.tech/',
        //     //   image: require('~/assets/sponsors/devhood.png'),
        //     // },
        //     // {
        //     //   url: 'https://codingblocks.com/',
        //     //   image: require('~/assets/sponsors/cb.png'),
        //     // },
        //     // {
        //     //   url: 'https://www.clerky.com/',
        //     //   image: require('~/assets/sponsors/clerky.png'),
        //     // },
        //     // {
        //     //   url: 'https://interwebs.host/',
        //     //   image: require('~/assets/sponsors/iwh.png'),
        //     // },

        //     // {
        //     //   url: 'https://rosenfeldmedia.com/',
        //     //   image: require('~/assets/sponsors/rosenfeld.png'),
        //     // },
        //     // {
        //     //   url: 'https://www.framer.com/',
        //     //   image: require('~/assets/sponsors/framer.png'),
        //     // },
        //     // {
        //     //   url: 'https://www.voiceflow.com/',
        //     //   image: require('~/assets/sponsors/voiceflow.png'),
        //     // },
        //     // {
        //     //   url: 'http://joinglimpse.com/',
        //     //   image: require('~/assets/sponsors/glimpse.png'),
        //     // },
        //     // {
        //     //   url: 'https://progate.com/',
        //     //   image: require('~/assets/sponsors/progate.png'),
        //     // },
        //     // // remaining except slido
        //     // {
        //     //   url: 'https://devhero.shop/',
        //     //   image: require('~/assets/sponsors/devhero.png'),
        //     // },
        //     // {
        //     //   url: 'https://streamyard.com/about',
        //     //   image: require('~/assets/sponsors/streamyard.png'),
        //     // },
        //   ],
        // },
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

  &.Previous {
    min-width: 6rem;
    padding: 0.5rem;
    height: 50px;

    img {
      max-width: 4rem;
      max-height: 2rem;
    }

    &.godaddy {
      padding: 0.5rem 0.25rem;
      img {
        max-width: 5rem;
      }
    }

    @include respond-below(sm) {
      height: 2.5rem;
      min-width: 4rem;
      padding: 0.25rem 0.375rem;

      img {
        max-width: 3rem;
        max-height: 1.5rem;
      }

      &.godaddy {
        padding: 0.125rem 0.125rem;
        img {
          max-width: 3.5rem;
        }
      }
    }
  }
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

<template>
  <ContainerVue id="sponsored-prizes" name="sponsored-prizes">
    <section class="content-section">
      <CFlex
        :mx="{ base: '1rem', sm: '50px' }"
        mt="2rem"
        justify="center"
        align="center"
        direction="column"
        class="prizes-container"
        :p="{ base: '3rem' }"
      >
        <CGrid
          :row-gap="{ base: '2rem', sm: '3rem' }"
          :column-gap="{
            base: '2rem',
            sm: '3rem',
            lg: '3rem',
            xl: '3rem',
            '2xl': '4rem',
          }"
          :grid-template-columns="{
            base: `repeat(1,1fr)`,
            sm: `repeat(1,1fr)`,
            lg: `repeat(2,1fr)`,
            xl: `repeat(2,1fr)`,
          }"
        >
          <a
            href="https://storyblok.notion.site/Best-Use-of-Storyblok-Track-Guidelines-50c60fc89ff043c8aa7feaff6b06938c"
            target="_blank"
            class="inner"
          >
            <img src="~/assets/sponsors/storyblok.svg" />
            <CText mt="2rem" class="heading">Best Use of Storyblok</CText>
            <p class="description">
              Keychron K2 (Hot-swappable) Wireless Mechanical Keyboard (Version
              2) to each member of team
            </p>
          </a>
          <a href="" target="_blank" class="inner">
            <img src="~/assets/sponsors/5ire.svg" />
            <CText mt="2rem" class="heading"
              >Top-10 Projects Built using 5ire Labs</CText
            >
            <p class="description">
              INR 10,000 to the winning team and swag package
            </p>
          </a>
          <a
            href="https://docs.google.com/document/d/1wenNV-w_yiccCTopwBw9xA0hTz8ZhtaYuccYgcgFJR4/edit?usp=sharing"
            target="_blank"
            class="inner"
          >
            <img src="~/assets/sponsors/zeeve.svg" />
            <CText mt="2rem" class="heading"
              >Top-2 Projects Built using Zeeve.io</CText
            >
            <p class="description">
              Each winning team member receives a special Zeeve Swag package.
            </p>
          </a>
          <a
            v-for="(prize, index) in appyPrizes"
            :key="index"
            href="https://docs.google.com/document/d/e/2PACX-1vQXVL_JNRodzaBVvujzJafMf_1XEggKEAmMuFRg0T81lsUiE1dsQbP6JmgtWumaINg3p-hhAeb7RCgy/pub"
            target="_blank"
            class="inner"
          >
            <CFlex align="center">
              <img src="~/assets/sponsors/apyhub.svg" /> <span>✕</span>
              <img :src="prize.logo" />
            </CFlex>
            <CText mt="2rem" class="heading">{{ prize.name }}</CText>
            <p class="description">{{ prize.description }}</p>
          </a>
          <a
            v-for="(prize, index) in mlhPrizes"
            :key="index"
            href="https://hack.mlh.io/prizes"
            target="_blank"
            class="inner"
          >
            <CFlex wrap="wrap" align="center">
              <img :src="prize.logo" /> <span>✕</span>
              <img src="~/assets/sponsors/mlh.svg" />
            </CFlex>
            <CText mt="2rem" class="heading">{{ prize.name }}</CText>
            <p class="description">{{ prize.description }}</p>
          </a>
          <a href="https://blues.io/" target="_blank" class="inner">
            <img src="~/assets/sponsors/blues.svg" />
            <CText mt="2rem" class="heading"
              >Best Hardware Hack using Blues</CText
            >
            <p class="description">
              Every winning team member receives $50 Amazon gift card.
            </p>
          </a>
          <a href="https://peerlist.io/" target="_blank" class="inner">
            <img src="~/assets/sponsors/peerlist.png" />
            <CText mt="2rem" class="heading"
              >Top-3 Projects uploaded on Peerlist</CText
            >
            <p class="description">
              Each winning team member receives a special Peerlist Swag package.
            </p>
          </a>
        </CGrid>
      </CFlex>
    </section>
    <HeadingVue front="Fun Prizes" back="PRIZES" />
  </ContainerVue>
</template>

<script>
import { CFlex, CGrid, CText } from '@chakra-ui/vue'
import ContainerVue from '../Container.vue'
import HeadingVue from '../HeadingComponent.vue'

export default {
  components: {
    ContainerVue,
    HeadingVue,
    CFlex,
    CGrid,
    CText,
  },
  data() {
    return {
      mlhPrizes: [
        {
          logo: require('~/assets/sponsors/twilio.png'),
          name: 'Most Creative Use of Twilio',
          description: 'Twilio Swag Box & GameGo Console',
        },
        {
          logo: require('~/assets/sponsors/github.svg'),
          name: 'Most Creative Use of GitHub',
          description: 'GitHub Octocat Puzzle & Sticker bundle',
        },
        {
          logo: require('~/assets/sponsors/appwrite.svg'),
          name: 'Best Use of Appwrite',
          description:
            'Every winning team member takes home Fitbit Inspire 2 Tracker',
        },
        {
          logo: require('~/assets/sponsors/azure-horiz.png'),
          name: 'Best Use of Microsoft Cloud for Your Community',
          description:
            'LinkedIn Premium 12-Month subscription and Xbox Ultimate 3-Month Game Pass',
        },
        {
          logo: require('~/assets/sponsors/godaddy.svg'),
          name: 'Best Domain Name from GoDaddy Registry',
          description:
            'Hack from Home Kit - A wireless earbuds, blue light glasses, selfie ring light and a pouch for easy transport.',
        },
      ],
      appyPrizes: [
        {
          logo: require('~/assets/medals/first.png'),
          name: 'Best Project Built using ApyHub',
          description:
            '150 EURO worth Amazon Voucher to team, 5M Atoms, Exclusive ApyHub Hoodie to each member and additional perks.',
        },
        {
          logo: require('~/assets/medals/second.png'),
          name: 'Second Best Project Built using ApyHub',
          description:
            '100 EURO worth Amazon Voucher to team, 3M Atoms, Exclusive ApyHub T-Shirt to each member and additional perks.',
        },
        {
          logo: require('~/assets/medals/third.png'),
          name: 'Third Best Project Built using ApyHub',
          description:
            '50 EURO worth Amazon Voucher to team, 3M Atoms, Exclusive ApyHub T-Shirt to each member and additional perks.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#prizes {
  margin-top: 4rem;
  padding-top: 4rem;
}

.content-section {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  margin-top: 1rem;

  .prizes-container {
    .intro {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.02em;
      text-align: center;
      color: #ffffff;
      margin-top: 48px;
    }

    .inner {
      background: linear-gradient(
        180deg,
        #142137 0%,
        #0b121f 99.99%,
        rgba(20, 33, 55, 0) 100%
      );
      border-radius: 14px;
      padding: 2rem;

      &:hover {
        background: linear-gradient(180deg, #0b3b52 3.72%, #0b121f 141.1%);
      }

      img {
        height: 30px;
      }

      span {
        color: #ffffff;
        margin: 0 0.5rem;
        font-weight: 900;
      }

      .heading {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 32px;
        letter-spacing: 0.02em;
        color: #ffffff;

        @include respond-below(sm) {
          font-size: 24px;
          line-height: 28px;
        }
      }

      .description {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 25px;
        text-align: justify;
        letter-spacing: 0.02em;
        color: #ffffff;
        margin-top: 1rem;
        opacity: 0.8;
      }
    }
  }
}
</style>

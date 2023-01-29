<template>
  <ContainerVue id="fun-prizes" name="fun-prizes">
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
          <!-- <a
            href="https://twitter.com/search?q=%23MyOctocat&src=typed_query&f=live"
            target="_blank"
            class="inner"
          >
            <img src="~/assets/sponsors/github.svg" />
            <CText mt="2rem" class="heading">MyOctocat Challenge</CText>
            <p class="description">
              Draw an Octocat &amp; tweet it by tagging us
              <a style="color: #d04d29; font-weight: 400">@hackthisfall</a>
              &amp;
              <a style="color: #d04d29; font-weight: 400">@GitHubEducation</a>
              using hashtag
              <a style="color: #d04d29; font-weight: 400">#HackThisFall</a>
              &amp;
              <a style="color: #d04d29; font-weight: 400">#MyOctocat</a>
              . Winner gets GitHub Swag Pack (Sticker box, GitHub Stickers, Puzzle).
            </p>
          </a> -->
          <a
            href="https://twitter.com/search?q=%23HTFMeme&src=typed_query&f=live"
            target="_blank"
            class="inner"
          >
            <img src="~/assets/logo.png" />
            <CText mt="2rem" class="heading">Meme Challenge</CText>
            <p class="description">
              Tweet funny memes with
              <span style="color: #d04d29; font-weight: 400">#HTFMeme</span> &
              <span style="color: #d04d29; font-weight: 400"
                >#HackThisFall</span
              >
              and tag
              <span style="color: #d04d29; font-weight: 400"
                >@hackthisfall</span
              >
              and the winner earns a GitHub Tee as a prize 👕
            </p>
          </a>
          <a
            href="https://twitter.com/search?q=%23HTFMascot&src=typed_query&f=live"
            target="_blank"
            class="inner"
          >
            <img src="~/assets/logo.png" />
            <CText mt="2rem" class="heading">Mascot Contest</CText>
            <p class="description">
              Tweet creative mascots for Hack This Fall with
              <span style="color: #d04d29; font-weight: 400">#HTFMascot</span> &
              <span style="color: #d04d29; font-weight: 400"
                >#HackThisFall</span
              >
              and tag
              <span style="color: #d04d29; font-weight: 400"
                >@hackthisfall</span
              >
              and the winner earns a GitHub Octocat Figurine.
            </p>
          </a>
        </CGrid>
      </CFlex>
    </section>
  </ContainerVue>
</template>

<script>
import { CFlex, CGrid, CText } from '@chakra-ui/vue'
import ContainerVue from '../Container.vue'

export default {
  components: {
    ContainerVue,
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

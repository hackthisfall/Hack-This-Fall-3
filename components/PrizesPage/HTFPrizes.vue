<template>
  <ContainerVue id="prizes" name="prizes">
    <HeadingVue front="Hack This Fall Prizes" back="PRIZES" />
    <section class="content-section">
      <CFlex
        :mx="{ base: '1rem', sm: '50px' }"
        mt="5rem"
        justify="center"
        align="center"
        direction="column"
      >
        <CFlex class="cards-grid mobile">
          <CBox v-for="(prize, index) in prizesMobile" :key="index">
            <div :class="['card', prize.class]">
              <div class="image">
                <img :src="prize.image" :alt="prize.name" />
              </div>
              <div class="card-side front">
                <div class="texts">
                  <h4 class="prizeName">{{ prize.name }}</h4>
                  <p class="prizeDescription" v-html="prize.details"></p>
                </div>
              </div>
              <div class="card-side back">
                <p>
                  <span v-html="prize.description"></span>
                </p>
              </div>
            </div>
          </CBox>
        </CFlex>

        <CFlex class="cards-grid desktop">
          <CBox v-for="(prize, index) in prizes" :key="index">
            <div :class="['card', prize.class]">
              <div class="image">
                <img :src="prize.image" :alt="prize.name" />
              </div>
              <div class="card-side front">
                <div class="texts">
                  <h4 class="prizeName">{{ prize.name }}</h4>
                  <p class="prizeDescription" v-html="prize.details"></p>
                </div>
              </div>
              <div class="card-side back">
                <p>
                  <span v-html="prize.description"></span>
                </p>
              </div>
            </div>
          </CBox>
        </CFlex>
      </CFlex>
      <CFlex
        :mx="{ base: '1.5rem', sm: '2rem' }"
        justify="center"
        align="center"
        direction="column"
        class="prizes-container"
      >
        <CGrid
          mt="3rem"
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
            md: `repeat(2,1fr)`,
            lg: `repeat(2,1fr)`,
            xl: `repeat(2,1fr)`,
          }"
        >
          <CGridItem
            class="inner"
            v-for="(prize, index) in htfPrizes"
            :key="index"
          >
            <CText class="heading">{{ prize.name }}</CText>
            <p class="description">{{ prize.description }}</p>
          </CGridItem>
        </CGrid>
      </CFlex>
    </section>
    <HeadingVue front="Sponsored Prizes" back="PRIZES" />
  </ContainerVue>
</template>

<script>
import { CBox, CFlex } from '@chakra-ui/vue'
import HeadingVue from '../HeadingComponent.vue'
import ContainerVue from '../Container.vue'

export default {
  components: {
    ContainerVue,
    HeadingVue,
    CFlex,
    CBox,
  },
  data() {
    return {
      htfPrizes: [
        {
          name: '👭🏻 Best All Girls Team',
          description: 'INR 10,000 to winning team and addional perks',
        },
        {
          name: '🌟 Best Beginner Team',
          description: 'INR 10,000 to winning team and addional perks',
        },
      ],
      prizes: [
        {
          name: '₹35k',
          image: require('~/assets/prizes/silver.svg'),
          details: '1st Runner-Up',
          class: 'Second',
          description:
            "<ul><li><span style='color: rgba(233, 83, 34, 1)'>INR 50,000</span> Prize to winning team</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 250</span> Amazon Gift Card from Quicknode.</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 250 </span>of free S3-compatible object storage credits with Filebase</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 449</span> of 1 year of Draftbit Pro</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 375</span> of In-Kind Wolfram Award</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 250</span> of Digital Ocean Credits</li><li>Hack This Fall <span style='color: rgba(233, 83, 34, 1)'>Swag Pack</span></li><li><span style='color: rgba(233, 83, 34, 1)'>Certificates</span> to members</li><li>Special Mention on <a style='color: rgba(233, 83, 34, 1)'  target='_blank' rel='noopener noreferrer' href='https://twitter.com/hackthisfall'>@hackthisfall</a> socials</li></ul>",
        },
        {
          name: '₹50k',
          image: require('~/assets/prizes/gold.svg'),
          details: 'Winner',
          class: 'Winner',
          description:
            "<ul><li><span style='color: rgba(233, 83, 34, 1)'>INR 35,000</span> Prize to winning team</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 100</span> Amazon Gift Card from Quicknode.</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 150 </span>of free S3-compatible object storage credits with Filebase</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 449</span> of 1 year of Draftbit Pro</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 375</span> of In-Kind Wolfram Award</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 125 </span>of Digital Ocean Credits</li><li>Hack This Fall <span style='color: rgba(233, 83, 34, 1)'>Swag Pack</span></li><li><span style='color: rgba(233, 83, 34, 1)'>Certificates</span> to members</li><li>Special Mention on <a style='color: rgba(233, 83, 34, 1)'  target='_blank' rel='noopener noreferrer' href='https://twitter.com/hackthisfall'>@hackthisfall</a> socials</li></ul>",
        },
        {
          name: '₹20k',
          image: require('~/assets/prizes/bronze.svg'),
          details: '2nd Runner-Up',
          class: 'Third',
          description:
            "<ul><li><span style='color: rgba(233, 83, 34, 1)'>INR 20,000</span> Prize to winning team</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 250 </span>of free S3-compatible object storage credits with Filebase</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 449</span> of 1 year of Draftbit Pro</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 375</span> of In-Kind Wolfram Award</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 100</span> of Digital Ocean Credits</li><li>Hack This Fall <span style='color: rgba(233, 83, 34, 1)'>Swag Pack</span></li><li><span style='color: rgba(233, 83, 34, 1)'>Certificates</span> to members</li><li>Special Mention on <a style='color: rgba(233, 83, 34, 1)'  target='_blank' rel='noopener noreferrer' href='https://twitter.com/hackthisfall'>@hackthisfall</a> socials</li></ul>",
        },
      ],
      prizesMobile: [
        {
          name: '₹50k',
          image: require('~/assets/prizes/gold.svg'),
          details: 'Winner',
          class: 'Winner',
          description:
            "<ul><li><span style='color: rgba(233, 83, 34, 1)'>INR 35,000</span> Prize to winning team</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 100</span> Amazon Gift Card from Quicknode.</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 150 </span>of free S3-compatible object storage credits with Filebase</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 449</span> of 1 year of Draftbit Pro</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 375</span> of In-Kind Wolfram Award</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 125 </span>of Digital Ocean Credits</li><li>Hack This Fall <span style='color: rgba(233, 83, 34, 1)'>Swag Pack</span></li><li><span style='color: rgba(233, 83, 34, 1)'>Certificates</span> to members</li><li>Special Mention on <a style='color: rgba(233, 83, 34, 1)'  target='_blank' rel='noopener noreferrer' href='https://twitter.com/hackthisfall'>@hackthisfall</a> socials</li></ul>",
        },
        {
          name: '₹35k',
          image: require('~/assets/prizes/silver.svg'),
          details: '1st Runner-Up',
          class: 'Second',
          description:
            "<ul><li><span style='color: rgba(233, 83, 34, 1)'>INR 50,000</span> Prize to winning team</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 250</span> Amazon Gift Card from Quicknode.</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 250 </span>of free S3-compatible object storage credits with Filebase</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 449</span> of 1 year of Draftbit Pro</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 375</span> of In-Kind Wolfram Award</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 250</span> of Digital Ocean Credits</li><li>Hack This Fall <span style='color: rgba(233, 83, 34, 1)'>Swag Pack</span></li><li><span style='color: rgba(233, 83, 34, 1)'>Certificates</span> to members</li><li>Special Mention on <a style='color: rgba(233, 83, 34, 1)'  target='_blank' rel='noopener noreferrer' href='https://twitter.com/hackthisfall'>@hackthisfall</a> socials</li></ul>",
        },
        {
          name: '₹20k',
          image: require('~/assets/prizes/bronze.svg'),
          details: '2nd Runner-Up',
          class: 'Third',
          description:
            "<ul><li><span style='color: rgba(233, 83, 34, 1)'>INR 20,000</span> Prize to winning team</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 250 </span>of free S3-compatible object storage credits with Filebase</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 449</span> of 1 year of Draftbit Pro</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 375</span> of In-Kind Wolfram Award</li><li><span style='color: rgba(233, 83, 34, 1)'>USD 100</span> of Digital Ocean Credits</li><li>Hack This Fall <span style='color: rgba(233, 83, 34, 1)'>Swag Pack</span></li><li><span style='color: rgba(233, 83, 34, 1)'>Certificates</span> to members</li><li>Special Mention on <a style='color: rgba(233, 83, 34, 1)'  target='_blank' rel='noopener noreferrer' href='https://twitter.com/hackthisfall'>@hackthisfall</a> socials</li></ul>",
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
    .inner {
      background: linear-gradient(
        180deg,
        #142137 0%,
        #0b121f 99.99%,
        rgba(20, 33, 55, 0) 100%
      );
      border-radius: 14px;
      padding: 2rem 3.2rem;

      &:hover {
        background: linear-gradient(180deg, #0b3b52 3.72%, #0b121f 141.1%);
      }
      .heading {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 32px;
        letter-spacing: 0.02em;
        color: #ffffff;
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
      }
    }
  }

  .cards-grid {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;

    &.mobile {
      display: none;
    }

    &.desktop {
      display: flex;

      @include respond-below(sm) {
        display: none;
      }
    }

    .card {
      position: relative;
      border-radius: 15px;
      text-align: center;
      min-height: 16rem;
      min-width: 20rem;
      margin-left: 2rem;

      @media (max-width: 1000px) {
        width: 96%;
      }

      &.Second {
        margin-left: 0;
      }

      &.Second,
      &.Third {
        margin-top: 5rem;
      }

      &.Winner {
        margin-top: 0rem;
      }

      .image {
        position: absolute;
        z-index: 1;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        margin-top: -4.5rem;
        text-align: center;
        display: flex;
        justify-content: center;
        width: 100%;

        img {
          width: 8rem;
          margin: 10px;
        }
      }

      .card-side {
        width: 100%;
        margin: auto;
        border-radius: 15px;
        transition: all 0.8s ease;
        backface-visibility: hidden;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        min-height: 95%;
        background: linear-gradient(
          180deg,
          #142137 0%,
          #0b121f 99.99%,
          rgba(20, 33, 55, 0) 100%
        );

        color: white;
      }
      .card-side.back {
        transform: rotateY(-180deg);
      }
      &:hover .card-side.front {
        background: linear-gradient(180deg, #0b3b52 3.72%, #0b121f 141.1%);
      }
      //   &:hover .card-side.front {
      //     transform: rotateY(180deg);
      //   }
      //   &:hover .card-side.back {
      //     transform: rotateY(0deg);
      //   }

      .card-side.back {
        text-align: left;
      }

      .texts {
        font-family: 'Poppins';
        display: flex;
        height: 100%;
        flex-direction: column;
        font-weight: 700;
        justify-content: space-between;
        .prizeName {
          margin-top: 1rem;
          font-size: 4rem;
        }

        .prizeDescription {
          font-size: 1.75rem;
        }
      }
    }

    .clickable {
      cursor: pointer;
    }

    @include respond-below(lg) {
      .card {
        display: flex;
        justify-content: center;
        margin-left: auto;
        min-width: 16rem;
      }
    }

    @include respond-below(md) {
      .card {
        display: flex;
        justify-content: center;
        margin-left: auto;
        min-width: 14rem;
      }
    }

    @include respond-below(sm) {
      flex-direction: column;
      align-items: center;

      &.mobile {
        display: flex;
      }

      .card {
        display: flex;
        justify-content: center;
        margin-left: auto;
        min-width: 85vw;

        &.Second {
          margin-left: 0;
        }

        &.Second,
        &.Third {
          margin-top: 5rem;
        }

        &.Winner {
          margin-top: 0rem;
        }

        .texts {
          .prizeName {
            margin-top: 1rem;
            font-size: 3rem;
          }

          .prizeDescription {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
}
</style>

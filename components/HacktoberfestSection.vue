<template>
  <ContainerVue id="meetup" name="meetup">
    <HeadingVue front="Hacktoberfest" back="2023" />
    <CBox :mx="{ base: '0rem', sm: '50px' }" mt="5rem">
      <div class="cards-grid">
        <div v-for="(event, index) in events2023" :key="index" class="card">
          <div class="card-side new smooth-transition">
            <img :src="event.image" alt="cityImage" />
            <div class="texts">
              <h4 class="eventName" v-html="event.name"></h4>
              <p class="event">
                {{ event.date }} •
                {{ event.venue }}
              </p>
            </div>
            <a :href="event.url" target="_blank">
              <button class="button">Register Now</button>
            </a>
          </div>
        </div>
      </div>
    </CBox>
  </ContainerVue>
</template>
<script>
import { CBox } from '@chakra-ui/vue'
import HeadingVue from './HeadingComponent.vue'
import ContainerVue from './Container.vue'
export default {
  components: {
    HeadingVue,
    ContainerVue,
    CBox,
  },
  data() {
    return {
      events2023: [
        {
          name: 'Hacktoberfest Virtual Edition',
          image: require('~/assets/Hacktoberfest/2023.png'),
          date: '15th October 2023',
          venue: 'YouTube & Discord',
          active: true,
          url: 'https://lu.ma/HTFxHacktoberfest23xVirtual',
        },
        {
          name: 'Hacktoberfest In-person Edition',
          image: require('~/assets/Hacktoberfest/2023.png'),
          venue: 'Vadodara, Gujarat',
          date: '28th October 2023',
          url: 'https://events.mlh.io/events/10181-hacktoberfest-2023-by-hack-this-fall',
          active: true,
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
#meetup {
  margin-top: 4rem;
  padding-top: 1rem;

  @include respond-below(xs) {
    padding-top: 4rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

.htf-orange {
  color: #d04d29;
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
}

.tier-heading {
  font-family: 'Poppins';
  color: #d04d29;
  display: flex;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  align-items: center;

  &.space-up {
    margin-top: 1.5rem;
  }
}

.about {
  margin: auto;
  margin-top: 4rem;
  width: 100%;
  background: linear-gradient(
    180deg,
    #142137 0%,
    #0b121f 99.99%,
    rgb(20, 33, 55) 100%
  );
  border-radius: 1rem;
  margin-bottom: 2rem;

  p {
    color: #fdf7df;
    padding: 2rem;
    text-align: justify;
    // margin: 1rem 1rem 2rem;
    font-size: 1.1rem;

    @include respond-below(md) {
      padding-top: 20px;
    }
  }
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #efedef;
  border: 2px solid #d7d5d7;
  box-shadow: 2px 2px 0px #d7d5d7;
  width: 70%;
  border-radius: 12.4124px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1.1rem;
  color: #0e0912;
  margin: 1rem auto 0;

  @include respond-below(xs) {
    font-size: 0.9rem;
    padding: 1.5rem 1rem;
  }

  &:hover {
    background: #d7d5d7;
  }

  img {
    width: 2rem;
    height: 2rem;
    margin-right: 0.75rem;
  }

  @include respond-below(xs) {
    max-width: 70vw;
  }

  &.disabled {
    opacity: 0.5;
    background: #d04d29;
    box-shadow: 2px 2px 0px #f46d24;
    cursor: default;
  }
}

.cards-grid {
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  border-radius: 10px;
  column-gap: 30px;
  margin-top: 2rem;
  row-gap: 30px;

  @include respond-below(md) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 30px;
  }

  @include respond-below(sm) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 30px;
  }

  @include respond-below(xs) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 30px;
  }

  .card {
    min-height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @include respond-below(lg) {
      min-height: 18rem;
    }

    a {
      text-decoration: none;
      color: unset;
    }

    .old {
      background-color: #fdf7df;
    }

    .new {
      background-color: #0e0912;
    }

    .card-side {
      width: 100%;
      border-radius: 15px;
      padding: 1.5rem;

      &:hover {
        box-shadow: rgba(254, 242, 216, 0.25) 0px 0px 0px 10px;
      }

      img {
        margin: auto auto -5px;
        width: 100%;
      }
    }

    .image {
      position: relative;
      display: flex;
      flex-direction: column;
      align-content: center;
      margin-left: auto;
      margin-right: auto;

      img {
        margin: 16px;
        width: 190px;
      }

      .line {
        position: absolute;
        right: 0px;
        border-left: 2px dashed #ff5100;
        top: -50px;
        height: 300%;
      }
    }

    .texts {
      text-align: center;
      color: white;

      .highlight {
        background: #050c19;
        border-radius: 5px;
        color: white;
        padding: 4px 0;
        margin-top: 8px;

        &:hover {
          box-shadow: rgba(215, 79, 75, 0.25) 0px 0px 0px 6px;
        }
      }

      .eventName {
        font-size: 1.2rem;
        font-weight: bold;
        padding-bottom: 10px;
        padding-top: 10px;
      }
    }
  }
}

.meetup {
  border-radius: 20px;
  background: #fdf7df;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  padding: 25px;
  position: relative;
  flex-basis: 1;
  flex-grow: 1;

  .image {
    width: 150px;
    height: 150px;
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

<template>
  <ContainerVue id="meetup" name="meetup">
    <HeadingVue front="In-Person City Meetups" back="MEETUPS" />
    <CBox :mx="{ base: '0rem', sm: '50px' }" mt="5rem">
      <div class="about">
        <p class="details">
          After a successful series of City Meetups in 2022, Hack This Fall
          became the
          <span style="color: #d04d29; font-weight: 600"
            >First-Ever Hacker Community</span
          >
          to host such events across India. The idea is to bring community
          members together by breaking the virtual barrier. We aim to help
          connect folks with each other from the region to create more
          opportunities & collaboration!💥<br /><br />
          Hack This Fall is super excited in announcing yet another series of
          Meetups and this time, in
          <span style="color: #d04d29; font-weight: 600">8 New Cities</span>.
          Get hyped to experience our community culture and join us in any of
          the cities listed below!👇 <br /><br />
          It is going to be completely free of cost, all you need to do is,
          register for the meet-up and wait for the invitation.
          <span style="color: #d04d29; font-weight: 600">Free Food</span> and
          <span style="color: #d04d29; font-weight: 600">Cool Swags</span> are
          on us and you know we don't limit ourselves there!🤩 <br /><br />
          What are you waiting for? Register Now! 🚀
        </p>
      </div>
      <div class="tier-heading">
        <span>2023 Series</span>
      </div>
      <div class="cards-grid">
        <div v-for="(event, index) in events2023" :key="index" class="card">
          <div class="card-side new smooth-transition">
            <img :src="event.image" alt="cityImage" />
            <div class="texts">
              <h4 class="eventName" v-html="event.name"></h4>
              <p class="event">
                <!-- Date: TBD <br />
                Time: {{ event.time }} <br /> -->
                Details to be announced soon
              </p>
              <!-- <a :href="event.url" target="_blank"> -->
              <!-- <p
                :class="[
                  'venue smooth-transition',
                  event.active ? 'highlight' : null,
                ]"
              >
                Venue: {{ event.venue }}
              </p> -->
              <!-- </a> -->
            </div>
          </div>
        </div>
      </div>
    </CBox>
    <CBox :mx="{ base: '0rem', sm: '50px' }" mt="5rem">
      <div :class="['tier-heading', 'space-up']">
        <span>2022 Series</span>
      </div>
      <div class="cards-grid">
        <div v-for="(event, index) in events2022" :key="index" class="card">
          <div class="card-side old smooth-transition">
            <a :href="event.url" target="_blank">
              <img :src="event.image" alt="cityImage" />
              <div class="texts">
                <h4 class="eventName" v-html="event.name"></h4>
                <p class="event">{{ event.date }} <br /></p>
              </div>
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
    // CGrid,
    // CGridItem,
    CBox,
  },
  data() {
    return {
      events2023: [
        {
          name: 'Indore City Meetup',
          image: require('~/assets/Meetup/2023/indore.png'),
          venue: 'TBD',
          date: '3rd June 2023',
          time: 'TBD',
          url: 'https://g.page/Cowocoli-Coworkingspace?share',
          active: true,
        },
        {
          name: 'Raipur City Meetup',
          image: require('~/assets/Meetup/2023/raipur.png'),
          venue: 'TBD',
          date: '10th June 2023',
          time: 'TBD',
          active: true,
          url: 'https://goo.gl/maps/D7VU6guZ8eBu3rJy5',
        },
        {
          name: 'Nagpur City Meetup',
          image: require('~/assets/Meetup/2023/nagpur.png'),
          venue: 'TBD',
          date: '11th June 2023',
          time: 'TBD',
          active: true,
          url: 'https://goo.gl/maps/TjJ4piny2MhNd9a5A',
        },
        {
          name: 'Chandigarh City Meetup',
          image: require('~/assets/Meetup/2023/chandigarh.png'),
          venue: 'TBD',
          date: '17th June 2023',
          time: 'TBD',
          active: true,
          url: 'https://goo.gl/maps/MtiVc153cHp7R7Bw6',
        },
        {
          name: 'Guwahati City Meetup',
          image: require('~/assets/Meetup/2023/guwahati.png'),
          venue: 'TBD',
          date: '25th June 2023',
          time: 'TBD',
          active: true,
          url: 'https://goo.gl/maps/AV6NrfPcqwW6rct27',
        },
        {
          name: 'Kolkata City Meetup',
          image: require('~/assets/Meetup/2023/kolkata.png'),
          venue: 'TBD',
          date: '1st July 2023',
          time: 'TBD',
          active: true,
          url: 'https://goo.gl/maps/PWhjTUtRPBqWQSNr6',
        },
        {
          name: 'Chennai City Meetup',
          image: require('~/assets/Meetup/2023/chennai.png'),
          venue: 'TBD',
          date: '8th July 2023',
          time: 'TBD',
          active: true,
          url: 'https://goo.gl/maps/PWhjTUtRPBqWQSNr6',
        },
        {
          name: 'Hyderabad City Meetup',
          image: require('~/assets/Meetup/2023/hyderabad.png'),
          venue: 'TBD',
          date: '15th July 2023',
          time: 'TBD',
          active: true,
          url: 'https://goo.gl/maps/PWhjTUtRPBqWQSNr6',
        },
      ],
      events2022: [
        {
          name: 'Jaipur City Meetup',
          image: require('~/assets/Meetup/jaipur.png'),
          venue: 'Cowocoli, Jaipur',
          date: '4th April 2022',
          time: '6:00 PM to 8:00 PM',
          url: 'https://twitter.com/search?q=%23HTFJaipur&src=typed_query&f=top',
          active: true,
        },
        {
          name: 'Mumbai City Meetup',
          image: require('~/assets/Meetup/mumbai.png'),
          venue: '74Technopark Hub',
          date: '16th April 2022',
          time: '4:00 PM to 9:00 PM',
          active: true,
          url: 'https://twitter.com/search?q=%23HTFMumbai&src=typed_query&f=top',
        },
        {
          name: 'Pune City Meetup',
          image: require('~/assets/Meetup/pune.png'),
          venue: 'Redbrick Offices',
          date: '17th April 2022',
          time: '11:30 AM to 4:30 PM',
          active: true,
          url: 'https://twitter.com/search?q=%23HTFPune&src=typed_query&f=top',
        },
        {
          name: 'Delhi City Meetup',
          image: require('~/assets/Meetup/delhi.png'),
          venue: 'The Circle Work',
          date: '28th May 2022',
          time: '11:00 AM to 5:00 PM',
          active: true,
          url: 'https://twitter.com/search?q=%23HTFDelhi&src=typed_query&f=top',
        },
        {
          name: 'Bengaluru City Meetup',
          image: require('~/assets/Meetup/bengaluru.png'),
          venue: '91Springboard, J.P. Nagar',
          date: '11th June 2022',
          time: '11:00 AM to 5:00 PM',
          active: true,
          url: 'https://twitter.com/search?q=%23HTFBengaluru&src=typed_query&f=top',
        },
        {
          name: 'Ahmedabad City Meetup',
          image: require('~/assets/Meetup/ahmedabad.png'),
          venue: 'DevX, Ahmedabad',
          date: '30th July 2022',
          time: '3:00 PM to 8:00 PM',
          active: true,
          url: 'https://twitter.com/search?q=%23HTFAhmedabad&src=typed_query&f=top',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
#meetup {
  margin-top: 4rem;
  padding-top: 4rem;

  @include respond-below(xs) {
    padding-top: 4rem;
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

.cards-grid {
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr;
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
      background-color: #fef2d8;
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

      .highlight {
        background: #d8504b;
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

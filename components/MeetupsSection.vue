<template>
  <ContainerVue id="meetup" name="meetup">
    <HeadingVue front="2023 City Meetup Series" back="MEETUPS" />
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
          on us and you know we don't limit ourselves there!🤩
          <!-- <br /><br /> -->
          <!-- What are you waiting for? Register Now! 🚀 -->
        </p>
      </div>

      <!-- <div style="display: flex; justify-content: center">
        <a href="#">
          <CButton class="button animate-ease">
            <span> Registration Starting Soon</span>
          </CButton>
        </a>
      </div> -->
      <CFlex
        justify="center"
        align="center"
        :gap="{ base: '1.2rem', sm: '30px' }"
        :direction="{ base: 'column', sm: 'row' }"
      >
        <a href="https://lu.ma/u/usr-hFH0w3PqHm9uHQh" target="_blank">
          <CButton class="button animate-ease">
            <span> Click Here To Register</span>
          </CButton>
        </a>
        <a href="https://lu.ma/htfms23-cp" target="blank">
          <CButton class="button animate-ease"
            ><span>Become Community Partner</span></CButton
          >
        </a>
      </CFlex>
      <div class="cards-grid">
        <div v-for="(event, index) in events2023" :key="index" class="card">
          <div class="card-side new smooth-transition">
            <img :src="event.image" alt="cityImage" />
            <div class="texts">
              <h4 class="eventName" v-html="event.name"></h4>
              <p class="event">
                {{ event.date }} <br />
                <span
                  :class="[
                    event.status !== 'Registrations are live'
                      ? null
                      : 'htf-orange',
                  ]"
                >
                  {{ event.status }}
                </span>
                <br />
                <!-- Details to be announced soon -->
              </p>
              <!-- <a :href="event.url" target="_blank">
                <p
                  :class="[
                    'venue smooth-transition',
                    event.active ? 'highlight' : null,
                  ]"
                >
                  Venue: {{ event.venue }}
                </p>
              </a> -->
            </div>
          </div>
        </div>
      </div>
      <div :class="['tier-heading', 'space-up']">
        <span>Sponsors</span>
      </div>
      <CFlex
        v-for="(tiers, index) in sponsors2023"
        :key="index"
        direction="column"
      >
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

      <!-- <div :class="['tier-heading', 'space-up']">
        <span>Venue Partners</span>
      </div>
      <CFlex
        v-for="(tiers, index) in venuePartner2023"
        :key="index"
        direction="column"
      >
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
            v-for="(venue, index) in tiers.venuePartner"
            :key="index"
            :href="venue.url"
            target="_blank"
            :class="['sponsor animate-ease', venue.specialClass]"
            borderRadius="30px"
          >
            <img :src="venue.image" />
          </a>
        </CGrid>
      </CFlex> -->
    </CBox>
    <HeadingVue front="2022 City Meetup Series" back="MEETUPS" />
    <CBox :mx="{ base: '0rem', sm: '50px' }" mt="5rem">
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
      <div :class="['tier-heading', 'space-up']">
        <span>Previous Sponsors</span>
      </div>
      <CFlex
        v-for="(tiers, index) in sponsors2022"
        :key="index"
        direction="column"
      >
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

      <div :class="['tier-heading', 'space-up']">
        <span>Previous Venue Partners</span>
      </div>
      <CFlex
        v-for="(tiers, index) in venuePartner2022"
        :key="index"
        direction="column"
      >
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
            v-for="(venue, index) in tiers.venuePartner"
            :key="index"
            :href="venue.url"
            target="_blank"
            :class="['sponsor animate-ease', venue.specialClass]"
            borderRadius="30px"
          >
            <img :src="venue.image" />
          </a>
        </CGrid>
      </CFlex>
    </CBox>
  </ContainerVue>
</template>
<script>
import { CBox, CFlex, CGrid } from '@chakra-ui/vue'
import HeadingVue from './HeadingComponent.vue'
import ContainerVue from './Container.vue'
export default {
  components: {
    HeadingVue,
    ContainerVue,
    CFlex,
    CGrid,
    CBox,
  },
  data() {
    return {
      events2023: [
        {
          name: 'Indore City Meetup',
          image: require('~/assets/Meetup/2023/indore.png'),
          venue: 'TBD',
          date: '4th June 2023',
          time: 'TBD',
          url: 'https://g.page/Cowocoli-Coworkingspace?share',
          active: true,
          status: 'Registrations are live',
        },
        {
          name: 'Raipur City Meetup',
          image: require('~/assets/Meetup/2023/raipur.png'),
          venue: 'TBD',
          date: '10th June 2023',
          time: 'TBD',
          active: true,
          url: 'https://goo.gl/maps/D7VU6guZ8eBu3rJy5',
          status: 'Details to be announced soon',
        },
        {
          name: 'Nagpur City Meetup',
          image: require('~/assets/Meetup/2023/nagpur.png'),
          venue: 'TBD',
          date: '11th June 2023',
          time: 'TBD',
          active: true,
          url: 'https://goo.gl/maps/TjJ4piny2MhNd9a5A',
          status: 'Details to be announced soon',
        },
        {
          name: 'Chandigarh City Meetup',
          image: require('~/assets/Meetup/2023/chandigarh.png'),
          venue: 'TBD',
          date: '17th June 2023',
          time: 'TBD',
          active: true,
          url: 'https://goo.gl/maps/MtiVc153cHp7R7Bw6',
          status: 'Details to be announced soon',
        },
        {
          name: 'Guwahati City Meetup',
          image: require('~/assets/Meetup/2023/guwahati.png'),
          venue: 'TBD',
          date: '25th June 2023',
          time: 'TBD',
          active: true,
          url: 'https://goo.gl/maps/AV6NrfPcqwW6rct27',
          status: 'Details to be announced soon',
        },
        {
          name: 'Kolkata City Meetup',
          image: require('~/assets/Meetup/2023/kolkata.png'),
          venue: 'TBD',
          date: '1st July 2023',
          time: 'TBD',
          active: true,
          url: 'https://goo.gl/maps/PWhjTUtRPBqWQSNr6',
          status: 'Details to be announced soon',
        },
        {
          name: 'Chennai City Meetup',
          image: require('~/assets/Meetup/2023/chennai.png'),
          venue: 'TBD',
          date: '8th July 2023',
          time: 'TBD',
          active: true,
          url: 'https://goo.gl/maps/PWhjTUtRPBqWQSNr6',
          status: 'Details to be announced soon',
        },
        {
          name: 'Hyderabad City Meetup',
          image: require('~/assets/Meetup/2023/hyderabad.png'),
          venue: 'TBD',
          date: '15th July 2023',
          time: 'TBD',
          active: true,
          url: 'https://goo.gl/maps/PWhjTUtRPBqWQSNr6',
          status: 'Details to be announced soon',
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
      sponsors2023: [
        {
          sponsors: [
            {
              url: 'https://education.github.com/benefits?utm_source=2023-06-2023-07-HackThisFallCityMeetups2023',
              image: require('~/assets/sponsors/github.svg'),
            },
            {
              url: 'https://www.getunleash.io/',
              image: require('~/assets/sponsors/unleash.svg'),
            },
            {
              url: 'https://5ire.org/',
              image: require('~/assets/sponsors/5ire.svg'),
            },
            {
              url: 'https://www.storyblok.com/',
              image: require('~/assets/sponsors/storyblok.svg'),
            },
          ],
        },
      ],
      venuePartner2023: [
        {
          venuePartner: [
            {
              url: 'https://www.devx.work/',
              image:
                'https://assets.devx.work/images/press-room/devx-logo-white.svg',
            },
            {
              url: 'https://www.91springboard.com/',
              image: require('~/assets/Meetup/Venue/springboard.svg'),
            },
            {
              url: 'https://redbrickoffices.com/',
              image: require('~/assets/Meetup/Venue/red-brick-logo.svg'),
            },
            {
              url: 'https://www.thecircle.work/',
              image: require('~/assets/Meetup/Venue/the-circle-work.png'),
            },
          ],
        },
      ],
      sponsors2022: [
        {
          sponsors: [
            {
              url: 'https://education.github.com/discount_requests/student_application?utm_source=2022-04-2022-06-HackThisFallCityMeetups',
              image: require('~/assets/sponsors/github.svg'),
            },
            {
              url: 'https://atsign.com/',
              image: require('~/assets/sponsors/atsign.svg'),
            },
            {
              url: 'https://www.esamudaay.com/',
              image: require('~/assets/sponsors/eSamudaay.png'),
            },
            {
              url: 'https://symbl.ai/',
              image: require('~/assets/sponsors/symbl.svg'),
            },
            {
              url: 'https://hack2skill.com/',
              image: require('~/assets/sponsors/hack2skill.png'),
            },
            {
              url: 'https://www.communitycoldcoffee.com/',
              image: require('~/assets/sponsors/C3Universe.png'),
            },
            {
              url: 'https://hackclub.com/',
              image: require('~/assets/sponsors/hackclub.png'),
            },
          ],
        },
      ],
      venuePartner2022: [
        {
          venuePartner: [
            {
              url: 'https://www.devx.work/',
              image:
                'https://assets.devx.work/images/press-room/devx-logo-white.svg',
            },
            {
              url: 'https://www.91springboard.com/',
              image: require('~/assets/Meetup/Venue/springboard.svg'),
            },
            {
              url: 'https://redbrickoffices.com/',
              image: require('~/assets/Meetup/Venue/red-brick-logo.svg'),
            },
            {
              url: 'https://www.thecircle.work/',
              image: require('~/assets/Meetup/Venue/the-circle-work.png'),
            },
          ],
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
  padding: 1.25rem 1rem;
  background: #d04d29;
  border: 2px solid #f46d24;
  box-shadow: 2px 2px 0px #f46d24;
  border-radius: 12.4124px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1.1rem;
  color: white;

  @include respond-below(xs) {
    font-size: 0.9rem;
    padding: 1.5rem 1rem;
  }

  &:hover {
    background: rgb(244, 109, 36);
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

<template>
  <Container id="schedule">
    <section class="content-section">
      <HeadingVue front="Speaker Schedule" back="SCHEDULE" />
      <div class="contents">
        <div class="speakers-grid">
          <div
            v-for="(speaker, index) in speakers"
            :key="index"
            class="team-card"
          >
            <div class="top">
              <h4 class="title">{{ speaker.title }}</h4>
              <div class="speaker-names">
                {{ speaker.name }}
                <span v-if="speaker.name2">{{ ` and ${speaker.name2}` }}</span>
              </div>
            </div>
            <div class="middle">
              <div class="location">{{ `${speaker.location}` }}</div>
              <div class="time">{{ `${speaker.date} IST` }}</div>
            </div>
            <div class="bottom">
              <a
                v-if="speaker.buttonText"
                target="_blank"
                rel="noopener noreferrer"
                :href="
                  speaker.sessionUrl || 'https://www.youtube.com/c/HackThisFall'
                "
                class="cta-button smooth-transition discord"
              >
                {{ speaker.buttonText }}
              </a>
              <div class="speaker-img">
                <a
                  v-if="speaker.name2"
                  :href="speaker.url2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    :src="speaker.picture2"
                    alt="profile picture"
                    class="profile-pic"
                  />
                </a>
                <br />
                <a
                  :href="speaker.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    :src="speaker.picture"
                    alt="profile picture"
                    class="profile-pic"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
</template>

<script>
import dayjs from 'dayjs'
import Container from '~/components/Container'
import HeadingVue from '~/components/HeadingComponent'

export default {
  components: {
    Container,
    HeadingVue,
  },
  data() {
    return {
      speakers: [
        {
          title: 'Dear Performant App,',
          name: 'Nishu Goel',
          location: 'Virtual: Google Meet',
          sessionUrl: 'https://bit.ly/htf2-nishu',
          buttonText: 'WATCH NOW',
          date: '21 Jan 2023 20:30',
          endDate: '21 Jan 2023 21:30',
          url: 'https://twitter.com/TheNishuGoel',
          picture: require('~/assets/speakers/nishu.png'),
          rotation: 30,
        },
        // {
        //   title: 'Build a Twitter UI Clone using React JS',
        //   sessionUrl: 'https://bit.ly/htf2-praveen',
        //   name: 'Praveen Kumar',
        //   buttonText: 'WATCH NOW',
        //   date: '4 Sep 2021 18:00',
        //   endDate: '4 Sep 2021 19:30',
        //   url: 'https://praveen.science/',
        //   picture: require('~/assets/speakers/praveen.jpeg'),
        //   rotation: 30,
        // },
        {
          title: 'Sailing with Containers',
          location: 'Virtual: Google Meet',
          sessionUrl: 'https://bit.ly/htf2-gourav',
          name: 'Gourav Sharma',
          buttonText: 'WATCH NOW',
          date: '7 Sep 2021 19:00',
          endDate: '7 Sep 2021 20:00',
          url: 'https://twitter.com/rhcasharma',
          picture: require('~/assets/speakers/gourav.jpg'),
          rotation: 30,
        },
        {
          title: 'Living on the edge until your 30s',
          sessionUrl: 'https://bit.ly/htf2-narayanan',
          name: 'Narayanan S',
          buttonText: 'WATCH NOW',
          date: '9 Sep 2021 18:00',
          endDate: '9 Sep 2021 19:00',
          url: 'https://www.linkedin.com/in/chalkmeout/',
          location: 'Virtual: Google Meet',
          picture: require('~/assets/speakers/narayanan.png'),
          rotation: 30,
        },
        // {
        //   title: 'Integrating SAWO API In Your Project',
        //   sessionUrl: 'https://bit.ly/htf2-soumaya',
        //   name: 'Soumaya Ranjan',
        //   buttonText: 'WATCH NOW',
        //   date: '11 Sep 2021 19:00',
        //   endDate: '11 Sep 2021 20:00',
        //   url: 'https://www.linkedin.com/in/soumayaranjan/',
        //   picture: require('~/assets/speakers/soumaya.jpeg'),
        //   rotation: 30,
        // },
        // {
        //   title: 'Introduction to Computer Vision and Inspirit AI',
        //   sessionUrl: 'https://bit.ly/htf2-amanda',
        //   name: 'Amanda Somvilay',
        //   buttonText: 'WATCH NOW',
        //   date: '14 Sep 2021 20:00',
        //   endDate: '14 Sep 2021 21:00',
        //   url: 'https://twitter.com/hackthisfall',
        //   picture: require('~/assets/speakers/amanda.png'),
        //   rotation: 30,
        // },
        {
          title: 'Crash Course into the Jamstack with Next.js & Storyblok',
          name: 'Facundo Giuliani',
          location: 'Virtual: Google Meet',
          sessionUrl: 'https://bit.ly/htf2-storyblok-live',
          buttonText: 'WATCH NOW',
          date: '16 Sep 2021 19:00',
          endDate: '16 Sep 2021 20:30',
          url: 'https://twitter.com/facundozurdo',
          picture: require('~/assets/speakers/kate.jpeg'),
          rotation: 30,
          name2: 'Samuel Snopko',
          url2: 'https://twitter.com/samuelsnopko',
          picture2: require('~/assets/speakers/khushboo.jpg'),
        },
        // {
        //   title: 'Introduction to Decentralized Finance',
        //   sessionUrl: 'https://bit.ly/htf2-agoric-live',
        //   name: 'Rowland Graus',
        //   buttonText: 'WATCH NOW',
        //   date: '17 Sep 2021 20:30',
        //   endDate: '17 Sep 2021 21:00',
        //   url: 'https://twitter.com/rowlandgraus',
        //   picture: require('~/assets/speakers/rowland.jpeg'),
        //   rotation: 30,
        // },
        {
          title: 'Blockchain Is Ready For You',
          sessionUrl: 'https://bit.ly/htf2-agoric-live',
          name: 'Dean Tribble',
          buttonText: 'WATCH NOW',
          date: '17 Sep 2021 21:00',
          endDate: '17 Sep 2021 21:30',
          location: 'Virtual: Google Meet',
          url: 'https://twitter.com/deantribble',
          picture: require('~/assets/speakers/dean.jpeg'),
          rotation: 30,
        },
        {
          title: 'How to Quickly Build an NFT Application',
          sessionUrl: 'https://bit.ly/htf2-agoric-live',
          location: 'Virtual: Google Meet',
          name: 'Kate Sills',
          buttonText: 'WATCH NOW',
          date: '17 Sep 2021 21:30',
          endDate: '17 Sep 2021 22:00',
          url: 'https://twitter.com/kate_sills',
          picture: require('~/assets/speakers/kate.jpeg'),
          rotation: 30,
        },
        // {
        //   title: 'Azure Services for Your Hacks',
        //   sessionUrl: 'https://bit.ly/htf2-sashrika',
        //   name: 'Sashrika Kaur',
        //   buttonText: 'WATCH NOW',
        //   date: '18 Sep 2021 17:00',
        //   endDate: '18 Sep 2021 18:00',
        //   url: 'https://twitter.com/SashrikaKaur',
        //   picture: require('~/assets/speakers/sashrika.jpg'),
        //   rotation: 30,
        // },
        {
          title: 'Building Modern CMS Driven Web Application',
          sessionUrl: 'https://bit.ly/htf2-daniel',
          name: 'Daniel Phiri',
          buttonText: 'WATCH NOW',
          date: '21 Sep 2021 20:00',
          endDate: '21 Sep 2021 21:00',
          location: 'Virtual: Google Meet',
          url: 'https://twitter.com/malgamves',
          picture: require('~/assets/speakers/daniel.jpg'),
          rotation: 30,
        },
        {
          title: 'Getting started with Symbl.AI',
          sessionUrl: 'https://bit.ly/htf2-symbl-live',
          name: 'Akanksha Bhasin',
          location: 'Virtual: Google Meet',
          buttonText: 'WATCH NOW',
          date: '23 Sep 2021 21:00',
          endDate: '23 Sep 2021 22:00',
          url: 'https://www.linkedin.com/in/akankshabhasin',
          picture: require('~/assets/narratives/akanksha.jpeg'),
          rotation: 30,
          name2: 'Eric Giannini',
          url2: 'https://www.linkedin.com/in/unicornmobile',
          picture2: require('~/assets/narratives/akanksha.jpeg'),
        },
        {
          title: 'Use Google Sheets as backend for your project',
          sessionUrl: 'https://bit.ly/htf2-abel',
          name: 'Abel Mathew',
          buttonText: 'WATCH NOW',
          location: 'Virtual: Google Meet',
          date: '25 Sep 2021 17:00',
          endDate: '25 Sep 2021 18:00',
          url: 'https://twitter.com/DesignrKnight',
          picture: require('~/assets/narratives/abel.jpg'),
          rotation: 30,
        },
        {
          title: 'Unleashing the Power of Communities',
          sessionUrl: 'https://bit.ly/htf2-khushboo',
          name: 'Khushboo Verma',
          buttonText: 'WATCH NOW',
          date: '26 Sep 2021 17:30',
          location: 'Virtual: Google Meet',
          endDate: '26 Sep 2021 18:00',
          url: 'https://twitter.com/khushbooverma_',
          picture: require('~/assets/speakers/khushboo.jpg'),
          rotation: 30,
        },
        {
          title: 'Using GitHub to win Hackathons',
          sessionUrl: 'https://bit.ly/htf2-eddie',
          location: 'Virtual: Google Meet',
          name: 'Eddie Jaoude',
          buttonText: 'WATCH NOW',
          date: '27 Sep 2021 18:30',
          endDate: '27 Sep 2021 19:30',
          url: 'https://twitter.com/eddiejaoude/',
          picture: require('~/assets/speakers/eddie.jpg'),
          rotation: 30,
        },
        {
          title: 'Move your Local Development Environment to the Cloud',
          sessionUrl: 'https://bit.ly/htf2-pauline',
          name: 'Pauline Narvas',
          buttonText: 'WATCH NOW',
          date: '30 Sep 2021 16:00',
          location: 'Virtual: Google Meet',
          endDate: '30 Sep 2021 16:30',
          url: 'https://twitter.com/paulienuh',
          picture: require('~/assets/speakers/pauline.jpg'),
          rotation: 30,
        },
        // {
        //   title: "Deploy using Filebase's S3 Compatible API",
        //   sessionUrl: 'https://bit.ly/htf2-filebase-live',
        //   name: 'Zac Cohen',
        //   buttonText: 'WATCH NOW',
        //   date: '5 Oct 2021 18:30',
        //   endDate: '5 Oct 2021 19:30',
        //   url: 'https://www.linkedin.com/in/zaccohen427/',
        //   picture: require('~/assets/speakers/zac.jpg'),
        //   rotation: 30,
        // },
      ],
    }
  },
  mounted() {
    const now = dayjs()
    const alreadyDone = []
    const toBeLive = []
    const currentlyLive = []
    this.speakers.forEach((speaker) => {
      const startDate = dayjs(speaker.date, 'D MMM YYYY HH:mm')
      const endDate = dayjs(speaker.endDate, 'D MMM YYYY HH:mm')

      if (endDate.isBefore(now)) {
        speaker.buttonText = 'Watch Now'
        alreadyDone.push(speaker)
      }

      if (startDate.isAfter(now)) {
        speaker.buttonText = 'To Be Live'
        toBeLive.push(speaker)
      }

      if (startDate.isBefore(now) && endDate.isAfter(now)) {
        speaker.buttonText = 'Live Now'
        currentlyLive.push(speaker)
      }
    })

    this.speakers = [...currentlyLive, ...toBeLive, ...alreadyDone]
  },
}
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  font-family: 'Poppins';

  .contents {
    margin: 5rem 4rem;

    @include respond-below(sm) {
      padding: 1rem 0rem;
    }

    .speakers-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 1.5rem;
      row-gap: 1.5rem;

      @include respond-below(md) {
        grid-template-columns: repeat(2, 1fr);
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(1, 1fr);
      }

      .team-card {
        display: flex;
        flex-direction: column;
        // box-shadow: rgba(255, 107, 0, 0.07) 0px 0px 10px 2px;
        border-radius: 1rem;
        padding: 1rem;
        padding-bottom: 1.5rem;
        justify-content: space-between;
        align-items: flex-start;
        background: linear-gradient(
          180deg,
          #142137 0%,
          #0b121f 99.99%,
          rgba(20, 33, 55, 0) 100%
        );
        max-width: 100%;
        min-width: 100%;

        .top {
          font-weight: 700;
          .title {
            font-size: 1.2rem;
            color: #f46d24;

            @include respond-below(sm) {
              font-size: 1rem;
            }
          }

          .speaker-names {
            //   margin-top: 1rem;
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.5);
          }
        }

        .time {
          font-size: 1rem;
          color: #fff;
        }

        .location {
          color: #fff;
          margin-top: 1.5rem;
        }

        .speaker-img {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          height: 100%;
          border-radius: 50%;

          .profile-pic {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-left: 0.5rem;

            @include respond-below(md) {
              width: 110px;
              height: 110px;
            }

            @include respond-below(sm) {
              width: 100px;
              height: 100px;
            }
          }
        }
      }
    }
  }

  .bottom {
    display: flex;
    flex-direction: row;
    margin-top: 0.75rem;
    margin-bottom: 0px;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    &.center {
      justify-content: center;
    }

    a {
      text-decoration: none;
    }

    .cta-button {
      display: flex;
      justify-content: center;
      padding: 0.4rem 0.8rem;
      background: #d04d29;
      border: 2px solid #f46d24;
      align-items: center;
      box-shadow: 2px 2px 0px #f46d24;
      border-radius: 12.4124px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 1.1rem;
      color: white;

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
    }
  }
}
</style>

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
          title: 'Web3 Infrastructure Automation with Zeeve',
          name: 'Sankalp Sharma',
          location: '',
          // sessionUrl: 'https://bit.ly/htf3-sankalp',
          buttonText: 'WATCH NOW',
          date: '23 Jan 2023 19:00',
          endDate: '23 Jan 2023 20:00',
          url: 'https://www.linkedin.com/in/sankalp-sharma-502008139',
          picture: require('~/assets/speakers/sankalp.jpeg'),
        },
        {
          title: 'Design Sense for Developers',
          name: 'Shitiz Aggarwal',
          location: '',
          // sessionUrl: 'https://bit.ly/htf3-sankalp',
          buttonText: 'WATCH NOW',
          date: '24 Jan 2023 19:00',
          endDate: '24 Jan 2023 20:00',
          url: 'https://twitter.com/Shitiz_Agg',
          picture: require('~/assets/team/shitiz.jpg'),
        },
        {
          title: 'The Create-React-App of IoT',
          name: 'Ritvi Mishra',
          location: '',
          // sessionUrl: 'https://bit.ly/htf3-sankalp',
          buttonText: 'WATCH NOW',
          date: '25 Jan 2023 18:00',
          endDate: '25 Jan 2023 19:00',
          url: 'https://twitter.com/frenzyritz13',
          picture: require('~/assets/speakers/ritvi.jpg'),
        },
        {
          title: 'Beginner’s Guide to Full Stack Deployment',
          name: 'Apoorv Dwivedi',
          location: '',
          // sessionUrl: 'https://bit.ly/htf3-sankalp',
          buttonText: 'WATCH NOW',
          date: '26 Jan 2023 15:00',
          endDate: '26 Jan 2023 16:00',
          url: 'https://www.linkedin.com/in/apoorvdwi',
          picture: require('~/assets/team/apoorv.jpg'),
        },
        // {
        //   title: 'Web3 Infrastructure Automation with Zeeve',
        //   name: 'Sankalp Sharma',
        //   // location: 'Virtual: Google Meet',
        //   // sessionUrl: 'https://bit.ly/htf3-sankalp',
        //   buttonText: 'WATCH NOW',
        //   date: '27 Jan 2023 19:00',
        //   endDate: '27 Jan 2023 20:00',
        //   url: 'https://www.linkedin.com/in/sankalp-sharma-502008139',
        //   picture: require('~/assets/speakers/nishu.png'),
        // },
        // {
        //   title: 'Sailing with Containers',
        //   location: 'Virtual: Google Meet',
        //   sessionUrl: 'https://bit.ly/htf2-gourav',
        //   name: 'Shitiz Aggarwal',
        //   buttonText: 'WATCH NOW',
        //   date: '23 Jan 2023 19:00',
        //   endDate: '23 Jan 2023 20:00',
        //   url: 'https://twitter.com/rhcasharma',
        //   picture: require('~/assets/speakers/gourav.jpg'),
        // },
        // {
        //   title: 'Living on the edge until your 30s',
        //   sessionUrl: 'https://bit.ly/htf2-narayanan',
        //   name: 'Narayanan S',
        //   buttonText: 'WATCH NOW',
        //   date: '23 Jan 2023 19:00',
        //   endDate: '23 Jan 2023 20:00',
        //   url: 'https://www.linkedin.com/in/chalkmeout/',
        //   location: 'Virtual: Google Meet',
        //   picture: require('~/assets/speakers/narayanan.png'),
        // },
        // {
        //   title: 'Crash Course into the Jamstack with Next.js & Storyblok',
        //   name: 'Facundo Giuliani',
        //   location: 'Virtual: Google Meet',
        //   sessionUrl: 'https://bit.ly/htf2-storyblok-live',
        //   buttonText: 'WATCH NOW',
        //   date: '16 Sep 2021 19:00',
        //   endDate: '16 Sep 2021 20:30',
        //   url: 'https://twitter.com/facundozurdo',
        //   picture: require('~/assets/speakers/kate.jpeg'),
        //   name2: 'Samuel Snopko',
        //   url2: 'https://twitter.com/samuelsnopko',
        //   picture2: require('~/assets/speakers/khushboo.jpg'),
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
    padding: 5rem 4rem;

    @include respond-below(sm) {
      padding: 1rem 1rem;
    }

    .speakers-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 1.5rem;
      row-gap: 1.5rem;

      @include respond-below(lg) {
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
              width: 60px;
              height: 60px;
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

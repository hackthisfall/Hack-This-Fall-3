<template>
  <div class="center">
    <div class="outer-container">
      <div class="main-container">
        <div class="top">
          <div class="timer">
            <span class="text">Hacking ends in</span>
            <span class="countdown">{{ timer }}</span>
          </div>
          <div class="spotify">
            <img id="spotify-playing" :src="spotify" />
          </div>
        </div>
        <div class="bottom">
          <div class="schedule">
            <div class="now">
              <span class="heading">Happening now</span>
              <span class="title">Welcome & Introduction Introduction</span>
              <span class="person">Siddharth Dayalwal</span>
            </div>
            <hr />
            <div class="next">
              <span class="heading">Upcoming Next</span>
              <div class="details">
                <div class="left">
                  <span class="title">Introduction to Git &amp; GitHub</span>
                  <span class="person">Aayush Sharma</span>
                </div>
                <div class="right">23:00</div>
              </div>
            </div>
          </div>
          <iframe
            allowfullscreen
            id="wallsio-iframe"
            src="https://my.walls.io/m5k73?nobackground=1&amp;show_header=0"
            style="border: 0; height: 70vh; width: 100%"
            loading="lazy"
            title="Hack This Fall 3.0 Social Wall"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'IndexPage',
  components: {},
  data() {
    return {
      timer: '36h 00m 00s',
      hackathonEnds: '2023-02-05T08:00:00',
      hackathonBegins: '2023-02-03T20:00:00',
      spotify:
        'https://parasg1999-spotify.vercel.app/api/spotify?background_color=000&border_color=fff',
    }
  },
  mounted() {
    this.setTimer()

    setInterval(this.setTimer, 1000)

    setInterval(this.updateSpotify, 10000)
  },
  methods: {
    setTimer() {
      const now = dayjs()
      const hackathonEnds = dayjs(this.hackathonEnds)

      const hackingEndsInHours = hackathonEnds.diff(now, 'hour')
      const hackingEndsInMinutes =
        hackathonEnds.diff(now, 'minute') - hackingEndsInHours * 60
      const hackingEndsInSeconds =
        hackathonEnds.diff(now, 'second') -
        hackingEndsInHours * 3600 -
        hackingEndsInMinutes * 60

      this.timer = `${hackingEndsInHours}h ${hackingEndsInMinutes}m ${hackingEndsInSeconds}s`
    },
    updateSpotify() {
      const spotifyPlaying = document.getElementById('spotify-playing')

      spotifyPlaying.src = `${this.spotify}&random=${Math.floor(
        Date.now() / 1000
      )}`
    },
  },
}
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
}

.outer-container {
  width: 100vw;
  min-height: 100vh;
  background: #050c19;
  padding: 1rem;
  color: white;
  font-family: 'Poppins';

  .main-container {
    width: 100%;
    border-radius: 32px;
    min-height: 100%;
    background-image: url('~/assets/background.png');
    background-repeat: no-repeat;
    background-size: 120%;
    background-position-x: -1rem;
    padding: 3rem 2rem;

    @include respond-below(xs) {
      margin-top: 1rem;
    }

    .top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .timer {
        display: flex;
        flex-direction: column;
        font-weight: 700;
        .text {
          color: #f46d24;
          font-size: 2rem;
        }

        .countdown {
          background: linear-gradient(
              103.86deg,
              #2064da 5.82%,
              #97c0cb 23.45%,
              rgba(255, 254, 121, 0.9) 53.02%,
              #fe836a 85.52%,
              #d04d29 97.39%
            ),
            #ffffff;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 5rem;
          margin-top: -1rem;
        }
      }

      .spotify {
      }
    }

    .bottom {
      display: flex;
      flex-direction: row;
      //   align-items: center;

      .schedule {
        width: 60vw;
        max-width: 30vw;
        display: flex;
        flex-direction: column;
        margin-top: 10rem;

        .now {
          display: flex;
          flex-direction: column;
          font-weight: 700;

          .heading {
            color: #f46d24;
          }

          .title {
            margin-top: 1rem;
            margin-bottom: 1rem;
            font-size: 2.25rem;
            line-height: 2rem;
          }

          .person {
            font-weight: 400;
            opacity: 0.6;
            margin-bottom: 1rem;
          }
        }

        .next {
          display: flex;
          flex-direction: column;
          margin-top: 1rem;
          font-weight: 700;

          .heading {
            color: #f46d24;
          }

          .details {
            display: flex;
            flex-direction: row;
            align-items: center;

            .left {
              display: flex;
              flex-direction: column;
              .title {
                margin-top: 1rem;
                margin-bottom: 0.5rem;
                font-size: 1.75rem;
                line-height: 2rem;
              }

              .person {
                font-weight: 400;
                opacity: 0.6;
              }
            }

            .right {
              font-size: 2rem;
              font-weight: 600;
              padding: 1rem 0rem 1rem 1rem;
              border-left: 1px solid #d9d9d9;
              margin-left: 1rem;
            }
          }
        }
      }

      iframe {
        margin-left: 2rem;
      }
    }
  }
}
</style>

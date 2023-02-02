<template>
  <Container id="schedule">
    <section class="content-section">
      <HeadingVue front="Agenda" back="SCHEDULE" />
      <div class="contents">
        <span
          v-for="(schedule, index) in scheduleComplete"
          :key="index"
          :class="[
            index === selectedIndex ? 'activeDate' : '',
            'allHeaders',
            index === 0 ? 'first' : '',
          ]"
          @click="changeShownSchedule(index)"
        >
          <div class="headers">{{ schedule.header }}</div>
        </span>
        <div class="disclaimer">
          * All times displayed in India Standard Time (UTC+05:30).
        </div>
        <div class="daily-schedule">
          <div
            v-for="(event, index) in scheduleComplete[selectedIndex].items"
            :key="index"
            class="single-event"
          >
            <div class="date-time">
              <div class="dot"></div>
              <span class="time">
                {{ event.time }}
              </span>
              <span class="duration">
                {{ event.durationInMins }}
                {{ event.durationInMins ? 'MINS' : '' }}
              </span>
            </div>
            <div :class="['description', event.type]">
              <div class="speaker">
                <img
                  v-if="event.speaker !== undefined"
                  :src="event.speaker.picture"
                  class="avatar"
                />
                <div class="details">
                  <span class="title">
                    {{ event.title }}
                  </span>
                  <span class="name"> {{ event.location }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
</template>

<script>
import Container from '~/components/Container'
import HeadingVue from '~/components/HeadingComponent'

export default {
  components: {
    Container,
    HeadingVue,
  },
  data() {
    return {
      selectedIndex: 0,
      scheduleComplete: [
        {
          header: '3rd Feb 2023',
          items: [
            {
              title: 'Check-In & Welcome Kit',
              time: '15:00',
              durationInMins: '90',
              location: 'Reception Area',
            },
            {
              title: 'Light Snacks & Ice Breaker',
              time: '16:00',
              durationInMins: '60',
              location: 'Canteen Area',
            },
            {
              title: 'Opening Ceremony Welcome',
              time: '17:30',
              durationInMins: '30',
              location: 'Hacking Area',
            },
            {
              title: 'Storyblok Workshop',
              time: '18:05',
              durationInMins: '40',
              location: 'Hacking Area',
            },
            {
              title: '5ire Workshop',
              time: '18:50',
              durationInMins: '40',
              location: 'Hacking Area',
            },
            {
              title: 'Hacking Begins',
              time: '20:00',
              location: 'Hacking Area',
            },
            {
              title: 'Dinner',
              time: '21:30',
              durationInMins: '60',
              location: 'Canteen Area',
            },
            {
              title: 'GitHub Workshop',
              time: '23:00',
              durationInMins: '40',
              location: 'Hacking Area',
            },
          ],
        },
        {
          header: '4th Feb 2023',
          items: [
            {
              title: 'Mentoring Round (Ideation)',
              time: '00:00',
              durationInMins: '60',
              location: 'Hacking Area',
            },
            {
              title: 'Midnight Snacks',
              time: '01:30',
              durationInMins: '30',
              location: 'Hacking Area',
            },
            {
              title: 'Karaoke Mini Event',
              time: '02:30',
              durationInMins: '60',
              location: 'Hacking Area',
            },
            {
              title: 'Morning Drill',
              time: '06:00',
              durationInMins: '15',
              location: 'Hacking Area',
            },
            {
              title: 'Breakfast',
              time: '07:00',
              durationInMins: '60',
              location: 'Canteen Area',
            },
            {
              title: 'ApyHub Workshop',
              time: '10:00',
              durationInMins: '40',
              location: 'Hacking Area',
            },
            {
              title: 'Postman Workshop',
              time: '11:00',
              durationInMins: '40',
              location: 'Hacking Area',
            },
            {
              title: 'Mentoring Round (Implementation)',
              time: '12:00',
              durationInMins: '60',
              location: 'Hacking Area',
            },
            {
              title: 'Lunch',
              time: '13:30',
              durationInMins: '60',
              location: 'Canteen Area',
            },
            {
              title: 'MLH Mini-Event',
              time: '15:00',
              durationInMins: '40',
              location: 'Hacking Area',
            },
            {
              title: 'Light Snacks',
              time: '16:00',
              durationInMins: '60',
              location: 'Canteen Area',
            },
            {
              title: 'Snyk Cybersecurity Challenge',
              time: '18:00',
              durationInMins: '40',
              location: 'Hacking Area',
            },
            {
              title: 'Red Bull Mini-Event',
              time: '19:00',
              durationInMins: '60',
              location: 'Hacking Area',
            },
            {
              title: 'Dinner',
              time: '21:30',
              durationInMins: '60',
              location: 'Canteen Area',
            },
            {
              title: 'Mentoring Round (Final)',
              time: '23:00',
              durationInMins: '60',
              location: 'Hacking Area',
            },
          ],
        },
        {
          header: '5th Feb 2023',
          items: [
            {
              title: 'Midnight Snacks',
              time: '01:30',
              durationInMins: '30',
              location: 'Hacking Area',
            },
            {
              title: 'Soft Submission',
              time: '06:30',
              location: 'Hacking Area',
            },
            {
              title: 'Hacking Ends / Hard Deadline',
              time: '08:00',
              location: 'Hacking Area',
            },
            {
              title: 'Breakfast',
              time: '08:00',
              durationInMins: '60',
              location: 'Canteen Area',
            },
            {
              title: 'Judging Begins',
              time: '10:00',
              durationInMins: '180',
              location: 'Hacking Area',
            },
            {
              title: 'Lunch',
              time: '13:00',
              durationInMins: '60',
              location: 'Canteen Area',
            },
            {
              title: 'Closing Ceremony',
              time: '14:30',
              durationInMins: '30',
              location: 'Hacking Area',
            },
            {
              title: 'Photography & Good Byes',
              time: '15:00',
              durationInMins: '30',
              location: 'Hacking Area',
            },
          ],
        },
      ],
    }
  },
  methods: {
    changeShownSchedule(index) {
      this.selectedIndex = index
    },
  },
}
</script>

<style lang="scss" scoped>
.content-section {
  flex-direction: column;
  font-family: 'Poppins';
  font-weight: 600;
  margin-top: 2rem;

  .contents {
    margin-top: 5rem;

    .allHeaders {
      @media (max-width: 465px) {
        margin-left: 0em;
      }

      &.activeDate {
        .headers {
          background-color: #fff;
          color: #0c1420;
        }
      }

      .headers {
        margin-top: 0.2em;
        display: inline-block;
        padding: 0.9rem 1rem;
        background-color: #3d424c;
        color: #0c1420;
        cursor: pointer;
        margin-left: 0.75rem;
        border-radius: 0.6rem;

        @include respond-below(xs) {
          margin-left: 1rem;
          margin-right: 1rem;
          max-width: 100%;
          min-width: 80vw;
          margin-top: 1rem;
          text-align: center;
        }
      }

      &.first {
        .headers {
          margin-left: 0rem;

          @include respond-below(xs) {
            margin-left: 1rem;
            margin-right: 1rem;
            margin-top: 0rem;
          }
        }
      }
    }

    .allHeaders:nth-of-type(1) {
      margin-left: 0em;
    }

    .disclaimer {
      color: #f46d24;
      font-style: italic;
      font-size: 0.8rem;
      margin-top: 0.6rem;
      margin-bottom: 1rem;
    }

    .daily-schedule {
      margin-bottom: 1em;
      color: white;
      text-transform: uppercase;
    }

    .single-event {
      display: flex;
      flex-direction: row;
      //   margin-top: 0.6em;

      .date-time {
        border-left: 2px solid white;
        position: relative;

        // background-color: #feede3;
        display: flex;
        flex-direction: column;
        padding: 1em 1em 1em 1em;
        margin-left: 2rem;
        // text-align: right;
        min-width: 8rem;

        @include respond-below(sm) {
          padding: 1.5em 1em 1.5em 1.5em;
        }

        .dot {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          min-width: 0.55rem;
          min-height: 0.55rem;
          margin-left: -1.32rem;
          margin-top: 0.5rem;

          @include respond-below(sm) {
            margin-left: -1.8rem;
          }
        }

        .time {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .duration {
          color: #f46d24;
          font-weight: 400;
        }
      }

      .description {
        // background-color: #feede3;
        flex: 1;
        display: flex;
        justify-content: space-between;
        margin-left: 1rem;

        @include respond-below(sm) {
          padding-left: 1em;
        }

        .speaker {
          display: flex;
          align-items: center;

          @include respond-below(md) {
            padding-right: 0.5em;
          }

          img.avatar {
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            margin-right: 2rem;

            @include respond-below(sm) {
              width: 3rem;
              height: 3rem;
              margin-right: 1em;
            }
          }
          .details {
            display: flex;
            flex-direction: column;
            justify-content: center;
            line-height: 1.5rem;

            .title {
              font-size: 1.2rem;
              letter-spacing: 0.1rem;
              font-weight: 700;

              @include respond-below(sm) {
                letter-spacing: initial;
                font-size: 1em;
              }
            }

            .name {
              //   margin-top: -0.5rem;
              color: rgba(255, 255, 255, 0.6);

              @include respond-below(sm) {
                font-size: 0.8em;
              }
            }
          }
        }
      }
    }
  }
}
</style>

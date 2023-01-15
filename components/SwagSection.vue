<template>
  <div>
    <section class="content-section">
      <HeadingVue front="Swag Store" back="SWAGS" />
      <div class="contents mt-4">
        <div class="about">
          <p>
            Everyone loves swags so that they can brag about them. We at Hack
            This Fall love swags too. What if we tell you that you can earn cool
            swags just by doing some interesting and fun challenges?
            <br /><br />
            We have designed various challenges especially for you and by
            completing them, you can earn points for yourself. All the
            challenges are listed below with their descriptions. Read them out
            carefully. New challenges will be added with time and announcements
            for the same will be done in our
            <a target="_blank" href="https://discord.hackthisfall.tech/"
              >Discord</a
            >, so make sure you join us there. <br /><br />
            Once you complete a Challenge, make sure you fill out our
            <a target="_blank" href="https://bit.ly/htf2-challenge"
              >Challenge Form</a
            >, you can edit the form responses so feel free to submit one task
            and return to edit the form to submit another task. Every task has
            points and <span style="color: rgb(233 83 34)">Top-3</span> people
            on the leaderboard after the hackathon ends will stand a chance to
            win an outstanding exclusive
            <span style="color: rgb(233 83 34)"
              >Hack This Fall Merchandise Swag Pack</span
            >
            delivered at your doorstep. The deadline to complete the challenges
            is 25th October 2021 11:59 PM IST.
          </p>
        </div>
        <div class="container-fluid">
          <div
            v-for="(challenge, index) in challenges"
            :key="index"
            class="challenges"
          >
            <HeadingVue :front="challenge.heading" back="TASKS" />
            <div
              class="row m-lg-3 m-0 justify-content-center text-center text-lg-left challenge-grid"
            >
              <div
                v-for="(task, index) in challenge.tasks"
                :key="index"
                class="col-10 col-md-5 col-lg-3 m-2 m-sm-2 m-xl-4 panel smooth-transition-1"
              >
                <div class="col-12 my-2 title">
                  {{ task.heading }}
                </div>
                <div class="col-12 mb-2 desc" v-html="task.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeadingVue from '~/components/HeadingComponent'

export default {
  components: {
    HeadingVue,
  },
  data() {
    return {
      challenges: [
        {
          heading: 'Hack This Fall Tasks',
          tasks: [
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
          ],
        },
        {
          heading: 'Community Tasks',
          tasks: [
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
          ],
        },
        {
          heading: 'Sponsor Tasks',
          tasks: [
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
            {
              heading: 'Augmented & Virtual Reality',
              content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.dolor do amet sint.Amet minim mollit non deserunt ',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped src="~/styles/bootstrap.min.css"></style>

<style lang="scss" scoped>
a {
  color: rgba(233, 83, 34, 1);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  font-family: 'Poppins';

  a {
    color: rgba(233, 83, 34, 1);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: rgba(233, 83, 34, 1);
    }
  }

  .panel {
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    font-family: 'Poppins';
    background: linear-gradient(
      180deg,
      #142137 0%,
      #0b121f 99.99%,
      rgba(20, 33, 55, 0) 100%
    );

    min-width: 29%;

    .title {
      font-size: 1.6rem;
      line-height: 1.75rem;
      font-weight: 700;
    }

    .desc {
      font-size: 0.8rem;
      text-align: justify;
      line-height: 1.4rem;
    }
  }

  .smooth-transition {
    -webkit-transition: all 1.1s ease;
    -moz-transition: all 1.1s ease;
    -o-transition: all 1.1s ease;
    transition: all 1.1s ease;
  }

  .smooth-transition-1 {
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  .contents {
    color: white;

    .about {
      margin: auto;
      margin-top: 4rem;
      width: 90%;
      background: linear-gradient(
        180deg,
        #142137 0%,
        #0b121f 99.99%,
        rgb(20, 33, 55) 100%
      );
      border-radius: 1rem;
      margin-bottom: 2rem;

      p {
        padding: 2rem;
        // margin: 1rem 1rem 2rem;
        font-size: 1rem;

        @include respond-below(md) {
          padding-top: 20px;
        }
      }
    }

    .challenge-grid {
      margin-top: 4rem !important;
    }

    @include respond-below(xs) {
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>

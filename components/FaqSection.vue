<template>
  <ContainerVue id="faq" name="faq">
    <HeadingVue front="Questions" back="FAQs" />
    <CFlex mt="5rem" :mx="{ base: '1rem', sm: '3.125rem' }" justify="center">
      <CGrid
        column-gap="3rem"
        :template-columns="{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }"
        align-items="start"
      >
        <CGrid
          template-columns="repeat(1, 1fr)"
          :display="{ base: 'unset', sm: 'none' }"
        >
          <div
            v-for="(faq, index) in FAQs"
            :key="index"
            :data-card-id="index"
            :class="[
              'card',
              faq.isOpen ? null : 'hidden',
              index === 0 ? 'curved-up' : null,
              index === FAQs.length - 1 ? 'curved-down' : null,
            ]"
          >
            <div class="texts" @click="toggleFAQItem(faq)">
              <span class="heading">
                <span class="number">0{{ index + 1 }}</span>
                <h4 class="title">
                  {{ faq.title }}
                </h4>
              </span>
              <div class="icon">
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.55049 1.13057C8.15997 0.740046 7.5268 0.740046 7.13628 1.13057L0.772316 7.49453C0.381792 7.88506 0.381792 8.51822 0.772316 8.90874C1.16284 9.29927 1.79601 9.29927 2.18653 8.90874L7.84338 3.25189L13.5002 8.90874C13.8908 9.29927 14.5239 9.29927 14.9145 8.90874C15.305 8.51822 15.305 7.88506 14.9145 7.49453L8.55049 1.13057ZM8.84338 2.83768V1.83768H6.84338V2.83768H8.84338Z"
                  />
                </svg>
              </div>
            </div>
            <div class="answer">
              <div v-html="faq.content"></div>
            </div>
          </div>
        </CGrid>
        <CGrid
          template-columns="repeat(1, 1fr)"
          :display="{ base: 'none', sm: 'unset' }"
        >
          <div
            v-for="(faq, index) in FAQs.slice(0, FAQs.length / 2)"
            :key="index"
            :data-card-id="index"
            :class="[
              'card',
              faq.isOpen ? null : 'hidden',
              index === 0 ? 'curved-up' : null,
              index === Math.floor(FAQs.length / 2) - 1 ? 'curved-down' : null,
            ]"
          >
            <div class="texts" @click="toggleFAQItem(faq)">
              <span class="heading">
                <span class="number">0{{ index + 1 }}</span>
                <h4 class="title">
                  {{ faq.title }}
                </h4>
              </span>
              <div class="icon">
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.55049 1.13057C8.15997 0.740046 7.5268 0.740046 7.13628 1.13057L0.772316 7.49453C0.381792 7.88506 0.381792 8.51822 0.772316 8.90874C1.16284 9.29927 1.79601 9.29927 2.18653 8.90874L7.84338 3.25189L13.5002 8.90874C13.8908 9.29927 14.5239 9.29927 14.9145 8.90874C15.305 8.51822 15.305 7.88506 14.9145 7.49453L8.55049 1.13057ZM8.84338 2.83768V1.83768H6.84338V2.83768H8.84338Z"
                  />
                </svg>
              </div>
            </div>
            <div class="answer">
              <div v-html="faq.content"></div>
            </div>
          </div>
        </CGrid>
        <CGrid
          template-columns="repeat(1, 1fr)"
          :display="{ base: 'none', sm: 'unset' }"
        >
          <div
            v-for="(faq, index) in FAQs.slice(-(FAQs.length / 2))"
            :key="index"
            :data-card-id="index"
            :class="[
              'card',
              faq.isOpen ? null : 'hidden',
              index === 0 ? 'curved-up' : null,
              index === Math.floor(FAQs.length / 2) - 1 ? 'curved-down' : null,
            ]"
          >
            <div class="texts" @click="toggleFAQItem(faq)">
              <span class="heading">
                <span class="number">0{{ index + 1 }}</span>
                <h4 class="title">
                  {{ faq.title }}
                </h4>
              </span>
              <div class="icon">
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.55049 1.13057C8.15997 0.740046 7.5268 0.740046 7.13628 1.13057L0.772316 7.49453C0.381792 7.88506 0.381792 8.51822 0.772316 8.90874C1.16284 9.29927 1.79601 9.29927 2.18653 8.90874L7.84338 3.25189L13.5002 8.90874C13.8908 9.29927 14.5239 9.29927 14.9145 8.90874C15.305 8.51822 15.305 7.88506 14.9145 7.49453L8.55049 1.13057ZM8.84338 2.83768V1.83768H6.84338V2.83768H8.84338Z"
                  />
                </svg>
              </div>
            </div>
            <div class="answer">
              <div v-html="faq.content"></div>
            </div>
          </div>
        </CGrid>
      </CGrid>
    </CFlex>
  </ContainerVue>
</template>
<script>
import { CGrid, CFlex } from '@chakra-ui/vue'
import HeadingVue from './HeadingComponent.vue'
import ContainerVue from './Container.vue'

export default {
  components: {
    HeadingVue,
    ContainerVue,
    CGrid,
    CFlex,
  },
  data() {
    return {
      currentIndex: 0,
      FAQs: [
        {
          isOpen: false,
          title: 'What is a hackathon?',
          content:
            'Hackathons are an incredible way to bring your community together to learn new skills, build amazing projects, and share ideas.',
        },
        {
          isOpen: false,
          title: 'Where and When is Hack This Fall?',
          content:
            'Hack This Fall is a virtual 48-hours hackathon to be happening on 22nd to 24th October, 2021.',
        },
        {
          isOpen: false,
          title: 'Can I submit my previous project?',
          content:
            "We apologize, but all hackathon's projects should be developed during the event from scratch. We want honest conditions for all hackers. That's why all code should be done during the hackathon.",
        },
        {
          isOpen: false,
          title: 'Who can attend a hackathon?',
          content:
            'Anyone who has an interest in technology can attend a hackathon to learn, build & share. You  should also be of age of 13 and above.',
        },
        {
          isOpen: false,
          title: 'Can beginners participate?',
          content:
            'Absolutely. We will have plenty of mentors and resources available, along with several workshops targeted for beginners. Come learn and experience your first hackathon at Hack This Fall.',
        },
        {
          isOpen: false,
          title: 'Can we form teams?',
          content:
            "Most definitely! We believe in collaboration and encourage hackers to work in teams of up to minimum 2 and maximum 4 members. You may opt-in to team formation through our <a style='color: rgba(233, 83, 34, 1);' href='https://discord.hackthisfall.tech/' rel='noopener noreferrer' target='_blank'>Discord Server</a>. Every hacker must be a part of only one team and submit only one project.",
        },
        {
          isOpen: false,
          title: 'Where do I need to submit my project?',
          content:
            "First register on our <a style='color: rgba(233, 83, 34, 1);' href='https://hackthisfall.devpost.com/' rel='noopener noreferrer' target='_blank'>Devpost page</a>. Once the hackathon starts, you will be able to create the project there. To become eligible for prizes, you must submit your project before the deadline.",
        },
        {
          isOpen: false,
          title: 'Who keeps ownership of the projects?',
          content:
            'The hackers building the project will keep full ownership of the project as it is their intellectual property.',
        },
        {
          isOpen: false,
          title: 'What is the Code of Conduct?',
          content:
            "We want to ensure a positive experience for all participants. We will be following MLH’s Code of Conduct, we encourage you to read it <a style='color: rgba(233, 83, 34, 1);' href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf' rel='noopener noreferrer' target='_blank'>here</a>.",
        },
        {
          isOpen: false,
          title: 'More Questions?',
          content:
            "Join our Hacker Community Discord Server <a style='color: rgba(233, 83, 34, 1);' href='https://discord.hackthisfall.tech/' rel='noopener noreferrer' target='_blank'>here</a>. Ask any other questions you have and connect with a larger community. Looking forward to welcoming you.",
        },
      ],
    }
  },
  methods: {
    toggleFAQItem(faq) {
      if (faq.isOpen) {
        faq.isOpen = false
      } else {
        for (let index = 0; index < this.FAQs.length; index++) {
          const element = this.FAQs[index]
          element.isOpen = false
        }

        faq.isOpen = true
      }
    },
  },
}
</script>
<style lang="scss" scoped>
#faq {
  margin-top: 4rem;
  padding-top: 4rem;

  @include respond-below(mobile) {
    padding-top: 4rem;
  }
}

.card {
  flex: 1;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  background: #0f1929;
  border-bottom: 2px solid rgba(243, 245, 246, 0.2);

  &.curved-up {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }

  &.curved-down {
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;

    border-bottom: unset;
  }

  .texts {
    display: flex;
    align-items: center;
    font-style: normal;
    justify-content: space-between;
    padding: 1rem 1rem 0rem 1rem;

    .heading {
      display: flex;
      align-items: center;

      .number {
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 120%;
        letter-spacing: 0.190942px;
        color: #ffffff80;
        margin-right: 30px;

        @include respond-below(mobile) {
          font-size: 1rem;

          .number {
            font-size: 1.1rem;
            margin-right: 0.75rem;
          }
        }
      }

      .title {
        color: white;
        transition: color 0s ease 0.3s;
        padding-right: 16px;
        font-weight: 600;
        font-size: 20px;
        line-height: 120%;
      }
    }

    .icon {
      cursor: pointer;
      border-radius: 50%;
      padding: 5px 7px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1.75rem;
      width: 1.75rem;
      min-height: 1.75rem;
      min-width: 1.75rem;
      background: white;
      transform: rotate(0deg);
      transition: transform 0.3s ease;

      svg {
        position: absolute;
        width: 0.75rem;
        color: #050c19;
      }
    }
  }

  &.hidden {
    transition: max-height 0.3s ease, background-color 0s ease 0.3s;

    .texts {
      padding: 1rem 1rem 1rem 1rem;
      .icon {
        border-radius: 50%;
        padding: 5px 7px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.75rem;
        width: 1.75rem;
        background: #f3f5f633;
        transform: rotate(180deg);
        transition: transform 0.3s ease;

        svg {
          position: absolute;
          color: white;
        }
      }
    }
    .answer {
      max-height: 0px;
      transition: max-height 0.3s ease, background-color 0s ease 0.3s;
    }
  }

  img {
  }

  // .texts {
  //   padding: 15px 15px 10px;
  //   margin-left: 9px;
  //   margin-right: 2px;
  //   display: flex;
  //   justify-content: space-between;
  //   align-content: flex-start;
  //   cursor: pointer;
  //   -moz-user-select: none;
  //   -webkit-user-select: none;
  //   -ms-user-select: none;
  //   user-select: none;

  //   .title {
  //     color: rgba(233, 83, 34, 1);
  //     font-size: 1.1rem;
  //     font-weight: 300;
  //   }
  // }

  .answer {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 140%;
    padding-left: 3rem;
    padding-right: 3rem;
    text-align: justify;
    color: white;

    @include respond-below(mobile) {
      font-size: 1rem;
      margin-left: -0.1rem;
      padding-left: 0rem;
      padding-right: 0rem;
    }

    margin: 0px 6px 6px;
    height: 100%;
    max-height: 300px;
    overflow: hidden;
    transition: max-height 0.3s ease;

    div {
      padding: 16px 24px;
    }
  }
}
// }
</style>

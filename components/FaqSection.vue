<template>
  <ContainerVue id="faq" name="faq">
    <HeadingVue front="Questions" back="FAQs" />
    <CFlex mt="5rem" :mx="{ base: '1rem', sm: '3.125rem' }" justify="center">
      <CGrid
        column-gap="3rem"
        :template-columns="{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }"
        align-items="start"
      >
        <CGrid
          template-columns="repeat(1, 1fr)"
          :display="{ base: 'unset', md: 'none' }"
        >
          <div
            v-for="(faq, index) in FAQsMobile"
            :key="index"
            :data-card-id="index"
            :class="[
              'card',
              faq.isOpen ? null : 'hidden',
              index === 0 ? 'curved-up' : null,
              index === FAQsMobile.length - 1 ? 'curved-down' : null,
            ]"
          >
            <div class="texts" @click="toggleFAQMobileItem(faq)">
              <span class="heading">
                <span class="number">Q</span>
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
            <div class="answer mobile">
              <div v-html="faq.content"></div>
            </div>
          </div>
        </CGrid>
        <CGrid
          template-columns="repeat(1, 1fr)"
          :display="{ base: 'none', md: 'unset' }"
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
                <span class="number">Q</span>
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
          :display="{ base: 'none', md: 'unset' }"
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
                <span class="number">Q</span>
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
      FAQsMobile: [
        {
          isOpen: false,
          title: 'Can I participate remotely?',
          content:
            'Hack This Fall 3.0 is an in-person hackathon. So remote participation is not applicable.',
        },
        {
          isOpen: false,
          title: 'How much does it cost to participate?',
          content:
            'Nothing, participation in Hack This Fall 3.0 is absolutely FREE!!🎉 We’ll have meals, snacks, and beverages onsite at the hackathon, in addition to swags, prizes, fun mini-events and more.',
        },
        {
          isOpen: false,
          title: 'I am a beginner, can I participate?',
          content:
            'Absolutely. We will have mentors and resources available, along with several workshops targeted for beginners. Come learn and experience your first hackathon at Hack This Fall.',
        },
        {
          isOpen: false,
          title:
            'What is the maximum team size? Can I participate as a Solo Hacker?',
          content:
            'We encourage you to make a team of minimum 2 and maximum 4 members. If you are a Solo Hacker and do not have a team, you can still register and we will help you find a team during the hackathon.',
        },
        {
          isOpen: false,
          title:
            'At what time for the Hackathon should I arrive on 3rd Feb and depart on 5th Feb?',
          content:
            'You can arrive at the hackathon venue at 3 PM IST on 3rd Feb and can depart from the venue at 4 PM IST on 5th Feb.',
        },
        {
          isOpen: false,
          title: 'How can I reach the venue?',
          content: `The nearest airport from the venue is <a style='color: rgba(233, 83, 34, 1);' href='https://goo.gl/maps/XUwPxbphBZrUwNJaA' rel='noopener noreferrer' target='_blank'>Ahmedabad Airport</a> and the nearest railway station from the venue is <a style='color: rgba(233, 83, 34, 1);' href='https://goo.gl/maps/d7St46fGYw4BoXSt5' rel='noopener noreferrer' target='_blank'>Gandhinagar Railway Station</a>. You will be able to get cab services from both the places to the venue. You can find more info on the venue guide <a style='color: rgba(233, 83, 34, 1);' href='https://bit.ly/htf3-venue-guide' rel='noopener noreferrer' target='_blank'>here</a>.`,
        },
        {
          isOpen: false,
          title: 'Will you support or reimburse our travel expenses?',
          content:
            'Since Hack This Fall 3.0 is a community-driven hackathon, unfortunately we will not be able to support you with travel.',
        },
        {
          isOpen: false,
          title: 'What are the sleeping arrangements?',
          content:
            'On both nights (3rd Feb & 4th Feb) we will have a supervised sleeping space for hackers to rest and sleep at the venue. We recommend bringing your own blanket if you need one.',
        },
        {
          isOpen: false,
          title:
            'I am below 18 years of age, can I participate in the hackathon?',
          content:
            'Yes! You can participate in the hackathon but we would need written consent from your parent/guardian and you wouldn’t be allowed to leave the venue during the hackathon.',
        },
        {
          isOpen: false,
          title:
            'My parent/guardian will be coming along with me. Can they stay at the venue?',
          content:
            "The answer is No. Arrangements like sleeping area, food, etc. are only for the attendees. We recommend you to find a stay option for them near the venue. They can drop you at the hackathon venue on 3rd Feb and can pick you on 5th Feb but can't stay at venue during the hackathon as we do not have any provision for them.",
        },
        {
          isOpen: false,
          title: 'What is the event Code of Conduct?',
          content: `We want to ensure a positive experience for all participants. We will be following <a style='color: rgba(233, 83, 34, 1);' href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf' rel='noopener noreferrer' target='_blank'>MLH’s Code of Conduct</a>, we encourage you to read it.`,
        },
        {
          isOpen: false,
          title: 'I have more questions, how and where can I reach out?',
          content:
            "You can reach out to us on our <a style='color: rgba(233, 83, 34, 1);' href='https://discord.hackthisfall.tech/' rel='noopener noreferrer' target='_blank'>Discord Server</a> in <u><b>#🍁|ask-htf-team</b></u> or email us at <a style='color: rgba(233, 83, 34, 1);' href='mailto:hackthisfall@gmail.com' rel='noopener noreferrer' target='_blank'>hackthisfall@gmail.com</a>! We're always ready to answer all your questions.",
        },
      ],
      FAQs: [
        {
          isOpen: false,
          title: 'Can I participate remotely?',
          content:
            'Hack This Fall 3.0 is an in-person hackathon. So remote participation is not applicable.',
        },
        {
          isOpen: false,
          title: 'I am a beginner, can I participate?',
          content:
            'Absolutely. We will have mentors and resources available, along with several workshops targeted for beginners. Come learn and experience your first hackathon at Hack This Fall.',
        },

        {
          isOpen: false,
          title:
            'At what time for the Hackathon should I arrive on 3rd Feb and depart on 5th Feb?',
          content:
            'You can arrive at the hackathon venue at 3 PM IST on 3rd Feb and can depart from the venue at 4 PM IST on 5th Feb.',
        },

        {
          isOpen: false,
          title: 'Will you support or reimburse our travel expenses?',
          content:
            'Since Hack This Fall 3.0 is a community-driven hackathon, unfortunately we will not be able to support you with travel.',
        },
        {
          isOpen: false,
          title:
            'I am below 18 years of age, can I participate in the hackathon?',
          content:
            'Yes! You can participate in the hackathon but we would need written consent from your parent/guardian and you wouldn’t be allowed to leave the venue during the hackathon.',
        },
        {
          isOpen: false,
          title: 'What is the event Code of Conduct?',
          content: `We want to ensure a positive experience for all participants. We will be following <a style='color: rgba(233, 83, 34, 1);' href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf' rel='noopener noreferrer' target='_blank'>MLH’s Code of Conduct</a>, we encourage you to read it.`,
        },

        {
          isOpen: false,
          title: 'How much does it cost to participate?',
          content:
            'Nothing, participation in Hack This Fall 3.0 is absolutely FREE!!🎉 We’ll have meals, snacks, and beverages onsite at the hackathon, in addition to swags, prizes, fun mini-events and more.',
        },
        {
          isOpen: false,
          title:
            'What is the maximum team size? Can I participate as a Solo Hacker?',
          content:
            'We encourage you to make a team of minimum 2 and maximum 4 members. If you are a Solo Hacker and do not have a team, you can still register and we will help you find a team during the hackathon.',
        },
        {
          isOpen: false,
          title: 'How can I reach the venue?',
          content: `The nearest airport from the venue is <a style='color: rgba(233, 83, 34, 1);' href='https://goo.gl/maps/XUwPxbphBZrUwNJaA' rel='noopener noreferrer' target='_blank'>Ahmedabad Airport</a> and the nearest railway station from the venue is <a style='color: rgba(233, 83, 34, 1);' href='https://goo.gl/maps/d7St46fGYw4BoXSt5' rel='noopener noreferrer' target='_blank'>Gandhinagar Railway Station</a>. You will be able to get cab services from both the places to the venue. You can find more info on the venue guide <a style='color: rgba(233, 83, 34, 1);' href='https://bit.ly/htf3-venue-guide' rel='noopener noreferrer' target='_blank'>here</a>.`,
        },
        {
          isOpen: false,
          title: 'What are the sleeping arrangements?',
          content:
            'On both nights (3rd Feb & 4th Feb) we will have a supervised sleeping space for hackers to rest and sleep at the venue. We recommend bringing your own blanket if you need one.',
        },

        {
          isOpen: false,
          title:
            'My parent/guardian will be coming along with me. Can they stay at the venue?',
          content:
            "The answer is No. Arrangements like sleeping area, food, etc. are only for the attendees. We recommend you to find a stay option for them near the venue. They can drop you at the hackathon venue on 3rd Feb and can pick you on 5th Feb but can't stay at venue during the hackathon as we do not have any provision for them.",
        },
        {
          isOpen: false,
          title: 'I have more questions, how and where can I reach out?',
          content:
            "You can reach out to us on our <a style='color: rgba(233, 83, 34, 1);' href='https://discord.hackthisfall.tech/' rel='noopener noreferrer' target='_blank'>Discord Server</a> in <u><b>#🍁|ask-htf-team</b></u> or email us at <a style='color: rgba(233, 83, 34, 1);' href='mailto:hackthisfall@gmail.com' rel='noopener noreferrer' target='_blank'>hackthisfall@gmail.com</a>! We're always ready to answer all your questions.",
        },
      ],
    }
  },
  methods: {
    toggleFAQMobileItem(faq) {
      if (faq.isOpen) {
        faq.isOpen = false
      } else {
        for (let index = 0; index < this.FAQsMobile.length; index++) {
          const element = this.FAQsMobile[index]
          element.isOpen = false
        }

        faq.isOpen = true
      }
    },
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

  @include respond-below(xs) {
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
        min-width: 3.75rem;

        @include respond-below(xs) {
          font-size: 1rem;
          min-width: 2.5rem;

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

        @include respond-below(xs) {
          font-size: 1rem;
        }
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

  .answer {
    font-style: normal;
    font-weight: 400;
    font-size: 1.15rem;
    line-height: 140%;
    padding-left: 3rem;
    padding-right: 3rem;
    text-align: justify;
    color: white;

    @include respond-below(xs) {
      font-size: 0.9rem;
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

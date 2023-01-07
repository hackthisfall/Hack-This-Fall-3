<template>
  <div class="center">
    <div class="outer-container">
      <NavigationBar :toggleNavbar="toggleNavbar" />
      <div class="main-container">
        <div v-if="isNavbarOpen" class="navbar-mobile">
          <CFlex direction="column" align="center">
            <span
              id="nav-link-about"
              class="mobile-nav-item"
              @click="goToLocation('/#about')"
              >About</span
            >
            <span
              id="nav-link-tracks"
              class="mobile-nav-item"
              @click="goToLocation('/#tracks')"
              >Tracks</span
            >
            <span
              id="nav-link-faq"
              class="mobile-nav-item"
              @click="goToLocation('/#prizes')"
              >Prizes</span
            >
            <span
              id="nav-link-sponsors"
              class="mobile-nav-item"
              @click="goToLocation('/#sponsors')"
              >Sponsors</span
            >
            <span
              id="nav-link-faq"
              class="mobile-nav-item"
              @click="goToLocation('/#faq')"
              >FAQs</span
            >
            <span class="divider"></span>
            <!-- <span id="nav-link-schedule" class="mobile-nav-item">Schedule</span> -->
            <!-- <span id="nav-link-swags" class="mobile-nav-item">Swags</span> -->
            <span
              id="nav-link-team"
              class="mobile-nav-item"
              @click="goToLocation('/team')"
              >Team</span
            >
          </CFlex>
        </div>
        <div v-else>
          <HeroSectionVue />
          <AboutSectionVue />
          <GlimpseSectionVue />
          <TrackSectionVue />
          <PrizesSectionVue />
          <SpeakerSectionVue />
          <SponsorSectionVue />
          <NarrativeSectionVue />
          <FaqSectionVue />
          <FooterSectionVue />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CFlex } from '@chakra-ui/vue'
import NavigationBar from '~/components/NavigationBar'
import HeroSectionVue from '~/components/HeroSection'
import AboutSectionVue from '~/components/AboutSection'
import GlimpseSectionVue from '~/components/GlimpseSection'
import TrackSectionVue from '~/components/TrackSection'
import PrizesSectionVue from '~/components/PrizesSection.vue'
import SpeakerSectionVue from '~/components/SpeakerSection'
import SponsorSectionVue from '~/components/SponsorSection'
import NarrativeSectionVue from '~/components/NarrativeSection'
import FaqSectionVue from '~/components/FaqSection'
import FooterSectionVue from '~/components/FooterSection'

export default {
  name: 'IndexPage',
  components: {
    NavigationBar,
    HeroSectionVue,
    AboutSectionVue,
    GlimpseSectionVue,
    TrackSectionVue,
    PrizesSectionVue,
    SpeakerSectionVue,
    SponsorSectionVue,
    NarrativeSectionVue,
    FaqSectionVue,
    FooterSectionVue,
    CFlex,
  },
  data() {
    return {
      isNavbarOpen: false,
    }
  },
  methods: {
    goToLocation(location) {
      this.isNavbarOpen = false
      window.location.href = location
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen
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
  padding: 0.5px 5rem 2rem;
  max-width: 1440px;

  @include respond-below(md) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @include respond-below(xs) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .main-container {
    width: 100%;
    border-radius: 32px;
    margin-top: 1rem;
    min-height: 85vh;
    background-image: url('~/assets/background.png');
    background-repeat: no-repeat;
    // background-position-x: -1rem;
    background-size: cover;

    @include respond-below(xs) {
      margin-top: 1rem;
    }

    .navbar-mobile {
      padding-top: 2.5rem;
      font-weight: 400;
      font-size: 2rem;
      letter-spacing: 0.03em;
      color: white;

      .mobile-nav-item {
        margin-top: 2rem;
      }

      .divider {
        height: 2px;
        width: 50%;
        margin-top: 2rem;
        border-radius: 2px;
        background: #243149;
        border: 1.5px solid #243149;
      }
    }
  }
}
</style>

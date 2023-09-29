<template>
  <div class="center">
    <div class="outer-container">
      <NavigationBar :toggleNavbar="toggleNavbar" />
      <div class="main-container">
        <div v-if="isNavbarOpen" class="navbar-mobile">
          <CFlex direction="column" align="center">
            <NuxtLink id="nav-link-about" class="mobile-nav-item" to="/#about"
              >About</NuxtLink
            >

            <span
              id="nav-link-sponsors"
              class="mobile-nav-item"
              @click="goToLocation('https://bit.ly/htf3-sponsor')"
              >Sponsors Us</span
            >

            <span class="divider"></span>
            <span
              id="nav-link-team"
              class="mobile-nav-item"
              @click="goToLocation('/team')"
              >Team</span
            >
            <NuxtLink id="nav-link-team" class="mobile-nav-item" to="/swag"
              >Swag</NuxtLink
            >
          </CFlex>
        </div>
        <div v-else>
          <HacktoberfestSection />
          <FooterSection />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CFlex } from '@chakra-ui/vue'
import NavigationBar from '~/components/NavigationBarForMeetups'
import HacktoberfestSection from '~/components/HacktoberfestSection.vue'
import FooterSection from '~/components/FooterSection.vue'

export default {
  name: 'IndexPage',
  components: {
    NavigationBar,
    HacktoberfestSection,
    FooterSection,
    CFlex,
  },
  data() {
    return {
      isNavbarOpen: false,
    }
  },
  head() {
    return {
      title: 'Hack This Fall | Meetups',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Hack This Fall is hosting an In-Person Meetup series in 8 different cities across India which includes Indore, Raipur, Nagpur, Chandigarh, Guwahati, Kolkata, Chennai, and Hyderabad. What are you waiting for, register and join us now!',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Hack This Fall is hosting an In-Person Meetup series in 8 different cities across India which includes Indore, Raipur, Nagpur, Chandigarh, Guwahati, Kolkata, Chennai, and Hyderabad. What are you waiting for, register and join us now!',
        },
        {
          hid: 'apple-mobile-web-app-title',
          property: 'apple-mobile-web-app-title',
          content: 'Hack This Fall | Meetups',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Hack This Fall | Meetups',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Hack This Fall | Meetups',
        },
      ],
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
    background-size: cover;
    background-position-x: -2px;

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

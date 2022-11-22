<template>
  <div>
    <CFlex
      :mx="{ base: '1rem', sm: '100px' }"
      :direction="{ base: 'column', sm: 'row' }"
      align="center"
      class="footer"
      justify="space-between"
    >
      <CFlex class="logo">
        <img src="~/assets/footer-logo.png" />
      </CFlex>
      <CFlex
        class="about"
        direction="column"
        justify="space-evenly"
        :align="{ base: 'center', sm: 'start' }"
      >
        <h2 class="heading">About</h2>
        <p class="content">Season 1.0</p>
        <p class="content">Season 2.0</p>
        <p class="content">Know the Team</p>
        <p class="content">Code of Conduct</p>
      </CFlex>
      <CFlex
        class="explore"
        direction="column"
        justify="space-evenly"
        :align="{ base: 'center', sm: 'start' }"
      >
        <h2 class="heading">Explore</h2>
        <p class="content">Dev.to</p>
        <p class="content">Swags</p>
        <p class="content">Meetups</p>
        <p class="content">Sponsor Us</p>
      </CFlex>
      <CFlex>
        <CFlex class="social">
          <CGrid
            class="grid"
            template-columns="repeat(3, 1fr)"
            template-rows="repeat(2, 1fr)"
            :grid-column-gap="{ base: '2rem', sm: '1rem' }"
            :grid-row-gap="{ base: '1rem', sm: '1rem' }"
          >
            <span class="icon"><img src="~/assets/icons/twitter.svg" /></span>
            <span class="icon"><img src="~/assets/icons/discord.svg" /></span>
            <span class="icon"><img src="~/assets/icons/insta.svg" /></span>
            <span class="icon"><img src="~/assets/icons/youtube.svg" /></span>
            <span class="icon"><img src="~/assets/icons/mail.svg" /></span>
            <span class="icon"><img src="~/assets/icons/linkedin.svg" /></span>
          </CGrid>
        </CFlex>
      </CFlex>
    </CFlex>
    <CFlex class="attribution"
      >Copyright © 2022 Hack This Fall. All rights reserved</CFlex
    >
  </div>
</template>

<script>
import { CFlex, CGrid } from '@chakra-ui/vue'
export default {
  components: {
    CFlex,
    CGrid,
  },
}
</script>

<style lang="scss" scoped>
.footer {
  padding-bottom: 50px;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 100px;
    }
  }

  .about,
  .explore {
    .heading {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 25px;
      color: #f46d24;
    }

    .content {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      margin-top: 1.5rem;
      line-height: 25px;
      color: #ffffff;
    }

    @include respond-below(mobile) {
      margin-top: 3.25rem;

      .content {
        margin-top: 0.875rem;
      }
    }
  }

  .social {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .grid {
      .icon {
        padding: 12px 10px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #0f1929;
        height: 3rem;
        width: 3rem;

        img {
          height: 1.25rem;
          position: absolute;
        }
      }
    }

    @include respond-below(mobile) {
      margin-top: 3.25rem;

      .grid {
        .icon {
          height: 3.5rem;
          width: 3.5rem;

          img {
            height: 1.5rem;
          }
        }
      }
    }
  }
}

.attribution {
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-top: 3px solid #23262f;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #777e91;

  @include respond-below(mobile) {
    font-size: 0.75rem;
    padding: 30px 1rem;
  }
}
</style>

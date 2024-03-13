<template>
  <div id="footer">
    <CFlex
      :mx="{ base: '1rem', md: '3rem', lg: '100px' }"
      :direction="{ base: 'column', md: 'row' }"
      align="center"
      class="footer"
      justify="space-between"
    >
      <CFlex class="logo">
        <img src="~/assets/logo.png" />
      </CFlex>
      <CFlex
        class="about"
        direction="column"
        justify="space-evenly"
        :align="{ base: 'center', md: 'flex-start' }"
      >
        <h2 class="heading">About</h2>
        <a
          href="https://s1.hackthisfall.tech"
          class="content animate-ease"
          target="_blank"
          >Season 1.0</a
        >
        <a
          href="https://s2.hackthisfall.tech"
          class="content animate-ease"
          target="_blank"
          >Season 2.0</a
        >
        <a
          href="https://s3.hackthisfall.tech"
          class="content animate-ease"
          target="_blank"
          >Season 3.0</a
        >
        <a
          href="https://s4.hackthisfall.tech"
          class="content animate-ease"
          target="_blank"
          >Season 4.0</a
        >
      </CFlex>
      <CFlex
        class="explore"
        direction="column"
        justify="space-evenly"
        :align="{ base: 'center', md: 'flex-start' }"
      >
        <h2 class="heading">Explore</h2>
        <a
          href="https://blog.hackthisfall.tech"
          class="content animate-ease"
          target="_blank"
          >Blogs</a
        >
        <a href="/team" class="content animate-ease" target="_blank">Team</a>
        <a
          href="https://bit.ly/htf3-sponsor"
          class="content animate-ease"
          target="_blank"
          >Sponsor Us</a
        >
        <a
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          class="content animate-ease"
          target="_blank"
          >Code of Conduct</a
        >
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
            <a
              href="https://twitter.com/hackthisfall/"
              target="_blank"
              class="icon animate-ease"
              ><img src="~/assets/socials/twitter.svg"
            /></a>
            <a
              href="https://discord.hackthisfall.tech/"
              target="_blank"
              class="icon animate-ease"
              ><img src="~/assets/socials/discord.svg"
            /></a>
            <a
              href="https://instagram.com/hackthisfall"
              target="_blank"
              class="icon animate-ease"
              ><img src="~/assets/socials/insta.svg"
            /></a>
            <a
              href="https://www.youtube.com/channel/UCpdsmUIkLpfopjURSYF1gaA"
              target="_blank"
              class="icon animate-ease"
              ><img src="~/assets/socials/youtube.svg"
            /></a>
            <a
              href="mailto:hackthisfall@gmail.com"
              target="_blank"
              class="icon animate-ease"
              ><img src="~/assets/socials/mail.svg"
            /></a>
            <a
              href="https://www.linkedin.com/company/hackthisfall/"
              target="_blank"
              class="icon animate-ease"
              ><img src="~/assets/socials/linkedin.svg"
            /></a>
          </CGrid>
        </CFlex>
      </CFlex>
    </CFlex>
    <CFlex class="attribution"
      >Copyright © 2024 Hack This Fall. All rights reserved</CFlex
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
#footer {
  margin-top: 4rem;
  padding-top: 4rem;

  @include respond-below(sm) {
    padding-top: 4rem;
  }
}

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

      &:hover {
        color: #d04d29;
        font-weight: 500;
      }
    }

    @include respond-below(sm) {
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

        &:hover {
          background: #274655;
        }

        img {
          height: 1.25rem;
          position: absolute;
        }
      }
    }

    @include respond-below(sm) {
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
  text-align: center;
  padding: 30px;
  border-top: 3px solid #23262f;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #777e91;

  @include respond-below(sm) {
    font-size: 0.75rem;
    padding: 30px 1rem;
  }
}
</style>

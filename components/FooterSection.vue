<template>
  <div>
    <CGrid class="footer" template-columns="40% 20% 20% 20%">
      <CGridItem class="logo">
        <img src="~/assets/footer-logo.png" />
      </CGridItem>
      <CGridItem class="about">
        <h2 class="heading">About</h2>
        <p class="content">Season 1.0</p>
        <p class="content">Season 2.0</p>
        <p class="content">Know the Team</p>
        <p class="content">Code of Conduct</p>
      </CGridItem>
      <CGridItem class="explore">
        <h2 class="heading">Explore</h2>
        <p class="content">Dev.to</p>
        <p class="content">Swags</p>
        <p class="content">Meetups</p>
        <p class="content">Sponsor Us</p>
      </CGridItem>
      <CGridItem>
        <CFlex class="social">
          <CGrid
            class="grid"
            template-columns="repeat(3, 1fr)"
            template-rows="repeat(2, 1fr)"
            gap="15px"
          >
            <span class="icon"><img src="~/assets/icons/twitter.svg" /></span>
            <span class="icon"><img src="~/assets/icons/discord.svg" /></span>
            <span class="icon"><img src="~/assets/icons/insta.svg" /></span>
            <span class="icon"><img src="~/assets/icons/youtube.svg" /></span>
            <span class="icon"><img src="~/assets/icons/mail.svg" /></span>
            <span class="icon"><img src="~/assets/icons/linkedin.svg" /></span>
          </CGrid>
        </CFlex>
      </CGridItem>
    </CGrid>
    <CFlex class="attribution"
      >Copyright © 2022 Hack This Fall. All rights reserved</CFlex
    >
  </div>
</template>

<script>
import { CFlex, CGrid, CGridItem } from '@chakra-ui/vue'
export default {
  components: {
    CFlex,
    CGrid,
    CGridItem,
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
    padding: 50px 100px;
    img {
      height: 150px;
    }
  }

  .about {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
      line-height: 25px;
      color: #ffffff;
    }
  }

  .explore {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
      line-height: 25px;
      color: #ffffff;
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

        img {
          height: 20px;
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
}
</style>

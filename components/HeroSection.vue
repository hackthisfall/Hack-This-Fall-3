<template>
  <ContainerVue id="hero" name="hero" class="hero">
    <div class="inner">
      <img class="hero-logo" src="~/assets/hero-logo.png" />
      <h2 class="tagline">Innovate For Good</h2>
      <h3 class="date">3 - 5 February 2022</h3>
      <CFlex
        justify="center"
        align="center"
        :gap="{ base: '1.2rem', sm: '30px' }"
        :direction="{ base: 'column', sm: 'row' }"
      >
        <a href="https://bit.ly/htf3-sponsor">
          <CButton class="button animate-ease">
            <img
              src="~/assets/icons/register.svg"
              alt="register"
              class="icon"
            />
            <span> Pre-Register </span>
          </CButton>
        </a>
        <a href="https://bit.ly/htf3-sponsor">
          <CButton class="button animate-ease"
            ><img
              src="~/assets/icons/discord.svg"
              alt="discord"
              class="icon"
            /><span>Join Discord</span></CButton
          >
        </a>
      </CFlex>
    </div>
  </ContainerVue>
</template>
<script>
import { CFlex, CButton } from '@chakra-ui/vue'
import ContainerVue from './Container.vue'

export default {
  components: {
    CFlex,
    CButton,
    ContainerVue,
  },
}
</script>
<style lang="scss" scoped>
.hero {
  display: flex;
  padding-top: 130px;
  justify-content: center;

  .inner {
    display: flex;
    flex-direction: column;
    .hero-logo {
      width: 730px;
      margin-bottom: 30px;

      @include respond-below(sm) {
        width: 78vw;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: unset;
      }
    }

    .tagline {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 37px;
      line-height: 56px;
      letter-spacing: 0.03em;
      text-transform: capitalize;
      color: #ffffff;
      text-align: center;

      @include respond-below(sm) {
        font-size: 1.7rem;
        line-height: unset;
        margin-top: 1.5rem;
      }
    }

    .date {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 42px;
      letter-spacing: 0.03em;
      color: #ffffff;
      text-align: center;
      margin-bottom: 30px;

      @include respond-below(xs) {
        font-size: 1.25rem;
        line-height: unset;
        margin-top: 0.25rem;
      }
    }

    .button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 1.5rem 1rem;
      // height: 55px;
      background: #d04d29;
      border: 2px solid #f46d24;
      box-shadow: 2px 2px 0px #f46d24;
      border-radius: 12.4124px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 1.25rem;
      color: white;

      &:hover {
        background: rgb(244, 109, 36);
      }

      img {
        width: 2rem;
        height: 2rem;
        margin-right: 0.75rem;
      }

      @include respond-below(xs) {
        max-width: 70vw;
      }
    }
  }
}
</style>

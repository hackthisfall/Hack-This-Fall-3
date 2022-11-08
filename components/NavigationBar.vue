<template>
  <CFlex
    bg="#050c19"
    zIndex="100000"
    w="calc(100% - 160px)"
    pt="44px"
    position="fixed"
    justify="space-between"
  >
    <div class="logo"><img src="~/assets/logo.png" /></div>
    <div class="nav">
      <a id="nav-link-about" href="/#about" class="item">About</a>
      <a id="nav-link-tracks" href="/#tracks" class="item">Tracks</a>
      <a id="nav-link-sponsors" href="/#sponsors" class="item">Sponsors</a>
      <a id="nav-link-faq" href="/#faq" class="item">FAQ</a>
      <span class="divider"></span>
      <a id="nav-link-swags" class="item">Swags</a>
      <a id="nav-link-team" class="item">Team</a>
      <a
        id="mlh-trust-badge"
        style="
          display: block;
          max-width: 100px;
          min-width: 60px;
          position: fixed;
          right: 25px;
          top: 0;
          z-index: 10000;
        "
        href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
        target="_blank"
        ><img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
          alt="Major League Hacking 2023 Hackathon Season"
          style="width: 131px"
      /></a>
    </div>
  </CFlex>
</template>

<script>
import { CFlex } from '@chakra-ui/vue'
export default {
  components: {
    CFlex,
  },
}
</script>
<style lang="scss" scoped>
.logo {
  height: 65px;
  padding: 12px 18px;
  background: #0f1726;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 1px 1px 1px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);

  border-radius: 11px;

  img {
    width: 100%;
  }
}

.nav {
  display: flex;
  align-items: center;
  background: #0f1726;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 1px 1px 1px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  border-radius: 11px;
  column-gap: 49px;
  padding-left: 39px;
  padding-right: 178px;

  .item {
    color: white;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.03em;

    &:hover {
      color: #f46d24;
    }
  }

  .active {
    color: #f46d24 !important;
  }

  .divider {
    height: 30px;
    border-radius: 2px;
    background: #243149;
    border: 1.5px solid #243149;
  }
}
</style>

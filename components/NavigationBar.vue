<template>
  <CFlex
    id="navbar-container"
    bg="linear-gradient(180deg, #050C19 53.65%, rgba(5, 12, 25, 0) 100%)"
    zIndex="100000"
    :pt="{ base: '2rem', sm: '32px' }"
    position="sticky"
    top="0"
    justify="space-between"
  >
    <div class="logo">
      <NuxtLink to="/"><img src="~/assets/logo.png" /></NuxtLink>
    </div>
    <div class="nav-desktop">
      <a
        id="nav-link-sponsors"
        target="_blank"
        href="https://bit.ly/htf3-sponsor"
        class="item"
        >Sponsor Us</a
      >
      <img
        width="100%"
        src="~/assets/hamburger-menu.png"
        class="hamburger-menu"
        @click="toggleNavbar"
      />
    </div>
  </CFlex>
</template>

<script>
import { CFlex } from '@chakra-ui/vue'
export default {
  components: {
    CFlex,
  },
  props: {
    isNavbarOpen: Boolean,
    toggleNavbar: Function,
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

  min-width: 8.25rem;

  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 6.25rem;
  }

  @include respond-below(xs) {
    padding: 0.625rem;
    height: unset;

    img {
      width: 5rem;
    }
  }
}

.nav-desktop {
  display: flex;
  align-items: center;
  background: #0f1726;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 1px 1px 1px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  border-radius: 11px;
  column-gap: 49px;
  padding-left: 39px;
  padding-right: 39px;

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

  .hamburger-menu {
    display: none;
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

  @include respond-below(lg) {
    padding-left: 1rem;
    padding-right: 1rem;
    .item {
      display: none;
    }

    .hamburger-menu {
      display: unset;
    }

    .divider {
      display: none;
    }
  }
}
</style>

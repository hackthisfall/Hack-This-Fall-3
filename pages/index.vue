<template>
  <div class="container">
    <NavigationBar />
    <div class="main-container">
      <HeroSectionVue />
    </div>
  </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar'
import HeroSectionVue from '~/components/HeroSection.vue'
// import {
//   CBox,
//   CButton,
//   CAvatarGroup,
//   CAvatar,
//   CAvatarBadge,
//   CModal,
//   CModalContent,
//   CModalOverlay,
//   CModalHeader,
//   CModalFooter,
//   CModalBody,
//   CModalCloseButton,
//   CIconButton,
// CFlex,
//   CHeading
// } from '@chakra-ui/vue'

export default {
  name: 'IndexPage',
  components: {
    NavigationBar,
    HeroSectionVue,
    // CBox,
    // CButton,
    // CAvatarGroup,
    // CAvatar,
    // CAvatarBadge,
    // CModal,
    // CModalContent,
    // CModalOverlay,
    // CModalHeader,
    // CModalFooter,
    // CModalBody,
    // CModalCloseButton,
    // CIconButton,
    // CFlex,
    // CHeading
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data() {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900',
        },
        light: {
          bg: 'white',
          color: 'gray.900',
        },
      },
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  min-height: 100vh;
  background: #050c19;
  padding: 44px 80px 83px;

  .main-container {
    width: 100%;
    margin-top: 106px;
    min-height: 100vh;
    background-image: url('~/assets/background.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>

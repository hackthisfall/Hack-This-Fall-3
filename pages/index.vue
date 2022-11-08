<template>
  <div class="outer-container">
    <NavigationBar />
    <div class="main-container">
      <HeroSectionVue />
      <AboutSectionVue />
      <GlimpseSectionVue />
      <TrackSectionVue />
      <SpeakerSectionVue />
      <SponsorSectionVue />
      <NarrativeSectionVue />
      <FaqSectionVue />
    </div>
  </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar'
import HeroSectionVue from '~/components/HeroSection.vue'
import AboutSectionVue from '~/components/AboutSection.vue'
import GlimpseSectionVue from '~/components/GlimpseSection.vue'
import TrackSectionVue from '~/components/TrackSection.vue'
import SpeakerSectionVue from '~/components/SpeakerSection.vue'
import SponsorSectionVue from '~/components/SponsorSection.vue'
import NarrativeSectionVue from '~/components/NarrativeSection.vue'
import FaqSectionVue from '~/components/FaqSection.vue'

export default {
  name: 'IndexPage',
  components: {
    NavigationBar,
    HeroSectionVue,
    AboutSectionVue,
    GlimpseSectionVue,
    TrackSectionVue,
    SpeakerSectionVue,
    SponsorSectionVue,
    NarrativeSectionVue,
    FaqSectionVue,
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
}
</script>

<style lang="scss" scoped>
.outer-container {
  width: 100vw;
  min-height: 100vh;
  background: #050c19;
  padding: 0.5px 80px 83px;

  .main-container {
    width: 100%;
    border-radius: 32px;
    margin-top: 150px;
    min-height: 100vh;
    background-image: url('~/assets/background.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>

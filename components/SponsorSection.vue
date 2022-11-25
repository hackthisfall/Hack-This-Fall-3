<template>
  <ContainerVue id="sponsors" name="sponsors">
    <HeadingVue front="Past Sponsors" back="SPONSORS" />
    <CFlex :mx="{ base: '1rem', sm: '50px' }" justify="center">
      <CGrid
        :gap="{ base: '1rem', sm: '50px' }"
        :template-columns="{ base: 'repeat(2, 1fr)', sm: 'repeat(6, 1fr)' }"
      >
        <CGridItem
          v-for="(sponsor, index) in sponsors"
          :key="index"
          class="sponsor"
          borderRadius="30px"
        >
          <img :src="sponsor.image" />
        </CGridItem>
      </CGrid>
    </CFlex>
  </ContainerVue>
</template>
<script>
import { CFlex, CGrid, CGridItem } from '@chakra-ui/vue'
import HeadingVue from './HeadingComponent.vue'
import ContainerVue from './Container.vue'

export default {
  components: {
    HeadingVue,
    ContainerVue,
    CFlex,
    CGrid,
    CGridItem,
  },
  data() {
    return {
      sponsors: [
        {
          url: 'https://mlh.io/',
          image: require('~/assets/sponsors/mlh.svg'),
        },
        {
          url: 'https://www.storyblok.com/',
          image: require('~/assets/sponsors/storyblok.svg'),
        },
        {
          url: 'https://agoric.com/',
          image: require('~/assets/sponsors/agoric.svg'),
        },
        {
          url: 'https://www.inspiritai.com/',
          image: require('~/assets/sponsors/InspiritAI.png'),
        },
        {
          url: 'https://wrx.gg/htf',
          image: require('~/assets/sponsors/wazirx.png'),
        },

        {
          url: 'https://filebase.com/?utm_source=website&utm_medium=sponsor&utm_campaign=hackthisfall',
          image: require('~/assets/sponsors/filebase.svg'),
        },
        {
          url: 'https://www.courier.com/',
          image: require('~/assets/sponsors/courier.png'),
        },
        {
          url: 'https://atsign.com/',
          image: require('~/assets/sponsors/atsign.webp'),
        },
        {
          url: 'https://education.github.com/discount_requests/student_application?utm_source=2021-10-22-hackthisfall',
          image: require('~/assets/sponsors/github.svg'),
        },
        {
          url: 'https://defhacks.co/',
          image: require('~/assets/sponsors/defhacks.png'),
        },
        {
          url: 'https://www.quicknode.com/',
          image: require('~/assets/sponsors/quicknode.png'),
        },
        {
          url: 'https://www.portis.io/',
          image: require('~/assets/sponsors/portis.png'),
        },
        {
          url: 'https://fold.money/',
          image: require('~/assets/sponsors/fold.png'),
        },
        {
          url: 'https://polygon.technology/',
          image: require('~/assets/sponsors/polygon.svg'),
        },
        {
          url: 'https://tezos.com/',
          image: require('~/assets/sponsors/tezos.png'),
        },
        {
          url: 'https://xinfin.org/',
          image: require('~/assets/sponsors/xdc.png'),
        },
        {
          url: 'https://www.twilio.com/',
          image: require('~/assets/sponsors/twilio.png'),
        },
        {
          url: 'https://coil.com/',
          image: require('~/assets/sponsors/coil.jpg'),
        },
        {
          url: 'https://registry.godaddy/',
          image: require('~/assets/sponsors/godaddy.jpg'),
          specialClass: 'godaddy',
        },
        {
          url: 'https://www.linode.com/',
          image: require('~/assets/sponsors/linode.svg'),
        },
        {
          url: 'https://symbl.ai/',
          image: require('~/assets/sponsors/symbl.svg'),
        },
        {
          url: 'https://www.digitalocean.com/',
          image: require('~/assets/sponsors/digitalocean.svg'),
        },
        {
          url: 'https://sketch.com',
          image: require('~/assets/sponsors/sketch.png'),
        },
        {
          url: 'https://balsamiq.com/',
          image: require('~/assets/sponsors/balsamiq.png'),
        },
        {
          url: 'https://www.wolfram.com/',
          image: require('~/assets/sponsors/wolfram.png'),
        },
        {
          url: 'https://replit.com/',
          image: require('~/assets/sponsors/replit.png'),
        },
        {
          url: 'https://draftbit.com/',
          image: require('~/assets/sponsors/draftbit.png'),
        },
        {
          url: 'https://gen.xyz/',
          image: require('~/assets/sponsors/xyz.svg'),
        },
        {
          url: 'https://www.axure.com/',
          image: require('~/assets/sponsors/axure.png'),
        },
        {
          url: 'https://www.sashido.io/',
          image: require('~/assets/sponsors/sashido.png'),
        },
        {
          url: 'https://www.echoar.xyz/',
          image: require('~/assets/sponsors/echoar.png'),
        },
        {
          url: 'https://www.devhood.tech/',
          image: require('~/assets/sponsors/devhood.png'),
        },
        {
          url: 'https://codingblocks.com/',
          image: require('~/assets/sponsors/cb.png'),
        },
        {
          url: 'https://www.clerky.com/',
          image: require('~/assets/sponsors/clerky.png'),
        },
        {
          url: 'https://interwebs.host/',
          image: require('~/assets/sponsors/iwh.png'),
        },
        {
          url: 'https://1password.com/',
          image: require('~/assets/sponsors/1p.png'),
        },
        {
          url: 'https://rosenfeldmedia.com/',
          image: require('~/assets/sponsors/rosenfeld.png'),
        },
        {
          url: 'https://www.egghead.io/',
          image: require('~/assets/sponsors/eh.png'),
        },
        {
          url: 'https://www.taskade.com/',
          image: require('~/assets/sponsors/taskade.png'),
        },
        {
          url: 'https://www.framer.com/',
          image: require('~/assets/sponsors/framer.png'),
        },
        {
          url: 'https://www.voiceflow.com/',
          image: require('~/assets/sponsors/voiceflow.png'),
        },
        {
          url: 'http://joinglimpse.com/',
          image: require('~/assets/sponsors/glimpse.png'),
        },
        {
          url: 'https://progate.com/',
          image: require('~/assets/sponsors/progate.png'),
        },
        // remaining except slido
        {
          url: 'https://devhero.shop/',
          image: require('~/assets/sponsors/devhero.png'),
        },
        {
          url: 'https://hackp.ac/mlh-stickermule-hackathons',
          image: require('~/assets/sponsors/stickermule.png'),
        },
        {
          url: 'https://dev.to/',
          image: require('~/assets/sponsors/devto.png'),
        },
        {
          url: 'https://streamyard.com/about',
          image: require('~/assets/sponsors/streamyard.png'),
        },
        {
          url: 'https://raahee.in/',
          image: require('~/assets/sponsors/raahee.png'),
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.sponsor {
  background: linear-gradient(
    180deg,
    #142137 0%,
    #0b121f 99.99%,
    rgba(20, 33, 55, 0) 100%
  );
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 35px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(180deg, #0b3b52 3.72%, #0b121f 141.1%);
  }

  .img {
    width: 55%;
  }
}
</style>

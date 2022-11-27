<template>
  <ContainerVue id="glimpse" name="glimpse">
    <HeadingVue front="Previous Events" back="GLIMPSES" />
    <CFlex mt="5rem" :mx="{ base: '1rem', sm: '3.125rem' }" justify="center">
      <CGrid
        :template-columns="{ base: 'repeat(2, 1fr)', sm: 'repeat(5, 1fr)' }"
        :grid-column-gap="{ base: '0.5rem', sm: '1.25rem' }"
        :grid-row-gap="{ base: '0.25rem', sm: '0.75rem' }"
      >
        <CGridItem
          display="flex"
          :rowStart="{ base: '1', sm: '1' }"
          :colStart="{ base: '1', sm: '1' }"
        >
          <CFlex direction="column" justify="space-between">
            <img src="~/assets/glimpses/1.png" />
            <CBox :pb="{ base: '0.5rem', sm: '0.5rem' }">
              <div class="number hackers">4500+</div>
              <div class="category hackers" mt="2rem">Hackers</div>
            </CBox>
          </CFlex>
        </CGridItem>
        <CGridItem
          display="flex"
          :rowStart="{ base: '1', sm: '1' }"
          :colStart="{ base: '2', sm: '2' }"
        >
          <img src="~/assets/glimpses/2.png" />
        </CGridItem>
        <CGridItem
          display="flex"
          :rowStart="{ base: '2', sm: '2' }"
          :colStart="{ base: '1', sm: '1' }"
        >
          <img src="~/assets/glimpses/3.png" />
        </CGridItem>
        <CGridItem
          display="flex"
          :rowStart="{ base: '2', sm: '2' }"
          :colStart="{ base: '2', sm: '2' }"
        >
          <CFlex direction="column" justify="space-between">
            <CBox :pt="{ base: '0rem', sm: '0.5rem' }">
              <div class="number countries">55+</div>
              <div class="category countries">Countries</div>
            </CBox>
            <img src="~/assets/glimpses/4.png"
          /></CFlex>
        </CGridItem>
        <CGridItem
          display="flex"
          :rowStart="{ base: '3', sm: '1' }"
          :colStart="{ base: '1', sm: '3' }"
        >
          <CFlex
            :direction="{ base: 'column', sm: 'column-reverse' }"
            justify="space-between"
          >
            <CBox :pb="{ base: '0rem', sm: '0.5rem' }">
              <div class="number hours">48+</div>
              <div class="category hours">Hack Hours</div>
            </CBox>
            <img src="~/assets/glimpses/5.png"
          /></CFlex>
        </CGridItem>
        <CGridItem
          display="flex"
          :rowStart="{ base: '3', sm: '2' }"
          :colStart="{ base: '2', sm: '3' }"
        >
          <img src="~/assets/glimpses/6.png" />
        </CGridItem>
        <CGridItem
          display="flex"
          :rowStart="{ base: '4', sm: '1' }"
          :colStart="{ base: '1', sm: '4' }"
        >
          <img src="~/assets/glimpses/7.png" />
        </CGridItem>
        <CGridItem
          display="flex"
          :rowStart="{ base: '4', sm: '2' }"
          :colStart="{ base: '2', sm: '4' }"
        >
          <CFlex direction="column" justify="space-between">
            <CBox :pt="{ base: '0rem', sm: '0.5rem' }">
              <div class="number projects">720+</div>
              <div class="category projects">Projects</div>
            </CBox>
            <img src="~/assets/glimpses/8.png"
          /></CFlex>
        </CGridItem>
        <CGridItem
          display="flex"
          :rowStart="{ base: '5', sm: '1' }"
          :colStart="{ base: '1', sm: '5' }"
        >
          <CFlex
            justify="space-between"
            :direction="{ base: 'column', sm: 'column-reverse' }"
          >
            <CBox :pb="{ base: '0rem', sm: '0.5rem' }">
              <div class="number workshops">32+</div>
              <div class="category workshops">Workshops</div>
            </CBox>
            <img src="~/assets/glimpses/9.png"
          /></CFlex>
        </CGridItem>
        <CGridItem
          display="flex"
          :rowStart="{ base: '5', sm: '2' }"
          :colStart="{ base: '2', sm: '5' }"
        >
          <img src="~/assets/glimpses/10.png" />
        </CGridItem>
      </CGrid>
    </CFlex>
  </ContainerVue>
</template>
<script>
import { CBox, CFlex, CGrid, CGridItem } from '@chakra-ui/vue'
import HeadingVue from './HeadingComponent.vue'
import ContainerVue from './Container.vue'

export default {
  components: {
    HeadingVue,
    ContainerVue,
    CFlex,
    CGrid,
    CGridItem,
    CBox,
  },
}
</script>
<style lang="scss" scoped>
#glimpse {
  margin-top: 4rem;
  padding-top: 4rem;

  @include respond-below(mobile) {
    padding-top: 4rem;
  }
}

.number {
  font-weight: 700;
  line-height: 4rem;
  font-size: 4rem;

  @include respond-below(mobile) {
    font-size: 2.75rem;
  }
}

.category {
  font-weight: 700;
  line-height: 2rem;
  font-size: 2.25rem;

  @include respond-below(mobile) {
    font-size: 1.5rem;
    margin-top: -1rem;
  }
}

.hackers {
  color: rgba(222, 133, 16, 1);
}

.countries {
  color: rgba(255, 154, 108, 1);
}
.hours {
  color: rgba(249, 113, 40, 1);
}
.projects {
  color: rgba(243, 175, 87, 1);
}
.workshops {
  color: rgba(239, 68, 68, 1);
}
</style>

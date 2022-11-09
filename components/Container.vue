<template>
  <div
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: intersectionOptions,
    }"
    class="container"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: ['name'],
  data() {
    return {
      incrementCalled: false,
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0.4, 1],
      },
    }
  },
  methods: {
    onWaypoint({ going }) {
      if (!this.name) return

      if (going === this.$waypointMap.GOING_IN) {
        ;['about', 'tracks', 'sponsors', 'faq'].forEach((e) => {
          document.getElementById(`nav-link-${e}`).classList.remove('active')
        })
        if (['about', 'tracks', 'sponsors', 'faq'].includes(this.name))
          document
            .getElementById(`nav-link-${this.name}`)
            .classList.add('active')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background: transparent;
  padding-bottom: 150px;
}
</style>

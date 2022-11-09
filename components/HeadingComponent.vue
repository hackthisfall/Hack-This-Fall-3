<template>
  <div class="heading-container">
    <h1 class="back-text">{{ back }}</h1>
    <h1 class="front-text">{{ front }}</h1>
  </div>
</template>
<script>
export default {
  props: ['front', 'back'],
}
</script>
<style lang="scss" scoped>
.heading-container {
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-left: 10px;
  height: 300px;

  .back-text {
    position: absolute;
    left: -2.8%;
    top: 0px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 240px;
    line-height: 300px;
    color: rgba(255, 255, 255, 0.05);
  }

  .front-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 70px;
    line-height: 100px;
    letter-spacing: 0.02em;
    color: #d04d29;
    position: absolute;
    left: 2.7%;
    bottom: 23.5%;
  }
}
</style>

<template>
  <div class="container" />
  <video autoplay loop muted playsinline>
    <source
      src="public/mixkit-fashion-model-sits-posing-with-white-background-9100-large.mp4"
      type="video/mp4"
    />
  </video>
</template>

<script>
  export default {
    props: {
      movieSrc: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  video {
    /* Make the video take up the full screen */
    width: 100%;
    height: auto;
    object-fit: cover;
    max-width: 100%;
  }
</style>

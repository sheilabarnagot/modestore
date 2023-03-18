<!-- KZ video, autoplay, mobile first and for bigger screens from 768px -->
<template>
  <video autoplay loop muted playsinline>
    <source :src="movieSrc" type="video/mp4" />
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
  .container {
    position: relative;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
  }

  #tzst {
    overflow: hidden;
    /* position: absolute; */
  }

  .movie-auto {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
  }
  video {
    /* Sets the default styles for the video */
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    /* Add more styles for larger screens */
    video {
      height: 100vh;
    }
  }
</style>

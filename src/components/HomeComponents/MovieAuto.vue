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
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    overflow: hidden;
  }

  .movie-auto {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
  }
  video {
    /* Set the default styles for the video */
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    /* Add styles for larger screens */
    video {
      height: 50vh;
    }
  }
</style>
<!--
<style scoped>
  video {
    /* Set the default styles for the video */
    width: 60%;
    height: auto;
    object-fit: cover;
    max-width: 100%;
  }

  @media (min-width: 768px) {
    /* Add styles for larger screens */
    video {
      height: 50vh;
    }
  }
</style>
-->

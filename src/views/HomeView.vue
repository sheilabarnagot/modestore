<script>
  // import image from '../../public/unsplsh.jpg'
  export default {}
</script>

<template>
  <div id="img-container">
    <img src="/img1200/toneintone-grey-id-6.jpg" />
    <div id="inner">
      <h1>Store</h1>
    </div>
  </div>
</template>

<style scoped>
  #img-container {
    min-height: 100vh;
    position: relative;
  }
  #inner {
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    right: 25%;
    top: 1%;
  }
  h1 {
    font-family: 'didot';
    color: black;
    font-size: 4em;
  }
  img {
    max-width: 100%;
  }
</style>

<script>
  import CitiesList from './components/CitiesList.vue'
  import CounterButton from './components/CounterButton.vue'
  import HelloWorld from './components/HelloWorld.vue'
  import MovieAuto from './components/MovieAuto.vue'
  import GridImg from './components/GridImg.vue'
  import CarouselImg from './components/CarouselImg.vue'
  export default {
    components: {
      CitiesList,
      CounterButton,
      HelloWorld,
      MovieAuto,
      GridImg,
      CarouselImg
    }
  }
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">Om</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Kontakt</RouterLink>
      </li>
    </ul>
  </nav>
  <HelloWorld msg="Hello World!" />
  <CitiesList />
  <CounterButton />
  <MovieAuto :items="items" />
  <CarouselImg />
  <GridImg :items="items" />
  <main>
    <RouterView />
  </main>
</template>

<!--
<template>
  <div id="app">
    <header>

    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>

    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
-->

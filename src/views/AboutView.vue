<!-- <template>
  <div>
    <h2>About Bonie</h2>
    <p>
      Bonie is a luxury fashion brand that uses the best materials and focuses
      on high quality in their products. In addition to their fashion line,
      Bonie also has an in-house team that develops webshops and other
      applications using Vue, Vuex, and Vite.
    </p>
    <h3>The Creative Team</h3>
    <div class="team">
      <div v-for="member in team" :key="member.name" class="member">
        <img :src="member.image" :alt="member.name" />
        <h4>{{ member.name }}, {{ member.age }}</h4>
        <p>Background: {{ member.background }}</p>
        <p>Skills: {{ member.skills }}</p>
        <p>Something surprising: {{ member.surprise }}</p>
        <p>Top 3 things they like to do:</p>
        <ul>
          <li v-for="thing in member.likes" :key="thing">{{ thing }}</li>
        </ul>
      </div>
    </div>
  </div>
</template> -->

<template>
  <div>
    <AboutSide :image="team.image" :team="team" />
    <!-- <img src="../components/SvgIcons/avatars/KlaraAvatar.vue" /> -->
  </div>
</template>
<script>
  import AboutSide from '../components/AboutSide.vue'
  // import KlaraAvatar from '../components/SvgIcons/avatars/KlaraAvatar.vue'

  export default {
    name: 'AboutView',
    components: {
      AboutSide
      // KlaraAvatar
    },
    data() {
      return {
        team: [
          {
            name: 'Klara',
            age: new Date().getFullYear() - 1981,
            // image: <'../components/SvgIcons/avatars/KlaraAvatar.vue'>,
            background: 'Graphic design',
            skills: 'Adobe Creative Suite, HTML, CSS',
            surprise: 'She has a black belt in karate',
            likes: ['Hiking', 'Drawing', 'Trying new restaurants']
          },
          {
            name: 'Pontus',
            age: new Date().getFullYear() - 1992,
            // image: 'pontus.jpg',
            background: 'Warlock',
            skills: 'Web development',
            surprise: 'I have got a pet snake',
            likes: ['Playing video games']
          },
          {
            name: 'Diyana  Rahim ',
            age: new Date().getFullYear() - 1996,
            // image: 'diyana.jpg',
            education: 'frontend-developer',
            skills: 'Painting',
            likes: [
              'travellling',
              'going to gym(exercise)',
              'whatching decomentaries',
              'read books'
            ]
          },
          {
            name: 'Roland',
            age: new Date().getFullYear() - 1995,
            // image: 'roland.jpg',
            background: 'Table-tennis legend',
            skills: 'Doing the dishes, table-tennis',
            education: 'full-stack developer',
            surprise: 'Going to visit Japan this year',
            likes: [
              'Playing video games',
              'Travelling to new countries',
              'Outdoors life'
            ]
          },
          {
            name: 'Lilas',
            age: new Date().getFullYear() - 1997,
            // image: 'lilas.jpg',
            Education: 'Frontend-Developer',
            skills: 'Drive a car',
            likes: ['Travel around to different countries', 'Watching filmes']
          },
          {
            name: 'Dona',
            age: new Date().getFullYear() - 1987,
            // image: 'dona.jpg',
            background: 'Poker player',
            skills:
              'Can create web applications so fast they can break the sound barrier.',
            education: 'Program',
            surprise: 'Has talent for beatboxing',
            likes: [
              'Running late.',
              'Working out, but only because it allows her to eat more pizza.',
              "Going shopping, but her bank account doesn't."
            ]
          },

          {
            name: 'Sheila',
            age: new Date().getFullYear() - 1988,
            // image: '/SheilaAvatar.vue',
            background: 'User experience design',
            skills: 'Wireframing, prototyping, user testing',
            surprise: 'She has a collection of vintage typewriters',
            likes: ['Music/Dance', 'Train and eat', 'Meet people/Travel']
          }
        ]
      }
    }
  }
</script>

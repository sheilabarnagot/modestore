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
    <img src="../components/SvgIcons/avatars/KlaraAvatar.vue" />
  </div>
</template>
<script>
  import AboutSide from '../components/AboutSide.vue'

  export default {
    name: 'AboutView',
    components: {
      AboutSide
    },
    data() {
      return {
        team: [
          {
            name: 'Klara',
            age: new Date().getFullYear() - 1981,
            image: '../components/SvgIcons/avatars/KlaraAvatar.vue',
            background: 'Graphic design',
            skills: 'Adobe Creative Suite, HTML, CSS',
            surprise: 'She has a black belt in karate',
            likes: ['Hiking', 'Drawing', 'Trying new restaurants']
          },
          {
            name: 'Pontus',
            age: new Date().getFullYear() - 1991,
            image: 'pontus.jpg',
            background: 'Full-stack development',
            skills: 'Vue, Node.js, MongoDB',
            surprise: "He's a classically trained pianist",
            likes: ['Playing video games', 'Cooking', 'Playing piano']
          },
          {
            name: 'Sheila',
            age: new Date().getFullYear() - 1988,
            image: 'sheila.jpg',
            background: 'User experience design',
            skills: 'Wireframing, prototyping, user testing',
            surprise: 'She has a collection of vintage typewriters',
            likes: ['Reading', 'Going to concerts', 'Trying new cocktails']
          },

          {
            name: 'Diyana',
            age: 29,
            image: 'diyana.jpg',
            background: 'Front-end development',
            skills: 'Vue, React, TypeScript',
            surprise: "She's a licensed scuba diver",
            likes: ['Traveling', 'Scuba diving', 'Photography']
          },
          {
            name: 'Roland',
            age: 31,
            image: 'roland.jpg',
            background: 'UI design',
            skills: 'Sketch, Figma, Photoshop',
            surprise: 'He can juggle five balls at once',
            likes: ['Playing basketball', 'Juggling', 'Going to the movies']
          },
          {
            name: 'Lilas',
            age: 26,
            image: 'lilas.jpg',
            background: 'Illustration',
            skills: 'Adobe Illustrator, Procreate',
            surprise: "She's an amateur astronomer",
            likes: ['Stargazing', 'Drawing', 'Going to art museums']
          },
          {
            name: 'Dona',
            age: 28,
            image: 'dona.jpg',
            background: 'UI design',
            skills: 'Sketch, Figma, Photoshop',
            surprise: 'She has a pet hedgehog',
            likes: [
              'Playing video games',
              'Going to the gym',
              'Watching documentaries'
            ]
          }
        ]
      }
    }
  }
</script>

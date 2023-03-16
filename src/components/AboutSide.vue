<!-- <template>
  <div id="aboutContainer">
    <div id="avatar"></div>
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
          <p><strong>Background:</strong> {{ member.background }}</p>
          <p><strong>Skills:</strong> {{ member.skills }}</p>
          <p><strong>Something surprising:</strong> {{ member.surprise }}</p>
          <p><strong>Top 3 things they like to do:</strong></p>
          <ul>
            <li v-for="thing in member.likes" :key="thing">{{ thing }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template> -->
<template>
  <div>
    <div id="intro">
      <h2>About Bonie</h2>
      <p>
        Bonie is a luxury fashion brand that uses the best materials and focuses
        on high quality in their products. In addition to their fashion line,
        Bonie also has an in-house team that develops webshops and other
        applications using Vue, Vuex, and Vite.
      </p>
    </div>
    <h3>The Creative Team</h3>
    <div id="membersContainer" v-for="(member, index) in team" :key="index">
      <div id="members">
        <h1>{{ member.name }}</h1>
        <!-- <svg :src="member.image" :alt="member.image" /> -->
        <!-- <KlaraAvatar /> -->
        <p>
          <strong>Age: {{ member.age }}</strong>
        </p>
        <p><strong>Background:</strong> {{ member.background }}</p>
        <p><strong>Skills:</strong> {{ member.skills }}</p>
        <p><strong>Something surprising:</strong> {{ member.surprise }}</p>
        <p><strong>Top 3 things they like to do:</strong></p>
        <ul>
          <li v-for="thing in member.likes" :key="thing">{{ thing }}</li>
          <!-- <p>{{ member.description }}</p> -->
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  // import KlaraAvatar from './SvgIcons/avatars/KlaraAvatar.vue'
  export default {
    components: {
      // KlaraAvatar
    },
    name: 'TeamModestore',
    props: {
      team: {
        type: String,
        default: 'About us'
      }
    }
  }
</script>

<style scoped>
  #intro {
    margin: 15em 2em 10em 2em;
  }
  #membersContainer {
    width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border: 2px solid red;
  }
</style>

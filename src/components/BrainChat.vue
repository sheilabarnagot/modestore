<!--KZ + PA creating a chat for customer with axios and api
obs! cors problem-->
<!--npm install axios
<template>
  <div>
    <div v-for="message in messages" :key="message.id">
      {{ message.text }}
    </div>
    <form @submit.prevent="sendMessage">
      <input
        v-model="newMessage"
        type="text"
        placeholder="Type your message..."
      />
      <button type="submit">Send</button>
    </form>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        messages: [],
        newMessage: ''
      }
    },
    methods: {
      async sendMessage() {
        const response = await axios.get(
          'http://api.brainshop.ai/get?bid=172570&key=KmZJgMGlMqmDR8xD&uid=[uid]&msg=' +
            encodeURIComponent(this.message)
        )
        const message = {
          text: response.data.cnt,
          sender: 'bot'
        }
        this.messages.push(message)
        this.newMessage = ''
      }
    }
  }
</script>
-->

<script>
  import { defineComponent } from 'vue'
  import { useI18n } from 'vue-i18n'

  export default defineComponent({
    setup() {
      const { locale, t } = useI18n()
      const languages = [
        { text: 'en', value: 'en' },
        { text: 'es', value: 'es' },
        { text: 'se', value: 'se' }
      ]
      function changeLocale(event) {
        const target = event.target
        const selectLocale = target.value
        if (selectLocale !== locale.value) {
          locale.value = selectLocale
        }
      }
      return {
        locale,
        languages,
        changeLocale,
        t
      }
    }
  })
</script>

<template>
  <label>
    <select name="lang" id="langButton" v-model="locale" @change="changelocale">
      <option v-for="(lang, i) in languages" :value="lang.value" :key="i">
        {{ lang.text }}
      </option>
    </select>
  </label>
</template>

<style scoped>
  #langButton {
    background-color: black;
    color: azure;
    outline: none;
    border: none;
    border-radius: 5px;
  }
</style>

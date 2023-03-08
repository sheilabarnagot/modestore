<script>
  import { defineComponent } from 'vue'
  import { useI18n } from 'vue-i18n'

  export default defineComponent({
    setup() {
      const { locale, t } = useI18n()
      const languages = [
        { text: '🇬🇧', value: 'en' },
        { text: '🇪🇸', value: 'es' },
        { text: ' 🇸🇪', value: 'se' }
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
    margin: 5px 15px;
    padding: 3px 4px;
    background-color: black;
    color: azure;
    outline: none;
    border: none;
    border-radius: 5px;
    position: absolute;
  }
</style>

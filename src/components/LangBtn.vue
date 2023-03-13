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
  <div>
    <label id="langButton">
      <select name="lang" v-model="locale" @change="changelocale">
        <option v-for="(lang, i) in languages" :value="lang.value" :key="i">
          {{ lang.text }}
        </option>
      </select>
    </label>
  </div>
</template>

<style scoped>
  #langButton {
    background-color: none;
    color: rgb(103, 114, 114);
    outline: none;
    border: none;
    border-radius: 5px;
    position: absolute;
    z-index: 1;
    top: 0;
  }
</style>

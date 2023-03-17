<script>
  import { defineComponent } from 'vue'
  import { useI18n } from 'vue-i18n'
  //test
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
<!-- This component allows changing the language of the app using the vue-i18n plugin.

In the setup() the useI18n function is imported, which provides the instance of the i18n object that contains the language and translation information. A locale constant is created that represents the current language of the application, a list of languages objects that contains the different languages available, and a changeLocale function that is executed when a new language is selected from the dropdown menu.

In this case, the exported properties are locale, languages, changeLocale, and t (which is a translation function provided by vue-i18n).

 -->

<template>
  <div>
    <label id="langButton">
      <select id="button" name="lang" v-model="locale" @change="changelocale">
        <!-- KZ replaced flag with text and removed background color-->
        <option value="" disabled hidden>lgs</option>
        <option v-for="(lang, i) in languages" :value="lang.value" :key="i">
          {{ lang.value }}
        </option>
      </select>
    </label>
  </div>
</template>

<!-- I used a div element that wraps around all the content to make it easy to style. A select element that is the language selector button and that contains a list of options to choose from.
The v-model attribute that binds the value selected in the select to the locale property (3 Json in locale).
An @change event that is fired when the user changes the language selection and that calls the changelocale method of the data model.
And a v-for directive that creates an option for each lang object in the languages array, using the text property as the text of the option and the value property as the value.
 -->

<style scoped>
  #langButton {
    position: absolute;
    /* z-index: 1; */
    right: 0;
    top: 0;
  }
  #button {
    /* KZ transparent  background-color: #dbdeeb;*/
    outline: none;
    border: none;
    color: #3d3e41;
    border-radius: 3px;

    /*margin: 50px 30px;
    padding-left: 5px;*/
    background-color: transparent;
  }
</style>

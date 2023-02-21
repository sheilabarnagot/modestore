<template>
  <form>
    <div class="Nummer">
      <label>Number</label>
      <input v-kortformat:formatCardNumber />
    </div>

    <div class="Datum">
      <label>Date</label>
      <input v-kortformat:formaCardDate />
    </div>

    <div class="cvc">
      <label>Card cvc</label>
      <input v-kortformat:formaCardCVC />
    </div>
  </form>
</template>

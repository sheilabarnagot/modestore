<!-- KZ new child component for MyAccount->HelpChild->ChildHelp->PaymentComponent
  add pict  BetalningsComponent here.
-->

<template>
  <div class="payment-container">
    <h2>Payment Options</h2>
    <div class="payment-methods">
      <div class="payment-method">
        <img src="/images/visa.png" alt="Visa" />
        <h3>Visa</h3>
        <p>Secure and widely accepted credit card for online purchases.</p>
      </div>
      <div class="payment-method">
        <img src="/images/mastercard.png" alt="Mastercard" />
        <h3>Mastercard</h3>
        <p>Secure and widely accepted credit card for online purchases.</p>
      </div>
      <div class="payment-method">
        <img src="/images/amex.png" alt="American Express" />
        <h3>American Express</h3>
        <p>Secure and widely accepted credit card for online purchases.</p>
      </div>
      <div class="payment-method">
        <img src="/images/paypal.png" alt="PayPal" />
        <h3>PayPal</h3>
        <p>
          Secure online payment service that allows you to pay with your PayPal
          balance or linked bank account or credit card.
        </p>
      </div>
      <div class="payment-method">
        <img src="/images/klarna.png" alt="Klarna" />
        <h3>Klarna</h3>
        <p>
          Buy now, pay later service that allows you to defer payment or split
          your payment into installments.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .payment-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
  }

  .payment-methods {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }

  .payment-method {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 90%;
    max-width: 400px;
  }

  .payment-image {
    width: 80%;
    margin-bottom: 0.5rem;
  }

  h3 {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    text-align: justify;
  }
</style>

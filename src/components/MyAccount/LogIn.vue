<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<template>
  <h2>LOG IN TO YOUR ACCOUNT</h2>
  <form id="formlogin">
    <input class="loginInput" type="email" placeholder="Email" />
    <input class="loginInput" type="password" placeholder="Password" />
    <input id="loginButton" type="button" placeholder="login" value="LOG IN" />
  </form>
  <p id="passText">Have you forgotten your password?</p>

  <h2>NEED AN ACCOUNT</h2>
  <input id="button" type="button" value="REGISTER" />

</template>

<style scoped>
h2{
font-size: 15px;
font-weight: 700;
margin: 20px 0 30px 0;
padding: 10px;
}
#formlogin{
  width: 100%;
  height: 20vh;
  margin: 10px 0;
display:flex;
flex-direction: column;
align-items: center;
justify-content:space-between;
}
.loginInput{
width: 90%;
border:none;
border-bottom: 1px solid #000;
}
.loginInput:focus{
outline: none;
}
#loginButton{
width: 90%;
background-color: #000;
color: #fff;
font-size: 11px;
border: none;
padding: 10px;
margin-top: 20px;
}
#passText {
  width: 90%;
height: 30px;
  margin: 20px 0 40px;
  padding: 10px;
font-size: 11px;
}
#passText:hover{
text-decoration: underline;
}
#button{
  margin: 0 5%;
  width: 90%;
background-color: #fff;
color: #000;
font-size: 11px;
border: none;
border: 1px solid #000;
padding: 10px;
}

@media (min-width: 980px){
  h2{
font-size: 20px;
margin: 20px  30px 0;
}
#passText {
  margin: 20px 70px 40px;
font-size: 15px;
}
#loginButton{
font-size: 15px;
}
#button{
font-size: 15px;
margin-top: 30px;
}
}
</style>

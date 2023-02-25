  <template>
    <h2>PERSONAL DETAILS</h2>
  <form id="formSignup">
    <input class="loginInput" type="email" placeholder="Email" />
    <input class="loginInput" type="password" placeholder="Password" />
    <input class="loginInput" type="password" placeholder="Repeat password" />
    <input class="loginInput" type="TEXT" placeholder="Name" />
    <input class="loginInput" type="TEXT" placeholder="Surname" />
  </form>
  <div id="radiobuttons">
    <div class="radioButton">
      <input class="radio" type="checkbox" />
      <p class="text">I want to recieve personalised commercial communications</p>
    </div>
    <div class="radioButton">
      <input class="radio" type="checkbox" />
      <p class="text">I have reed and understand the privacy and cookies policy</p>
    </div>
    <input id="signupButton" type="button" value="CREATE ACCOUNT" />
  </div>
</template>

<style scoped>
h2{
font-size: 15px;
font-weight: 700;
margin: 10px 0 20px 0;
padding: 10px;
}
#formSignup{
  width: 100%;
  height: 30vh;
  margin: 30px 0;
display:flex;
flex-direction: column;
align-items: center;
justify-content:space-between;
/* border: 1px solid red */
}
.loginInput{
width: 90%;
border:none;
border-bottom: 1px solid #000;
}
.loginInput:focus{
outline: none;
}
#signupButton{
  margin: 0 5%;
  width: 90%;
background-color: #fff;
color: #000;
font-size: 11px;
border: none;
border: 1px solid #000;
padding: 10px;
}
.radioButton{
  width: 90%;
  margin-left: 5%;
  height: 10vh;
display: flex;
flex-direction: row;
align-items: flex-start;
/* border: 1px solid red; */
}
.radio{
  width: 15px;
  height: 15px;
margin: 6px 6px 0 0;
appearance:none;
border: 2px solid #000;
}
.radio:checked{
  background-color: #000;
}
@media (min-width:980px){
  .radioButton{
  width: 90%;
  margin-left: 5%;
  height: 7vh;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
/* border: 1px solid red; */
}
#signupButton{
  width: 30%;
  margin: 5% 0 0 35%;
}

}
</style>

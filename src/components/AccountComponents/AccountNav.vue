<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/accountinfo/kop">{{ $t('navbar.köp') }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/accountinfo/konto">{{
          $t('navbar.konto')
        }}</RouterLink>

        <RouterLink to="/LogIn">{{ $t('navbar.konto') }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/accountinfo/favourites">{{
          $t('navbar.favoriter')
        }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/accountinfo/help">{{ $t('navbar.hjälp') }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/accountinfo/settings">{{
          $t('navbar.Inställningar')
        }}</RouterLink>
      </li>
    </ul>
  </nav>
  <RouterView />
  <input id="logout" type="button" value="logout" />
</template>

<style scoped>
  ul {
    padding-left: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
  }

  ul li {
    padding-left: 1em;
  }

  ul li a {
    font-family: 'jost';
    text-decoration: none;
  }
  #logout {
    background-color: #000;
    color: #fff;
    font-size: 11px;
    border: none;
    border: 1px solid #000;
    padding: 10px;
  }
</style>

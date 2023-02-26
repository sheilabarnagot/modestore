<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/accountinfo/kop">{{ $t('navbar.köp') }}</RouterLink>
      </li>
      <li>
<<<<<<< HEAD
        <RouterLink to="/accountinfo/konto">{{
          $t('navbar.konto')
        }}</RouterLink>
=======
        <RouterLink to="/LogIn">{{ $t('navbar.konto') }}</RouterLink>
>>>>>>> a490d21395d0c79db6563a3a696fdf95c0e17fba
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
</style>

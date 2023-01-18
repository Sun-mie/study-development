<template>
  <div>
    <TheHeader/> <!--파스칼표기법은 셀프클로징태그가 가능-->
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import UserInfo from './components/UserInfo.vue';
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList';
export default {
  components:{
    UserInfo,
    TheHeader,
    'badge-list': BadgeList //이것도 가능
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
<template>
  <div>
    <TheHeader/> <!--파스칼표기법은 셀프클로징태그가 가능-->
    <button @click="setSelectedComponent('manage-goals')">ManageGoals</button>
    <button @click="setSelectedComponent('active-goals')">ActiveGoals</button>
    <keep-alive>
    <component :is="selectedComponenet"></component>
    </keep-alive>
<!--    <manage-goals v-if="selectedComponenet === 'manage-goals'"></manage-goals>-->
<!--    <active-goals v-if="selectedComponenet === 'active-goals'"></active-goals>-->
<!--    <badge-list></badge-list>-->
<!--    <user-info-->
<!--      :full-name="activeUser.name"-->
<!--      :info-text="activeUser.description"-->
<!--      :role="activeUser.role"-->
<!--    ></user-info>-->
<!--    <course-goals>-->
<!--      &lt;!&ndash; 슬롯에 보내고 싶은 마크업을 template으로 감싼다.&ndash;&gt;-->
<!--      <template #default="slotProps"> &lt;!&ndash;slotProps는 언제나 객체 : slot에서 정의된 프로퍼티 객체로 이 template에서 접근할 수 있다.&ndash;&gt;-->
<!--      <h2>{{ slotProps.item }}</h2> &lt;!&ndash; 마크업 : 여기선 슬롯에 마크업을 전달&ndash;&gt;-->
<!--        <p>{{ slotProps['another-prop'] }}</p> &lt;!&ndash;이 []는 Vue가 자동 카멜케이스로 변환하지 않는다. 대괄호는 대시가 들어간 표현도 사용할 수 있다. *확인해보기&ndash;&gt;-->
<!--      </template>-->
<!--    </course-goals>-->
  </div>
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue';
import ManageGoals from './components/ManageGoals.vue';
import ActiveGoals from'./components/ActiveGoals.vue';
// import UserInfo from './components/UserInfo.vue';
// import BadgeList from './components/BadgeList';
// import CourseGoals from './components/CourseGoals.vue';

export default {
  components:{
    TheHeader,
    ManageGoals,
    ActiveGoals,
    // UserInfo,
    // 'badge-list': BadgeList, //이것도 가능
    // CourseGoals
  },
  data() {
    return {
      selectedComponenet:'active-goals', //HTML 태그이름
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    setSelectedComponent(cmp){
      this.selectedComponenet = cmp;
    }
  }
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
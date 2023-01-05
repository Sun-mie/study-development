const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
  //크롬 개발자 모드에서 디버깅하며 살펴보기
  //생성에관한 주기
  beforeCreate(){
    console.log('beforeCreated()');
  },
  created(){
    console.log('created()');
  },
  beforeMount(){
    console.log('boforeMount()');
  },
  mounted(){
    console.log('mounted()');
  },
  //업데이트에 관한 주기
  beforeUpdate(){
    console.log('beforeUpdate()');
  },
  updated(){
    console.log('updated()');
  },
  //unmount 주기
  beforeUnmount(){
    console.log('beforeUnmount()');
  },
  unmount(){
    console.log('unmount()');
  }
});
app.mount('#app');
//실제 애플리케이션에선 아래 메서드를 호출할 일이 거의 없음.
//unmount 주기를 보여주기 위한 메서드
setTimeout(()=> {app.unmount();},3000)


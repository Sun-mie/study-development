const app = Vue.createApp({
  data() {
    return { 
      enterdValue: '',
      goals: []
    };
  },
  methods: {
    addGoals(){
      this.goals.push(this.enterdValue);
      this.enterdValue = '';
    },
    getGoals(){
      return
    }
  }
});

app.mount('#user-goals');

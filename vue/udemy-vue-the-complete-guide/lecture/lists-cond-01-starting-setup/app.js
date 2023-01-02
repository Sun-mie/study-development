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
    removeGoal(idx){
      this.goals.splice(idx, 1)
    }
  }
});

app.mount('#user-goals');

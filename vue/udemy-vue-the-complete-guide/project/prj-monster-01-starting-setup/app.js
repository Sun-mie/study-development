function randomNum(max, min){
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
 data(){
    return{
        logs: [],
        monster: 100,
        user: 100,
        currentRound: 0,
        winner: null
    };
 },
 methods: {
    restart(){
        this.monster= 100,
        this.user= 100,
        this.currentRound= 0,
        this.winner= null
    },
    attackMonster(){
        this.currentRound++;
        const damage = randomNum(15, 5);
        this.monster -= damage;
        this.addlog('user', 'attack', 'monster', -damage);
        this.attackUser();
    },
    attackUser(){
        const damage = randomNum(20, 7);
        this.user -= damage;
        this.addlog('monster', 'attack', 'user', -damage);
    },
    specialAttack(){
        this.currentRound++;
        const damage = randomNum(25, 10);
        this.monster -= damage;
        this.addlog('user', 'spacial-attack', 'monster', -damage);
        this.attackUser();

    },
    healUser(){
        const heal = randomNum(25, 10);
        if(this.user + heal > 100){
            this.user = 100;
        }else{
            this.user += heal;
        }
        this.addlog('user', 'heal', 'user', '+'+heal);
    },
    surrender(){
        this.winner= 'monster';
    },
    addlog(who, what, whom, value){
        this.logs.unshift({
            actionBy: who,
            actionType: what,
            actionTo: whom,
            actionValue: value
        })
    }
 },
 watch: {
    //watch는 마지막 감시 대상의 PROPERTY 값을 자동으로 가져온다.
    user(value){
        if(value <= 0 && this.monster <= 0){
            //무승부
            this.winner = 'draw';
        }else if(value <= 0){
            //user 패배
            this.winner = 'monster';
        }
    },
    monster(value){
        if(value <=  0 && this.user <= 0){
            //무승부
            this.winner = 'draw';
        }else if(value <= 0){
            //monster 패배
            this.winner = 'user';
        }
    }
 },
computed: {
    monsterBar(){
        if(this.monster < 0){
            return { width: '0%' };
        }else{
            return { width: this.monster + '%' };
        }
    },
    userBar(){
        if(this.user < 0){
            return { width: '0%' };
        }else{
            return { width: this.user + '%' };
        }
    },
    sprcialVitalization(){
        if(this.currentRound % 3 !== 0){
            return true;
        }else{
            return false;
        }
    }
}
});
app.mount('#game')
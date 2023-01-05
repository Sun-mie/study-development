// 기존 monster-slayer를 변형해서 시간초 게임으로 재해석해봄
function randomNum(max, min){
    return Math.floor(Math.random() * (max - min) + min);
}
const app = Vue.createApp({
    data(){
        return{
            setting:{
                monsterHP: 1000,
                userHP: 1000,
                timer: 10,
                specialTimer: 3,
                healTimer: 3,
            },
            timerInterval: null,
            attackInterval: null,
            specialInterval: null,
            healInterval: null,
            monsterHP: null,
            userHP: null,
            timer: null,
            specialTimer: null,
            healTimer: null,
            showControler: false,
            specialBtn: false,
            healBtn: false,
            result: null,
            logRecords:[],
        }
    },
    watch: {
        result(){
            if(this.result !== null){
                this.showControler = false;
            }
        },
        timer(){
            if(this.timer === 0){
                this.result = 'timeover';
                this.gameStop();
            }
        },
        monsterHP(){
            if(this.monsterHP === 0 & this.userHP !== 0){
                this.result = 'win';
                this.gameStop();
            }else if(this.monsterHP === 0 & this.userHP === 0){
                this.result = 'draw';
                this.gameStop();
            }
        },
        userHP(){
            if(this.userHP === 0 & this.monsterHP !== 0){
                this.result = 'lose';
                this.gameStop();
            }else if(this.monsterHP === 0 & this.userHP === 0){
                this.result = 'draw';
            }
        },
        specialInterval(){
            if(this.specialInterval !== null){
                this.specialBtn= true;
            };
        },
        healInterval(){
            if(this.healInterval !== null){
                this.healBtn= true;
            };
        },
        specialTimer(){
            if(this.specialTimer < 0){
                clearInterval(this.specialInterval);
                this.specialTimer = this.setting.specialTimer;
                this.specialBtn = false;
            }
        },
        healTimer(){
            if(this.healTimer < 0){
                clearInterval(this.healInterval);
                this.healTimer = this.setting.healTimer;
                this.healBtn = false;
            }
        },
    },
    computed: {
        userHpBar(){
            if(this.userHP === null){
                return 100;
            }else{
                return (this.userHP / this.setting.userHP ) * 100;
            }
        },
        monsterHpBar(){
            if(this.monsterHP === null){
                return 100;
            }else{
                return (this.monsterHP / this.setting.monsterHP ) * 100;
            }
        },
        
    },
    methods: {
        gameBtn(){
            this.showControler = !this.showControler;
            this.gameStart();
        },
        gameStart(){
            this.showControler = true;
            this.monsterHP= this.setting.monsterHP;
            this.userHP= this.setting.userHP;
            this.timer= this.setting.timer;
            this.result= this.setting.result;
            this.logRecords=[];
            this.result = null;
            this.specialTimer = this.setting.specialTimer;
            this.healTimer = this.setting.healTimer;
            this.healBtn = false;
            this.specialBtn = false;
            this.timerInterval = setInterval(() => this.timer -= 1, 1000);
            this.attackInterval = setInterval(() => this.attackUser(), randomNum(700,500));
        },
        gameStop(){
            clearInterval(this.timerInterval);
            clearInterval(this.attackInterval);
            clearInterval(this.specialInterval);
            clearInterval(this.healInterval);
            this.timerInterval = null;
            this.attackInterval = null;
            this.specialInterval = null;
            this.healInterval = null;
        },
        attackUser(){
            const val = randomNum(150,50);
            if(this.userHP - val <= 0){
                this.userHP = 0;
            }else{
                this.userHP -= val;
                this.logRecord("Monster", "attack", "you", -val);
            }
        },
        attackMonster(){
            const val = randomNum(30,10);
            if(this.monsterHP - val <= 0){
                this.monsterHP = 0;
            }else{
                this.monsterHP -= val;
                this.logRecord("You", "attack", "monster", -val);
            }
        },
        specialAttack(){
            const val = randomNum(300,100);
            if(this.monsterHP - val <= 0){
                this.monsterHP = 0;
            }else{
                this.monsterHP -= val;
                this.specialInterval = setInterval(() => this.specialTimer-=1, 1000)
                this.logRecord("You", "special attack", "monster", -val);
            }
        },
        heal(){
            const val = randomNum(100,70);
            if(this.userHP + val >= this.setting.userHP){
                this.userHP = this.setting.userHP;
            }else{
                this.userHP += val;
                this.healInterval = setInterval(() => this.healTimer-=1, 1000);
                this.logRecord("You", "heal", "you", +val);
            }
        },
        surrender(){
            this.result = 'surrender';
            this.gameStop();
        },
        logRecord(performer, action, target, value){
            const log = {
                by: performer,
                type: action,
                to: target,
                val: value
            };
            this.logRecords.unshift(log);
        },
        logDamage(by, type){
            if(by === 'You' & type === 'attack'){
                return 'monster\'s HP';
            }else if(by === 'Monster' & type === 'attack'){
                return 'your HP';
            }else if(by === 'You' & type === 'spacial attack'){
                return 'your HP';
            }else if(by === 'You' & type === 'heal'){
                return 'your HP';
            }
        }
    }
});
app.mount('#game');
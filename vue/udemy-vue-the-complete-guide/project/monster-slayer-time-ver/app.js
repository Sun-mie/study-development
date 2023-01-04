// 기존 monster-slayer를 변형해서 시간초 게임으로 재해석해봄
function randomNum(max, min){
    return Math.floor(Math.random() * (max - min) + min);
}
const app = Vue.createApp({
    data(){
        return{
            showControler: false,
            monsterHP: 1000,
            userHP: 1000,
            timer: 10,
            result: null,
            logRecords:[],
            attackInterval: null,
            timerInterval: null
        }
    },
    watch: {
        timer(){
            if(this.timer === 0){
                this.result = 'timeover';
                this.gameStop();
                
            }
        },
        monsterHP(){
            if(this.monsterHP === 0 & this.userHP !== 0){
                this.gameStop();
                this.result = 'win';
                
            }else if(this.monsterHP === 0 & this.userHP === 0){
                this.result = 'draw'
            }
        },
        userHP(){
            if(this.userHP === 0 & this.monsterHP !== 0){
                this.result = 'lose';
                this.gameStop();
            }else if(this.monsterHP === 0 & this.userHP === 0){
                this.result = 'draw'
            }
        }
    },
    computed: {
        
    },
    methods: {
        gameBtn(){
            this.showControler = !this.showControler;
            this.gameStart();
        },
        gameStart(){
            this.monsterHP= 1000;
            this.userHP= 1000;
            this.timer= 10;
            this.result= null;
            this.logRecords=[];
            this.timerInterval = setInterval(() => this.timer -= 1, 1000);
            this.attackInterval = setInterval(() => this.attackUser(), randomNum(700,500));
            },
        gameStop(){
            clearInterval(this.timerInterval);
            clearInterval(this.attackInterval);
            this.timerInterval = null;
            this.attackInterval = null;
        },
        attackUser(){
            const val = randomNum(150,50);
            if(this.userHP - val <= 0){
                this.userHP = 0;
            }else{
                this.userHP -= val;
                this.logRecord("Monster","attack","you",val);
            }
        },
        attackMonster(){
            const val = randomNum(30,10);
            if(this.monsterHP - val <= 0){
                this.monsterHP = 0;
            }else{
                this.monsterHP -= val;
                this.logRecord("You","attack","monster",val);
            }
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
    }
});
app.mount('#game');
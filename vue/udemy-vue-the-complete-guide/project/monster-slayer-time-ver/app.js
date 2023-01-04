// 기존 monster-slayer를 변형해서 시간초 게임으로 재해석해봄
function randomNum(max, min){
    return Math.floor(Math.random() * (max - min) + min);
}
const app = Vue.createApp({
    data(){
        return{
            controlView: false,
            monsterHP: 1000,
            userHP: 1000,
            remaningTime: 3,
            result: null,
            logRecords:[]
        }
    },
    watch: {
        remaningTime(){
            if(this.remaningTime < 0){
                this.controlView = false;
                this.result = 'timeover';
            }
        },
    },
    computed: {
        gameStart(){
            if(this.monsterHP === 0 || this.userHP === 0){
                this.monsterHP= 1000,
                this.userHP= 1000,
                this.remaningTime= 10,
                this.result= null,
                this.logRecords=[]
            }
            if(this.remaningTime !== 0){
                const mosterloop= setInterval(() => this.attackUser(), 1000);
            }else{
                clearInterval(mosterloop);
            }
        },
    },
    methods: {
        gameBtn(){
            this.controlView = !this.controlView;
            if(this.controlView){
                this.countdown();
                this.gameStart();
            }
        },
        countdown(){
            if(this.remaningTime !== 0){
                const remane = setInterval(() => this.remaningTime -= 1, 1000);
                if(this.remaningTime === 0){
                    clearInterval(remane);
                }
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
        attackUser(){
            const val = randomNum(100,10);
            this.userHP -= val;
            this.logRecord("Monster","attack","you",val);
        },
        attackMonster(){
            const val = randomNum(30,10);
            this.monsterHP -= val;
            this.logRecord("You","attack","monster",val);
        },
    }
});
app.mount('#game');
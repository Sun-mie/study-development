const app = Vue.createApp({
    data(){
        return {
            textList: [],
            enterdText:'',
            show: true
        }
    },
    methods: {
        clickAdd(){
            this.textList.push(this.enterdText);
            this.enterdText = '';
        },
        changeBtn(){
            this.show = !this.show;
        },
        removeText(idx){
            this.textList.splice(idx, 1);
        }
    },
    computed: {
        showText(){
            return this.show ? 'Hide' : 'Show List';
        }
    }
});
app.mount('#assignment');
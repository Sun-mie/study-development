const app = Vue.createApp({
    data(){
        return {
            textlist: [],
            enterdText:'',
            show : false,
        }
    },
    methods: {
        clickAdd(){
            textlist.push(enterdText);
        },
        outputcheck(){
            if(this.textlist.length === 0){
                return this.show;
            }else{
                this.show = !this.show;
                return this.show;
            }
        },
        changeBtn(){
            this.show = !this.show;
        }
    },
    computed: {
        showText() {
            if(this.show === false){
                return 'Hide';
            }else{
                return 'ShowList';
            }
        }
    }
});
app.mount('#assignment');
<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Favorite)': '' }}</h2>
        <button @click="toggleFavorite"> Toggle Favorite </button>
        <button @click="toggleDetails"> {{ detailsAreVisible ? 'Hide' : 'Show' }} </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ phoneNumber }}</li>
            <li><strong>Email:</strong>{{ emailAddress }}</li>
        </ul>
        <button @click="this.$emit('delete',id);">Delete</button>
    </li>
</template>

<script>
export default {
    props:{
        id:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        phoneNumber:{
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: false,
            default: ''
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false
            // type이 boolean일때는 값이 두개 뿐이라서 valudator가 필요 없다.
            // valudator: (value)=>{ value === '1' || value === '0' } 
        }
    },
    emits: ['toggle-favorite', 'delete'],
    // emits: {
    //      // 매개변수로써 내보낼 데이털를 수신할 함수
    //      // toggle-favorite은 id를 가지는 함수에 의해 처리되는 이벤트라는 것을 명시한 격
    //     'toggle-favorite': function(id){
    //         if(id){ // id 유효성 검사도 가능하다.
    //             return true;
    //         }else{
    //             console.warn('Id is missing.');
    //             false;
    //         }
    //     } 
    // },
    data(){
        return{
        detailsAreVisible: false
        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        // 부모와 통신하는 메소드 this.id를 넘겨준다.
        toggleFavorite(){
            this.$emit('toggle-favorite', this.id);
        }
    }
};
</script>

<template>
    <form @submit.prevent="submitData">
        <h2>Sign up friend</h2>
        <div>
        <label>Name: </label>
            <input type="text" v-model="enteredName"/>
        </div>
        <div>
        <label>Phone: </label>
            <input type="tel" v-model="enteredPhone"/>
        </div>
        <div>
        <label>Email: </label>
            <input type="eamil" v-model="enteredEmail" />
        </div>
        <div>
            <button>Add Contact</button>
        </div>
    </form>
</template>

<script>
export default {
    // 외부에서 가져올 데이터가 없어서 props이 없음
    emits:['add-contact'],
    data(){
        return{
                enteredName: '',
                enteredPhone: '',
                enteredEmail: ''
        };
    },
    methods:{
        submitData(){
            this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail);
        }
    }
}
</script>

<template>
    <section>
        <form @submit.prevent="addUserBtn">
        <div>
            <label>Name </label>
        <input type="text" v-model="inputName"/>
        </div>
        <div>
        <label>Age </label>
        <input type="text" v-model="inputAge"/>
    </div>
    <div>
        <button> add </button>
    </div>   
        </form>    
    </section>
</template>

<script>
export default {
    data(){
        return {
            inputName: '',
            inputAge: ''
        }
    },
    methods:{
        addUserBtn(){
            this.$emit('add-user', this.inputName, this.inputAge);
        }
    }
}
</script>
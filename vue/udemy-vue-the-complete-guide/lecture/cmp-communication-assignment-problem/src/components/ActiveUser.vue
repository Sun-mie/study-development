<template>
    <section>
        <div>
            <h2>Name: {{ name }} ({{ no }})</h2>
            <button @click="hideToggle">{{ invisible ? 'Hide' : 'Show' }}</button>
            <button @click="deleteUser">delete</button>
            <div v-if="invisible">
            <h3 >age: {{ age }}</h3>
            
        </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        no:{
            type: Number,
            required: true,
        },
        name:{
            type: String,
            required: true
        },
        age:{
            type: String,
            required: true
        },
        invisible:{
            type: Boolean,
            required: false,
            default: true
        }
    },
    methods:{
        deleteUser(){
            this.$emit('delete-data', this.no)
        },
        hideToggle(){
            this.$emit('hide-btn', !this.invisible, this.no);
        }
    }
}
</script>
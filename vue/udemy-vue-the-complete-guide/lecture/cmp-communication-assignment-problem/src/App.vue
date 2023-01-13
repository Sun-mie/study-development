<template>
    <user-data @add-user="unshitUser"></user-data>
    <section>
        <button @click="allHide">All Hide</button>
        <button @click="allShow">All Show</button>
    </section>
    <active-user v-for="user in users"
    :key="user.no"
    :no="user.no"
    :name="user.name"
    :age="user.age"
    :invisible="user.invisible"
    @delete-data="deleteUser"
    @hide-btn="hidedDetails">
    </active-user>
</template>

<script>
export default {
    data(){
        return {
            cnt : 3,
            users: [
                {
                    no: 1,
                    name: 'name1',
                    age: '20',
                    invisible: true
                },
                {
                    no: 2,
                    name: 'name2',
                    age: '30',
                    invisible: true
                }
            ]
        }
    },
    methods:{
        unshitUser(name, age){
            const newUser = {
                no : this.cnt++,
                name,
                age
            }
            this.users.unshift(newUser);
        },
        deleteUser(no){
            this.users = this.users.filter((user)=> user.no !== no);
        },
        hidedDetails(inv, no){
           this.users[this.users.findIndex(user => user.no === no)].invisible = inv;
        },
        allHide(){
            this.users.forEach(user => user.invisible = false);
        },
        allShow(){
            this.users.forEach(user => user.invisible = true);
        }

    }
}
</script>

<style>
#app section {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2{
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
</style>
<template>
    <div class="container">
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <div class="tile is-child">
                    <img src="../assets/images/register.png" >
                </div>
            </div>
            <div class="tile is-3 is-parent">
                <div class="tile is-child box" >
                    <section>
                        <h3 class="subtitle"> User <span style="color:red"> & </span> Password  </h3>
                        <b-field type="is-warning" class="txt-left"> <b-input v-model="vUsername" placeholder="Username..."></b-input> </b-field>
                        <b-field type="is-warning" class="txt-left"> <b-input v-model="vPassword" type="password" placeholder="Password..." ></b-input> </b-field>
                        <b-field type="is-warning" class="txt-left"> <b-input v-model="vConfirmPassword" type="password" placeholder="Confirm Password..." ></b-input> </b-field>
                        <hr>
                        <h3 class="subtitle">About <span style="color:red">S</span>ystem <span style="color:red">A</span>nalyst</h3>
                        <b-field type="is-success" class="txt-left"> <b-input v-model="vCode" placeholder="Nickname..."></b-input> </b-field>
                        <b-field type="is-success" class="txt-left"> <b-input v-model="vCode" placeholder="Code number..."></b-input> </b-field>
                        <hr>
                        <div class="column" style="margin-top:-20px">
                            <a class="button is-success" style="width:80px" @click="onSave" >Register</a>
                            <a class="button is-primary" style="width:80px" >Clear</a>
                        </div>
                        <router-link to="/" > <a class="button is-link" style="width:164px" >Home Page</a> </router-link>
                    </section>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import 'buefy/dist/buefy.css'
export default {
    data(){
        return{
            vUsername: ''
            , vPassword: ''
            , vConfirmPassword: ''
            , vCode: ''
            , vNickname: ''
        }
    }
    , methods:{
        onSave(){
            let chksave = this.vUsername === '' || this.vPassword === '' || this.vConfirmPassword === '' ? 'err1' : this.vPassword !== this.vConfirmPassword ? 'err2' : ''
            if(chksave === '')
                console.log('Suggess')
            else if(chksave === 'err1')
                console.log('กรุณากรอกข้อมูลให้ครบ')
            else if(chksave === 'err2')
                console.log('กรุณากรอกรหัสผ่านให้ตรงกัน')
        }
    }
}
</script>

<style scoped>
.txt-left {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: left ;
}
.txt-left{
font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center ;
}
.box{
    border: 1px solid #FDBFB5;
}
</style>

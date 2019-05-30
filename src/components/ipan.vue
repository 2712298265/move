<template>
<div :model="xx">
  <div class="retrieve_password" id="retrieve_password">
    <p>重置密码</p>
    <p>设置密码</p>
    <input type="password" placeholder="请输入6~15位密码" v-model.lazy="passwordModel"/>
    <span>@{{passwordValidate.errorText}}</span>
    <p>确认密码</p>
    <input type="password" placeholder="请再输入一遍密码"  v-model.lazy="passwordcheckModel" />
    <span>@{{passwordCheckValidate.errorText}}</span>
    <button>下一步</button>
</div>
  <!-- <span >name <input  type="text" v-model="aaa"></span>
  <span >password<input  type="password" v-model="bbb"></span>
  <button @click="test">tiao</button> -->
  <span>name <input type="text" v-model="aaa"> </span>
  <span>password <input type="password" v-model="bbb"></span>
  <button @click="test">dianwo</button>
  <button @click="xxxx('xx')">xxx</button>
  <div v-for="ins in message">{{ins}}</div>
</div>
</template>
<script>
import _ from "lodash/lodash";

export default {
  data() {
    return {
      xx:{    
     aaa:'',
     bbb:'',
       },
     message:[]
    }
  },methods:{
 test:function(){
   if(this.aaa > 0 && this.bbb > 0){

     this.message.push(this.aaa)

    //  this.$router.push({name:"vivo", params:{aaa:this.aaa,bbb:this.bbb}})
   }else{
     alert("错")
   }
 }
  // test:function(te){
  // if(this.aaa.length>0 || this.bbb.length>0){
  //    this.$router.push({name:"vivo" , params:{aaa:this.aaa}})
  // }else{
  //   alert("错误");
  // }
  // }  
  },computed:{
     passwordValidate: function() {
        var errorText;
        if(!/^[0-9A-Za-z]{6,15}$/.test(this.passwordModel)) {
            errorText = '密码少于6位'
        } else {
            errorText = ''
        }
        if(!this.passwordFlag) {
            errorText = ''
            this.passwordFlag = true
        }
        return {
            errorText
        }
    },
        passwordCheckValidate: function() {
        var errorText;
        if(!/^[0-9A-Za-z]{6,15}$/.test(this.passwordcheckModel)) {
            errorText = '密码少于6位'
        }else if(this.passwordcheckModel !==this.passwordModel ){
            errorText = '两次密码不匹配'
        }
        else {
            errorText = ''
        }
        
        if(!this.passwordFlag) {
            errorText = ''
            this.passwordFlag = true
        }
        return {
            errorText
        }
    }
    
},

  }
  
</script>
<style>

</style>
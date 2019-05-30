<template>
<div>
    <div style=" height:300px;">
   <mt-swipe :show-indicators="false" style=" height:300px;">
  <mt-swipe-item style="background-color: red;" class="a">
     <img src="@/assets/you.jpg">
  </mt-swipe-item>
  <mt-swipe-item class="a" style="background-color: blue;"><img style="" src="@/assets/gzs.jpg"></mt-swipe-item>
  <mt-swipe-item  class="a" style="background-color: green;"><img src="@/assets/name.jpg"></mt-swipe-item>
</mt-swipe>
    <div style="height:100px;width: 100%;background-color: #ddd;position: fixed;bottom: 0;">
<mt-button type="default" style="width:100px;height:80px; position: fixed;
    top: -200px;
    left:-250px;
    right: 0px;
    bottom: 0px;
    margin: auto;">default</mt-button>
<mt-button type="primary" style="width:100px;height:80px; position: fixed;
    top: -200px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: auto;">primary</mt-button>
<mt-button type="danger" style="width:100px;height:80px; position: fixed;
    top: -200px;
    left: 250px;
    right: 50px;
    bottom: 0px;
    margin: auto;">danger</mt-button>
    </div>
</div>

<mt-header title="多个按钮">
  <router-link to="jis" slot="left">
    <mt-button icon="back">返回</mt-button>
    <mt-button @click="handleClose">关闭</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>


</div>
   
</template>
<script>
export default {
    name:"login",
    data(){
        return{

        }
    },
    methods: {
  handleChange(index) {
      
  }
}
}
    
</script>
<style>

.a>img{

     width: 100%;
     height:300px;
  
}
.b{
    position: fixed;
    

}
</style>



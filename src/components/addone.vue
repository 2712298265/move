<template>
  <div class="abb">
    <div style="width:100%;height:50px;">
      <div style="width:50px;height:100%;float: left;margin-left:15%;">
      <img src="../assets/logo.png" width="50px" height="50px" style="margin-top:5px;">
      </div>
      <div style="width:100px;height:100%;float: left;margin-top:20px;color:red;"><strong>商务管理系统</strong></div>
    </div>
     <div class="link-top"></div>
     <div style="width:100%;height:430px;border:0px solid red;">
     <div class="aa" style="position: absolute;left:15%;border:0px solid red;width:70%;height:430px;">
    <el-form style="margin-top:7%;margin-left:50%;width:400px;height:320px;background-color: white;box-shadow:0px 0px  5px 2px #00FA9A"
      :model="ruleForm2"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm"
    >
       <div style="text-align:center;padding-top:10px;font-size:25px;color:#00BFFF;">登录</div>
       <el-form-item label="合作伙伴" style="margin-top:8px;width:300px;">
    <el-select v-model="form.region" placeholder="请选择合作伙伴" @change="tttt">
      <el-option label="慧住" value="huizhu"></el-option>
      <el-option label="云闪住" value="yunshanzhu" ></el-option>
    </el-select>
  </el-form-item>
      <el-form-item label="密码" prop="password" style="margin-top:8px;width:300px;">
        <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item class="dis" label="用户名" prop="username" style="width:300px;" >
        <el-input v-model.number="ruleForm2.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">确定</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
     
    </el-form>
     </div>
     </div>
     <div style="text-align:left;width:100%;height:200px;boeder:10px solid blue;background-color:#DCDCDC;">
     <div style="text-align:left;width:100%;height:200px;boeder:10px solid blue;background-color:#DCDCDC;">
       <div style="width:70%;height:200px;margin-left:15%;background-color:white;">
         <div style="width:40%;height:200px;float:left;text-align:center">
          <font color="#808080" size="5px" >金兰云信息科技有限公司</font>

        </div>
       <div style="width:40%;height:200px;float:right;">
      <font color="#808080" size="5px"> 公告 </font><br>
      <font size="1px">北京海淀区国税五所新规定</font><br>
             <font size="1px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;普票不能换增票，即使开票时间晚于购货方一般纳税人认定时间,</font><font size="1px">所以需要通知代理及客户：在小规模纳税人变成一般纳税人前暂停开发票的要提前告诉渠道或财务开票人，更不得将专用发票误开成普通发票，否则，发票的进项税额等于净损失。</font>
     </div>
       </div>
     </div>
     <div style="text-align:center;width:100%;height:200px;boeder:0px solid blue;background-color:#DCDCDC;">
     <div style="margin-left:15%;width:70%;border-top: solid #DCDCDC 2px;"></div>
     </div>
     <div style="margin-top: -198px;text-align:center;width:100%;height:200px;boeder:0px solid blue;background-color:#DCDCDC;">
   <div style="width:70%;height:200px;margin-left:15%;background-color:white;">
     <span>1|2|3|4|5|6|</span><br>
      <span>版权所有：金兰云</span>
   </div>

     </div>
     </div>


    </div>
 
</template>
<script>
export default {
  data() {
        
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
    return {
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
  },
      ruleForm2: {
        password: "",
        username: ""
      },
      rules2: {
        password: [{ validator: validatePass, trigger: "blur" }],
       
        username: [{ validator: checkAge, trigger: "blur" }]
      },
    };
  },
  methods: {
    submitForm(formName) {
      login(this.ruleForm2).then(response => {
          console.log(response)
          if(response.data.status=='0'){
            sessionStorage.setItem("user",this.ruleForm2.username);
              this.$router.push('/add/index')
          }else{
              this.$notify.error({
          title: '错误',
          message: response.data.msg
        });
          }
         
      })
   
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    tttt(t){
      if(t == "huizhu"){
        window.document.querySelector(".dis").style.display = "none"
      }else{
        window.document.querySelector(".dis").style.display = "block"
      }
    }
  },
  mounted(){
  }
};
</script>

<style>
.link-top {
  
            margin-top:10px;
            width: 100%;
            height: 1px;
            border-top: solid red 3px;
        }

.abb{  
  
    margin-top: 10px;
    width:100%;
    height:800px;
    border: 0px solid red;
}
.aa{
  background-image: url(../assets/11.jpg);
}


</style>
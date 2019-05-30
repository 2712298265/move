<template>
  <div class="abb">
    
    <el-form style="margin-top:15%;margin-left:50%;width:400px;height:300px;background-color: white;box-shadow:0px 0px  10px 5px #FFB6C1"
      :model="ruleForm2"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm"
    >
       <div style="text-align:center;padding-top:20px;font-size:25px;color:#00BFFF;">登录</div>
      <el-form-item label="密码" prop="password" style="margin-top:10px;width:300px;">
        <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="username" style="width:300px;">
        <el-input v-model.number="ruleForm2.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">确定</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
      <el-form-item>
        <div class="link-top"></div>
      </el-form-item>
    </el-form>
    </div>
 
</template>
<script>
import {queryAllUser,login} from "../api/login"
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
    //   this.$refs[formName].validate(valid => {
    //     if (valid) {
    //       alert("submit!");
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted(){
    queryAllUser().then(response => {
      console.log(response)
    })
  }
};
</script>

<style>
.abb{  
    margin-top: 10px;
    width:100%;
    height:800px;
    border: 1px solid red;
    background-image: url(../assets/256.png);
    background-size:100% 1000px;
}
/* .link-top {
             text-align: center;
            margin-right: 100px;
            width: 80%;
            height: 1px;
            border-top: solid #ACC0D8 1px;
        } */

</style>

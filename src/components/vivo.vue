<template>
  <div>

    <img src="../assets/99.png" style="position:fixed;right:0;bottom:0;z-index:1;opacity:0.8;
filter:alpha(opacity=40);">
    <el-container>
      <el-header style="text-align: left;">
        <el-input style="width:200px;height:30px;" v-model="chaxuns" placeholder="请输入账号" ></el-input>
        <el-button type="primary" icon="el-icon-search" @click="chaxun">查询</el-button>
        <el-button type="success" @click="dialogFormVisible = true" icon="el-icon-plus">新增</el-button>
         

        <font style="color:red;margin-left:30%;">
          <strong>当前操作：首页 / 管理员新增</strong>
        </font>
      </el-header>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="ID" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="账号 " width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.username }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="modifStart(scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click.native.prevent="handleDelete(scope.$index, tableData)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="管理员新增" :visible.sync="dialogFormVisible">
        <el-form
          :model="numberValidateForm"
          status-icon
          ref="numberValidateForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="角色">
            <el-input v-model="numberValidateForm.role"></el-input>
          </el-form-item>
          <el-form-item
            label="账号"
            prop="username"
            :rules="[
      { required: true, message: '账号不能为空'},
    ]"
          >
            <el-input v-model="numberValidateForm.username" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="姓名"
            prop="name"
            :rules="[
      { required: true, message: '姓名不能为空'},
    ]"
          >
            <el-input v-model="numberValidateForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            prop="password"
            :rules="[
      { required: true, message: '密码不能为空'},
    ]"
          >
            <el-input type="password" v-model="numberValidateForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="微信">
            <el-input v-model="numberValidateForm.wxopenid"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="newhotel">确 定</el-button>
        </div>
      </el-dialog>
      <el-dialog title="管理员修改" :visible.sync="dialogFormVisibles">
        <el-form
          :model="numberValidateForm"
          status-icon
          ref="numberValidateForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="角色">
            <el-input v-model="numberValidateForm.role"></el-input>
          </el-form-item>
          <el-form-item
            label="账号"
            prop="username"
            :rules="[
      { required: true, message: '账号不能为空'},
      { type: 'number', message: '账号必须为数字值'}
    ]"
          >
            <el-input v-model.number="numberValidateForm.username" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="姓名"
            prop="name"
            :rules="[
      { required: true, message: '姓名不能为空'},
    ]"
          >
            <el-input v-model.number="numberValidateForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            prop="password"
            :rules="[
      { required: true, message: '密码不能为空'},
      { type: 'number', message: '密码必须为数字值'}
    ]"
          >
            <el-input
              type="password"
              v-model.number="numberValidateForm.password"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="微信">
            <el-input v-model="numberValidateForm.wxopenid"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisibles = false">取 消</el-button>
          <el-button type="primary" @click="modifhotel">确 定</el-button>
        </div>
      </el-dialog>
    </el-container>
  </div>
</template>
<script>
import {queryAllUser} from "../api/login"
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.numberValidateForm.enpass !== "") {
          this.$refs.numberValidateForm.validateField("enpass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.numberValidateForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      chaxuns:"",
      numberValidateForm: {
        username: "",
        name: "",
        password: "",
        wxopenid: "",
        role: ""
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogFormVisibles: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      tableData: [
        {
          id: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          id: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      msg: ""
    };
  },
  methods: {
    chushihua(){
      //查询所有
       this.$axios.get("http://192.168.1.10:8081/data/queryAllUser").then(response => {
       this.tableData = response.data.data
        console.log(response)
     })
    },
    chaxun: function (){
      if(this.chaxuns==''){
          this.chushihua()
      }else{
           //搜索
            this.$axios.get("http://192.168.1.10:8081/data/queryUser",{params:{key:this.chaxuns}}).then(response => {
          console.log(response)
           this.tableData = response.data.data
        })
      }  
    },
    handleDelete(index, row) {
      //删除
      let data = new FormData();
      data.append("id", row[index].id);
        deleteUser(data)
        .then(response => {
          console.log(response);
        });
      row.splice(index, 1);
      console.log(index, row);
    },

    modifStart(data) {
      this.numberValidateForm = data;
      this.dialogFormVisibles = true;
    },
    newhotel: function() {
    newUser(this.numberValidateForm)
        .then(response => {
          if (response.data.status == 1) {
            this.$notify.error({
              title: "错误",
              message: response.data.msg
            });
          } else {
            this.$notify({
              title: "成功",
              message: response.data.msg,
              type: "success"
            });
          }
          console.log(response);
          this.dialogFormVisible = false;
          this.numberValidateForm = {};
         queryAllUser()
            .then(response => {
              console.log(response);
              this.tableData = response.data.data;
            });
        });
    },
    modifhotel: function() {
      updateUser(
         
          this.numberValidateForm 
        )
        .then(response => {
          if (response.data.status == 1) {
            this.$notify.error({
              title: "错误",
              message: response.data.msg
            });
          } else {
            this.$notify({
              title: "成功",
              message: response.data.msg,
              type: "success"
            });
          }
          console.log(response);
          
          this.numberValidateForm = {};
        });
        this.dialogFormVisibles = false;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  submitForm(formName) {
    this.$refs[formName].validate(valid => {
      if (valid) {
        alert("submit!");
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  },
  resetForm(formName) {
    this.$refs[formName].resetFields();
  },
  handleEdit(index, row) {
    console.log(index, row);
  },
  js: function() {},

  beforeCreate() {
   queryAllUser()
      .then(response => {
        console.log(response);
        this.tableData = response.data.data;
      });
  },
   mounted(){
     this.chushihua()
  }
}
</script>
<style>
/* .a {
  position: fixed;
} */
</style>
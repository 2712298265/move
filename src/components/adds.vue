<template>
  <div>
    <!-- <div style="width:100%;height:50px;border:1px solid red;">
     
    </div>-->
    <el-container>
      <el-header style="text-align: left;">
        <el-input
          style="width:200px;height:30px;"
          v-model="tableData4.key"
          @click="chaxun"
          placeholder="审批人"
        ></el-input>
        <el-button type="primary" icon="el-icon-search" @click="chaxun">查询</el-button>
        <el-button type="success" @click="dialogFormVisible = true" icon="el-icon-plus">新增</el-button>
        <!-- <el-button type="danger" icon="el-icon-close">删除</el-button> -->
        <font style="color:red;margin-left:30%;">
          <strong>当前操作：首页 / PMS管理</strong>
        </font>
      </el-header>
      <!-- <div style="width:100%;background-color: white;">
    <el-radio-group v-model="radio3">
      <el-radio-button label="所有"></el-radio-button>
      <el-radio-button label="有效"></el-radio-button>
      <el-radio-button label="未激活"></el-radio-button>
      <el-radio-button label="停用"></el-radio-button>
    </el-radio-group>
      </div>-->

      <el-table :data="tableData4" height="700px">
        <el-table-column label="操作">
          <template slot-scope="scope" style="width:200px;">
            <el-button size="mini" type="primary" @click="addHotels(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="Id" width="120"></el-table-column>
        <el-table-column prop="hotelid" label="酒店代码"></el-table-column>
        <el-table-column
          prop="flag"
          label="状态"
          width="100px"
          :filters="[{ text: '有效', value: 'T' }, 
          { text: '停用', value: 'F' }]"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.flag === 'T' ? 'primary' : 'success'"
              close-transition
            >{{scope.row.flag === 'T' ? '有效' : '停用'}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="allname" label="酒店全称" width="120"></el-table-column>
        <el-table-column prop="hotelname" label="酒店简称" width="120"></el-table-column>
        <el-table-column prop="rooms" label="房数上限"></el-table-column>
        <el-table-column prop="datebegin" label="开始日期" width="120"></el-table-column>
        <el-table-column prop="dateend" label="截止日期" width="120"></el-table-column>
        <el-table-column prop="remark" label="备注" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData4)"
              type="danger"
              size="small"
            >移除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData4.length"
      ></el-pagination>-->
    </el-container>
    <el-dialog title="酒店新增" :visible.sync="dialogFormVisible">
      <el-form
        :model="form"
        ref="form"
        :inline="true"
        style="width:800px;"
        class="demo-form-inline"
      >
        <el-form-item
          label="酒店代码"
          prop="hotelid"
          :rules="[
      { required: true, message: '酒店代码不能为空'},
      { type: 'number', message: '酒店代码必须为数字值'}
    ]"
          :label-width="formLabelWidth"
        >
          <el-input
            style="width:200px;"
            type="age"
            v-model.number="form.hotelid"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="flag" :label-width="formLabelWidth">
          <el-radio-group v-model="form.flag">
            <el-radio-button label="T">有效</el-radio-button>
            <el-radio-button label="S">未激活</el-radio-button>
            <el-radio-button label="F">停用</el-radio-button>
          </el-radio-group>
        </el-form-item>

        <el-form-item
          label="酒店全称"
          prop="allname"
          :label-width="formLabelWidth"
          :rules="[
      { required: true, message: '酒店全称不能为空',trigger:'blur'}
    ]"
        >
          <el-input style="width:200px;" v-model="form.allname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="酒店简称"
          prop="hotelname"
          :label-width="formLabelWidth"
          :rules="[
      { required: true, message: '酒店全称不能为空',trigger:'blur'}
    ]"
        >
          <el-input style="width:200px;" v-model="form.hotelname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="地址"
          prop="hoteladdress"
          :label-width="formLabelWidth"
          :rules="[
      { required: true, message: '地址不能为空',trigger:'blur'}
    ]"
        >
          <el-input style="width:200px;" v-model="form.hoteladdress" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="酒店总机"
          prop="hotelphone"
          :label-width="formLabelWidth"
          :rules="[
      { required: true, message: '酒店总机不能为空',trigger:'blur'}
    ]"
        >
          <el-input style="width:200px;" v-model="form.hotelphone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="酒店传真"
          prop="hotelfax"
          :label-width="formLabelWidth"
          :rules="[
      { required: true, message: '酒店传真不能为空',trigger:'blur'}
    ]"
        >
          <el-input style="width:200px;" v-model="form.hotelfax" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="网址" prop="hotelwebsite" :label-width="formLabelWidth">
          <el-input style="width:200px;" v-model="form.hotelwebsite" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="联系人"
          prop="linkman"
          :label-width="formLabelWidth"
          :rules="[
      { required: true, message: '联系人不能为空',trigger:'blur'}
    ]"
        >
          <el-input style="width:200px;" v-model="form.linkman" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="联系手机"
          prop="linkphone"
          :label-width="formLabelWidth"
          :rules="[
      { required: true, message: '联系手机不能为空',trigger:'blur'}
    ]"
        >
          <el-input style="width:200px;" v-model="form.linkphone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="房间数量"
          prop="rooms"
          :label-width="formLabelWidth"
          :rules="[
      { required: true, message: '房间数量不能为空',trigger:'blur'}
    ]"
        >
          <el-input style="width:200px;" v-model="form.rooms" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="开始时间"
          prop="datebegin"
          :label-width="formLabelWidth"
          :rules="[
      { required: true, message: '开始时间不能为空',trigger:'blur'}
    ]"
        >
          <el-date-picker v-model="form.datebegin" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item
          label="结束时间"
          prop="dateend"
          :label-width="formLabelWidth"
          :rules="[
      { required: true, message: '结束时间不能为空',trigger:'blur'}
    ]"
        >
          <el-date-picker v-model="form.dateend" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item
          label="服务名"
          prop="dbServer"
          :label-width="formLabelWidth"
          :rules="[
      { required: true, message: '服务名不能为空',trigger:'blur'}
    ]"
        >
          <el-input style="width:200px;" v-model="form.dbServer" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="数据库名称"
          prop="dbName"
          :rules="[
      { required: true, message: '数据库名称不能为空',trigger:'blur'}
    ]"
          :label-width="formLabelWidth"
        >
          <el-input style="width:200px;" v-model="form.dbName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="数据库用户名"
          prop="dbUsername"
          :rules="[
      { required: true, message: '数据库用户名不能为空',trigger:'blur'}
    ]"
          :label-width="formLabelWidth"
        >
          <el-input style="width:200px;" v-model="form.dbUsername" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="数据库密码"
          prop="dbPassword"
          :rules="[
      { required: true, message: '数据库密码不能为空',trigger:'blur'}
    ]"
          :label-width="formLabelWidth"
        >
          <el-input style="width:200px;" v-model="form.dbPassword" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark" :label-width="formLabelWidth">
          <el-input style="width:200px;" v-model="form.remark" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addHotel">保存</el-button>
      </div>
    </el-dialog>
    <el-dialog title="编辑" :visible.sync="dialogFormVisibles">
      <el-form :model="modifData">
        <el-form-item prop="id" label="id" :label-width="formLabelWidth">
          <el-input v-model="modifData.id" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="flag" :label-width="formLabelWidth">
          <el-radio-group v-model="modifData.flag">
            <el-radio-button label="T">有效</el-radio-button>
            <el-radio-button label="F">停用</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="酒店全称"
          prop="allname"
          :label-width="formLabelWidth"
          :rules="[
      { required: true, message: '酒店全称不能为空',trigger:'blur'}
    ]"
        >
          <el-input style="width:200px;" v-model="modifData.allname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="酒店简称"
          prop="hotelname"
          :label-width="formLabelWidth"
          :rules="[
      { required: true, message: '酒店全称不能为空',trigger:'blur'}
    ]"
        >
          <el-input style="width:200px;" v-model="modifData.hotelname" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibles = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisibles = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {newHotel,queryHotel,updateHotel,deleteHotel} from "../api/login"
export default {
  data() {
    return {
      currentPage4: 1,
      radio3: "有效",
      numberValidateForm: {
        age: ""
      },
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
      modifData: {},
      tableData4: [
        {
          hotelids: 22,
          flags: "有效"
        },
        {
          hotelids: 11,
          flags: "未激活"
        },
        {
          hotelids: 0,
          flags: "有效"
        },
        {
          hotelids: 1,
          flags: "有效"
        },
        {
          hotelids: 2,
          flags: "未激活"
        },
        {
          hotelids: 3,
          flags: "有效"
        },
        {
          hotelids: 4,
          flags: "有效"
        },
        {
          hotelids: 5,
          flags: "有效"
        },
        {
          hotelids: 6,
          flags: "有效"
        },
        {
          hotelids: 7,
          flags: "有效"
        },
        {
          hotelids: 8,
          flags: "有效"
        },
        {
          hotelids: 9,
          flags: "停用"
        }
      ],
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  methods: {
    deleteRow(index, rows) {
      //删除
      let data = new FormData();
      data.append("id", rows[index].id);
      deleteHotel(data)
        .then(response => {
          console.log(response);
        });
      rows.splice(index, 1);
    },
    addHotel: function() {
      //新增
      this.$refs["form"].validate(value => {
        if (value) {
         newHotel(this.form)
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
                this.chushihua()
              }
              console.log(response);
              this.dialogFormVisible = false;
            });
        }
        console.log(value);
      });
    },
    chushihua() {
      //查询所有
      queryAllHotel()
        .then(response => {
          this.tableData4 = response.data.data;
          console.log(response);
        });
    },
    chaxun: function() {
      if (this.tableData4.key == "") {
        this.chushihua();
      } else {
        //搜索
        queryHotel(this.tableData4.key)
          .then(response => {
            console.log(response);
            this.tableData4 = response.data.data;
          });
      }
    },
    addHotels: function(data) {
      this.modifData = data;
      this.dialogFormVisibles = true;
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    onSubmit() {
      console.log("submit!");
    }

    // handleSizeChange(val) {
    //     console.log(`每页 ${val} 条`);
    //   },
    //   handleCurrentChange(val) {
    //     console.log(`当前页: ${val}`);
    //   }
  },
  mounted() {
    this.chushihua();
  }
};
</script>
<style>

</style>

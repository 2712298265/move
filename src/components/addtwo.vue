<template>
  <div class="abb">
    <div style="width:100%;height:50px;border: 0px solid red;">
      <div style="margin-left:15%;width:70%;height:50px;border: 0px solid red;">
        <div style="width:50px;height:100%;float: left;margin-left:15%;">
          <img src="../assets/logo.png" width="50px" height="40px" style="margin-top:5px;">
        </div>
        <div style="width:100px;height:40%;float: left;margin-top:20px;color:red;">
          <strong>商务管理系统</strong>
        </div>
        <div style="float:right;margin-right:200px;margin-top:20px;">
          <font color="#808080">伙伴代码：</font>
        </div>
      </div>
    </div>
    <div
      style="width:70%;height:5px;margin-left:15%;color:red;"
    >~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
    <div style="width:100%;height:750px;margin-top:10px;border:0px solid blue;">
      <div style="width:100%;height:20px;border:0px solid red;">
        <div style="margin-top:15px;width:70%;height:20px;margin-left:15%;border:0px solid red;">
          <div style="width:20%;float:left;">
            <span>登录伙伴:</span>
          </div>
          <div style="width:20%;float:left;">
            <span>工号:</span>
          </div>
          <div style="width:20%;float:left;">
            <span>姓名:</span>
          </div>
          <div style="width:20%;float:left;">
            <span>伙伴区域:</span>
          </div>
          <div style="width:20%;float:left;">
            <span>伙伴等级:</span>
          </div>
        </div>
      </div>
      <div
        style="width:70%;height:5px;margin-left:15%;color:red;"
      >~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
      <div style="width:70%;height:400px;margin-left:15%;border:0px solid red;margin-top:20px;">
        <div style="height:500px;float:left;border:0px solid red;">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            style="width:150px"
          >
            <el-submenu index="1">
              <template slot="title">
                <span>新订单</span>
              </template>
              <el-menu-item index="1-1" @click="st">订单制作</el-menu-item>
              <el-menu-item index="1-2">租用续费</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <template slot="title">
                <span>我的订单</span>
              </template>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">
                <span>客户信息</span>
              </template>
              <el-menu-item index="1-1">客户档案</el-menu-item>
              <el-menu-item index="1-2">续费明细</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <span>销售管理</span>
              </template>
              <el-menu-item index="4-1">客商机报备</el-menu-item>
              <el-menu-item index="4-2">特殊销售</el-menu-item>
            </el-submenu>
            <el-menu-item index="5">
              <template slot="title">
                <span>对账单</span>
              </template>
            </el-menu-item>
            <el-menu-item index="6">
              <template slot="title">
                <span>伙伴合同</span>
              </template>
            </el-menu-item>
            <el-menu-item index="7">
              <template slot="title">
                <span>产品价格表</span>
              </template>
            </el-menu-item>
          </el-menu>
        </div>
        <div
          style="margin-top:-500px;margin-left:180px;width:800px;height:400px;border:0px solid red;float:left;"
        >
          <font size="1px" color="blue">
            <p>注意事项：1.开增票的订货单位必须用本公司对公账户汇款</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.如果发票有特殊要求务必提前通知财务部韩妙琴。Tel：17001098161</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.开票原则是按订货已出库的出库单汇总开具</p>
          </font>
          <p>
            <font size="1px" color="red">以上不再以任何方式提前通知对方。希望大家高度重视，严格遵守（尤其是一般纳税人需要开专票的伙伴）。</font>
          </p>
          <div class="foot" style="width:700px;height:1px;border-top:2px solid #D4D4D4;top: 457px;
    position: absolute;"></div>
       <div style="text-align:center;width:700px;height:50px;top: 460px;
    position: absolute;"> <font size="0.5px">法律声明<畅捷通信息技术股份有限公司版权所有，未经许可，禁止复制、链接或建立镜像。]</font> </div>
        </div>
      </div> 
    </div>
  </div>
</template>
<script>
export default {
   activated: function() {
    this.getCase()
  },

  data() {
    return {
      
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    st(){
      const {href} = this.$router.resolve({
        name:"addthree",
      });
      window.open(href,'_blank')
    }
  }
};
</script>
<style>
/* .foot {
    BACKGROUND: #ececec;
    WIDTH: 1000px;
    LINE-HEIGHT: 36px;
    HEIGHT: 36px;
}
BODY {
    PADDING-RIGHT: 0px;
    PADDING-LEFT: 0px;
    FONT-SIZE: 12px;
    BACKGROUND: #fff;
    PADDING-BOTTOM: 0px;
    MARGIN: 0px;
    COLOR: #484848;
    LINE-HEIGHT: 18px;
    PADDING-TOP: 0px;
    TEXT-ALIGN: center;
} */
.el-col-12 {
  width: 100%;
}
element.style {
  /* width: 10px; */
}
.el-menu-vertical-demo {
  background-color: #cccccc;
}
.abb {
  margin-top: 10px;
  width: 100%;
  height: 800px;
  border: 1px solid red;
}
.el-submenu .el-menu-item {
  height: 50px;
  line-height: 50px;
  /* padding: 0 45px; */
  min-width: 0px;
}
/* .tac el-row{
  width:300px;
} */
</style>

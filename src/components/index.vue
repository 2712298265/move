<template>
  <div style="line-height: 160px;" class="div">
    <div style="width:100%;height:277.81px;border:0px solid red;">
      <div
        class="box"
        style=" float:left;margin-left:20px;width:30%;height:277.81px;border:0px solid red;  text-align: center;"
      >
        <el-card
          style="background-color:#c4e1e1; background: -webkit-linear-gradient(#ADADAD, #BEBEBE, #d0d0d0,#E0E0E0, #F0F0F0, #FCFCFC,#FFFFFF);"
          index="vivo"
        >
          <!-- <img style="float:left;width:50px;height:50px;" src="../assets/999.png"> -->
          <div style="padding: 10px;">
            <span>
              <h2>PMS管理</h2>
            </span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" @click="aaa('/add/adds')">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </div>
      <div
        class="box"
        style="float:left;margin-left:40px;width:30%;height:277.81px;border:0px solid red;"
      >
        <el-card style="background-color:#c4e1e1;" v-popover:popover1>
          <div style="padding: 10px;">
            <span>
              <h2>
                电子合同管理
                <el-popover
                  ref="popover1"
                  placement="top-start"
                  title="电子合同管理"
                  width="300"
                  trigger="hover"
                  content="管理软件合同，慧住订房合同，（酒店，财务供应链，客房管家），无接待入住"
                ></el-popover>
              </h2>
            </span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </div>
      <div
        class="box"
        style="float:left;margin-left:40px;width:30%;height:277.81px;border:0px solid red;"
      >
        <el-card
          style=" background-color:#c4e1e1; background: -webkit-linear-gradient(#B766AD, #C07AB8, #CA8EC2, #D2A2CC, #DAB1D5, #E2C2DE, #EBD3E8);"
          v-popover:popover2
        >
          <div style="padding: 10px;">
            <span>
              <h2>广告活动管理</h2>
            </span>
            <el-popover
              ref="popover2"
              placement="top-start"
              title="广告活动管理"
              width="300"
              trigger="hover"
              content="广告位发布，会员积分，优惠券发放"
            ></el-popover>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </div>
    </div>
    <div style="margin-top:50px;width:100%;height:277.81px;border:0px solid red;">
      <div
        class="box"
        style="float:left;margin-left:20px;width:30%;height:277.81px;border:0px solid red;"
      >
        <el-card
          style="  background-color:#c4e1e1; background: -webkit-linear-gradient(#ADADAD, #BEBEBE, #d0d0d0,#E0E0E0, #F0F0F0, #FCFCFC,#FFFFFF);"
        >
          <div style="padding: 10px;">
            <span>
              <h2>自助入住，微信管理</h2>
            </span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </div>
      <div
        class="box"
        style="float:left;margin-left:40px;width:30%;height:277.81px;border:0px solid red;"
      >
        <el-card style="  background-color:#c4e1e1;" v-popover:popover3>
          <div style="padding: 10px;">
            <span>
              <h2>慧住经理人管理</h2>
            </span>
            <el-popover
              ref="popover3"
              placement="top-start"
              title="慧住经理人管理"
              width="300"
              trigger="hover"
              content="经理人身份开通，软件订单审核，账号管理，返佣查询"
            ></el-popover>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </div>
      <div
        class="box"
        style="float:left;margin-left:40px;width:30%;height:277.81px;border:0px solid red;"
      >
        <el-card
          style="  background-color:#c4e1e1;background: -webkit-linear-gradient(#B766AD, #C07AB8, #CA8EC2, #D2A2CC, #DAB1D5, #E2C2DE, #EBD3E8);"
          
        >
          <div style="padding: 10px;">
            <span>
              <h2>评论管理</h2>
            </span>
            <el-popover
              ref="popover4"
              placement="top-start"
              title="评论管理"
              width="300"
              trigger="hover"
              content="评价答复，违章信息下架"
            ></el-popover>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  },
  methods: {
    aaa(ios) {
      this.$router.push({ path: ios });
    }
  }
};
</script>
<style>
.box {
  box-shadow: rgb(65, 64, 63) 3px 3px 10px;
}
.bottom {
  width: 250px;
  margin-top: 10px;
  line-height: 12px;
  text-align: center;
}
.button {
  padding: 0;
  float: right;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.el-card__body {
  text-align: center;
}
</style>

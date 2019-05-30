<template>
  <div>
    <div style="width:100%;height:50px;border:0px solid red;">
      <div style="margin-top:10px;margin-left:10%;width:50px;height:50px;float:left;">
        <router-link to="addtwo">
          <i class="el-icon-back"></i>
        </router-link>
      </div>
      <div style="width:50px;height:50px;margin-left:10%;float:left;">
        <img src="../assets/logo.png" width="50px" height="50px">
      </div>
      <div style="width:50px;height:50px;float:left;margin-left:2px;margin-top:10px;">
        <font size="5px" color="red">金云</font>
      </div>
      <div style="width:50px;height:50px;margin-left:35%;float:left;">
        <router-link to="addones">
          <img src="../assets/1314.png" width="50px" height="50px;">
        </router-link>
      </div>
    </div>
    <div style="width:100%;height:150px;border:1px solid red;">
      <div style="width:100px;height:40px;margin-left:50px;">
        <font color="red">编号：</font>
      </div>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            123:<input type="text" placeholder="123">
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            123:<input type="text" placeholder="123">
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            123:<input type="text" placeholder="123">
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <div>
              <span>123</span>
              <select style="width:150px;height:25px;">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
          123:<input type="text" placeholder="123">
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            123:<input type="text" placeholder="123">
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            123:<input type="text" placeholder="123">
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            123:<input type="text" placeholder="123">
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <div>
              <span>123</span>
              <select style="width:150px;height:25px;">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            123:<input type="text" placeholder="123">
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="width:100%;height:500px;border:1px solid green;">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <el-row :gutter="20">
            <el-col :span="4">
              <div
                class="grid-content bg-purple"
                style="text-align:center; background: #A9A9A9;"
              >模块组</div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple" style="text-align:center; background: #C0C0C0;">模块</div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content bg-purple" style="text-align:center;background: 	#D3D3D3;">点数</div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content bg-purple" style="text-align:center;background: #DCDCDC;">单价</div>
            </el-col>
            <el-col :span="4">
              <div
                class="grid-content bg-purple"
                style="text-align:center; background: #A9A9A9;"
              >模块组</div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple" style="text-align:center;background: #C0C0C0;">模块</div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content bg-purple" style="text-align:center;background: 	#D3D3D3;">点数</div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content bg-purple" style="text-align:center;background: #DCDCDC;">单价</div>
            </el-col>
          </el-row>

          <div style="width:16%;height:230px;border:0px solid red;float:left;margin-top:10px;">
            <el-row :gutter="20">
              <el-col :span="24">
                <div
                  class="grid-contents bg-purple"
                  style="text-align: center;background: #A9A9A9;"
                >
                  <strong>手机管理</strong>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <div class="grid-contentsss bg-purple" style="background: #A9A9A9;">
                  <strong>连锁管理</strong>
                </div>
              </el-col>
            </el-row>
          </div>
  <div style="width:32%;height:230px;border:0px solid red;margin-top:10px;float:left;margin-left:10px;text-align:center;">
              <!-- <div style=""></div> -->
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-content bg-purple" style="background:#C0C0C0;">手机版</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple" style="background: 	#D3D3D3;">
                  <el-checkbox v-model="a"></el-checkbox>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple" style="background: #DCDCDC;"></div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-contentss bg-purple" style="background: #C0C0C0;">分店营业管理</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: 	#D3D3D3;">
                  <!-- `checked` 为 true 或 false -->
                  <el-checkbox v-model="checked"></el-checkbox>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: #DCDCDC;"></div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-contentss bg-purple" style="background: #C0C0C0;">集团营业管理</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: 	#D3D3D3;">
                  <el-checkbox v-model="b"></el-checkbox>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: #DCDCDC;"></div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-contentss bg-purple" style="background: #C0C0C0;">中央预订系统</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: 	#D3D3D3;">
                  <el-checkbox v-model="c"></el-checkbox>
                </div>      
              </el-col>
        
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: #DCDCDC;"></div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-contentss bg-purple" style="background: #C0C0C0;">集团会员管理</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: 	#D3D3D3;">
                  <el-checkbox v-model="d"></el-checkbox>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: #DCDCDC;"></div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-contentss bg-purple" style="background:#C0C0C0;">集团控制维护</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: 	#D3D3D3;">
                  <el-checkbox v-model="e"></el-checkbox>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: #DCDCDC;"></div>
              </el-col>
            </el-row>
         </div>

          <div
            style="width:16%;height:310px;border:0px solid red;float:left;margin-top:10px;margin-left:30px;"
          >
            <el-row :gutter="20">
              <el-col :span="24">
                <div class="grid-contenta bg-purple" style="background: #A9A9A9;">
                  <strong>酒店软件接口</strong>
                </div>
              </el-col>
            </el-row>
          </div>

          <div
            style="width:32%;height:310px;border:0px solid red;margin-top:10px;float:left;margin-left:10px;"
          >
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-content bg-purple" style="background: #C0C0C0;">二代身份证接口</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple" style="background: 	#D3D3D3;">
                  <el-checkbox v-model="e"></el-checkbox>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple" style="background: #DCDCDC;"></div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-contentss bg-purple" style="background: #C0C0C0;">公安治安旅业系统接口</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: 	#D3D3D3;">
                  <el-checkbox v-model="f"></el-checkbox>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: #DCDCDC;"></div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-contentss bg-purple" style="background:#C0C0C0;">门锁接口</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: 	#D3D3D3;">
                  <el-checkbox v-model="j"></el-checkbox>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: #DCDCDC;"></div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-contentss bg-purple" style="background: #C0C0C0;">梯控接口</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: 	#D3D3D3;">
                  <el-checkbox v-model="h"></el-checkbox>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: #DCDCDC;"></div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-contentss bg-purple" style="background:#C0C0C0;">智能网络系统接口</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: 	#D3D3D3;">
                  <el-checkbox v-model="i"></el-checkbox>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: #DCDCDC;"></div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-contentss bg-purple" style="background:#C0C0C0;">房客叫醒接口</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: 	#D3D3D3;">
                  <el-checkbox v-model="j"></el-checkbox>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: #DCDCDC;"></div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-contentss bg-purple" style="background:#C0C0C0;">早餐券接口</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: 	#D3D3D3;">
                  <el-checkbox v-model="k"></el-checkbox>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: #DCDCDC;"></div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-contentss bg-purple" style="background:#C0C0C0;">网站，微信接口</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: 	#D3D3D3;">
                  <el-checkbox v-model="l"></el-checkbox>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contentss bg-purple" style="background: #DCDCDC;"></div>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <!-- <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>-->
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      j: false,
      h: false,
      i: false,
      j: false,
      k: false,
      l: false,
      activeName2: "first",
      form: {
        user: "",
        region: ""
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style>
.el-input__inner {
  width: 60%;
  height: 35px;
}


.bg-purple-dark {
  background: #99a9bf;
}
/* .bg-purple {
    background: #d3dce6;
  } */
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  text-align: center;
  border-radius: 4px;
  min-height: 30px;
}
.grid-contents {
  border-radius: 4px;
  min-height: 30px;
}
.grid-contenta {
  border-radius: 4px;
  min-height: 310px;
  text-align: center;
}
.grid-contentss {
  text-align: center;
  margin-top: 10px;
  border-radius: 4px;
  min-height: 30px;
}
.grid-contentsss {
  text-align: center;
  margin-top: 10px;
  border-radius: 4px;
  min-height: 190px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

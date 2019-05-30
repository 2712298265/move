  <template>
  <el-container>
    <el-aside width="200px" style="background-color:#545c64;height:1000px;">
      <div style="margin-top:10px;width:150px;height:80px">
        <img style="margin-left:25px;;width:150px;height:80px" src="../assets/33.png">
      </div>
      <el-menu
        style="margin-top:10px;"
        default-active="index"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
      >
        <el-menu-item index="/add/index" :router="true" >
          <template slot="title">
            <span>
              <img
                style="margin-left:-15px;margin-top:-5px;width:30px;height:20px;margin-right:5px;"
                src="../assets/31.png"
              >首页
            </span>
          </template>
        </el-menu-item>
        <el-menu-item index="/add/vivo" >
          <span slot="title">账号设置</span>
        </el-menu-item>
        <el-menu-item index="/add/addone" >
          <span slot="title">1</span>
        </el-menu-item>
        <el-menu-item index="/add/addtwo" >
          <span slot="title">2</span>
        </el-menu-item>
        <el-menu-item index="/add/addthree" >
          <span slot="title">3</span>
        </el-menu-item>
        
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-breadcrumb separator="/" style="margin-top:20px;">
          <!-- <el-breadcrumb-item v-for="ios in list" :to="{ path:ios.ios  }">{{ios.tele}}</el-breadcrumb-item> -->
          <!-- <el-breadcrumb-item v-for="ios in list">{{ios.tele}}</el-breadcrumb-item> -->
          
        </el-breadcrumb>
        
        <div style="margin-top:-41px;margin-right:200px;">
          <span style=" float:left;" >管理员：{{message}}</span>
          <font style="color:#1e90ff;">
            <strong>
              <h2>金兰云软后台管理系统</h2>
            </strong>
          </font>
          <p style="font-style:oblique;margin-top: -63px;margin-right: 5px;">
            <font style="color:rgb(115, 174, 252);">
              <h5>JinLanYunRuanHouTaiGuanLixiTong</h5>
            </font>
          </p>
        </div>

        <div style="margin-left:600px;margin-top:-85px;">
          <span>
            <strong>日期:</strong>
            {{nowTime}}
          </span>
          <span style="margin-left:10px;">
            <strong>时间:</strong>
            {{miao}}
          </span>
          <span to="/" style="margin-left:30px;font-size:20px;color:red;">
          <el-button @click="aaa('/')">退出登录</el-button>
          </span>
        </div>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import {logout} from "../api/login"
export default {
  data() {
    return {
      miao: new Date(),
      miao: "",
      nowTime: "",
      data: "",
      // list: [{ tele: "返回首页", ios: "/index" }],
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content"
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content"
        }
      ],
      tabIndex: 2,
      message:""
    };
  },
  methods: {
    aaa(ios) {
      logout().then(response => {

      })
      this.$router.push({ path: ios });
    },
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =
        new Date(timeStamp).getMonth() + 1 < 10
          ? "0" + (new Date(timeStamp).getMonth() + 1)
          : new Date(timeStamp).getMonth() + 1;
      let date =
        new Date(timeStamp).getDate() < 10
          ? "0" + new Date(timeStamp).getDate()
          : new Date(timeStamp).getDate();
      this.nowTime = year + "年" + month + "月" + date + "日";
    },
    timeFormates(timeStamps) {
      let hh =
        new Date(timeStamps).getHours() < 10
          ? "0" + new Date(timeStamps).getHours()
          : new Date(timeStamps).getHours();
      let mm =
        new Date(timeStamps).getMinutes() < 10
          ? "0" + new Date(timeStamps).getMinutes()
          : new Date(timeStamps).getMinutes();
      // let ss=new Date(timeStamps).getSeconds() < 10? "0" + new Date(timeStamps).getSeconds(): new Date(timeStamps).getSeconds();
      this.miao = hh + ":" + mm;
    },
    nowTimes() {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 30 * 1000);
    },
    miaos() {
      this.timeFormates(new Date());
      setInterval(this.miaos, 30 * 1000);
    },

    day: function() {
      this.data = this.Data()
        .getFullYear()
        .getMonth()
        .getDate();
    },
    
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "New Tab",
          name: newTabName,
          content: "New Tab content"
        });
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  },
  created() {
    this.message = sessionStorage.getItem("user");
    this.nowTimes();
    this.miaos();
  },
  // 挂载完成时
  // mounted(){
  //   this.nowTimes();
  //   this.miaos();
  //   var _this = this; //声明一个变量指向vue实例this,保证作用域一致
  //       this.timer = setInterval(function() {
  //         let hh =new Date().getHours() < 10? "0" + new Date().getHours(): new Date().getHours();
  //         let mm =new Date().getMinutes() < 10? "0" + new Date().getMinutes(): new Date().getMinutes();
  //         let ss=new Date().getSeconds() < 10? "0" + new Date().getSeconds(): new Date().getSeconds();
  //        _this.miao = hh+":"+mm+":"+ss;//修改数据date
  //       }, 1000);
  //    },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); //在vue实例销毁钱，清除我们的定时器
    }
  }
};
</script>
<style>
.el-row {
  height: 1000px;
}
.el-header,
.el-footer {
  background-color: rgb(167, 215, 243);
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  margin-top: -35px;
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
element.style {
  margin-top: -50%;
}
.ul,
menu,
dir {
  margin-top: -20%;
}
</style>

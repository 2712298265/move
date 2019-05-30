<template>
  <div style="background-color: #FFE1FF;width:100%;height:100%;">
    <!-- 类型为phone，最大长度为13 -->
    <!-- <span>
      <input
        type="phone"
        v-model="message"
        maxlength="13"
        style=" margin-top:20%;width:200px;height:30px;"
      >
    </span>-->
    <div>
    <mt-field
      style=" margin-top:20%;margin-left:20%;width:200px;height:30px;"
      placeholder="请输入手机号"
      v-model="message"></mt-field>
    <div>
      <div style="padding-top: 20px;">
        <mt-button type="primary" style=" width: 60px;" @click="add(1)">1</mt-button>
        <mt-button type="primary" style=" width: 60px;" @click="add(2)">2</mt-button>
        <mt-button type="primary" style=" width: 60px;" @click="add(3)">3</mt-button>
      </div>
      <div style="padding-top: 20px;">
        <mt-button type="primary" style=" width: 60px;" @click="add(4)">4</mt-button>
        <mt-button type="primary" style=" width: 60px;" @click="add(5)">5</mt-button>
        <mt-button type="primary" style=" width: 60px;" @click="add(6)">6</mt-button>
      </div>
      <div style="padding-top: 20px;">
        <mt-button type="primary" style=" width: 60px;" @click="add(7)">7</mt-button>
        <mt-button type="primary" style=" width: 60px;" @click="add(8)">8</mt-button>
        <mt-button type="primary" style=" width: 60px;" @click="add(9)">9</mt-button>
      </div>
      <div style="padding-top: 20px;">
          <mt-button type="primary" style=" width: 60px;" @click="all()">清空</mt-button>
        <mt-button type="primary" style=" width: 60px;" @click="add(0)">0</mt-button>
        <mt-button type="primary" style=" width: 60px;" @click="del()">X</mt-button>    
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataPhone: "",
      message: ""
    };
  },
  methods: {
    add(num) {
      if (this.message.length < 13) {
        if (this.message.length === 3 || this.message.length === 8) {
          this.message = this.message + " ";
        }
        console.log("原来的值:", this.message);
        this.message = this.message + num; // 原来 ""  "" + 1   "1"
        console.log("修改的值:", this.message);
      }
    },
    del() {
      let leng = this.message.length;
      if (leng > 0) {
        console.log("原来的值:", this.message);
        this.message = this.message.substring(0, leng - 1).trim(); // " 110 " "110" "123456" "12345"
        console.log("删除的值:", this.message);
      }
    },    
    all(){
        let allz = this.message.length;
        if(allz > 0){
            this.message = this.message.slice(0,0);
        }
    }
  },
  watch: {
    // 通过watch来设置空格
    dataPhone(newValue, oldValue) {
      if (newValue.length > oldValue.length) {
        // 文本框中输入
        if (newValue.length === 3 || newValue.length === 8) {
          this.dataPhone += " ";
        }
      } else {
        // 文本框中删除
        if (newValue.length === 9 || newValue.length === 4) {
          this.dataPhone = this.dataPhone.trim();
        }
      }
    }
  }
};
</script>
<style>
b {
  width: 20px;
  padding-top: 20px;
  text-align: left;
}
</style>


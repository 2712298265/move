<template>
<div style="width:100%;height:1000px;border: 0px solid green;text-align: center;">
    <div style="padding:25px 0 0 0;margin:0 auto;width:95%;height:95%;border: 0px solid blue;">
        <div style="width:100%;height:120px;border:2px solid #D3D3D3;text-align: left;">
            <div style="float:left;margin-left:10px;margin-top:10px;width:100px;height:100px;border:2px solid #D3D3D3;border-radius:100px;">
                <img style="width:100px;height:100px;border-radius:100px;" src="../assets/gzs.jpg">
            </div>
            <div style="float:left;width:101px;height:90px;margin-top:20px;border:0px solid gray;margin-left:10px;">
             <span>
              <strong>小莫莫</strong>
             </span><br>
             <span>男</span>
            </div>
           <div style=" border-right: 1px dashed black;float:left;width:0;height:100px;border-left:1px solid red;margin-top:10px;border:1px solid #D3D3D3;margin-left:10%;">            
           </div>
        
     <el-progress :width="80" style="margin-left:5%;margin-top:20px;" type="circle" :percentage="20" status="text" ><span>11</span><br>当前在住</el-progress>
     <el-progress :width="80" style="margin-left:5%;margin-top:20px;" color="red" type="circle" :percentage="10" status="text"><span>4</span><br>今日入住</el-progress>
     <el-progress :width="80" style="margin-left:5%;margin-top:20px;" color="#8e71c7" type="circle" :percentage="10" status="text"><span>4</span><br>今日预抵</el-progress>
     <el-progress :width="80" style="margin-left:5%;margin-top:20px;" color="green" type="circle" :percentage="10" status="text"><span>4</span><br>今日离店</el-progress>
     <el-progress :width="80" style="margin-left:5%;margin-top:20px;" color="#00FF00" type="circle" :percentage="10" status="text"><span>4</span><br>新增预定</el-progress>
     <el-progress :width="80" style="margin-left:5%;margin-top:20px;" color="Teal" type="circle" :percentage="10" status="text"><span>4</span><br>新增会员</el-progress>
        </div>

       <div style="margin-top:10px;width:100%;height:350px;border:0px solid gray;">
         
           <div style="float:left;width:32%;height:350px;border:2px solid #D3D3D3">
           <ve-ring  :data="chartData" height="350px"></ve-ring>
           </div>
           <div style="float:left;margin-left:2%;width:32%;height:350px;border:2px solid #D3D3D3">
           <ve-radar :data="chartDatas" :settings="chartSettings" height="350px"></ve-radar>
           </div>
           <div style="margin-left:68%;width:32%;height:350px;border:2px solid #D3D3D3">
          <ve-pie :data="chartDatass" height="350px"></ve-pie>
           </div>
       </div> 

       <div style="margin-top:10px;width:100%;height:350px;border:0px solid #D3D3D3;">
          <div style="float:left;width:32%;height:350px;border:2px solid #D3D3D3">
          <ve-histogram :data="chartDatasss" :settings="chartSettings"  height="350px"></ve-histogram>
          </div>
           <div style="float:left;margin-left:2%;width:32%;height:350px;border:2px solid #D3D3D3">
           <ve-histogram :data="chartDatassss" :settings="chartSettingss"  height="350px"></ve-histogram>
           </div>
           <div style="margin-left: 68%;width:32%;height:350px;border:2px solid #D3D3D3">
           <ve-histogram :data="chartDatasssss" :settings="chartSettingsss"  height="350px"></ve-histogram>
           </div>
       </div> 

       </div>
       </div>
</template>
<script>
export default {
    data(){

         
         this.chartSettings = {
        axisSite: { right: ['出租率'] },
        yAxisType: ['KMB', 'percent'],
        yAxisName: ['金额', '出租率'],
        showLine: ['出租率']
      }, this.chartSettingss = {
        axisSite: { right: ['出租率'] },
        yAxisType: ['KMB', 'percent'],
        yAxisName: ['金额', '出租率']
      },this.chartSettingsss = {
        axisSite: { right: ['新增会员'] },
        yAxisType: ['KMB', 'normal'],
        yAxisName: ['金额', '人数'],
        showLine: ['新增会员']
      }
        return{
           visible: false,
         
          chartData: {
          columns: ['美团', '散客'],
          rows: [
            { '美团': '美团（5.00%）', '散客': 50},
            { '美团': '散客（95%）', '散客': 950 },
          ]
        }, chartDatas: {
          columns: ['name', '商务标准间','商务大床房','臻品标准间','臻品大床房','行政标准间','行政大床房'],
          rows: [
            { 'name': '实时出租率', '商务标准间':100,'商务大床房': 1393, '臻品标准间': 1093, '臻品大床房': 0.32,'行政标准间':1000,'行政大床房':1000},
            { 'name': '预出租率', '商务标准间':100,'商务大床房': 1393, '臻品标准间': 1093, '臻品大床房': 0.32,'行政标准间':1000,'行政大床房':1000}
          
          ]
        },
            chartDatass: {
          columns: ['name', 'value'],
          rows: [
            { 'name': '协议', 'value': 5000},
            { 'name': '团队', 'value': 5000},
            { 'name': '会员', 'value': 5000},
            { 'name': '美团', 'value': 5000},
            { 'name': '散客', 'value': 5000}
          ]
        }, chartDatasss: {
          columns: ['name', '出租率', '消费', '收款'],         
          rows: [
            { 'name': '2019/4/15', '出租率': 0.56, '消费': 1093, '收款': 4000 },
            { 'name': '2019/4/16', '出租率': 0.75, '消费': 3230, '收款':5000},
            { 'name': '2019/4/17', '出租率': 0.20, '消费': 2623, '收款': 3000 },
            { 'name': '2019/4/17', '出租率': 0.20, '消费': 2623, '收款': 3000 }

          ]
        },chartDatassss: {
          columns: ['name', '出租率', 'REPAR', '平均房价'],         
          rows: [
            { 'name': '2019/4/15', '出租率': 0.13, 'REPAR': 1093, '平均房价': 100},
            { 'name': '2019/4/16', '出租率': 0.35, 'REPAR': 3230, '平均房价': 2000 },
            { 'name': '2019/4/17', '出租率': 0.29, 'REPAR': 2623, '平均房价': 3000 }
          ]
        },chartDatasssss: {
          columns: ['name', '新增会员', '会员充值', '会员消费'],         
          rows: [
            { 'name': '2019/4/15', '新增会员': 2, '会员充值': 1093, '会员消费': 100},
            { 'name': '2019/4/16', '新增会员': 9, '会员充值': 3230, '会员消费': 2000 },
            { 'name': '2019/4/17', '新增会员': 2, '会员充值': 2623, '会员消费': 3000 }
          ]
        }
        }
    }
}
</script>
<style>
 .to{
     
     width:100px;
     height:100px;
     border-radius:100px;
     border:1px solid gray;
     /* background:url(../assets/gzs.jpg); */
     
     }
</style>


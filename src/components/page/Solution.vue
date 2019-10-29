<template>

  <div class="Solution">
    <div class="box">
      <h4>IP网络酒店前端解决方案</h4>
      <div class="box_conten">
        <el-row>
          <el-col :span="12">
            <h3>方案简介</h3>
            <p>OMP150是引视科技专为商用电视系统研发的高集成度、高性价比 IPTV系统。该系统集成PTV直播平台、点播内容分发系统、第三方酒店收费/入住系统,支持多达
              50套高标清直播节目、高达200小时的点播视频内容推送和500个终端推送,支持
              UDP/RTP组播流输入、MP4视频文件上载和HLS推流输出。配备酒店/医院/学校等机构介绍模块和定制化开机欢迎页面显示,非常适用于酒店、会所、医院、学校等 IPTV系统。</p>
          </el-col>
          <el-col :span="12">
            <div class="box_img">
              <img src="/static/img/shouye2.jpg" alt="">
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="box">
      <h4>CMP100数字电视平台解决方案</h4>
      <div class="box_conten">
        <el-row>
          <el-col :span="12">
            <h3>方案简介</h3>
            <p>DVB+IPTV整体解决方案,一方面可以通过DVB-C有线信号、DVB-S卫星信号和 DTMB-TH国标地面波信号接收节目,加上自办节目编码,输出IP组播流,或者调制成数字有线信号(QAM)或数字地面波信号(DTMB) ,通过酒店现有有线网络或P局域网,将电视节目传输到各个房间。另一方面可以帮助酒店通过互联网接收IPTV信号节目,将不同信源的视频内容实时传输到用户的各种智能终端,以拓展业务覆盖范围。还能通过流媒体服务器提供收费服务,如视频点播、回看和网络录制等, 提升用户体验,可与酒店现有的入住管理与计费系统无缝对接,支持广告插入,帮助酒店提高收入。</p>
          </el-col>
          <el-col :span="12">
            <div class="box_img">
              <img src="/static/img/shouye3.jpg" alt="">
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="box">
      <h4>酒店IPTV电视系统解决方案</h4>
      <div class="box_conten">
        <el-row>
          <el-col :span="12">
            <h3>方案简介</h3>
            <p>单台设备可接收7个光猫IPTV信号,每条IPTV光猫可出多套数字电视节目,经IPTV网关接收汇聚后,可通过UDP组播输出到设备自带调制模块,经设备调制模块调制输出后给到酒店同轴网络,客房通过数字电视一体机直接收看数字电视节目或通过数字电视机顶盒收看数字电视节目。</p>
          </el-col>
          <el-col :span="12">
            <div class="box_img">
              <img src="/static/img/shouye4.jpg" alt="">
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        activeName: ''
      }
    },
    methods: {
      handleClick() {

      }
    },
    created() {
      console.log("dashbord");
    }
  }

</script>

<style lang="less" scoped>
  .Solution {
    text-align: center;
    margin: 0 auto;
    width: 1200px;
    .box {
      margin-bottom: 35px;
      h4 {
        text-align: left;
        height: 106px;
        line-height: 106px;
        border-bottom: 1px solid #8e8c8c;
        color: #797979;
        font-weight: 400;
        margin-bottom: 37px;
      }

      .box_conten {
        text-align: left;
        h3{
          font-size: 25px;
          color: #44328a;
          font-weight: 600;
        }
        p {
          text-align: justify; 
          color: #b0b0b0;
          height: 32px;
          line-height: 32px;
          // font-size: 16px;
        }
        .box_img{
          margin-left: 76px;
          width: 460px;
          img{
            width: 100%;
          }
        }
      }
    }
  }

</style>

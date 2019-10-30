<template>
  <div class="swipeDiv">
    <div class="bannerN">
      <div class="imgFull" style="background-image: url(/static/img/p_bg_02.png);">
        <!-- <img src="/v2/images/p_bg_02.jpg" class="img-responsive"> -->
      </div>
      <!-- <h2 class="banH2 "><img src="static/img/ii_03.png"></h2> -->
    </div>

    <!-- <div style="width:100%;height:900px">
      <el-row :gutter="22">
        <el-col :span="6">
          <div class=" bg-purple">
            <li>高度灵活的应用路由</li>
          </div>
        </el-col>
        <el-col :span="8">
          <div class=" bg-purple">
            <el-card :body-style="{ padding: '0px' }" style="width:580px;">
              <video width="580px" height="100%" poster="static/img/2.png" controls="">
                <source src="http://www.tamronos.com/v/lun.mp4" type="video/mp4">
                <source src="movie.ogg" type="video/ogg">
                请将浏览器切换到极速模式。
              </video>
            </el-card>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="bg-purple">
            <li>高度灵活的应用路由</li>
          </div>
        </el-col>
      </el-row>
    </div> -->
    <div class="mainBg" style="background-color: #fbfbfb">
      <div class="container">
        <div class="content_1">
          <div class="content_x bak_2">
            <div class="advantage_1 f_l wow bounceInLeft animated"
              style="visibility: visible; animation-name: bounceInLeft;">
              <dl>
                <dd>
                  <h2>引视商用系统酒店</h2>
                  <h3>
                    <font color="#FF5700">针对酒店行业的客制化直播点拨解决方案</font>
                  </h3>
                  <p>1、支持多店分区管理，提供两版不同UI的酒店桌面，主题皮肤可在后台修改。</p>
                  <p>2、国内唯一支持多国多语言切换，唯一支持应用推送功能。</p>
                  <p>3、支持对接酒店PMS系统显示欢迎词，对接客房服务等。</p>
                  <p>4、可对接爱奇艺、CIBN等提供正版点播内容，也可对接主动式缓存提供多元化点播。</p>
                  <p>5、支持机顶盒WIFI控制，可远程下发WIFI配置，设置热点名称修改密码等功能。</p>
                  <p>6、客房服务高度自由可定制，客户可通过简单设置创建任何客房服务。</p>
                  <p>7、内置商城模块，支持传统的当面付。</p>
                  <p>8、支持多店集中管理和云部署。</p>
                </dd>
                <div align="center">
                  <router-link to="/iptv"><button type="button "
                      class="btn btn-primary">了解详情</button></router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <!-- <a target="_blank"
                    href="http://wpa.qq.com/msgrd?v=3&amp;uin=1125888050&amp;site=qq&amp;menu=yes"><button
                      type="button " class="btn btn-success">购买咨询</button></a> -->
                </div>
              </dl>
            </div>
            <div class="advantage_6 f_r wow bounceInRight animated"
              style="visibility: visible; animation-name: bounceInRight;">
              <img src="/static/img/bg_iptv.png" alt="">
              </div>
          </div>

        </div>
        <div class="clearFloat"></div>
      </div>
    </div>


    <!-- <div class="mainBg" style="background-color: #fbfbfb">
      <div class="container">

        <div class="content_1">
          <div class="content_x bak_2">
            <div class="advantage_1 f_r wow bounceInLeft animated"
              style="visibility: visible; animation-name: bounceInLeft;">
              <dl>
                <dd>
                  <h2>TamronOS IPTV系统酒店版</h2>
                  <h3>
                    <font color="#FF5700">针对酒店行业的客制化直播点拨解决方案</font>
                  </h3>
                  <p>1、支持多店分区管理，提供两版不同UI的酒店桌面，主题皮肤可在后台修改。</p>
                  <p>2、国内唯一支持多国多语言切换，唯一支持应用推送功能。</p>
                  <p>3、支持对接酒店PMS系统显示欢迎词，对接客房服务等。</p>
                  <p>4、可对接爱奇艺、CIBN等提供正版点播内容，也可对接主动式缓存提供多元化点播。</p>
                  <p>5、支持机顶盒WIFI控制，可远程下发WIFI配置，设置热点名称修改密码等功能。</p>
                  <p>6、客房服务高度自由可定制，客户可通过简单设置创建任何客房服务。</p>
                  <p>7、内置商城模块，支持传统的当面付。</p>
                  <p>8、支持多店集中管理和云部署。</p>
                </dd>
                <div align="center">
                  <a href="/iptv"><button type="button "
                      class="btn btn-primary">了解详情</button></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a target="_blank"
                    href="http://wpa.qq.com/msgrd?v=3&amp;uin=1125888050&amp;site=qq&amp;menu=yes"><button
                      type="button " class="btn btn-success">购买咨询</button></a>
                </div>
              </dl>
            </div>
            <div class="advantage_6 f_l wow bounceInRight animated"
              style="visibility: visible; animation-name: bounceInRight;"></div>
          </div>

        </div>
        <div class="clearFloat"></div>
      </div>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {

      return {
        msg: 'Welcome to Your Vue.js App',
        serverIp:this.$store.state.serverIp,
      }
    },
    created() {
      console.log("dashbord");
    }
  }

</script>

<style scoped>
  .swipeDiv {

    /* position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #f3f3f3;
    box-sizing: border-box; */
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bannerN {
    height: 450px;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bannerN .imgFull {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .imgFull {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .imgFull img {
    display: none;
  }

  .img-responsive
    {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .banH2 {
    position: relative;
    color: #FFFFFF;
    font-size: 36px;
  }

  .mainBg {
    position: relative;
    overflow: hidden;
    min-height: 198px;
    font-size: 14px;
    color: #777777;
    line-height: 32px;
  }

  .container {
    width: 1230px;
    min-width: 1460px;
  }

  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .bak_2 {
    margin: 38px 0px 0px 0px;
  }

  .content_x {
    width: 100%;
    height: auto;
    /* padding: 4em 0; */
    border-bottom: 1px #e6be19 dotted;
  }

  .f_l {
    float: left;
  }


  .advantage_6 {
    width: 47%;
    height: auto;
    min-height: 360px;
    /* background: url("/static/img/bg_iptv.png") no-repeat right top; */
  }

  .advantage_1 {
    width: 52%;
    text-align: left;
  }

  .f_r {
    float: right;
  }

  dl {
    margin-top: 0;
    margin-bottom: 20px;

  }

  .advantage_1 dl dd {
    width: 87%;
    float: right;
    padding: 0px 0px 0px 10px;
  }

  dd {
    margin-left: 0;
  }

  dd,
  dt {
    line-height: 1.42857143;
  }

  .advantage_1 dl dd h2 {
    color: #333;
    font-size: 2.2em;
    margin: 0;
  }

  .advantage_1 dl dd h3 {
    color: #e6be19;
    line-height: 2.4em;
    font-size: 1.4em;
    font-weight: normal;
    margin: 0;
  }

  .advantage_1 dl dd p {
    color: #888;
    line-height: 1.7em;
    padding: 0.5em 0 0.6em 0;
    margin: 0;
  }

  .btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
  }

  .btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }

  .btn-success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
  }

  .content_x:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: ".";
    clear: both;
    height: 0;
  }

</style>

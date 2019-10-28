<template>
  <div class="swipeDiv">
    <div class="bannerN">
      <div class="imgFull" style="background-image: url(/static/img/p_bg_02.png);">
        <!-- <img src="/v2/images/p_bg_02.jpg" class="img-responsive"> -->

      </div>
      <!-- <h2 class="banH2 "><img src="static/img/ii_03.png"></h2> -->
    </div>
    <div style="height:60px"></div>
    <div style="display:inline-block;margin:auto auto;width:1300px">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="产品介绍" name="first">
          <vintroduce></vintroduce>
        </el-tab-pane>
        <el-tab-pane label="部署方案" name="second" :lazy="true">
          <vbuild></vbuild>
        </el-tab-pane>
        <el-tab-pane label="系统截图" name="third" :lazy="true">
          <vsystem></vsystem>
        </el-tab-pane>
        <el-tab-pane label="客户端截图" name="fourth" :lazy="true">
          <vclient></vclient>
        </el-tab-pane>
        <el-tab-pane label="答疑解惑" name="five" :lazy="true">
          <vquestion></vquestion>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- <div style="width:900px;margin-left:80px">
      <div class="alert alert-success"><strong>答疑解惑：</strong>针对客户在购买IPTV时常见的一些问题，在这里进行统一解答，建议先认真阅读，如果还有什么不明白的可以随时咨询我们。
      </div>
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">问：TamronOS IPTV系统在用户不能上外网的情况下可否部署？</h3>
        </div>
        <div class="panel-body">
          答：可以部署，用户是否能上网与是否能看IPTV无关，但服务器必须24小时联网。</div>
      </div>

      <div class="panel panel-success">
        <div class="panel-heading">
          <h3 class="panel-title">问：TamronOS IPTV系统在用户不能上外网的情况下可否部署？</h3>
        </div>
        <div class="panel-body">
          答：可以部署，用户是否能上网与是否能看IPTV无关，但服务器必须24小时联网。</div>
      </div>
    </div> -->

  </div>
</template>

<script>
  import vintroduce from './iptv/Introduce.vue';
  import vquestion from './iptv/Question.vue';
  import vbuild from './iptv/Build.vue';
  import vsystem from './iptv/System.vue';
  import vclient from './iptv/Client.vue';
  export default {
    name: 'iptv',
    data() {

      return {
        activeName: "first",
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created() {
      console.log("dashbord");
    },
    components: {
      vintroduce,
      vquestion,
      vbuild,
      vsystem,
      vclient
    },
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

  .img-responsive,
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


  .panel {
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
  }

  .panel-info {
    border-color: #bce8f1;
  }

  .panel-info>.panel-heading {
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1;
    text-align: left;
  }


  .panel-heading {
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  .panel-title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
  }

  .panel-body {
    text-align: left;
    padding: 15px;
  }

  .panel-success {
    border-color: #d6e9c6;
  }

  .panel-success>.panel-heading {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
    text-align: left;
  }

  .alert-success {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
  }

  .alert {
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
  }

</style>

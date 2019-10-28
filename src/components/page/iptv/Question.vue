<template>
  <div class="mainBg c container1" style="min-height: 900px;width: 1300px;margin-bottom:10px;margin-top:20px;">
    <div style="border:1px solid #ddd;" id="myTabContent" class="tab-content">
      <div style="margin:30px;text-align:left">
        <div class="alert alert-success"><strong>答疑解惑：</strong>针对客户在购买IPTV时常见的一些问题，在这里进行统一解答，建议先认真阅读，如果还有什么不明白的可以随时咨询我们。
        </div>
        <!-- <div class="panel panel-info">
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
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
        
    }
  }

</script>


<style scoped>
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

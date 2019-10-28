<template>
  <div class="footer">
    <div class="footer_text">
      <el-row type="flex" class="row-bg">
        <el-col :span="6">
          <div class="wx">
            <div class="wx_img">
            </div>
            <p>微信公众号</p>
            <h3>400-678-1021</h3>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="text_list">
            <h3>联系引视</h3>
            <p>广东省惠州市惠城区江北云山东路18号信息产业园A605</p>
            <p>电话：0752-2308111 18029997099</p>
            <p>传真：+86-752-2760100</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="copyright">
      <p>COPYRIGHT &copy; 2018-2019 广东引视科技有限公司</p>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="less" scoped>
  .footer {
    color: #fff;
    height: 394px;
    background: #ccc;
    .footer_text {
      box-sizing: border-box;
      padding-top: 57px;
      padding-left: 328px;
      text-align: left;
      height: 307px;
      background: #0188c5;

      .wx {
        width: 212px;
        text-align: left;
        

        .wx_img {
          width: 116px;
          height: 116px;
          background: url('/static/img/gongzhonghao.JPG') no-repeat;
          background-size: 100% 100%;
        }

        p {
          font-size: 24px;
        }
      }

      .text_list {
        h3{
          margin-bottom: 36px;
          font-size: 35px;
        }
      }
    }
    .copyright{
      height: 86px;
      background: #000;
      line-height: 86px;
    }
  }

</style>

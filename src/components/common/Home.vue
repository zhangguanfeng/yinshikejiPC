<template>
  <div class="wrapper">
    <!-- 头部 -->
    <vHeads></vHeads>
    <!-- <div class="header_placeholder"></div> -->
    <!-- 内容部分 -->
    <div class="content">
      <!-- 悬浮框 -->
      <div class="xuanfu">
        <div class="but">
          <a class="but_qq" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=728191908&site=qq&menu=yes">免费咨询</a>
        </div>
      </div>
      <!-- 弹窗 -->
      <transition name="el-fade-in-linear">
        <div class="dialog" v-show="isShow" >
          <div class="dialog_box">
            <button  class="dialog_hidden" @click="handleDialogHidden">取消</button>
            <a class="shiyong" href="#">免费试用</a>
            <a class="zixun" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=728191908&site=qq&menu=yes">咨询咨询</a>
          </div>
        </div>
      </transition>
      
      <transition
        name="fade"
        mode="in-out"
      >
        <router-view />
      </transition>

    </div>
    <!-- 脚部分 -->
    <Footer/>
    <!-- <div class="footer">
      <div class='address'>
        <div style='margin-top:30px'>
          <img src='/static/img/logo.png' />
          <p style="margin-top:30px">公司地址:惠州市惠城区江北云山东路18号信息产业园A605</p>
        </div>
      </div>
      <div class="clearfix"></div>
      <div class='company'>
        <p>Copyright © 2018 - 2019 广东引视科技有限公司</p>
      </div>

    </div> -->
    <div
      class="el-icon-caret-top "
      id="scrollto"
      @click="handleDing"
    >
      <span></span>
    </div>
  </div>
</template>

<script>
import vHead from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  data() {
    return {
      tagsList: [],
      collapse: false,
      transitionName:'',
      isShow:false
    };
  },
  mounted() {
    this.hiddenBut();
    window.addEventListener("scroll", this.hiddenBut);
    this.showDialog()
  },
  methods: {
    handleDialogHidden(){
      this.isShow = false
    }, 
    showDialog(){
      setTimeout(() => {
        this.isShow = true
      }, 1000);
    },
    hiddenBut() {
      if (document.documentElement.scrollTop + document.body.scrollTop > 500) {
        document.getElementById("scrollto").style.display = "block";
      } else {
        document.getElementById("scrollto").style.display = "none";
      }
    },
    // 回到顶部
    handleDing() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  },
  components: {
    vHeads: vHead,
    Footer,
  },
  created() {}
};
</script>
<style scoped>
/* 弹框开始 */
.dialog{
  
  position: fixed;
  top: 40%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background: url('/static/img/tanchuan.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: 999;
}
.dialog_box{
    position: relative;
    width: 362px;
    height: 173px;
  }
  .dialog_hidden{
    position: absolute;
    right: 0;
    top: 3;
    opacity: 0;
  }
  .zixun{
    width: 82px;
    height: 27px;
    background: #000;
    position: absolute;
    right: 6px;
    bottom: 9px;
    opacity: 0;
  }
  .shiyong{
    width: 82px;
    height: 27px;
    background: #000;
    position: absolute;
    right: 100px;
    bottom: 9px;
    opacity: 0;
  }

/* 弹框结束 */

/* 悬浮框 开始 */
.xuanfu{
  width: 150px;
  height: 50px;
  position: fixed;
  right: 0;
  top: 45%;
  z-index: 9;
  background: url('/static/img/xufukuang.png');
  background-repeat: repeat-x;
  
}
.but{
  /* padding-top: 287px; */
  }
.but_qq{
  display: inline-block;
  width: 150px;
  height: 49px;
  opacity: 0;
}
/* 悬浮框结束 */
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:0.1;
}
.fade-enter-active{
  transition:opacity .2s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .2s;
}

#scrollto {
  position: fixed;
  right: 10%;
  bottom: 20%;
  font-size: 35px;
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #409eff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  z-index: 5;
}
.header_placeholder {
  height: 100px;
}
.empty {
  height: 100px;
}

.footer {
  padding-bottom: 30px;
  /* height: 480px; */
  background: #191919;
}

.address {
  /* height: 208px; */
  font-size: 12px;
  color: #a3a3a3;
  text-align: center;
}

.company {
  /* border-top: 1px solid #2b2b2b; */
  font-size: 12px;
  color: #a3a3a3;
  text-align: center;
  margin-top: 20px;
}

.address img {
  /* width: 75px; */
  height: 72px;
}

/* .data {
    position: relative;
    top: 20%;
  } */

.link {
  font-size: 12px;
  color: #a3a3a3;
  text-align: center;
  position: relative;
  top: 25%;
}

.contact_phone {
  background: #1580c4;
  height: 124px;
  color: #ffffff;
  text-align: center;
}

.contact_phone p {
  display: inline-block;
  line-height: 124px;
  font-size: 36px;
}

.fl {
  float: left;
}

.f-contact,
.f-cooper {
  color: #ffffff;
  padding-right: 20px;
  line-height: 30px;
  display: inline-block;
  text-align: left;
}

.zixun {
  text-align: center;
}

.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
}

.clearfix {
  zoom: 1;
}

.f-oem {
  margin-left: 40px;
}
</style>

<template>
  <div class="swipeDiv">
    <div class="bannerN">
      <div class="imgFull" style="background-image: url(/static/img/banContact.png);">
        <!-- <img src="/v2/images/p_bg_02.jpg" class="img-responsive"> -->

      </div>
      <!-- <h2 class="banH2 "><img src="static/img/ii_18.png"></h2> -->
    </div>
    <div style="height:60px"></div>

    <div class="mainBg">
      <div class="mainBgImg"></div>
      <div class="container">
        <div class="onepage">
          <!-- <div class="oneTop wow fadeInUp animated" style="visibility: visible; animation-name: fadeInUp;"><img
              src="static/img/logo.png" class="img-responsive"></div> -->
          <div class="oneText" style="display: block;">
            <!-- <p><strong>TamronOS LOGO</strong></p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;腾龙品牌Logo取自山海经中关于龙生九子的麒麟形象；并进行了艺术加工和抽象化，
              寓意腾龙的服务能托起广大客户的成长，腾龙将成为强有力的后台支撑。借用一句话“服务无止境，技术永创新”来做出我们的承诺。
              在未来我们将以更好的更优秀的产品为广大客户提供优质服务。
            </p> -->
            <p><strong>技术实力</strong></p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;引视公司成立于2018年；是一家专业从事Linux路由、
              、缓存系统、IPTV系统、的专业科技公司。我们立志于为中小宽带运营商提供从机房建设到市场运营，
              从软件到硬件的一揽子解决方案。公司的核心团队成员均拥有多年大型Linxu系统软件开发经验；
              并在行业内取得多个重大技术突破和创新成果。系列产品一直深受用户的好评。借用一句话“服务无止境，技术永创新”来做出我们的承诺。
              在未来我们将以更好的更优秀的产品为广大客户提供优质服务。
            </p>
            <p><strong>独有技术专利</strong></p>
            <ul class="oneList list-unstyled">
              <li>1、动态内存切片技术。</li>
              <li>2、HLS高速预读技术。</li>
              <li>3、基于intel DPDK的低功耗视频编码技术。</li>
              <li>4、主动视频缓存技术。</li>
              <li>5、Android高速软解播放器框架。</li>
            </ul>
            <p><strong>公司位置</strong></p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;惠州市惠城区江北云山东路18号信息产业园A605
            </p>
            <p><strong>联系方式</strong></p>
            <ul class="oneList list-unstyled">
              <li>QQ:412854551</li>
              <li>WX:TCWMsys</li>
              <li>电话:18029997099</li>
              
            </ul>
          </div>
        </div>

        <!-- <div class="companyHonor2">
          <h3 class="company-h3">公司荣誉<i>Company honor</i></h3>
          <ul>
            <li><img src="static/img/about-img2.jpg" alt="酒店电视系统软件著作权">
              <p>品为道酒店电视系统<br>2016SR019540</p>
            </li>
            <li><img src="static/img/about-img2.jpg" alt="智能电视云平台软件著作权">
              <p>品为道智能电视云平台<br>2016SR018288</p>
            </li>
            <li><img src="static/img/about-img2.jpg" alt="实用新型专利证书">
              <p>实用新型专利证书<br>ZL 2013 20220955.9</p>
            </li>
            <li><img src="static/img/about-img2.jpg" alt="发明专利证书">
              <p>发明专利证书<br>20130150067.9</p>
            </li>
          </ul>
        </div> -->
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
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

  .mainBg {
    position: relative;
    overflow: hidden;
    min-height: 198px;
    font-size: 14px;
    color: #777777;
    line-height: 32px;
  }

  .mainBgImg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 185px;
    background: url(/static/img/mainBg.png) center top no-repeat;
    animation: mainBg 80s infinite;
    z-index: -1;
  }

  .container {
    width: 1230px;
    text-align: left;
  }

  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .onepage {
    /* padding: 80px 0; */
  }

  .oneTop {
    padding-bottom: 35px;
    text-align: center;
  }

  .oneText {
    padding-bottom: 50px;
    word-break: break-all;
  }

  .oneText strong {
    font-size: 18px;
    color: #3754a8;
  }


  .companyHonor2 {
    overflow: hidden;
  }

  .company-h3 {
    font-size: 24px;
    height: 85px;
    border-bottom: 1px solid #ececec;
    font-weight: normal;
  }

  .company-h3 i {
    font-size: 18px;
    color: #c0c0c0;
    font-style: normal;
    display: block;
    margin-top: 10px;
  }

  .companyHonor2 ul {
    /* height: 420px; */
    overflow: hidden;
    padding-top: 42px;
  }

  .companyHonor2 ul li {
    float: left;
    margin-right: 85px;
    text-align: center;
    list-style: none
  }

  .companyHonor2 ul li img {
    display: block;
    margin-bottom: 25px;
  }

  .companyHonor2 ul li p {
    color: #555;
    line-height: 25px;
  }

</style>

<template>
  <div class="swipeDiv">
    <div class="bannerN">
      <div class="imgFull" style="background-image: url(/static/img/banCase.png);">
        <!-- <img src="/v2/images/p_bg_02.jpg" class="img-responsive"> -->

      </div>
      <!-- <h2 class="banH2 ">让客户了解我们的动态</h2> -->
    </div>
    <div style="height:60px"></div>
    <div class="mainBg">
      <div class="container">
        <div class="case">
          <ul class="caseBot list-unstyled">
            <!-- <li class="wow fadeInUp animated" style="visibility: visible; animation-name: fadeInUp;">
              <a href="http://www.tamronos.com/article/119.html">
                <div class="caseImg">
                  <h1><span style="color:#06A0F5">2018-07-26</span></h1>
                </div>
                <div class="caseText">
                  <h3 class="caseTit"><strong>TamronOS IPTV系统酒店版2018特价一体机正式发布</strong></h3>
                  <div class="caseBrief">
                    <p>
                     

                    </p>
                  </div>
                </div>
                <div class="caseIco"><i class="fa fa-angle-right"></i></div>
              </a>
            </li> -->
            <li class="wow fadeInUp animated" style="visibility: visible; animation-name: fadeInUp;">
              <a href="#">
                <div class="caseImg">
                  <h1><span style="color:#06A0F5">2019-06-25</span></h1>
                </div>
                <div class="caseText">
                  <h3 class="caseTit"><strong>引视 2019新官网正式上线</strong></h3>
                  <div class="caseBrief">
                    <p>
                      <!-- item.description|striptags|slice(0, 200) -->
                      ​ ​为了方便广大用户查询资料、下载系统、查询技术文档，引视
                      2019新版官网已经正式上线。新的官网采用element框架设计，UI更清爽直观，内容更加丰富。
                      欢迎新老客户和代理商访问获取更多咨询。
                    </p>
                  </div>
                </div>
                <div class="caseIco"><i class="fa fa-angle-right"></i></div>
              </a>
            </li>
            <li class="wow fadeInUp animated" style="visibility: visible; animation-name: fadeInUp;">
              <a href="#">
                <div class="caseImg">
                  <h1><span style="color:#06A0F5">2018-08-08</span></h1>
                </div>
                <div class="caseText">
                  <h3 class="caseTit"><strong>引视全新桌面启动器即将发布</strong></h3>
                  <div class="caseBrief">
                    <p>
                      <!-- item.description|striptags|slice(0, 200) -->
                      引视全新桌面启动完全采用人性化UI设计，适用于任何Android
                      TV设备做为默认桌面。UI设计简单直观适用于各个年龄阶段的用户。国内首创APK管理推送功能，支持自定义主题和主题在线预览功能。
                    </p>
                  </div>
                </div>
                <div class="caseIco"><i class="fa fa-angle-right"></i></div>
              </a>
            </li>
            <!-- <li class="wow fadeInUp animated" style="visibility: visible; animation-name: fadeInUp;">
              <a href="http://www.tamronos.com/article/70.html">
                <div class="caseImg">
                  <h1><span style="color:#06A0F5">2017-10-07</span></h1>
                </div>
                <div class="caseText">
                  <h3 class="caseTit"><strong>TamronOS IPTV系统v5客户端APK发布在即</strong></h3>
                  <div class="caseBrief">
                    <p>
                   
                      TamronOS IPTV系统v5客户端APK即将发布，v5版APK全新设计了新的UI，操作更方便，新增直播EPG功能，同时开发了新的轮播频道和vip影城功能。
                    </p>
                  </div>
                </div>
                <div class="caseIco"><i class="fa fa-angle-right"></i></div>
              </a>
            </li> -->
            <li class="wow fadeInUp animated" style="visibility: visible; animation-name: fadeInUp;">
              <a href="#">
                <div class="caseImg">
                  <h1><span style="color:#06A0F5">2018-06-22</span></h1>
                </div>
                <div class="caseText">
                  <h3 class="caseTit"><strong>IPTV手机客户端</strong></h3>
                  <div class="caseBrief">
                    <p>
                      <!-- item.description|striptags|slice(0, 200) -->
                      引视 IPTV系统Android手机客户端APP正式发布。手机客户端同样支持直播和点播，开机LOGO和首页幻灯片都可做广告位。
                    </p>
                  </div>
                </div>
                <div class="caseIco"><i class="fa fa-angle-right"></i></div>
              </a>
            </li>

          </ul>

        </div>
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

  .container {
    width: 1230px;
  }

  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .case {
    overflow: hidden;
    padding: 20px 0 70px;

  }

  .caseBot {
    padding-bottom: 30px;
  }

  .list-unstyled {
    padding-left: 0;
    list-style: none;
  }

  ol,
  ul {
    margin: 0;
  }

  .caseBot li {
    padding: 0 7px 20px;
  }

  .caseBot li a {
    display: block;
    height: 100%;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    font-size: 13px;
    color: #8d8d8d;
    line-height: 26px;
    padding: 20px 50px 20px 50px;
    position: relative;
    transition: all 0.3s ease 0s;
  }

  a,
  img {
    border: 0;
    text-decoration: none;
  }

</style>

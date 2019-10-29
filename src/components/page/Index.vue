<template>
  <div class="index">
    <div class="swipe">
      <swiper :options="swiperOption">
        <swiper-slide>
          <div>
            <img src="/static/img/banner1.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <img src="/static/img/banner2.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <img src="/static/img/banner1.png" alt="">
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div style="height: 690px;"></div>
    <div class="title_jieshao">
      <h3>专业定制界面，助理品牌形象</h3>
      <div class="title_jieshao_text">
        <h3>界面效果</h3>
        <div class="title_jieshao_text_box">
          
              <div class="title_jieshao_text_box_1 ">
                <div class="title_jieshao_text_box_1_img">
                  <div class="img">
                    <img src="/static/img/xiao (3).png" alt="">
                  </div>
                </div>
                <div class="title_jieshao_text_box_1_text">
                  <ul>
                    <li>支持开机界面定义，酒店可根据需要更换开机界面背景、编辑欢迎词</li>
                    <li>支持中英语言选择</li>
                  </ul>
                </div>
              </div>
            
              <div class="title_jieshao_text_box_1">
                <div class="title_jieshao_text_box_1_img">
                  <div class="img">
                    <img src="/static/img/xiao (2).png" alt="">
                  </div>
                  
                </div>
                <div class="title_jieshao_text_box_1_text">
                  <ul>
                    <li>酒店可自定义背景图片，同时也可以上传视频循环播放</li>
                    <li>菜单简洁易懂，方便客户操作</li>
                  </ul>
                </div>
              </div>
            
              <div class="title_jieshao_text_box_1">
                <div class="title_jieshao_text_box_1_img">
                  <div class="img">
                    <img src="/static/img/xiao (1).png" alt="">
                  </div>
                </div>
                <div class="title_jieshao_text_box_1_text">
                  <ul>
                    <li>支持大量高清直播节目，可自由编排节目，媲美有限电视效果</li>
                    <li>支持高清视频APP点播，尽享海量影视资讯</li>
                  </ul>
                </div>
              </div>
           
        </div>
      </div>
    </div>
    <!-- 解决方案 -->
    <div class="solve">
      <h3>解决方案</h3>
      <div class="solve_box_list">
        
            <div class="solve_box">
              <div class="solve_box_img">
                <img src="/static/img/shouye2.jpg" alt="">
              </div>
              <div class="solve_box_text">
                <h4>星级酒店</h4>
                <h4>IP网络酒店前端解决方案</h4>
                <p>为商用电视系统研发的高集成度、高性价比IPTV系统。</p>
                <a href="#">--查看更多</a>
              </div>
            </div>
          
            <div class="solve_box">
              <div class="solve_box_img">
                <img src="/static/img/shouye3.jpg" alt="">
              </div>
              <div class="solve_box_text">
                <h4>星级酒店</h4>
                <h4>CMP100数字电视平台解决方案</h4>
                <p>CMP100酒店数字电视解决方案即是DVB+IPTV整体解决方案</p>
                <a href="#">--查看更多</a>
              </div>
            </div>
          
            <div class="solve_box">
              <div class="solve_box_img">
                <img src="/static/img/shouye4.jpg" alt="">
              </div>
              <div class="solve_box_text">
                <h4>星级酒店</h4>
                <h4>IPTV电视系统解决方案</h4>
                <p>OMP150是专为商用电视系统研发的高集成度、高性价比IPTV系统。该系统...</p>
                <a href="#">--查看更多</a>
              </div>
            </div>
          
      </div>
    </div>
    <div class="into">
      <h3>走进引视</h3>
      <div class="into_text">
        <p>广东引视科技--专注于研发商用电视桌面系统,目前主要为酒店业、沐足业打造一体化智慧电视整体解决方案,同时还为客户提供高端的个性化U界面定制;引视电视系统为了帮助业主解决经营死角而诞生,并给使用者带来快乐的电视畅享体验。
        </p>
        <h4>愿 景：成为商用电视桌面系统引领者</h4>
        <h4>使 命：为人们带来快乐的电视创享体验</h4>
        <h4>价值观：感恩利他 用户第一 成就客户</h4>
        <a href="#">--查看更多</a>
      </div>
    </div>
    <div class="pvd-superiority">
      <div class="w1290">
        <h4>酒店行业最具潜力供应商之一</h4>
        <div class="sup-right">
          <ul class="clearfloat2">
            <li class="item_block">
              <p class="title">新趋势</p>
              <p>星星之火已显燎原之势，融合通信逐 <br>渐成为行业主流</p>
            </li>
            <li class="item_block">
              <p class="title">技术领先</p>
              <p>专注研发，积累6项专利与著作权</p>
            </li>
            <li class="item_block">
              <p class="title">完善服务</p>
              <p>一整套系统方案完整打包，满足各种情况需求</p>
            </li>
            <li class="item_block">
              <p class="title">降低成本</p>
              <p>大幅降低线缆、设备、施工、维护成本</p>
            </li>
            <li class="item_block">
              <p class="title">智能体验</p>
              <p>电视、电话、无线、客控联动的智能化体验</p>
            </li>
            <li class="item_block">
              <p class="title">全国响应</p>
              <p>全国范围招收代理商，共创未来</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../../static/css/common.css';
  export default {
    name: 'index',
    data() {

      return {
        msg: 'Welcome to Your Vue.js App',
        serverIp: this.$store.state.serverIp,
        swiperOption: {
          
          loop: true,
          autoplay: 3000,
          effect: 'fade',
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          
        }
      }
    },
    computed: {

    },
    mounted() {
    },
    methods: {
      callback() {

      }
    },
    created() {},

  }

</script>

<style lang="less" scoped>
  .index {
    position: relative;
    .title_jieshao {
      position: absolute;
      left: 0;
      top: 673px;
      width: 100%;
      height: 815px;
      h3 {
        height: 151px;
        line-height: 151px;
        font-size: 35px;
        font-weight: 500;
      }

      .title_jieshao_text {
        height: 664px;
        background: url('/static/img/shouye5.png');

        h3 {
          height: 122px;
          line-height: 122px;
        }

        .title_jieshao_text_box {
          box-sizing: border-box;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 0 120px;
          .title_jieshao_text_box_1 {
            // margin: 0 auto
            padding: 11px;
            width: 425px;
            // height: 455px;
            background: #fff;
            transition: all 0.5s;
            &:hover{
              box-shadow: 0px 0px 20px #dcdce8;
              .title_jieshao_text_box_1_img{
                background-size: 105% 105%;
                .img{
                  img{
                  width: 105%;
                }
                }
                
              }
              
            }
            .title_jieshao_text_box_1_img {
              width: 405px;
              height: 254px;
              background: url('/static/img/shouye1.jpg') no-repeat center center;
              background-size: 100% 100%;
              text-align: center;
              position: relative;
              transition: all 0.5s;

              
              .img{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 306px;
                height: 196px;
                transition: all 0.5s;
                img{
                width: 100%;
                transition: all 0.5s;
              }
              }
            }

            .title_jieshao_text_box_1_text {
              margin-top: 36px;
              height: 186px;

              li {
                text-align: left;
                color: #747778;
                margin-bottom: 22px;
              }
            }
          }
        }
      }
    }

    // 解决方案
    .solve {
      height: 790px;
      h3 {
        height: 113px;
        line-height: 113px;
      }

      .solve_box_list {
        box-sizing: border-box;
        padding: 0 120px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .solve_box {
          &:hover {
            box-shadow: 0px 0px 20px #ccc;

            .solve_box_text {
              padding-left: 20px;
              h4{
                color: #574993;

              }
              a {
                padding-left: 20px;
              }
            }

            .solve_box_img {
              img {

                width: 110%;
              }
            }
          }
          width: 425px;
          height: 505px;
          padding-bottom: 23px;

          .solve_box_img {
            width: 425px;
            height: 282px;
            overflow: hidden;

            img {
              transition: all 0.5s;
              width: 100%;
            }
          }

          .solve_box_text {
            transition: all 0.5s;
            padding-top: 38px;
            position: relative;
            text-align: left;
            height: 207px;

            h4 {
              font-size: 20px;
              color: #494949;
            }

            p {
              color: #747778;
              margin-top: 25px;
            }

            a {
              transition: all 0.5s;
              position: absolute;
              left: 0;
              bottom: 0;
              color: #747778;
            }
          }
        }
      }
    }

    // 走进引视
    .into {
      width: 100%;
      height: 603px;
      background: url('/static/img/shouye6.jpg') no-repeat;
      background-size: 100% 100%;

      h3 {
        height: 134px;
        line-height: 134px;
      }

      .into_text {
        position: relative;
        box-sizing: border-box;
        margin: 0 auto;
        padding: 0 44px;
        padding-top: 40px;
        width: 870px;
        height: 266px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 30px;
        color: #747778;

        p {
          text-align: left;
          text-indent: 2em;
        }

        h4 {
          text-align: left;
          font-size: 16px;
          padding-left: 253px;
        }

        a {
          position: absolute;
          right: 40px;
          bottom: 16px;
          color: #635a9c;
        }
      }
    }



    // 酒店行业
    .pvd-superiority {
      height: 663px;
      overflow: hidden;
    }

    .w1290 {
      width: 1290px;
      margin: 0 auto;
      overflow: hidden;
    }

    .pvd-superiority h4 {
      text-align: center;
      font-size: 36px;
      font-weight: normal;
      margin: 90px 0 70px;
    }

    .sup-right {
      width: 1150px;
      margin: 0 0 0 115px;
      text-align: left;
    }

    .clearfloat2:after {
      display: block;
      clear: both;
      content: "";
      visibility: hidden;
      height: 0
    }

    .clearfloat2 {
      zoom: 1;
    }

    .item_block .title {
      color: #333;
      font-size: 22px;
      position: relative;
    }

    .item_block .title:after {
      content: '';
      position: absolute;
      bottom: 1px;
      left: 0;
      width: 30px;
      height: 1px;
      transition: all .3s ease-out 0s;
      background-color: #e3e3e3;
    }

    .item_block:hover {
      cursor: pointer;
    }

    .item_block:hover .title {
      color: #2b60bc;
    }

    .item_block:hover .title:after {
      width: 100%;
      background-color: #505050;
    }

    .sup-right ul li {
      list-style: none;
      float: left;
      width: 300px;
      height: 125px;
      margin-right: 60px;
      margin-bottom: 70px;
      position: relative;
    }

    .sup-right ul li p {
      font-size: 16px;
      color: #797979;
      padding: 20px 0 20px;
    }

    .item_block .title:after {
      content: '';
      position: absolute;
      bottom: 1px;
      left: 0;
      width: 30px;
      height: 1px;
      transition: all .3s ease-out 0s;
      background-color: #e3e3e3;
    }
  }

</style>

<template>
  <div class="swipeDiv">
    <div class="bannerN">
      <div class="imgFull" style="background-image: url(/static/img/banPro55.png);">
        <!-- <img src="/v2/images/p_bg_02.jpg" class="img-responsive"> -->

      </div>
      <!-- <h2 class="banH2 "><img src="static/img/ii_13.png"></h2> -->
    </div>
    <div style="height:60px"></div>
    <div style="min-height:500px">
      <el-tabs tab-position="left" style="margin-left:200px">
        <el-tab-pane label="酒店IPTV解决方案">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="50房间老酒店改造方案(实例)" name="1">
              <!-- <div class="tab-content">
                <p><span
                    style="font-size: 24px; color: rgb(255, 255, 255); background-color: rgb(84, 141, 212);">&nbsp;写在前面的话：</span>
                </p>
                <p><br></p>
                <p>&nbsp; &nbsp; &nbsp;
                  &nbsp;如果你认为这是一篇毫无营养、满嘴跑火车的广告文那就大错特了。从我个人的角度来讲首先是解决问题而不是一味的推销产品。包括每一个客户在电话或者QQ咨询相关问题的时候我一直是坚持这个原则，把问题解决在考虑是否选择TamronOS的产品这是关键。在解决问题的过程中能够融入TamronOS的任何一款产品当然是最好不过的结果。反之则需要反思产品存在那些不足，如何改进，每一次解决问题的过程中都是对TamronOS这个团队和我们产品的考验及升华。
                </p>
                <p><br></p>
                <p><span
                    style="font-size: 24px; color: rgb(255, 255, 255); background-color: rgb(84, 141, 212);">&nbsp;关于酒店IPTV方案：</span>
                </p>
                <p><br></p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; 在开始讲解关于IPTV的任何事情之前，我们先来了解酒店网络的几大基本需求。</p>
                <p style="text-align:center"><br></p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                <p style="text-align:center"><img src="/uploads/images/20170809/1502284577223980.png"
                    title="1502284577223980.png" alt="blob.png"></p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp;
                  过去酒店在部署这五大系统的时候往往部署多种线路，例如宽带网线、电话线、同轴射频线等，甚至一些较早期的酒店还在使用早期模拟监控系统部署同轴监控电缆。这种方式往往存在投资高，部署繁杂，多系统不能对接，线缆老化维护量大等缺点（大多数电缆都是铜缆长期使用后不可避免的出现接头氧化，阻抗增大等问题）。更为严重的是存在短路引起火灾等安全隐患（这个不是危言耸听，虽然网线或者同轴基本没有引起火灾的可能性，但电话线就有所不同，电话在振铃时的电压是非常高的）。实际上现在很多城市的消防规定已经不允许酒店在施工时对弱电系统使用电缆铺设方案。
                </p>
                <p><br></p>
                <p><span
                    style="font-size: 24px; color: rgb(255, 255, 255); background-color: rgb(84, 141, 212);">&nbsp;基于FTTH网络的酒店一揽子解决方案：</span>
                </p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; FTTH（Fiber To The Home
                  光纤入户）是目前最为先进的也是所有宽带运营商所采用的常规部署方案，早期因为OLT和光猫（ONU）的价格比较高，这种网络架构并没有在相对小型化的酒店环境得到发展。随着这些设备价格的下调，FTTH网络所表现出的优异性能、超低维护量被越来越多的应用于小型网络架构中。
                </p>
                <p><br></p>
                <p style="text-align:center"><img src="/uploads/images/20170809/1502286855154656.png"
                    title="1502286855154656.png" alt="1502286855154656.png" width="802" height="576"></p>
                <p><br></p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp;
                  在上图中我们可以了解到，基于FTTH网络我们完全可以通过光纤来部署监控系统、宽带网络、IPTV电视系统、WiFi覆盖、客房语音电话，并实现多套系统的综合管控。每个客房只需要部署一条皮纤即可完成所有核心业务的部署。
                </p>
                <p style="white-space: normal;">FTTH酒店方案优势：<br></p>
                <p style="white-space: normal;"><br></p>
                <p style="white-space: normal;"><br></p>
                <table class="table table-striped table-hover table-bordered" width="1623">
                  <tbody>
                    <tr class="firstRow">
                      <td valign="middle" align="center" width="120"
                        style="line-height: 1.42857; word-break: break-all;">类目</td>
                      <td valign="middle" align="center" width="538"
                        style="line-height: 1.42857; word-break: break-all;">传统电缆覆盖</td>
                      <td valign="middle" align="center" width="970"
                        style="line-height: 1.42857; word-break: break-all;">FTTH光网酒店覆盖</td>
                    </tr>
                    <tr>
                      <td valign="middle" align="center" width="75"
                        style="line-height: 1.42857; word-break: break-all;">布线</td>
                      <td valign="middle" align="center" width="538"
                        style="line-height: 1.42857; word-break: break-all;">至少需要铺设网线、同轴电缆、电话线等，铺设复杂成本高。</td>
                      <td valign="middle" align="center" width="1009"
                        style="line-height: 1.42857; word-break: break-all;">仅需铺设室内皮线光缆，线路更少价格低廉</td>
                    </tr>
                    <tr>
                      <td valign="middle" align="center" width="75"
                        style="line-height: 1.42857; word-break: break-all;">层级设备</td>
                      <td valign="middle" align="center" width="538"
                        style="line-height: 1.42857; word-break: break-all;">需要大量的交换机、分频器、电话交换机</td>
                      <td valign="middle" align="center" width="1009"
                        style="line-height: 1.42857; word-break: break-all;">只需要分光器</td>
                    </tr>
                    <tr>
                      <td valign="middle" align="center" width="75"
                        style="line-height: 1.42857; word-break: break-all;">维护量</td>
                      <td valign="middle" align="center" width="538"
                        style="line-height: 1.42857; word-break: break-all;">电缆老化、使用时间长阻抗变高，经常需要更换接头或者线缆</td>
                      <td valign="middle" align="center" width="1009"
                        style="line-height: 1.42857; word-break: break-all;">不存在老化问题和阻抗问题，基本不需要对线路进行维护</td>
                    </tr>
                    <tr>
                      <td valign="middle" align="center" width="75"
                        style="line-height: 1.42857; word-break: break-all;">管理</td>
                      <td valign="middle" align="center" width="538"
                        style="line-height: 1.42857; word-break: break-all;">网络、监控、语音、电视都需要独立管理操作繁琐，排查故障困难</td>
                      <td valign="middle" align="center" width="1009"
                        style="line-height: 1.42857; word-break: break-all;">一台OLT搞定所有传输层业务，配置简单易于管理，可以集中管控</td>
                    </tr>
                    <tr>
                      <td valign="middle" align="center" width="75"
                        style="line-height: 1.42857; word-break: break-all;">电视系统</td>
                      <td valign="middle" align="center" width="538"
                        style="line-height: 1.42857; word-break: break-all;">传统同轴电缆覆盖，只能是标清、图像质量差、经常有干扰、不能投放广告和点播内容</td>
                      <td valign="middle" align="center" width="1009"
                        style="line-height: 1.42857; word-break: break-all;">HDMI高清输出、配合酒店桌面可在电视端实现退房 清扫 预定
                        购物等多种功能，内置直播点播系统，除了高清直播外还提供实时更新的大量点播内容，具备丰富的广告投放机制，支持多种广告模式，提升酒店档次，客户体验好。</td>
                    </tr>
                    <tr>
                      <td valign="middle" colspan="1" rowspan="1" align="center" width="75"
                        style="line-height: 1.42857; word-break: break-all;">电话语音系统</td>
                      <td valign="middle" colspan="1" rowspan="1" align="center" width="538"
                        style="line-height: 1.42857; word-break: break-all;">
                        需要购买多台程控电话交换机，调试配置非常麻烦需要单独铺设线路和专人管理维修，电话线路还容易因短路引起火灾。</td>
                      <td valign="middle" colspan="1" rowspan="1" align="center" width="1009"
                        style="line-height: 1.42857; word-break: break-all;">
                        基于FTTH的数字电话系统，系统传输全部光纤，不需要额外配置电话交换机，不需铺设电话线路，传输线路全部光信号不存在火灾隐患，画质清晰甚至可以配置语音平台。</td>
                    </tr>
                    <tr>
                      <td valign="middle" colspan="1" rowspan="1" align="center" width="75"
                        style="line-height: 1.42857; word-break: break-all;">监控系统</td>
                      <td valign="middle" colspan="1" rowspan="1" align="center" width="538"
                        style="line-height: 1.42857; word-break: break-all;">传统模拟摄像机需要同轴监控电缆，即使使用网络摄像机也很难集成到酒店现有的网线网络中
                      </td>
                      <td valign="middle" colspan="1" rowspan="1" align="center" width="1009"
                        style="line-height: 1.42857; word-break: break-all;">
                        通过多口小型ONU（多口光猫）可配置多台网络摄像机，不需要额外铺设线路、可无缝对接到IPTV系统中，顾客可通过电视即可查看酒店指定的监控画面</td>
                    </tr>
                    <tr>
                      <td valign="middle" colspan="1" rowspan="1" align="center" width="75"
                        style="line-height: 1.42857; word-break: break-all;">wifi覆盖</td>
                      <td valign="middle" colspan="1" rowspan="1" align="center" width="538"
                        style="line-height: 1.42857; word-break: break-all;">
                        <p>单独配置<span style="line-height: 18.5714px;">无线AP，经常出现各种问题</span></p>
                      </td>
                      <td valign="middle" colspan="1" rowspan="1" align="center" width="1009"
                        style="line-height: 1.42857; word-break: break-all;">
                        通过光猫或者面板AP即可同一管理，可选用TamronOS路由系统自带无线AC控制器，WiFi更快更稳定</td>
                    </tr>
                    <tr>
                      <td valign="middle" colspan="1" rowspan="1" align="center" width="75"
                        style="line-height: 1.42857; word-break: break-all;">宽带网络</td>
                      <td valign="middle" colspan="1" rowspan="1" align="center" width="538"
                        style="line-height: 1.42857; word-break: break-all;">传统网线结构，交换机堆交换机，网速慢，网头容易氧化<br></td>
                      <td valign="middle" colspan="1" rowspan="1" align="center" width="1009"
                        style="line-height: 1.42857; word-break: break-all;">
                        全光网络不存在网线的信号衰减问题，配置vlan后更可避免DHCP风暴，以及局域网中客户信息安全，基本不需要后期维护</td>
                    </tr>
                  </tbody>
                </table>
                <p style="white-space: normal;"><span style="font-weight: 700;"><span
                      style="font-size: 24px; color: rgb(255, 255, 255); background-color: rgb(84, 141, 212);">&nbsp;OLT网络部署架构：</span></span>
                </p>
                <p style="white-space: normal;"><br></p>
                <p style="white-space: normal; text-align: center;"><img
                    src="http://www.tamronos.com/uploads/images/20170810/1502335355798454.png"
                    title="1502335355798454.png" alt="blob.png"></p>
                <p style="white-space: normal;"><br></p>
                <p style="white-space: normal; text-align: center;"><img
                    src="http://www.tamronos.com/uploads/images/20170810/1502335951992441.png"
                    title="1502335951992441.png" alt="1502335951992441.png" width="873" height="455"></p>
                <p style="white-space: normal; text-align: center;"><img
                    src="http://www.tamronos.com/uploads/images/20170810/1502336344200054.png"
                    title="1502336344200054.png" alt="blob.png"></p>
                <p style="white-space: normal;"><br></p>
                <p style="white-space: normal;"><br></p>
                <p style="white-space: normal;">&nbsp; &nbsp; &nbsp; &nbsp;
                  通过分光器对不同楼层的房间进行皮纤光缆覆盖，每个房间内仅需一条进线接入ONU（光猫）。即可完成房间内的，语音电话宽带网络、IPTV等设置的全面覆盖。</p>
                <p><br></p>
              </div> -->
            </el-tab-pane>
            <el-tab-pane label="200房间老酒店改造方案(实例)" name="2"></el-tab-pane>
          </el-tabs>
        </el-tab-pane>

        <el-tab-pane label="成功案例">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="顺逸东方酒店机房方案" name="5"></el-tab-pane>
            <el-tab-pane label="7天连锁酒店机房方案" name="6"></el-tab-pane>

          </el-tabs>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        activeName:''
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

  .el-tabs__item.is-active {
    color: #ffffff;

    background: #337ab7;
  }

</style>

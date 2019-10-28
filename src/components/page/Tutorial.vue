<template>
  <div class="swipeDiv">
    <div class="bannerN">
      <div
        class="imgFull"
        style="background-image: url(/static/img/banPro.png);"
      >
        <!-- <img src="/v2/images/p_bg_02.jpg" class="img-responsive"> -->

      </div>
      <!-- <h2 class="banH2 "><img src="static/img/ii_12.png"></h2> -->
    </div>
    <div>
      <!-- <el-tabs
        tab-position="left"
        style="margin-left:200px"
      >
        <el-tab-pane
          label="酒店IPTV快速配置"
          style="margin-left:40px"
        >
          <p style="text-align:left;margin-top:20px">输入酒店名称，酒店地址，和选择所属运营商的当地区域的频道列表即可快速创建酒店(简单的配置已经全部初始化，默认会有3个房间号选择)，
            后台创建好酒店后，接下来初始化桌面APP</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_1.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">打开桌面APP后，第一个页面会提示输入账号名称，这个账号名称在个人后台的个人资料中可进行查看</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_2.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">打开桌面APP,输入别名</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_3.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">选择酒店</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_4.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">选择房间绑定</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_5.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">绑定房间号后进入到主界面，至此，配置完成</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_6.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">如果要自定义一些酒店配置，接下来的教程会慢慢讲到</p>
        </el-tab-pane>

        <el-tab-pane
          label="房间配置"
          style="margin-left:40px"
          :lazy="true"
        >
          <p style="text-align:left;margin-top:20px">单个房间添加</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_7.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">批量房间添加,这里的规则如果不懂的话，可尝试输入，按确定之后还会弹出适合规则的房间，可自行进行删除</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_8.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_9.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">房间配置这里还可进行单个房间的wifi独立配置</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_13.png"
              ></span></p>
        </el-tab-pane>
        <el-tab-pane
          label="欢迎页配置"
          style="margin-left:40px"
          :lazy="true"
        >
          <p style="text-align:left;margin-top:20px">桌面APP的欢迎页可自定义文字，自定义背景可选择多张图片或者视频，对应关系如下</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_10.png"
              ></span></p>
        </el-tab-pane>
        <el-tab-pane
          label="公告页配置"
          style="margin-left:40px"
          :lazy="true"
        >
          <p style="text-align:left;margin-top:20px">后台创建酒店的时候，公告页是默认关闭的，桌面APP的公告页可自定义文字，自定义是否保留这个页面，对应关系如下</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_11.png"
              ></span></p>
        </el-tab-pane>
        <el-tab-pane
          label="首页配置"
          style="margin-left:40px"
          :lazy="true"
        >
          <p style="text-align:left;margin-top:20px">首页配置关系如下,首页提供了2种风格，下面是风格一的界面</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_12.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">这是风格二的界面</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_25.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px;color:red">这里有几点要注意的</p>
          <p style="text-align:left;margin-top:20px;color:red">
            1.wifi名称不要超过16个字符，以@开头表示wifi名称前缀，后面会加上房间名称，比如说wifi名称输入@hotel-,这里带有@这个字符，那每个房间的wifi名称就会变成
            hotel-302,hotel-301这样
          </p>
          <p style="text-align:left;margin-top:20px;color:red">
            2.wifi密码这里，只输入@表示随机密码，每个房间都不一样，每次重启都会变化，为空表示不设密码，密码限制长度为8-16位
          </p>
          <p style="text-align:left;margin-top:20px;color:red">3.首页wifi这里是统一配置，可在房间管理页面进行单独wifi配置
          </p>
          <p style="text-align:left;margin-top:20px;color:red">4.小窗口配置那个地方可选择播放视频，视频的来源是在欢迎页那里配置上。
          </p>
        </el-tab-pane>
        <el-tab-pane
          label="模块配置"
          style="margin-left:40px"
          :lazy="true"
        >
          <p style="text-align:left;margin-top:20px">
            后台创建酒店的时候，已经同时配置了8大模块，可自行选择是否关闭,或者自定义配置添加，
            数字电视的模块请查看列表和播放器配置，服务模块请查看服务配置，购物模块请查看购物配置，关于模块请查看关于我们配置，风景模块请查看风景配置，这里阐述怎么添加模块</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_14.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_23.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">
            添加模块我们是以APK的形式进行添加的，就是说一个模块对应多个APK的形式。所以这里就要先说下以后添加APK,比如说我想添加一个可以打开爱奇艺APK的模块，接下来
            我们可以这样操作，切换成APK列表，选择APP,点击之后会弹出对话框选择软件
          </p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_15.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_16.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">
            选择好APK之后，会有对话框提示输入名称，这里一定要输入APK安装之后的真实名称(这个真实名称如何知道呢，可以通过手机安装之后，自己就可以看得出名称了)</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_17.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">
            添加成功了</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_18.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">
            接下来的第二步就是把模块和这个APK对应上，我们先添加一个模块</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_19.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">
            添加好之后选择APP</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_20.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">
            如果有多个选项可多个都打开</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_21.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">
            至此模块和APK已经对应完毕，可重启桌面APK进行查看</p>
          <p style="text-align:left;margin-top:20px;color:red">这里有几点要注意的</p>
          <p style="text-align:left;margin-top:20px;color:red">
            1.数字电视，网络点播，音乐殿堂，投屏互动已经系统内置了APK,如果再进行多APK对应的话，内置的还是会保留，这里以网络点播为例，我再让这个模块对应一个APK,效果以下，
          </p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_24.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px;color:red">
            可发现，这里多了一个，因为这个模块是系统内置了一个APK和它对应，那如何去掉内置呢，可以在模块编辑那里把模块类型弄成自定义，这样就成功去掉了内置APK</p>

          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_22.png"
              ></span></p>
        </el-tab-pane>
        <el-tab-pane
          label="直播列表和播放器配置"
          style="margin-left:40px"
          :lazy="true"
        >
          <p style="text-align:left;margin-top:20px;">
            之前我们创建酒店的时候选择了运营商的直播列表，在这里我们可以看出有哪些频道，如果这些频道缺少你需要的，你可以另外添加，如下，选择添加自定义频道</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_41.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_42.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px;">
            如果想批量添加频道，那这里提供了批量添加频道的格式，请一定要按照格式来添加，#频道名称##，频道名称前一个#，频道名称后两个##，然后换行输入频道地址，如下</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_43.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_44.png"
              ></span></p>

        </el-tab-pane>
        <el-tab-pane
          label="服务配置"
          style="margin-left:40px"
          :lazy="true"
        >
          <p style="text-align:left;margin-top:20px">
            添加服务这里有几个点要注意下，app提示内容输入之后，会在桌面APP点确定某个服务之后会有界面显示出来那里的文字，前台提示内容输入之后，当客人点击某个服务之后，酒店的前台会有应用收到这里的文字，
            用来提示酒店的前台工作人员</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_32.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_33.png"
              ></span></p>
        </el-tab-pane>
        <el-tab-pane
          label="购物配置"
          style="margin-left:40px"
          :lazy="true"
        >
          <p style="text-align:left;margin-top:20px">
            添加商品之前先添加分类</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_34.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">
            添加分类之后，可以选择内置商品列表里面的商品添加，这些商品是系统内置里面的，可以直接添加到分类去</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_35.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_36.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">
            好了，添加好了</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_37.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">
            在桌面APP如何购买下单呢，首先，点击每个商品就会添加到购物车了，然后再点击购物结算，到结算界面核对下，最后按配送当面付，至此下单成功</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_38.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_39.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_40.png"
              ></span></p>
        </el-tab-pane>
        <el-tab-pane
          label="风景配置"
          style="margin-left:40px"
          :lazy="true"
        >
          <p style="text-align:left;margin-top:20px">
            输入风景名称和风景介绍</p>

          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_27.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">
            图片的添加要等添加风景之后，再点击详情按钮就会出来对话框进行添加</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_29.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">
            风景配置对应关系如下</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_28.png"
              ></span></p>
        </el-tab-pane>
        <el-tab-pane
          label="关于我们配置"
          style="margin-left:40px"
          :lazy="true"
        >
          <p style="text-align:left;margin-top:20px">关于我们配置关系如下</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_26.png"
              ></span></p>
        </el-tab-pane>
        <el-tab-pane
          label="多语言配置"
          style="margin-left:40px"
          :lazy="true"
        >
          <p style="text-align:left;margin-top:20px">后台创建酒店的时候，默认只保留了中文，后期想要多语言的话，可在这里进行添加</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_30.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">比如说需要英文，那就要对应上面的中文自行输入英文就可以适配了，如果不输入对应的英文的话，桌面APK将显示原来的中文</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_31.png"
              ></span></p>
        </el-tab-pane>

        <el-tab-pane
          label="采集配置"
          style="margin-left:40px"
          :lazy="true"
        >
          <p style="text-align:left;margin-top:20px">
            采集的意思是某个频道它本来是占网络带宽的，通过采集之后，这个频道将占用本地带宽，把带宽资源利用率提高，采集这个功能一定要配合我们的路由才能使用
            ，登录路由后台，下图，我们输入itv账号在wan1口上，然后去掉默认线路
          </p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_45.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">输入酒店ID,这个ID在云平台里面可以看到，确定之后路由和酒店将绑定在一起了
          </p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_46.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_48.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">刚才我们在wan1口上输入了itv账号，这里还要指定下itv口wan1
          </p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_47.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">在采集配置那里，当我们绑定了酒店之后，路由的重要采集信息会显示在这里
          </p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_49.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px">
            然后我们就可以采集频道了，这里有几个选项，选择网络源或者组播源，意思是，当有itv口的时候，组播源才会被采集得到，固定类型和上面网络源组播源关联，当固定
            了类型，路由只会接收到网络源或者组播源，当不固定的时候，路由会智能根据频道的信息选择网络源或者组播源进行采集
          </p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_50.png"
              ></span></p>
          <p style="text-align:left;margin-top:20px;color:red">这里有几点要注意的</p>
          <p style="text-align:left;margin-top:20px;color:red">
            1.当路由绑定了酒店之后，每天路由会变换采集频道，路由会选择哪个频道进行采集是由当天播放时长来决定的，某个台播放时长特别高，那这个台被采集的几率就会很大。

          </p>
          <p style="text-align:left;margin-top:20px;color:red">
            2.当我们需要更换路由的时候，比如说有个路由已经绑定了这个酒店，但是这个路由可能硬件损坏了，这时候就要解绑了，点击云平台采集配置里面的路由器管理把相关的路由删除就可以了。

          </p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_51.png"
              ></span></p>
        </el-tab-pane>
        <el-tab-pane
          label="酒店管理员应用"
          style="margin-left:40px"
          :lazy="true"
        >
        </el-tab-pane>
        <el-tab-pane
          label="酒店前台应用"
          style="margin-left:40px"
          :lazy="true"
        >
          <p style="text-align:left;margin-top:20px">
            当客人确定了服务或者购物的时候，前台怎么收到信息呢，下面来说下。在云平台有个酒店前台列表，这里当每个酒店创建的时候就已经自动创建了账号和密码，这里的账号和密码是可以更改的，
            拿到了账号和密码，酒店前台相关工作人员就可以在云平台用这个账号和密码登录进去了
          </p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src=""
              ></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt=""
                src="static/img/jiao_53.png"
              ></span></p>
        </el-tab-pane>
      </el-tabs> -->
      <el-container style=" border: 1px solid #eee">
        <!-- 导航栏 -->
        <el-aside width="300px">
          <el-row>
            <el-col :span="8">
              <!-- 一级导航栏 -->
              <div class="navOne">
                <el-menu
                  default-active="1"
                  class="el-menu-vertical-demo"
                >
                  <el-menu-item
                    index="1"
                    id="el-menu-item"
                  >
                    <span slot="title">酒店IPTV</span>
                  </el-menu-item>
                </el-menu>
              </div>
            </el-col>
            <el-col :span="16">
              <!-- 二级导航栏 -->
              <div>
                <el-menu
                  class="navTwo"
                  :default-openeds="['1','2','3']"
                  :unique-opened='false'
                  :label="false"
                  @select="handleMaoDian"
                >
                  <el-menu-item
                    :index="item.id+''"
                    v-for="item in titlelist"
                    :key="item.id"
                    id="el-menu-item"
                  >
                    <span slot="title">
                      {{item.title}}
                    </span>
                  </el-menu-item>
                </el-menu>
              </div>
            </el-col>
          </el-row>

        </el-aside>
        <!-- 内容区域 -->
        <el-main id="main">
          <!-- <div
            v-for="item in contentList"
            :key="item.id"
            v-html="item.content"
            v-show="isShow"
            :id="'page'+item.id"
          >
          </div> -->
          <div class="hint">
            正在优化，敬请期待
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import Mock from "mockjs";
export default {
  name: "index",
  data() {
    return {
      isShow: true,
      titlelist: [
        { title: "快速配置", id: 14 },
        { title: "房间配置", id: 1 },
        { title: "欢迎页配置", id: 2 },
        { title: "公告页配置", id: 3 },
        { title: "首页配置", id: 4 },
        { title: "模块配置", id: 5 },
        { title: "直播列表和播放器配置", id: 6 },
        { title: "服务配置", id: 7 },
        { title: "购物配置", id: 8 },
        { title: "风景配置", id: 9 },
        { title: "关于我们配置", id: 10 },
        { title: "多语言配置", id: 11 },
        { title: "采集配置", id: 12 },
        { title: "酒店管理员应用", id: 13 }
      ],
      contentList: [
        // 快速配置
        {
          show: true,
          id: 14,
          content: `<p style="text-align:left;margin-top:20px">输入酒店名称，酒店地址，和选择所属运营商的当地区域的频道列表即可快速创建酒店(简单的配置已经全部初始化，默认会有3个房间号选择)，
              后台创建好酒店后，接下来初始化桌面APP</p>
            <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                  alt=""
                  src="static/img/jiao_1.png"
                ></span></p>
            <p style="text-align:left;margin-top:20px">打开桌面APP后，第一个页面会提示输入账号名称，这个账号名称在个人后台的个人资料中可进行查看</p>
            <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                  alt=""
                  src="static/img/jiao_2.png"
                ></span></p>
            <p style="text-align:left;margin-top:20px">打开桌面APP,输入别名</p>
            <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                  alt=""
                  src="static/img/jiao_3.png"
                ></span></p>
            <p style="text-align:left;margin-top:20px">选择酒店</p>
            <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                  alt=""
                  src="static/img/jiao_4.png"
                ></span></p>
            <p style="text-align:left;margin-top:20px">选择房间绑定</p>
            <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                  alt=""
                  src="static/img/jiao_5.png"
                ></span></p>
            <p style="text-align:left;margin-top:20px">绑定房间号后进入到主界面，至此，配置完成</p>
            <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                  alt=""
                  src="static/img/jiao_6.png"
                ></span></p>
            <p style="text-align:left;margin-top:20px">如果要自定义一些酒店配置，接下来的教程会慢慢讲到</p>`
        },
        // 房间配置
        {
          show: false,
          id: 1,
          content: `<p style="text-align:left;margin-top:20px">单个房间添加</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_7.png"></span></p>
          <p style="text-align:left;margin-top:20px">批量房间添加,这里的规则如果不懂的话，可尝试输入，按确定之后还会弹出适合规则的房间，可自行进行删除</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_8.png"></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_9.png"></span></p>
          <p style="text-align:left;margin-top:20px">房间配置这里还可进行单个房间的wifi独立配置</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_13.png"></span></p>`
        },
        // 欢迎页配置
        {
          show: false,
          id: 2,
          content: ` <p style="text-align:left;margin-top:20px">桌面APP的欢迎页可自定义文字，自定义背景可选择多张图片或者视频，对应关系如下</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_10.png"></span></p>`
        },
        // 公告页配置
        {
          show: false,
          id: 3,
          content: `<p style="text-align:left;margin-top:20px">后台创建酒店的时候，公告页是默认关闭的，桌面APP的公告页可自定义文字，自定义是否保留这个页面，对应关系如下</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_11.png"></span></p> <div style="height: 300px;"></div>`
        },
        // 首页配置
        {
          show: false,
          id: 4,
          content: ` <p style="text-align:left;margin-top:20px">首页配置关系如下,首页提供了2种风格，下面是风格一的界面</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_12.png"></span></p>
          <p style="text-align:left;margin-top:20px">这是风格二的界面</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_25.png"></span></p>
          <p style="text-align:left;margin-top:20px;color:red">这里有几点要注意的</p>
          <p style="text-align:left;margin-top:20px;color:red">
            1.wifi名称不要超过16个字符，以@开头表示wifi名称前缀，后面会加上房间名称，比如说wifi名称输入@hotel-,这里带有@这个字符，那每个房间的wifi名称就会变成
            hotel-302,hotel-301这样
          </p>
          <p style="text-align:left;margin-top:20px;color:red">
            2.wifi密码这里，只输入@表示随机密码，每个房间都不一样，每次重启都会变化，为空表示不设密码，密码限制长度为8-16位
          </p>
          <p style="text-align:left;margin-top:20px;color:red">3.首页wifi这里是统一配置，可在房间管理页面进行单独wifi配置
          </p>
          <p style="text-align:left;margin-top:20px;color:red">4.小窗口配置那个地方可选择播放视频，视频的来源是在欢迎页那里配置上。
          </p>`
        },
        // 模块配置
        {
          show: false,
          id: 5,
          content: `<p style="text-align:left;margin-top:20px">
            后台创建酒店的时候，已经同时配置了8大模块，可自行选择是否关闭,或者自定义配置添加，
            数字电视的模块请查看列表和播放器配置，服务模块请查看服务配置，购物模块请查看购物配置，关于模块请查看关于我们配置，风景模块请查看风景配置，这里阐述怎么添加模块</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_14.png"></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_23.png"></span></p>
          <p style="text-align:left;margin-top:20px">
            添加模块我们是以APK的形式进行添加的，就是说一个模块对应多个APK的形式。所以这里就要先说下以后添加APK,比如说我想添加一个可以打开爱奇艺APK的模块，接下来
            我们可以这样操作，切换成APK列表，选择APP,点击之后会弹出对话框选择软件
          </p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_15.png"></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_16.png"></span></p>
          <p style="text-align:left;margin-top:20px">
            选择好APK之后，会有对话框提示输入名称，这里一定要输入APK安装之后的真实名称(这个真实名称如何知道呢，可以通过手机安装之后，自己就可以看得出名称了)</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_17.png"></span></p>
          <p style="text-align:left;margin-top:20px">
            添加成功了</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_18.png"></span></p>
          <p style="text-align:left;margin-top:20px">
            接下来的第二步就是把模块和这个APK对应上，我们先添加一个模块</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_19.png"></span></p>
          <p style="text-align:left;margin-top:20px">
            添加好之后选择APP</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_20.png"></span></p>
          <p style="text-align:left;margin-top:20px">
            如果有多个选项可多个都打开</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_21.png"></span></p>
          <p style="text-align:left;margin-top:20px">
            至此模块和APK已经对应完毕，可重启桌面APK进行查看</p>
          <p style="text-align:left;margin-top:20px;color:red">这里有几点要注意的</p>
          <p style="text-align:left;margin-top:20px;color:red">
            1.数字电视，网络点播，音乐殿堂，投屏互动已经系统内置了APK,如果再进行多APK对应的话，内置的还是会保留，这里以网络点播为例，我再让这个模块对应一个APK,效果以下，
          </p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_24.png"></span></p>
          <p style="text-align:left;margin-top:20px;color:red">
            可发现，这里多了一个，因为这个模块是系统内置了一个APK和它对应，那如何去掉内置呢，可以在模块编辑那里把模块类型弄成自定义，这样就成功去掉了内置APK</p>

          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_22.png"></span></p>`
        },
        // 直播列表和播放器配置
        {
          show: false,
          id: 6,
          content: ` <p style="text-align:left;margin-top:20px;">
            之前我们创建酒店的时候选择了运营商的直播列表，在这里我们可以看出有哪些频道，如果这些频道缺少你需要的，你可以另外添加，如下，选择添加自定义频道</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_41.png"></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_42.png"></span></p>
          <p style="text-align:left;margin-top:20px;">
            如果想批量添加频道，那这里提供了批量添加频道的格式，请一定要按照格式来添加，#频道名称##，频道名称前一个#，频道名称后两个##，然后换行输入频道地址，如下</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_43.png"></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_44.png"></span></p>`
        },
        // 服务配置
        {
          show: false,
          id: 7,
          content: `<p style="text-align:left;margin-top:20px">
            添加服务这里有几个点要注意下，app提示内容输入之后，会在桌面APP点确定某个服务之后会有界面显示出来那里的文字，前台提示内容输入之后，当客人点击某个服务之后，酒店的前台会有应用收到这里的文字，
            用来提示酒店的前台工作人员</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_32.png"></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_33.png"></span></p>`
        },
        // 购物配置
        {
          show: false,
          id: 8,
          content: ` <p style="text-align:left;margin-top:20px">
            添加商品之前先添加分类</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_34.png"></span></p>
          <p style="text-align:left;margin-top:20px">
            添加分类之后，可以选择内置商品列表里面的商品添加，这些商品是系统内置里面的，可以直接添加到分类去</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_35.png"></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_36.png"></span></p>
          <p style="text-align:left;margin-top:20px">
            好了，添加好了</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_37.png"></span></p>
          <p style="text-align:left;margin-top:20px">
            在桌面APP如何购买下单呢，首先，点击每个商品就会添加到购物车了，然后再点击购物结算，到结算界面核对下，最后按配送当面付，至此下单成功</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_38.png"></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_39.png"></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_40.png"></span></p>`
        },
        // 风景配置
        {
          show: false,
          id: 9,
          content: `<p style="text-align:left;margin-top:20px">
            输入风景名称和风景介绍</p>

          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_27.png"></span></p>
          <p style="text-align:left;margin-top:20px">
            图片的添加要等添加风景之后，再点击详情按钮就会出来对话框进行添加</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_29.png"></span></p>
          <p style="text-align:left;margin-top:20px">
            风景配置对应关系如下</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_28.png"></span></p>`
        },
        // 关于我们配置
        {
          show: false,
          id: 10,
          content: ` <p style="text-align:left;margin-top:20px">关于我们配置关系如下</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_26.png"></span></p><div style="height: 300px;"></div>`
        },
        // 多语言配置
        {
          show: false,
          id: 11,
          content: `<p style="text-align:left;margin-top:20px">后台创建酒店的时候，默认只保留了中文，后期想要多语言的话，可在这里进行添加</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_30.png"></span></p>
          <p style="text-align:left;margin-top:20px">比如说需要英文，那就要对应上面的中文自行输入英文就可以适配了，如果不输入对应的英文的话，桌面APK将显示原来的中文</p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_31.png"></span></p>`
        },
        // 采集配置
        {
          show: false,
          id: 12,
          content: `<p style="text-align:left;margin-top:20px">
            采集的意思是某个频道它本来是占网络带宽的，通过采集之后，这个频道将占用本地带宽，把带宽资源利用率提高，采集这个功能一定要配合我们的路由才能使用
            ，登录路由后台，下图，我们输入itv账号在wan1口上，然后去掉默认线路
          </p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_45.png"></span></p>
          <p style="text-align:left;margin-top:20px">输入酒店ID,这个ID在云平台里面可以看到，确定之后路由和酒店将绑定在一起了
          </p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_46.png"></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_48.png"></span></p>
          <p style="text-align:left;margin-top:20px">刚才我们在wan1口上输入了itv账号，这里还要指定下itv口wan1
          </p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_47.png"></span></p>
          <p style="text-align:left;margin-top:20px">在采集配置那里，当我们绑定了酒店之后，路由的重要采集信息会显示在这里
          </p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_49.png"></span></p>
          <p style="text-align:left;margin-top:20px">
            然后我们就可以采集频道了，这里有几个选项，选择网络源或者组播源，意思是，当有itv口的时候，组播源才会被采集得到，固定类型和上面网络源组播源关联，当固定
            了类型，路由只会接收到网络源或者组播源，当不固定的时候，路由会智能根据频道的信息选择网络源或者组播源进行采集
          </p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_50.png"></span></p>
          <p style="text-align:left;margin-top:20px;color:red">这里有几点要注意的</p>
          <p style="text-align:left;margin-top:20px;color:red">
            1.当路由绑定了酒店之后，每天路由会变换采集频道，路由会选择哪个频道进行采集是由当天播放时长来决定的，某个台播放时长特别高，那这个台被采集的几率就会很大。

          </p>
          <p style="text-align:left;margin-top:20px;color:red">
            2.当我们需要更换路由的时候，比如说有个路由已经绑定了这个酒店，但是这个路由可能硬件损坏了，这时候就要解绑了，点击云平台采集配置里面的路由器管理把相关的路由删除就可以了。

          </p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
                alt="" src="static/img/jiao_51.png"></span></p>`
        },
        // 酒店管理员配置
        {
          show: false,
          id: 13,
          content: `<p style="text-align:left;margin-top:20px">
          当客人确定了服务或者购物的时候，前台怎么收到信息呢，下面来说下。在云平台有个酒店前台列表，这里当每个酒店创建的时候就已经自动创建了账号和密码，这里的账号和密码是可以更改的，
          拿到了账号和密码，酒店前台相关工作人员就可以在云平台用这个账号和密码登录进去了
          </p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
              alt=""
              src=""
            ></span></p>
          <p style="text-align:left;margin-top:20px"><span style="margin: 0px; padding: 0px; list-style: none;"><img
              alt=""
              src="static/img/jiao_53.png"
            ></span></p><div style="height: 500px;"></div>`
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 锚点定位
    handleMaoDian(key, keyPath) {
      const maodianId = document.querySelector("#page" + keyPath);
      if (!!maodianId) {
        maodianId.scrollIntoView(true);
      }
    }
    // tab栏切换显示
    // handleTwoclick(key, keyPath) {
    //   this.contentList.forEach(e => {
    //     if (e.id == key) {
    //       e.show = true;
    //     } else {
    //       e.show = false;
    //     }
    //   });
    // }
  },
  created() {
    console.log("dashbord");
  }
};
</script>

<style scoped>
.hint{
  font-size: 100px;
  color: #337ab7;
}
#el-menu-item {
  height: 56px;
  line-height: 56px;
  position: relative;
  -webkit-box-sizing: border-box;
  white-space: nowrap;
  list-style: none;
  font-size: 14px;
  color: #303133;
  padding: 0 20px;
  cursor: pointer;
  -webkit-transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
li {
  text-align: left;
}
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

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}

.banH2 {
  position: relative;
  color: #ffffff;
  font-size: 36px;
}

.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.panel-info {
  border-color: #bce8f1;
}

.panel-info > .panel-heading {
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

.panel-success > .panel-heading {
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

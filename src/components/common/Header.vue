<template>
  <div class="herder ">
    <div class="logo fix">
      <div class="left fix">
        <div class="left_img">
          <img src="/static/img/logo.png" alt="">
        </div>
      </div>
      <div class="right fr fix">
        <div class="switch fl">
          <i>
            <img src="/static/img/diqiu.png" alt="">
          </i>
          <span>English</span>
        </div>
        <div class="search fl">
          <div class="search_text fix">
            <input type="text" placeholder="酒店电视系统" class="search_text_input fl">
            <el-button type="info" icon="el-icon-search" class="fr" style="border-radius: 0px; height: 100%; background: #000; border: 1px solid #000;">
            </el-button>
          </div>
        </div>
        <div class="phone fl">
          <span>咨询热线</span>
          <p>400-678-1021</p>

        </div>
      </div>
    </div>
    <div class="title_bar">
      <div class="title_name" @mouseover="handleChangShow(index)" @mouseleave="handleHidden(index)"
        v-for="(item,index) in navItems" :key="index">
        <router-link :to="item.link">{{item.text}}</router-link>
        
        <div class="title_name_two" v-for="(item2,index2) in item.children" :key="index2" v-show="index == isShow">
          <router-link :to="item2.link">{{item2.text}}</router-link>
        </div>
      </div>
      <div class="title_name" @mouseover="handleChangShow()" @mouseleave="handleHidden()">
        <a href="http://cloud.nhw6.com:8086/discuz/" target="_blank">官网论坛</a>
      </div>
      <div class="title_name" @mouseover="handleChangShow()" @mouseleave="handleHidden()">
        <a href="http://cloud.iptv9.cn" target="_blank">云平台</a>
      </div>


    </div>
    
  </div>
</template>

<script>
  import '../../../static/css/common.css';
  export default {
    data() {
      return {
        input: null,
        isShow: 0,
        navItems: [{
            text: '首页',
            link: '/index'
          }, {
            text: '产品中心',
            link: '/products',
            children: [{
                text: '解决方案',
                link: '/solution'
              },
              {
                text: '教程中心',
                link: '/tutorial'
              }
            ]
          }, {
            text: '软件下载',
            link: '/download'
          }, {
            text: '公司动态',
            link: '/company',
            children: [{
              text: '关于我们',
              link: '/about'
            }, ]
          },

        ]
      }
    },
    methods: {
      handleChangShow(index) {
        this.isShow = index
      },
      handleHidden() {
        this.isShow = 0
      }
    },
  }

</script>

<style lang="less" scoped>
  .title_bar {
    background: #00a9f6;
  }

  .title_name {
    &:first-child {
      border-left: 1px rgb(146, 203, 230) solid;
    }

    a {
      color: #fff;
      display: inline;
      text-decoration:none;     

      &:hover {
        font-weight: 600;
      }
    }

    position: relative;
    border-right: 1px rgb(146, 203, 230) solid;
    box-sizing: border-box;
    width: 170PX;
    height: 70px;
    padding: 20px 30px;
    display: inline-block;

    .title_name_two {
      width: 200px;
      position: absolute;
      top: 70px;
      left: 0px;
      z-index: 9;
      border-top: 2px solid rgb(146, 203, 230);
      background: #fff;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

      a {
        display: block;
        color: #5d5d5d;
        padding: 10px 0;
        font-weight: 400;

        &:hover {
          padding-left: 10px;
          color: #00a9f6;
          background-image: none;
          transition: all 0.3s;
        }
      }
    }
  }

  .logo {
    padding: 10px 0;
  }

  .left {
    float: left;
    padding-left: 30px;

    .left_img {
      float: left;
      width: 250px;

      // border-right: 1px dotted #ccc;
      img {
        width: 100%;
      }
    }

    .left_text {
      float: left;
      padding-left: 20px;
      color: rgb(68, 50, 138);

      h2 {
        font-size: 25px;
      }
    }
  }

  .right {
    margin-top: 20px;

    .search {
      margin-right: 50px;

      // width: 287px;
      .search_text {
        overflow: hidden;
        height: 45px;
        line-height: 45px;
        border: 1px solid #5d5d5d;

        .search_text_input {
          width: 237px;
          font-size: 10px;
          // padding-top: 10px;
          padding-left: 10px;
          outline: none;
          border: none;
        }
      }

      
    }
    .phone{
      margin-right: 60px;
      span{
        text-align: left;
        padding-left: 7px;
        color: #fff;
        font-size: 12px;
        display: block;
        width: 70px;
        height: 22px;
        background:url('/static/img/kuang.png') no-repeat;
        background-size: 100% 100%;
      }
      p {
        margin: 0;
        font-size: 20px;
        font-weight: 600;
        color: #333;
      }
    }

    .switch {
      color: #5d5d5d;
      margin-top: 10px;
      margin-right: 32px;
      span{
        color: #ccc
      }
      i {
        display: inline-block;
        width: 19px;
        height: 19px;

        img {
          width: 100%;
        }
      }
    }
  }

</style>

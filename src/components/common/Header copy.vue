<template>
  <div class="header">
    <div class="header_placeholder"></div>
    <div id="nav" class="col">
      <router-link class="logo" to='/' tag='div'>
        <div class="imglogo">
          <img src="/static/img/logo.png" />
        </div>
      </router-link>
      <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
      <div class="nav-item">
        <ul>
          <li @mouseover='addClass($event)' @mouseleave='rmClass($event)' v-for="(item,index) in navItems" :key="index"
            @click="toLink(item.link,index,$event)">
            {{item.text}}
          </li>
        </ul>
      </div>
    </div>
    <div class="clearFloat"></div>
  </div>
</template>

<script>
  // import "../../utils/rem"
  const navItems = [{
      text: '首页',
      link: '/index'
    }, {
      text: '产品中心',
      link: '/products'
    }, {
      text: '解决方案',
      link: '/solution'
    }, {
      text: '教程中心',
      link: '/tutorial'
    }, {
      text: '软件下载',
      link: '/download'
    }, {
      text: '公司动态',
      link: '/company'
    }, {
      text: '关于我们',
      link: '/about'
    },
    {
      text: '官网论坛',
      link: 'http://cloud.nhw6.com:8086/discuz/'
    },
    {
      text: '云平台',
      link: 'http://cloud.iptv9.cn'
    },
  ];

  export default {
    // name: 'header',
    data() {
      return {
        navItems: navItems,
        navIn: 'nav-out',
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    watch: {
      '$route': 'getPath'
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      getPath() {
        if (this.$route.path === '/products') {
          var lis = document.getElementsByTagName('li')
          lis[0].className = '';
          lis[1].classList.add('nav-in');
        }
      },
      toLink(link, index, $event) {
        if (index == 7) {
          window.open("http://cloud.nhw6.com:8086/discuz/")
          return
        }
        if (index == 8) {
          window.open("http://cloud.iptv9.cn")
          return
        }
        [].forEach.call(document.getElementsByTagName('li'), function (item) {
          item.className = ''
        });
        $event.target.className = 'selected';
        this.$router.push(link || '/');
      },
      addClass($event) {
        if (!$event.target.className.match(new RegExp('(\\s|^)' + 'selected' + '(\\s|$)'))) {
          $event.target.className = ' ';
        }
        if (!$event.target.className.match(new RegExp('(\\s|^)' + 'nav-in' + '(\\s|$)'))) {
          $event.target.className += ' ' + 'nav-in';
        }
      },
      rmClass($event) {
        if (!$event.target.className.match(new RegExp('(\\s|^)' + 'selected' + '(\\s|$)'))) {
          $event.target.className = ' ';
        }
        if (!$event.target.className.match(new RegExp('(\\s|^)' + 'nav-out' + '(\\s|$)'))) {
          $event.target.className += ' ' + 'nav-out';
        }
      }

    }
  }

</script>

<style lang='scss' scoped>
  .header {
    width: 100%;
    height: 100px;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    z-index: 9;
  }

  #nav {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .logo {
    width: 54px;
    height: 54px;
    position: absolute;
    left: 50px;
    top: 8px;
    cursor: pointer;
  }

  .imglogo {
    width: 180px;
    height: 100px;

    img {
      width: 100%;
    }
  }

  .nav-item {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      position: absolute;
      right: 20px;
      top: 38px;
      bottom: 20px;
    }
  }

  li {
    height: 26px;
    line-height: 26px;
    position: relative;
    display: inline-block;
    margin-left: 44px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    color: #fff;
    opacity: 0.8;
  }

  .selected {
    color: yellow;
  }

  @mixin nav-in {
    @-webkit-keyframes navin {
      0% {
        color: #a3daa5
      }

      100% {
        color: yellow
      }
    }

    @-moz-keyframes navin {
      0% {
        color: #a3daa5
      }

      100% {
        color: yellow
      }
    }

    @-ms-keyframes navin {
      0% {
        color: #a3daa5
      }

      100% {
        color: yellow
      }
    }

    @-o-keyframes navin {
      0% {
        color: #a3daa5
      }

      100% {
        color: yellow
      }
    }

    @keyframes navin {
      0% {
        color: #a3daa5
      }

      100% {
        color: yellow
      }
    }
  }

  .nav-in {
    @include nav-in;
    -webkit-animation: navin .5s 0s ease both;
    -moz-animation: navin .5s 0s ease both;
    -ms-animation: navin .5s 0s ease both;
    -o-animation: navin .5s 0s ease both;
    animation: navin .5s 0s ease both;
  }

</style>

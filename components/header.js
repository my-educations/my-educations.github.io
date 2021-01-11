const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="../static/styles.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <style>
  </style>
  <header>
    <nav class="navbar navbar-inverse" data-spy="affix" data-offset-top="0">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">学习大师</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li><a href="index.html"><span class="glyphicon glyphicon-home"></span> 首页</a></li>
            <li class="dropdown">
              <button class="dropbtn">学校列表
                <span class="caret"></span>
              </button>
              <div class="dropdown-content">
                <a href="school-cn.html">马来西亚</a>
                <a href="school-cn.html">泰国</a>
              </div>
            </li>
            <li class="dropdown">
              <button class="dropbtn">干货指南
                <span class="caret"></span>
              </button>
              <div class="dropdown-content">
                <a href="guide-cn.html">学校排名</a>
                <a href="guide-cn.html">本硕博攻略</a>
                <a href="guide-cn.html">方法技巧</a>
              </div>
            </li>
            <li class="dropdown">
              <button class="dropbtn">语言学习
                <span class="caret"></span>
              </button>
              <div class="dropdown-content">
                <a href="language-cn.html">1分钟英语</a>
                <a href="language-cn.html">对话与演讲</a>
                <a href="language-cn.html">明星直播</a>
              </div>
            </li>
            <li class="dropdown">
              <button class="dropbtn">专题项目
                <span class="caret"></span>
              </button>
              <div class="dropdown-content">
                <a href="programs-cn.html">本科项目</a>
                <a href="programs-cn.html">硕士项目</a>
                <a href="programs-cn.html">博士项目</a>
              </div>
            </li>
            <li class="dropdown">
              <button class="dropbtn">联系我们
                <span class="caret"></span>
              </button>
              <div class="dropdown-content">
                <a href="contact-cn.html">联系方式</a>
                <a href="about-cn.html">关于我们</a>
              </div>
            </li>
            <li class="dropdown">
              <button class="dropbtn">更多
                <span class="caret"></span>
              </button>
              <div class="dropdown-content">
                <a href="partner-cn.html">合作伙伴</a>
                <a href="map-cn.html">最新地图</a>
                <a href="tool-cn.html">实用工具</a>
                <a href="search-cn.html"><span class="glyphicon glyphicon-search"></span> 搜索</a>
              </div>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <!-- <li><a href="#"><span class="glyphicon glyphicon-user"></span> 注册</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li> -->
            <li><a href="index-en.html"><span class="glyphicon"></span> English</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);

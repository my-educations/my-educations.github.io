const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="../css/w3.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="../css/styles.css">
  <script src="../js/jquery.min.js"></script>
  <script src="../js/bootstrap.min.js"></script>
  <style>
  </style>
  <nav class="navbar navbar-inverse" data-spy="affix" data-offset-top="0">
    <div class="container-fluid">
      <div class="navbar-header">
        <!-- <ul class="nav navbar-nav">
          <li>
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </li>
          <li>
            <a href="../index.html">学习大师</a>
          </li>
        </ul> -->
        <ul class="nav navbar-nav">
          <li><a href="../index.html"><span class="glyphicon glyphicon-home"></span> 学习大师</a></li>
          <li class="dropdown">
            <button class="dropbtn">学校
              <span class="caret"></span>
            </button>
             <ul class="dropdown-content">
                <li><a href="../school_list/au-cn.html">澳大利亚</a></li>
                <li><a href="../school_list/my-cn.html">马来西亚</a></li>
                <li><a href="../school_list/sg-cn.html">新加坡</a></li>
                <li><a href="../school_list/thai-cn.html">泰国</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <button class="dropbtn">专题
              <span class="caret"></span>
            </button>
            <ul class="dropdown-content">
              <li><a href="../program_list/phd-cn.html">博士项目</a></li>
              <li><a href="../program_list/master-cn.html">硕士项目</a></li>
              <li><a href="../program_list/bachelor-cn.html">本科项目</a></li>
              <li><a href="../program_list/campus2campus_tour-cn.html">游学项目</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <button class="dropbtn">语言
              <span class="caret"></span>
            </button>
            <ul class="dropdown-content">
              <li><a href="../language/one-min-cn.html">一分钟英语</a></li>
              <li><a href="../language/talk-speech-cn.html">对话与演讲</a></li>
              <li><a href="../language/study-method-cn.html">学习方法</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <button class="dropbtn">攻略
              <span class="caret"></span>
            </button>
            <ul class="dropdown-content">
              <li><a href="../skill_list/skill-ranking-cn.html">学校排名</a></li>
              <li><a href="../skill_list/skill-learning-cn.html">学习技巧</a></li>
              <li><a href="../skill_list/skill-working-cn.html">工作实习</a></li>
              <li><a href="../skill_list/skill-living-cn.html">生活经历</a></li>
              <li><a href="../skill_list/study-abroad-cn.html">留学系列</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <button class="dropbtn">更多
              <span class="caret"></span>
            </button>
            <ul class="dropdown-content">
              <li><a href="../contact-cn.html">联系方式</a></li>
              <li><a href="../about-cn.html">关于我们</a></li>
              <li><a href="../search-cn.html"><span class="glyphicon glyphicon-search"></span> 搜索</a></li>
              <li><a href="../map-cn.html"><span class="glyphicon glyphicon-map-marker"></span> 地图</a></li>
              <li><a href="../tool-cn.html"><span class="glyphicon glyphicon-wrench"></span> 工具</a></li>
            </ul>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <!-- <li><a href="#"><span class="glyphicon glyphicon-user"></span> 注册</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li> -->
          <!-- <li><a href="../index-en.html"><span class="glyphicon"></span> English</a></li> -->
        </ul>
      </div>
    </div>
  </nav>
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

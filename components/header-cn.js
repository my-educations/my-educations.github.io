const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/w3.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
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
            <a class="navbar-brand" href="index.html">StudyMax</a>
            <a href="index.html">StudyMax</a>
          </li>
        </ul> -->
        <ul class="nav navbar-nav">
          <li><a href="index.html"><span class="glyphicon glyphicon-home"></span> StudyMax</a></li>
          <li class="dropdown">
            <button class="dropbtn">学校
              <span class="caret"></span>
            </button>
             <ul class="dropdown-content">
                <li><a href="school_list/au-cn.html">澳大利亚</a></li>
                <li><a href="school_list/ca-cn.html">加拿大</a></li>
                <li><a href="school_list/cn-cn.html">中国</a></li>
                <li><a href="school_list/hk-cn.html">香港</a></li>
                <li><a href="school_list/ie-cn.html">爱尔兰</a></li>
                <li><a href="school_list/mo-cn.html">澳门</a></li>
                <li><a href="school_list/my-cn.html">马来西亚</a></li>
                <li><a href="school_list/nz-cn.html">新西兰</a></li>
                <li><a href="school_list/sg-cn.html">新加坡</a></li>
                <li><a href="school_list/thai-cn.html">泰国</a></li>
                <li><a href="school_list/uk-cn.html">英国</a></li>
                <li><a href="school_list/usa-cn.html">美国</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <button class="dropbtn">项目
              <span class="caret"></span>
            </button>
            <ul class="dropdown-content">
              <li><a href="program_list/foundation-cn.html">大学预科</a></li>
              <li><a href="program_list/bachelor-cn.html">本科课程</a></li>
              <li><a href="program_list/master-cn.html">硕士课程</a></li>
              <li><a href="program_list/phd-cn.html">博士课程</a></li>
              <li><a href="program_list/campus2campus_tour-cn.html">游学项目</a></li>
              <li><a href="testimonial-cn.html">申请录取榜</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <button class="dropbtn">资讯
              <span class="caret"></span>
            </button>
            <ul class="dropdown-content">
              <li><a href="https://discord.com/invite/YPKu6eakHs" target="_blank">在线社区</a></li>
              <li><a href="https://eastwestlife.com/" target="_blank">探索世界</a></li>
              <li><a href="skill_list/skill-living-cn.html">本地指南</a></li>
              <li><a href="skill_list/university-major-cn.html">学校/专业</a></li>
              <li><a href="skill_list/skills-cn.html">技巧/技能</a></li>
              <li><a href="web-cn.html">实用网站</a></li>
              <li><a href="contact-cn.html" target="_blank">联系我们</a></li>
            </ul>
          </li>
          <li><a href="index.html"><span class="glyphicon"></span> English</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <!-- <li><a href="#"><span class="glyphicon glyphicon-user"></span> 注册</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li> -->
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

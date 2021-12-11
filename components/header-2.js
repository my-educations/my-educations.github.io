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
                <li><a href="../school_list/ca-cn.html">加拿大</a></li>
                <li><a href="../school_list/my-cn.html">马来西亚</a></li>
                <li><a href="../school_list/sg-cn.html">新加坡</a></li>
                <li><a href="../school_list/thai-cn.html">泰国</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <button class="dropbtn">课程
              <span class="caret"></span>
            </button>
            <ul class="dropdown-content">
              <li><a href="../program_list/phd-cn.html">博士课程</a></li>
              <li><a href="../program_list/master-cn.html">硕士课程</a></li>
              <li><a href="../program_list/bachelor-cn.html">本科课程</a></li>
              <li><a href="../program_list/foundation-cn.html">大学预科</a></li>
              <li><a href="../program_list/campus2campus_tour-cn.html">游学计划</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <button class="dropbtn">老师
              <span class="caret"></span>
            </button>
            <ul class="dropdown-content">
              <li><a href="../teacher_list/my-cn.html">马来西亚</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <button class="dropbtn">学生
              <span class="caret"></span>
            </button>
            <ul class="dropdown-content">
              <li><a href="../skill_list/skill-living-cn.html">留学指南</a></li>
              <li><a href="../skill_list/skill-ranking-cn.html">学校排名</a></li>
              <li><a href="../skill_list/language-cn.html">语言学习</a></li>
              <li><a href="../testimonial-cn.html">感谢留言</a></li>
            </ul>
          </li>
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

const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/w3.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <style>
    .affix {
        top: 0;
        width: 100%;
        z-index: 9999 !important;
    }

    .affix + .container-fluid {
      padding-top: 50px;
    }

    .navbar {
      font-size: 16px !important;
      background-color: #29648a;
      z-index: 9999;
      text-align: center;
      border: 0;
      margin-bottom: 0;
      border-radius: 0;
    }

    .navbar-nav li a, .navbar-brand {
      color: #fff !important;
    }

    .navbar-nav li a:hover, .navbar-nav li.active a {
      color: #29648a !important;
      background-color: #fff !important;
    }


    .navbar-default .navbar-toggle {
      border-color: transparent;
      color: #fff !important;
    }

    .dropdown {
      float: left;
      z-index: 9999;
    }

    .dropdown .dropbtn {
      font-size: 16px;
      color: #fff;
      background-color: inherit;
      text-align: center;
      padding: 14px 16px;
      border: none;
      outline: none;
      margin: 0;
    }

    .dropdown:hover .dropbtn{
      background-color: #fff;
      color: #29648a !important;;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #29648a;
      min-width: 150px;
    }

    .dropdown-content a {
      float: none;
      color: #fff !important;
      padding: 10px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
    }

    .dropdown-content a:hover {
      background-color: #d8c3a5 !important;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }
  </style>
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/">StudyMax</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="index.html"><span class="glyphicon glyphicon-home"></span> Home</a></li>
        <li class="dropdown">
          <button class="dropbtn">School
            <span class="caret"></span>
          </button>
          <div class="dropdown-content">
            <a href="school_list/sg-cn.html">Singapore</a>
            <a href="school_list/my-cn.html">Malaysia</a>
            <a href="school_list/thai-cn.html">Thailand</a>
            <a href="school_list/au-cn.html">Australia</a>
          </div>
        </li>
        <li class="dropdown">
          <button class="dropbtn">Programmes
            <span class="caret"></span>
          </button>
          <div class="dropdown-content">
            <a href="program_list/phd-cn.html">PhD</a>
            <a href="program_list/master-cn.html">Master</a>
            <a href="program_list/bachelor-cn.html">Bachelor</a>
            <a href="program_list/campus2campus_tour-cn.html">Tour</a>
          </div>
        </li>
        <li class="dropdown">
          <button class="dropbtn">Language
            <span class="caret"></span>
          </button>
          <div class="dropdown-content">
            <a href="language/one-min-cn.html">One Min</a>
            <a href="language/talk-speech-cn.html">Talks</a>
            <a href="language/study-method-cn.html">Methods</a>
          </div>
        </li>
        <li class="dropdown">
          <button class="dropbtn">Skills
            <span class="caret"></span>
          </button>
          <div class="dropdown-content">
            <a href="skill_list/skill-ranking-cn.html">Ranking</a>
            <a href="skill_list/skill-learning-cn.html">Learning</a>
            <a href="skill_list/skill-working-cn.html">Working</a>
            <a href="skill_list/skill-living-cn.html">Living</a>
            <a href="skill_list/study-abroad-cn.html">Study Abroad</a>
          </div>
        </li>
        <li class="dropdown">
          <button class="dropbtn">Contact
            <span class="caret"></span>
          </button>
          <div class="dropdown-content">
            <a href="contact-cn.html">Contact us</a>
            <a href="about-cn.html">About us</a>
          </div>
        </li>
        <li class="dropdown">
          <button class="dropbtn">More
            <span class="caret"></span>
          </button>
          <div class="dropdown-content">
            <a href="search-cn.html"><span class="glyphicon glyphicon-search"></span> Search</a>
            <a href="map-cn.html"><span class="glyphicon glyphicon-map-marker"></span> Map</a>
            <a href="tool-cn.html"><span class="glyphicon glyphicon-wrench"></span> Tools</a>
          </div>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <!-- <li><a href="#"><span class="glyphicon glyphicon-user"></span> 注册</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li> -->
        <li><a href="index.html"><span class="glyphicon"></span> 中文</a></li>
      </ul>
    </div>
  </div>
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

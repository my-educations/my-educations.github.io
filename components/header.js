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
            <a href="index.html">StudyMax</a>
          </li>
        </ul> -->
        <ul class="nav navbar-nav navbar-center">
          <li><a href="index.html"><span class="glyphicon glyphicon-home"></span> StudyMax</a></li>
          <li class="dropdown">
            <button class="dropbtn">School
              <span class="caret"></span>
            </button>
             <ul class="dropdown-content">
                <li><a href="school_list/au-cn.html">Australia</a></li>
                <li><a href="school_list/ca-cn.html">Canada</a></li>
                <li><a href="school_list/cn-cn.html">China</a></li>
                <li><a href="school_list/hk-cn.html">Hong Kong</a></li>
                <li><a href="school_list/ie-cn.html">Ireland</a></li>
                <li><a href="school_list/mo-cn.html">Macau</a></li>
                <li><a href="school_list/my-cn.html">Malaysia</a></li>
                <li><a href="school_list/nz-cn.html">New Zealand</a></li>
                <li><a href="school_list/sg-cn.html">Singapore</a></li>
                <li><a href="school_list/thai-cn.html">Thailand</a></li>
                <li><a href="school_list/uk-cn.html">UK</a></li>
                <li><a href="school_list/usa-cn.html">USA</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <button class="dropbtn">Program
              <span class="caret"></span>
            </button>
            <ul class="dropdown-content">
              <li><a href="program_list/foundation-cn.html">Pre-University</a></li>
              <li><a href="program_list/bachelor-cn.html">Bachelor</a></li>
              <li><a href="program_list/master-cn.html">Master</a></li>
              <li><a href="program_list/phd-cn.html">PhD</a></li>
              <li><a href="program_list/campus2campus_tour-cn.html">Cam2Cam</a></li>
              <li><a href="testimonial-cn.html">Offer</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <button class="dropbtn">Info
              <span class="caret"></span>
            </button>
            <ul class="dropdown-content">
              <li><a href="https://discord.gg/52pGtfsm" target="_blank">Community</a></li>
              <li><a href="https://eastwestlife.com/" target="_blank">Explore</a></li>
              <li><a href="info_list/guide-cn.html">Local Guide</a></li>
              <li><a href="web-cn.html">Websites</a></li>
              <li><a href="contact-cn.html" target="_blank">Contact us</a></li>
            </ul>
          </li>
          <li><a href="index-cn.html">中文</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <!-- <li><a href="#"><span class="glyphicon glyphicon-user"></span> Register</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li> -->
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

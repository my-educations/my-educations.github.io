const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="../static/styles.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
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

    .navbar-nav li a, .navbar .navbar-brand {
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
  <footer class="container-fluid bg-footer" style="color:#000;background:#fff;">
    <div class="row">
      <div class="col-sm-3">
        <div class="row">
          <div class="col-sm-4">
          </div>
          <div class="col-sm-4 text-center">
            <p style="font-size:60%;">大马留学僧</p>
          </div>
          <div class="col-sm-4 text-center">
            <p style="font-size:60%;">大马之声</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
          </div>
          <div class="col-sm-4 text-center">
            <img src="img/about/wechat-sm.jpg" style="width:60px">
          </div>
          <div class="col-sm-4 text-center">
            <img src="img/about/wechat-bm.jpg" style="width:60px">
          </div>
        </div>
      </div>

      <div class="col-sm-6 text-center">
        <div class="row">
          <img src="img/about/logo.png" style="width:100px">
        </div>
      </div>

      <div class="col-sm-3">
        <div class="row">
          <div class="col-sm-4 text-center">
            <p style="font-size:60%;">微信咨询</p>
          </div>
          <div class="col-sm-4 text-center">
            <p style="font-size:60%;">QQ 咨询</p>
          </div>
          <div class="col-sm-4">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 text-center">
            <img src="img/about/wechat.jpg" style="width:60px">
          </div>
          <div class="col-sm-4 text-center">
            <img src="img/about/qq.jpg" style="width:60px">
          </div>
          <div class="col-sm-4">
          </div>
        </div>
      </div>
    </div>
    <hr>

    <div class="row">
      <div class="col-sm-3 text-center">
        <div class="row">
          <div class="col-sm-4">
          </div>
          <div class="col-sm-8">
            <a href="index.html">
              <img src="img/about/logo.png" style="width:60px">
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-6 text-center">
        <div class="row">
          <a href="faq-cn.html">常见问题</a>&nbsp;&nbsp;
          <a href="partner-cn.html">合作推广</a>&nbsp;&nbsp;
          <a href="contact-cn.html">意见反馈</a>&nbsp;&nbsp;
          <a href="about-cn.html">关于我们</a>
        </div>
        <div class="row">
          <p>&copy; <script>document.write(new Date().getFullYear())</script> StudyMax.&nbsp;All rights reserved.</p>
        </div>
      </div>
      <div class="col-sm-3 text-center">
        <div class="row">
          <div class="col-sm-8">
            <a href="https://www.linkedin.com/company/study2max/" class="fa fa-linkedin"></a>
            <a href="https://www.facebook.com/study2max" class="fa fa-facebook"></a>
            <a href="https://www.youtube.com/channel/UCasfXLwDL6xoDfF-00co9tQ" class="fa fa-youtube"></a>
            <a href="https://www.instagram.com/my.study.max/" class="fa fa-instagram"></a>
          </div>
          <div class="col-sm-4">
          </div>
        </div>
      </div>
    </div>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);

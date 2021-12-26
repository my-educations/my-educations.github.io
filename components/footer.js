const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/w3.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <style>
    footer {
      padding: 20px;
    }
  </style>
  <footer class="container-fluid bg-footer" style="color:#000;background:#fff;">
    <div class="row">
      <div class="col-sm-3">
        <div class="row">
          <div class="col-sm-4">
          </div>
          <div class="col-sm-4 text-center">
            <p style="font-size:60%;">微信公众号</p>
          </div>
          <div class="col-sm-4 text-center">
            <p style="font-size:60%;">知乎</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
          </div>
          <div class="col-sm-4 text-center">
            <img src="img/about/wechat-ms.jpg" style="width:60px">
          </div>
          <div class="col-sm-4 text-center">
            <img src="img/about/zhihu.jpg" style="width:60px">
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
            <p style="font-size:60%;">企业微信</p>
          </div>
          <div class="col-sm-4 text-center">
            <p style="font-size:60%;">抖音</p>
          </div>
          <div class="col-sm-4">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 text-center">
            <img src="img/about/wechat.jpg" style="width:60px">
          </div>
          <div class="col-sm-4 text-center">
            <img src="img/about/douyin.jpg" style="width:60px">
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
          <a href="contact-cn.html">联系方式</a>&nbsp;&nbsp;
          <a href="faq-cn.html">常见问题</a>&nbsp;&nbsp;
          <a href="testimonial-cn.html">感谢留言</a>
        </div>
        <div class="row">
          <a href="about-cn.html">关于我们</a>&nbsp;&nbsp;
          <a href="partner-cn.html">合作推广</a>&nbsp;&nbsp;
          <a href="index-en.html">English</a>
        </div>
        <div class="row">
          <a href="search-cn.html"><span class="glyphicon glyphicon-search"></span> 搜索</a>&nbsp;&nbsp;
          <a href="map-cn.html"><span class="glyphicon glyphicon-map-marker"></span> 地图</a>&nbsp;&nbsp;
          <a href="tool-cn.html"><span class="glyphicon glyphicon-wrench"></span> 工具</a>
        </div>
        <div class="row">
          <p>StudyMax &copy; 2021 StuMax Academy.&nbsp;All rights reserved.</p>
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

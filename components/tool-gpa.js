const gpaTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/w3.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/gpa.js"></script>
  <style>
    table {
      width: 60%;
    }
    table, th, td {
      text-align: center;
      border: 2px solid white;
    }
    td {
      width: 20%;
    }
    input {
      text-align: center;
      /* background-color:rgba(0, 0, 0, 0); */
      background-color: #fff;
      color: #29648a;
    }
  </style>
  <div id="gpa-calculator" class="w3-modal">
    <div class="w3-modal-content w3-animate-top w3-card-4">
      <header class="w3-container w3-teal w3-center w3-padding-32">
        <span onclick="document.getElementById(&#39;gpa-calculator&#39;).style.display=&#39;none&#39;" class="w3-button w3-teal w3-xlarge w3-display-topright">×</span>
        <h3 class="w3-wide"><i class="fa fa-suitcase w3-margin-right"></i>马来西亚绩点转换器</h3>
      </header>
      <div class="w3-container">
        <center>
          <form name="GPACalculator">
            <table>
              <th>科目</th>
              <th>分数等级（A-F）</th>
              <th>学分（>0）</th>
              <tr>
                <td>科目 1</td>
                <td><input type=text name="gr1" align=top></td>
                <td><input type=text name="cr1" align=top></td>
              </tr>
              <tr>
                <td>科目 2</td>
                <td><input type=text name="gr2" align=top></td>
                <td><input type=text name="cr2" align=top></td>
              </tr>
              <tr>
                <td>科目 3</td>
                <td><input type=text name="gr3" align=top></td>
                <td><input type=text name="cr3" align=top></td>
              </tr>
              <tr>
                <td>科目 4</td>
                <td><input type=text name="gr4" align=top></td>
                <td><input type=text name="cr4" align=top></td>
              </tr>
              <tr>
                <td>科目 5</td>
                <td><input type=text name="gr5" align=top></td>
                <td><input type=text name="cr5" align=top></td>
              </tr>
              <tr>
                <td>科目 6</td>
                <td><input type=text name="gr6" align=top></td>
                <td><input type=text name="cr6" align=top></td>
              </tr>
              <tr>
                <td>科目 7</td>
                <td><input type=text name="gr7" align=top></td>
                <td><input type=text name="cr7" align=top></td>
              </tr>
              <tr>
                <td>科目 8</td>
                <td><input type=text name="gr8" align=top></td>
                <td><input type=text name="cr8" align=top></td>
              </tr>
              <tr>
                <td>科目 9</td>
                <td><input type=text name="gr9" align=top></td>
                <td><input type=text name="cr9" align=top></td>
              </tr>
              <tr>
                <td>科目 10</td>
                <td><input type=text name="gr10" align=top></td>
                <td><input type=text name="cr10" align=top></td>
              </tr>
            </table>
            <br>
            <!-- <input type="button" value="转换" name="转换" onclick="gpacalc()"> -->
            <button class="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right" onclick="gpacalc()">转换</button>
            <button class="w3-button w3-red w3-section" onclick="document.getElementById(&#39;gpa-calculator&#39;).style.display=&#39;none&#39;">关闭 <i class="fa fa-remove"></i></button>
          </form>
        </center>
      </div>

    </div>
  </div>
`;

class GPA extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(gpaTemplate.content);
  }
}

customElements.define('gpa-component', GPA);

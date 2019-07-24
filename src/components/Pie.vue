<template>
  <div>
   <footer class="footerPrincipal whiteFont">
    <div class="row contPie">
      <div class="col-md-6">
        <ul style="float:left; list-style: none;">
          <li>
            <strong>Ministerio de Seguridad de la Provincia de Jujuy</strong>
          </li>
          <li>
            Dirección: San Martín Nº45 .San Salvador de Jujuy . Jujuy
          </li>
          <li>
            Teléfono: 0388-4239400
          </li>
           <li style="margin: 10px 0;">
            <a href="http://seguridad.jujuy.gob.ar/" target="_blank" class="footer-icon" analytics-on="click" analytics-event="access_web" analytics-category="ButtonsCommands">
              <img src="../assets/images/social_web.png" target="_blank" alt="Web">
            </a>
            <a href="https://www.youtube.com/channel/UCJpTTamTMwx0b7zu12M5Y9Q/featured" target="_blank" class="footer-icon" analytics-on="click" analytics-event="access_youtube" analytics-category="ButtonsCommands">
              <img src="../assets/images/social_yt.png" alt="Youtube">
            </a>
            <a href="https://twitter.com/GobiernoJujuy" target="_blank" class="footer-icon" analytics-on="click" analytics-event="access_twitter" analytics-category="ButtonsCommands">
              <img src="../assets/images/social_tw.png" alt="Twitter">
            </a>
          </li>
          <!-- <li>
            <div class="version ng-binding">
              Seguridad Provincia v1.0.1
            </div>
          </li>
          -->

        </ul>
      </div>

      <!--
      <div class="col-md-6 ">
         <ul style="float:right; list-style: none;">
         <li style="margin: 10px 0;">
            <a href="http://seguridad.jujuy.gob.ar/" target="_blank" class="footer-icon" analytics-on="click" analytics-event="access_web" analytics-category="ButtonsCommands">
              <img src="../assets/images/social_web.png" target="_blank" alt="Web">
            </a>
            <a href="https://www.youtube.com/channel/UCJpTTamTMwx0b7zu12M5Y9Q/featured" target="_blank" class="footer-icon" analytics-on="click" analytics-event="access_youtube" analytics-category="ButtonsCommands">
              <img src="../assets/images/social_yt.png" alt="Youtube">
            </a>
            <a href="https://twitter.com/GobiernoJujuy" target="_blank" class="footer-icon" analytics-on="click" analytics-event="access_twitter" analytics-category="ButtonsCommands">
              <img src="../assets/images/social_tw.png" alt="Twitter">
            </a>
          </li>
          <li>
            <div class="version ng-binding">
              Seguridad Provincia v1.0.1
            </div>
          </li>
         </ul>

        <a href="http://seguridad.jujuy.gob.ar/" target="_blank">
          <img src="../assets/images/minseg.png" width="200"  alt="Logo Provincia">
        </a>


      </div>
      -->
      <div class="col-md-6 logoProv">
        <a href="http://seguridad.jujuy.gob.ar/" target="_blank">
          <img src="../assets/images/membrete.png" width="200" alt="Logo Provincia" style="margin-right: 50px">
        </a>
        <div class="version ng-binding">
          Seguridad Provincia v1.12.0
        </div>
      </div>
    </div>
</footer>
  </div>
</template>
<script>
export default {

}
</script>

<style>
.footerPrincipal {
    z-index: 0 !important;
   /* margin-top: 20px; aqui cambio!!*/
    width: 100%;
    background-color :#1955a6 !important;
    /*background-image: url(../img/footer.jpg);*/
    background-size: cover;
    color: #FFF;
    line-height: 18px;
    position: absolute;
    left: 0;
    z-index: 1000050;
}

.whiteFont {
    color: white;
}

.contPie {
    padding: 20px 15px;
    overflow: auto;
    max-width: 1100px;
    margin: 0 auto;
    font-family: 'din';
}
</style>


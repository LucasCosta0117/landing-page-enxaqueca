<template>
  <div class="home-view-container">
    <div class="home-content">
      <section id="section1" class="section-content">
        <div class="text-box">
          <!-- <h1>Descubra Como Cuidar da Sua <span class="green-highlight">Saúde</span> e Lidar Com a <span class="red-highlight">Enxaqueca</span></h1> -->
          <h1>Descubra Como Cuidar da Sua Saúde e Lidar Com a Enxaqueca</h1>
          <p>Chega de sofrer com dores que interrompem sua rotina e tiram o prazer das coisas simples do dia a dia.</p>
          <p>Se você convive com enxaqueca, já passou da hora de entender os sinais que seu corpo dá e agir antes que a dor tome conta.</p>
          <div class="btn-input">
            <sall-button 
              :btnTextValue="label.btnSec1"
              :btnBgColor="colorBtn.btnSec1"
            />
          </div>
        </div>
        <div class="image-box">
          <div class="image-box-icon">
            <span>
              <font-awesome-icon icon="circle" size="2x" beat style="color: #de000030"/>
            </span>
            <span>
              <font-awesome-icon icon="circle" size="2x" beat style="color: #de000030"/>
            </span>
          </div>
          <img src="../assets/images/woman-headache.png" alt="Mulher com as mãos na cabeça">
        </div>
      </section>
      <section id="section-02" class="section-content">
        test
      </section>
    </div>
    <div class="footer-content">
      Rodapé
    </div>
  </div>
</template>

<script>
import SallButton from '../components/SallButton.vue'

/**
 * Responsável por organizar todo o conteúdo da landing page
 */
export default {
    name: 'HomePage',
    components: {
      SallButton
    },
    data() {
        return {
          /**
           * Legendas para botões/inputs
           */
          label: {
            btnSec1:'BAIXAR E-BOOK AGORA'
          },
          /**
           * Cor para os botões de download durante as seções
           */
          colorBtn: {
            btnSec1: '#007d48',
            btnSec2: '#DE0000'
          }
        }
    }

}
</script>

<style scoped>
.home-view-container {
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
}
#section1 {
  background-image: url('../assets/images/bg-01.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.section-content {
  display: flex;
  flex-direction: column;
  padding: 0 1.25rem;
}
.text-box h1 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-top: 1.5rem;
}
.text-box p {
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 1rem;
}
.text-box .btn-input {
  margin-top: 1.5rem;
}
.image-box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.image-box img {
  margin-top: 3rem;
  width: 80%;
}
.image-box-icon {
  position: absolute;
  top: 22%;
  left: 38%;
}
.image-box-icon span:first-of-type{
  padding-right: 1.25em;
}
.image-box-icon .fa-beat {
  animation-duration: 2s;
}
.green-highlight {
  color: green;
}
.red-highlight {
  color: #DE0000;
}
</style>
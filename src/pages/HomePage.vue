<template>
  <div class="home-view-container">
    <div class="home-content">
      <section id="section-01">
        <div class="section-content">
          <div class="text-box">
            <h1>Descubra Como Cuidar da Sua <span class="green-highlight">Saúde</span> e Lidar Com a <span class="red-highlight">Enxaqueca</span></h1>
            <p>Chega de sofrer com dores que interrompem sua rotina e tiram o prazer das coisas simples do dia a dia.</p>
            <p>Se você convive com enxaqueca, já passou da hora de entender os sinais que seu corpo dá e agir antes que a dor tome conta.</p>
            <sall-button
              class=".sall-btn"
              :btnTextValue="label.btnSec1"
            />
          </div>
          <div class="image-box">
            <img src="../assets/images/woman-headache.png" alt="Mulher com as mãos na cabeça">
          </div>
        </div>
      </section>
      <section id="section-02" class="section-content">
        test
      </section>
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
            btnSec1:'QUERO MEU EBOOK AGORA'
          },
          colorBtn: {
            btnSec2: '#6DD19D'
          }
        }
    }

}
</script>

<style>
.home-view-container {
  /* Definições gerais */
}
.home-content {
  /* Def dos conteúdos, largura máxima e etc */
}
section {
  display: flex;
  justify-content: center;
}
#section-01 {
  background-image: url('../assets/images/bg-01.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  padding-top: 80px; /* afastar o conteúdo principal da nav-bar*/
}
.section-content {
  display: flex;
  flex-direction: row;
  width: 1640px;
  padding: 0px 20px;
}
.text-box {
  width: 780px;
  height: 100%;
  margin-right: 20px;
}
.text-box h1 {
  margin-top: 100px;
  font-size: 48px;
  font-weight: 600;
}
.text-box p {
  font-size: 24px;
  font-weight: 300;
  margin-top: 20px;
}
.text-box .sall-btn {
  margin-top: 200px;
}
.image-box {
  display: flex;
  align-items: flex-end;
  height: 100%;
}
.image-box img {
  max-width: 100%;
  height: 720px;
}
.green-highlight {
  color: green;
}
.red-highlight {
  color: #DE0000;
}
</style>
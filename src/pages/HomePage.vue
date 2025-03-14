<template>
  <div class="home-view-container">
    <div class="home-content">
      <section id="section1" class="section-content">
        <div class="text-box">
          <h1 class="main-title">Descubra Como Cuidar da Sua Saúde e Lidar Com a Enxaqueca</h1>
          <p class="paragraph-text">Chega de sofrer com dores que interrompem sua rotina e tiram o prazer das coisas simples do dia a dia.</p>
          <p class="paragraph-text">Se você convive com enxaqueca, já passou da hora de entender os sinais que seu corpo dá e agir antes que a dor tome conta.</p>
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
              <font-awesome-icon icon="fa-solid fa-circle" size="2x" beat style="color: #de000030"/>
            </span>
            <span>
              <font-awesome-icon icon="fa-solid fa-circle" size="2x" beat style="color: #de000030"/>
            </span>
          </div>
          <img src="../assets/images/woman-headache.png" alt="Mulher com as mãos na cabeça">
        </div>
      </section>
      <section id="section2" class="section-content">
        <h2 class="section-title">O Que Você Vai Aprender:</h2>
        <div class="simple-tip-card-box">
          <simple-tip-card
            iconName="fa-solid fa-eye"
            textCard="Como reconhecer os gatilhos das crises"
          />
          <simple-tip-card
          textCard="Estratégias práticas para reduzir os episódios de dor"
          iconName="fa-solid fa-notes-medical"
          />
          <simple-tip-card
            textCard="Quando buscar ajuda médica e identificar profissionais realmente competentes"
            iconName="fa-brands fa-medrt"
          />
        </div>
      </section>
    </div>
    <div class="footer-content">
      Rodapé
    </div>
  </div>
</template>

<script>
import SallButton from '@/components/SallButton.vue'
import SimpleTipCard from '@/components/SimpleTipCard.vue';

/**
 * Responsável por organizar todo o conteúdo da landing page
 */
export default {
    name: 'HomePage',
    components: {
      SallButton,
      SimpleTipCard,
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
.main-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin: 1.5rem 0;
}
.section-title {
  font-size: 1.75rem;
  font-weight: 700;
}
.paragraph-text {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
}
.text-box .btn-input {
  margin: 1.5rem 0;
}
.image-box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.image-box img {
  width: 80%;
}
.image-box-icon {
  position: absolute;
  top: 12%;
  left: 38%;
}
.image-box-icon span:first-of-type{
  padding-right: 1.25rem;
}
.image-box-icon .fa-beat {
  animation-duration: 2.5s;
}
#section2 {
  background-color: #2D2F31;
}
#section2 .section-title{
  color: #ffffff;
  margin: 1rem 0;
}
.simple-tip-card-box {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 1rem;
}
</style>
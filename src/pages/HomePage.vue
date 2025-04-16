<template>
  <div class="home-view-container">
    <div class="home-content">
      <section class="section-content bg-img-01">
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
      <section class="section-content bg-black">
        <h2 class="section-title text-white">O Que Você Vai Aprender:</h2>
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
      <section class="section-content bg-green">
        <h2 class="section-title">Pare de Cair Nas Ciladas dos "Gurus de Internet"</h2>
        <div class="quote-card-box">
          <quote-card 
            textCard="Toma um chá disso que resolve!"
          />
          <quote-card
            textCard="Ah, larga o celular que vai melhorar!"
          />
          <p class="paragraph-text text-white">
            Você não precisa de mais palpites sem fundamento.
            Precisa de conhecimento claro, direto e confiável para cuidar melhor de si.
          </p>
        </div>
      </section>
      <section class="section-content bg-img-02">
        <h2 class="section-title">A Verdade Que Ninguém Conta:</h2>
        <p class="paragraph-text">
          A enxaqueca não é só uma questão de "tomar remédio".
          Ela envolve entender como <span class="text-emphasis">alimentação, sono, estresse e emoções</span> influenciam sua saúde
        </p>
        <p class="paragraph-text">
          <span class="text-emphasis">O problema?</span>
          Muitas vezes, você sai da consulta com uma prescrição genérica e sem orientação clara.
        </p>
        <p class="paragraph-text">
          Mas com as <span class="text-emphasis">estratégias certas</span>, você pode começar a transformar sua relação com essas dores.
        </p>
        <p class="paragraph-text">
          Pegue agora as informações essenciais para:
        </p>
        <div class="bullet-box">
          <bullet-item
            text="Reconhecer os sinais do seu corpo."
          />
          <bullet-item
            text="Fazer escolhas que melhoram seu bem-estar."
          />
          <bullet-item
            text="Saber como escolher um médico que realmente te escute."
          />
        </div>
        <p class="paragraph-text">
          Dê o primeiro passo para viver sem se sentir refém da dor.
        </p>
        <div class="btn-input">
          <sall-button 
            :btnTextValue="label.btnSec2"
            :btnBgColor="colorBtn.btnSec2"
          />
        </div>
      </section>
      <section class="section-content bg-black">
        <div class="title-icon">
          <font-awesome-icon :icon="['fas', 'clipboard-list']" size="3x" style="color: #FA7F59;" />
          <h2 class="section-title text-white">O QUE VOCÊ ENCONTRARÁ NO EBOOK</h2>
        </div>
        <summary-mock/>
        <img class="mock-img" src="" alt="Diferentes aparelhos eletronicos exibindo o e-book em suas telas">
        <div class="title-icon">
          <h2 class="section-title text-white">PARA QUEM SERVE ESSE EBOOK?</h2>
          <font-awesome-icon :icon="['fas', 'arrows-down-to-people']" size="3x" color="#007d48"/>
        </div>
        <div class="bullet-box">
          <bullet-item
            text="Para quem quer reconquistar um estilo de vida saudável"
          />
          <bullet-item
            text="Para quem não sabe o que deve fazer para parar com as crises"
          />
          <bullet-item
            text="Para quem sente desesperança sobre voltar a ter uma vida sem dores"
          />
          <bullet-item
            text="Para quem viveu quadros de enxaqueca recente"
          />
          <bullet-item
            text="Para quem nunca foi ao médico saber sobre sua enxaqueca"
          />
          <bullet-item
            text="Para quem já foi ao médico mas não se sentiu acolhida(o)"
          />
          <bullet-item
            text="Para quem comete muitos erros na dieta"
          />
          <bullet-item
            text="Para quem tem a vida interrompida sempre que a crise de enxaqueca chega"
          />
          <bullet-item
            text="Para quem quer despertar todo o potencial e viver uma nova vida extraordinária (com ou sem enxaqueca)"
          />
          <bullet-item
            text="Para quem está tendo uma crise agora mesmo"
          />
        </div>
        <div class="feedback-section">
          <feedback-card
            :rating="3"
            :user-name="'Lucas Costa'"
            :feedback="
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            "
          />
          <feedback-card
            :rating="4"
            :user-name="'Zaion Called'"
            :feedback="
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            "
          />
          <feedback-card
            :rating="5"
            :user-name="'Maria Silva'"
            :feedback="
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            "
          />
          <feedback-card
            :rating="3"
            :user-name="'João Santos'"
            :feedback="
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            "
          />
        </div>
        <div class="btn-input">
          <sall-button 
            :btnTextValue="label.btnSec3"
            :btnBgColor="colorBtn.btnSec1"
          />
        </div>
      </section>
      <section class="section-content bg-green">
        <div class="title-icon">
          <h2 class="section-title text-white">BENEFÍCIOS DE SE COMPRAR O EBOOK</h2>
        </div>
        <benefits-card />
        <div class="btn-input">
          <sall-button 
            :btnTextValue="label.btnSec3"
            :btnBgColor="colorBtn.btnSec3"
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
import QuoteCard from '@/components/QuoteCard.vue';
import BulletItem from '@/components/BulletItem.vue';
import SummaryMock from '@/components/SummaryMock.vue';
import FeedbackCard from '@/components/FeedbackCard.vue';
import BenefitsCard from '@/components/BenefitsCards.vue';
/**
 * Responsável por organizar todo o conteúdo da landing page
 */
export default {
    name: 'HomePage',
    components: {
      SallButton,
      SimpleTipCard,
      QuoteCard,
      BulletItem,
      SummaryMock,
      FeedbackCard,
      BenefitsCard
    },
    data() {
        return {
          /**
           * Legendas para botões/inputs
           */
          label: {
            btnSec1:'ADQUIRIR O E-BOOK AGORA',
            btnSec2:'QUERO DAR O PRIMEIRO PASSO',
            btnSec3:'BAIXAR O E-BOOK'
          },
          /**
           * Cor para os botões de download durante as seções
           */
          colorBtn: {
            btnSec1: '#007d48',
            btnSec2: '#0917c1',
            btnSec3: '#de0000'
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
.bg-img-01 {
  background-image: url('../assets/images/bg-01.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.bg-img-02 {
  background-image: url('../assets/images/bg-02.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.bg-black {
  background-color: #2D2F31;
}
.bg-green {
  background-color: #007d48;
}
.section-content {
  display: flex;
  flex-direction: column;
  padding: 0 1.25rem;
  gap: 1rem;
}
.main-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin: 1.5rem 0;
}
.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 1rem;
}
.text-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.paragraph-text {
  font-size: 1.25rem;
  font-weight: 500;
}
.title-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
}
.text-white {
  color: #ffffff;
}
.text-emphasis {
  font-weight: 700;
}
.btn-input {
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
.simple-tip-card-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}
.quote-card-box {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 1rem;
}
.bullet-box {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.mock-img {
  display: none;
}
.feedback-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
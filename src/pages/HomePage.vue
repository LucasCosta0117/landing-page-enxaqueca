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
            v-for="(card, index) in tipCards"
            :key="index"
            :iconName="card.iconName"
            :textCard="card.textCard"
          />
        </div>
      </section>
      <section class="section-content bg-green">
        <h2 class="section-title">Pare de Cair Nas Ciladas dos "Gurus de Internet"</h2>
        <div class="quote-card-box">
          <quote-card
            v-for="(card, index) in quoteCards"
            :key="index"
            :textCard="card.textCard"
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
            v-for="(item, index) in bulletItems1"
            :key="index"
            :text="item.text"
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
            v-for="(item, index) in bulletItems2"
            :key="index"
            :text="item.text"
          />
        </div>
        <div class="feedback-section">
          <feedback-card
            v-for="(card, index) in feedbackCards"
            :key="index"
            :rating="card.rating"
            :user-name="card.userName"
            :feedback="card.feedback"
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
          <h2 class="section-title text-white">ABA DE AUTORIDADE</h2>
        </div>
        <div>
          PREENCHER COM DADOS ESTATÍSTICOS DOS BENEFÍCIOS GERADOS PELAS FONTES USADAS NA PRODUÇÃO DO MATERIAL
        </div>
      </section>
      <section class="section-content bg-img-02">
        <div class="title-icon">
          <h2 class="section-title">BENEFÍCIOS DE SE COMPRAR O EBOOK</h2>
        </div>
        <benefits-card />
        <div class="price-box">
          <p class="paragraph-text">ADIQUIRA AGORA MESMO O EBOOK <span class="text-emphasis">“COMO LIDAR COM A ENXAQUECA”</span>!</p>
          <img src="../assets/images/price-descount.png" alt="Etiqueta de preço com desconto">
        </div>
        <div class="btn-input">
          <sall-button 
            :btnTextValue="label.btnSec4"
            :btnBgColor="colorBtn.btnSec3"
          />
        </div>
      </section>
    </div>
    <div class="footer-content bg-black">
      <p class="text-white">Copyright © 2025 Todos os direitos reservados | Desenvolvido por <a :href="github" class="text-white" target="_blank">Lucas Costa</a></p>
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
            btnSec3:'DESEJO SABER LIDAR COM A ENXAQUECA',
            btnSec4:'BAIXAR O E-BOOK'
          },
          /**
           * Cor para os botões de download durante as seções
           */
          colorBtn: {
            btnSec1: '#007d48',
            btnSec2: '#0917c1',
            btnSec3: '#de0000'
          },
          tipCards: [
            {
              iconName: 'fa-solid fa-eye',
              textCard: 'Como reconhecer os gatilhos das crises'
            },
            {
              iconName: 'fa-solid fa-notes-medical',
              textCard: 'Estratégias práticas para reduzir os episódios de dor'
            },
            {
              iconName: 'fa-brands fa-medrt',
              textCard: 'Quando buscar ajuda médica'
            },
            {
              iconName: 'fa-solid fa-stethoscope',
              textCard: 'Como identificar profissionais realmente competentes'
            }
          ],
          quoteCards: [
            { textCard: 'Toma um chá disso que resolve!' },
            { textCard: 'Ah, larga o celular que vai melhorar!' }
          ],
          bulletItems1: [
            { text: 'Reconhecer os sinais do seu corpo.' },
            { text: 'Fazer escolhas que melhoram seu bem-estar.' },
            { text: 'Saber como escolher um médico que realmente te escute.' }
          ],
          bulletItems2: [
            { text: 'Para quem quer reconquistar um estilo de vida saudável' },
            { text: 'Para quem não sabe o que deve fazer para parar com as crises' },
            { text: 'Para quem sente desesperança sobre voltar a ter uma vida sem dores' },
            { text: 'Para quem viveu quadros de enxaqueca recente' },
            { text: 'Para quem nunca foi ao médico saber sobre sua enxaqueca' },
            { text: 'Para quem já foi ao médico mas não se sentiu acolhida(o)' },
            { text: 'Para quem comete muitos erros na dieta' },
            { text: 'Para quem tem a vida interrompida sempre que a crise de enxaqueca chega' },
            { text: 'Para quem quer despertar todo o potencial e viver uma nova vida extraordinária (com ou sem enxaqueca)' },
            { text: 'Para quem está tendo uma crise agora mesmo' }
          ],
          feedbackCards: [
            {
              rating: 3,
              userName: 'Lucas Costa',
              feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
              rating: 4,
              userName: 'Zaion Called',
              feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
              rating: 3,
              userName: 'Maria Silva',
              feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
              rating: 5,
              userName: 'João Santos',
              feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
          ],
          github: 'https://github.com/LucasCosta0117'
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
.price-box {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.price-box img {
  width: 100%;
}
.footer-content {
  width: 100%;
  height: 4rem;
  background: linear-gradient(180deg,rgb(88, 88, 88) 0%, rgba(0, 0, 0, 1) 50%);
  padding: 1rem;
  text-align: center;
}

/** Responsividade para telas até 768px (Tabletes) */
@media(min-width: 481px) and (max-width: 768px) {
  .home-view-container {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }
  .main-title {
    font-size: 2.75rem;
  }
  .section-title {
    font-size: 2rem;
  }
  .paragraph-text {
    font-size: 1.5rem;
  }
  .image-box img {
    width: 80%;
  }
  .image-box-icon {
    font-size: 2.25rem;
    position: absolute;
    top: 10%;
    left: 35%;
  }
  .image-box-icon span:first-of-type{
    padding-right: 4rem;
  }
  .price-box {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    margin: 1.5rem;
  }
  .price-box img {
    width: 40%;
  }
}

/** Responsividade para telas até 1366px (Notebooks/telas HD) */
@media(min-width: 769px) and (max-width: 1366px) {
  .home-view-container {
    width: 100%;
    max-width: 1366px;
    margin: 0 auto;
  }
}

/** Responsividade para telas até 1920px (Notebooks/telas FHD) */
@media(min-width: 1367px) and (max-width: 1920px) {
  .home-view-container {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
  }
}

/** Responsividade para telas maiores que 1920px (Notebooks/telas FHD+) */
@media(min-width: 1921px) {
  .home-view-container {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
<template>
  <div class="home-view-container">
    <div class="home-content">
      <div class="bg-img-01">
        <section class="section-content">
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
            <img src="../assets/images/woman-headache.png" alt="Mulher com as mãos na cabeça">
            <div class="image-box-icon">
              <span>
                <font-awesome-icon icon="fa-solid fa-circle" size="2x" beat/>
              </span>
              <span>
                <font-awesome-icon icon="fa-solid fa-circle" size="2x" beat/>
              </span>
            </div>
          </div>
        </section>
      </div>
      <div class="bg-black">
        <section class="section-content">
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
      </div>
      <div class="bg-green">
        <section class="section-content">
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
            <img src="../assets/images/hand-drawn-life-coaching-illustration.png" alt="pessoa aconselhando outra">
          </div>
        </section>
      </div>
      <div class="bg-img-02">
        <section class="section-content">
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
          <div class="bullet-container">
            <div class="bullet-box">
              <bullet-item
                v-for="(item, index) in bulletItems1"
                :key="index"
                :text="item.text"
              />
            </div>
            <div class="bullet-img">
              <img src="../assets/images/woman-doctor-pointer.png" alt="Medica apontando para esquerda">
            </div>
          </div>
          <p class="paragraph-text">
            Dê o primeiro passo para viver sem se sentir refém da dor.
          </p>
          <div class="btn-input">
            <sall-button 
              :btnTextValue="label.btnSec2"
              :btnBgColor="colorBtn.btnSec1"
            />
          </div>
        </section>
      </div>
      <div class="bg-black">
        <section class="section-content">
          <div class="title-with-icon">
            <font-awesome-icon :icon="['fas', 'clipboard-list']" size="3x" style="color: #FA7F59;" />
            <h2 class="section-title text-white">O QUE VOCÊ ENCONTRARÁ NO EBOOK</h2>
          </div>
          <div class="summary-container">
            <div class="summary-box">
              <summary-mock/>
            </div>
            <div class="summary-img">
              <img class="mock-img" src="../assets/images/mock-agrupado.png" alt="Diferentes aparelhos eletronicos exibindo o e-book em suas telas">
            </div>
          </div>
          <h2 class="section-title text-white">PARA QUEM SERVE ESSE EBOOK?</h2>
          <div class="bullet-box">
            <bullet-item
              v-for="(item, index) in bulletItems2"
              :key="index"
              :text="item.text"
            />
          </div>
          <div class="feedback-section">
            <div class="feedback-section-title">
              <div class="feedback-star-icon">
                <font-awesome-icon
                  v-for="i in 5" :key="i"
                  :icon="['fas', 'star']"
                />
              </div>
              <h2 class="text-white">Estas são as avaliações de quem já adquiriu este e-book e aprendeu a lidar com a enxaqueca</h2>
            </div>
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
              :btnBgColor="colorBtn.btnSec2"
            />
          </div>
        </section>
      </div>
      <div class="bg-green">
        <section class="section-content">
          <h2 class="section-title text-white">ABA DE AUTORIDADE</h2>
          <div>
            PREENCHER COM DADOS ESTATÍSTICOS DOS BENEFÍCIOS GERADOS PELAS FONTES USADAS NA PRODUÇÃO DO MATERIAL
          </div>
        </section>
      </div>
      <div class="bg-img-02">
        <section class="section-content">
          <h2 class="section-title">BENEFÍCIOS DE SE COMPRAR O EBOOK</h2>
          <div class="benefits-container">
            <div class="benefits-gif">
              <img class="mock-gif" src="../assets/images/mockup-gif.gif" alt="">
            </div>
            <benefits-card />
          </div>
          <div class="price-box">
            <div>
              <p class="paragraph-text">ADIQUIRA AGORA MESMO O EBOOK</p>
              <p class="paragraph-text"><span class="text-emphasis">“COMO LIDAR COM A ENXAQUECA”</span>!</p>
            </div>
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
    </div>
    <FooterPage></FooterPage>
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
import FooterPage from '@/components/FooterPage.vue';
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
      BenefitsCard,
      FooterPage
    },
    data() {
        return {
          /**
           * Legendas para botões/inputs
           */
          label: {
            btnSec1:'ADQUIRIR O E-BOOK AGORA',
            btnSec2:'QUERO DAR O PRIMEIRO PASSO',
            btnSec3:'SABER LIDAR COM A ENXAQUECA',
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
            { textCard: 'Toma um chá "disso", resolve!' },
            { textCard: 'Só largar o celular que vai melhorar!' }
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
              rating: 5,
              userName: 'Mel Barbosa',
              feedback: 'Amei o e-book, recomendo! Já estou esperando pelos próximos temas!'
            },
            {
              rating: 5,
              userName: 'Lunisa Linay',
              feedback: 'O E-book me trouxe muitas informações que eu ainda não sabia. Gostei muito!'
            },
            {
              rating: 4,
              userName: 'Iane Bárbara',
              feedback: 'Gostei de tudo, o conteúdo foi apresentado de forma clara e organizada, além de ter um visual e design de qualidade.'
            },
            {
              rating: 5,
              userName: 'Jéssica Muniz',
              feedback: 'Gostei bastante da parte dos conhecimentos para autoavaliação. Isso tem melhorado minha relação com a enxaqueca.'
            },
          ]
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
  background: black;
  background: radial-gradient(circle, rgba(16, 2, 122, 1) 0%, rgba(0, 0, 0, 1) 100%);   
}
.bg-green {
  background-color: #007d48;
  background: radial-gradient(ellipse at bottom, rgba(130, 194, 81, 1) 0%, rgba(0, 125, 72, 1) 100%);
}
.section-content {
  display: flex;
  flex-direction: column;
  padding: 0 1.25rem;
  gap: 1rem;
  max-width: 1280px;
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
.title-with-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
  margin-top: 1rem;
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
  color: #de000030;
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
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
}
.quote-card-box img {
  width: 70%;
}
.bullet-container {
  display: flex;
  flex-direction: row;
}
.bullet-container .bullet-img {
  display: none;
}
.bullet-box {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}
.summary-img {
  display: none;
}
.feedback-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.feedback-section-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 60%;
  text-align: center;
  gap: 1rem;
}
.feedback-star-icon {
  font-size: 1.75rem;
  color: rgb(230, 197, 15);
}
.benefits-gif {
  display: none;
}
.price-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}
.price-box img {
  width: 100%;
}

/** Responsividade para telas até 768px (Tabletes) */
@media(min-width: 481px) and (max-width: 768px) {
  .home-view-container {
    width: 100%;
    max-width: 768px;
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
    justify-content: space-between;
    gap: 1rem;
    margin: 1.5rem;
  }
  .price-box img {
    width: 20rem;
  }
}

/** Responsividade para telas até 1366px (Notebooks/telas HD) */
@media (min-width: 769px) and (max-width: 1024px) {
  .home-view-container {
    width: 100%;
    max-width: 1024px;
  }
  .section-content {
    padding: 0 3rem;
    gap: 2rem;
  }
  .main-title {
    font-size: 3.25rem;
    margin: 3rem 0;
  }
  .section-title {
    font-size: 2rem;
    margin-top: 2rem;
  }
  .paragraph-text {
    font-size: 1.5rem;
  }
  .image-box img {
    position: relative;
    left: 10%;
    width: 25%;
  }
  .image-box-icon {
    position: absolute;
    top: 12%;
    left: 55%;
  }
  .image-box-icon span:first-of-type{
    padding-right: 1.75rem;
  }
  .text-box {
    width: 75%;
  }
  .simple-tip-card-box {
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    gap: 2rem;
  }
  .quote-card-box {
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    gap: 1rem;
  }
  .quote-card-box img {
    width: 50%;
  }
  .bullet-container {
    align-items: center;
  }
  .bullet-container .bullet-box {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 70%;
  } 
  .bullet-container .bullet-img {
    display: flex;
    justify-content: end;
    width: 30%;
  }
  .bullet-container .bullet-img img {
    width: 20rem;
  }
  .summary-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }
  .summary-img {
    display: block;
  }
  .mock-img {
    width: 42rem;
    height: auto;
  }
  .benefits-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .benefits-gif {
    display: block;
  }
  .mock-gif {
    width: 15rem;
    height: auto;
    border-radius: 1rem;
    margin-left: 2rem;
  }
  .price-box {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    margin: 1.5rem;
  }
  .price-box img {
    width: 20rem;
  }
}

/** Responsividade para telas até 1366px (Notebooks/telas HD+) */
@media (min-width: 1025px) and (max-width: 1367px) {
  .home-view-container {
    width: 100%;
    max-width: 1366px;
  }
  .section-content {
    padding: 0 3rem;
    gap: 2rem;
  }
  .main-title {
    font-size: 3.5rem;
    margin: 3rem 0;
  }
  .section-title {
    font-size: 2.25rem;
  }
  .paragraph-text {
    font-size: 1.75rem;
  }
  .image-box {
    position: absolute;
  }
  .image-box img {
    position: relative;
    left: 46rem;
    top: 13.1rem;
    width: 20rem;
  }
  .image-box-icon {
    position: relative;
    font-size: 1.375rem;
    left: 32rem;
    top: 7rem;
  }
  .image-box-icon span:first-of-type{
    padding-right: 1.75rem;
  }
  .text-box {
    width: 60%;
  }
  .simple-tip-card-box {
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    gap: 2rem;
  }
  .quote-card-box {
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    gap: 1rem;
  }
  .quote-card-box img {
    width: 50%;
  }
  .bullet-container {
    align-items: center;
  }
  .bullet-container .bullet-box {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 70%;
  } 
  .bullet-container .bullet-img {
    display: flex;
    justify-content: end;
    width: 30%;
  }
  .bullet-container .bullet-img img {
    width: 30rem;
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
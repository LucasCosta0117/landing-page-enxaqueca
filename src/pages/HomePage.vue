<template>
  <div class="home-view-container">
    <div class="home-content">
      <div class="section-container bg-img-01">
        <section class="section-content section-one">
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
            <img src="../assets/images/woman-headache.webp" alt="Mulher com as mãos na cabeça">
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
      <div class="section-container bg-black">
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
      <div class="section-container bg-green">
        <section class="section-content">
          <h2 class="section-title">Pare de Cair Nas Ciladas dos "Gurus de Internet"</h2>
          <div class="quote-card-box">
            <div class="quote-card-components">
              <quote-card
                v-for="(card, index) in quoteCards"
                :key="index"
                :textCard="card.textCard"
              />
            </div>
            <p class="paragraph-text text-white">
              Você não precisa de mais palpites sem fundamento.
              Precisa de conhecimento claro, direto e confiável para cuidar melhor de si.
            </p>
            <img src="../assets/images/hand-drawn-life-coaching-illustration.webp" alt="pessoa aconselhando outra">
          </div>
        </section>
      </div>
      <div class="section-container bg-img-02">
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
              <img src="../assets/images/woman-doctor-pointer.webp" alt="Medica apontando para esquerda">
            </div>
          </div>
          <div class="btn-input">
            <sall-button 
              :btnTextValue="label.btnSec2"
              :btnBgColor="colorBtn.btnSec1"
            />
          </div>
        </section>
      </div>
      <div class="section-container bg-black">
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
              <img class="mock-img" src="../assets/images/mock-agrupado.webp" alt="Diferentes aparelhos eletronicos exibindo o e-book em suas telas">
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
      <div class="section-container bg-green">
        <section class="section-content">
          <h2 class="section-title text-white">ABA DE AUTORIDADE</h2>
          <div>
            PREENCHER COM DADOS ESTATÍSTICOS DOS BENEFÍCIOS GERADOS PELAS FONTES USADAS NA PRODUÇÃO DO MATERIAL
          </div>
        </section>
      </div>
      <div class="section-container bg-img-02">
        <section class="section-content">
          <h2 class="section-title">BENEFÍCIOS DE SE COMPRAR O EBOOK</h2>
          <div class="benefits-container">
            <div class="benefits-component">
              <benefits-card />
            </div>
            <div class="price-box">
              <div class="price-box-img">
                <img src="../assets/images/price-descount.png" alt="Etiqueta de preço com desconto">
              </div>
              <div class="price-box-info">
                <div>
                  <p class="paragraph-text">ADIQUIRA AGORA MESMO O EBOOK</p>
                  <p class="paragraph-text"><span class="text-emphasis">“COMO LIDAR COM A ENXAQUECA”</span>!</p>
                </div>
                <div class="btn-input">
                  <sall-button
                    :btnTextValue="label.btnSec4"
                    :btnBgColor="colorBtn.btnSec3"
                  />
                </div>
              </div>
            </div>
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
            btnSec2: '#007edb',
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
.bg-img-01 {
  background-image: url('../assets/images/bg-01.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.bg-img-02 {
  background-image: url('../assets/images/bg-02.webp');
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
.section-container {
  width: 100%;
}
.section-content {
  display: flex;
  flex-direction: column;
  padding: 0 1.25rem;
  gap: 1rem;
}
.text-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.main-title {
  font-size: 2rem;
  font-weight: 600;
  margin: 1.5rem 0;
}
.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1rem;
}
.paragraph-text {
  font-size: 1.125rem;
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
.quote-card-components {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.quote-card-box img {
  width: 35rem;
}
.bullet-container {
  display: flex;
  flex-direction: row;
}
.bullet-img {
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
  text-align: center;
  padding: 0 1rem;
  gap: 1rem;
}
.feedback-star-icon {
  font-size: 1.75rem;
  color: rgb(230, 197, 15);
}
.price-box {
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  gap: 1rem;
}
.price-box-img img {
  width: 100%;
}

/* Responsividade - Aplicado o Material Design Breakpoints */

/**
 * Telas de tamanho pequeno/médio
 * ref code: sm
 * range: Celulares maiores e Tablet's (600px > < 960px)
 */
@media (min-width: 600px) {
  .section-content {
    padding: 0 2rem;
  }
  .main-title {
    font-size: 2.2rem;
  }
  .section-title {
    font-size: 1.75rem;
  }
  .paragraph-text {
    font-size: 1.25rem;
  }
  .image-box img {
    width: 50%;
  }
  .image-box-icon {
    font-size: 1.5rem;
    position: absolute;
    left: 40%;
  }
  .image-box-icon span:first-of-type{
    padding-right: 2.5rem;
  }
  .quote-card-components {
    flex-direction: row;
  }
  .feedback-section-title {
    width: 33rem;
  }
  .price-box {
    flex-direction: row-reverse;
    align-items: end;
  }
  .price-box-info {
    width: 50%;
  }
  .price-box-img {
    display: flex;
    justify-content: end;
    width: 50%;
  }
  .price-box-img img {
    width: 20rem;
  }
}
/**
 * Telas de tamanho médio
 * ref code: md
 * range: Tablet's maiores e Notebook's HD- (960px > < 1264px)
 */
@media (min-width: 960px) {
  .section-one {
    flex-direction: row;
  }
  .image-box {
    align-items: end;
    justify-content: start;
  }
  .image-box img {
    width: 65%;
  }
  .image-box-icon {
    font-size: 1rem;
    position: absolute;
    left: 21%;
    top: 42%;
  }
  .image-box-icon span:first-of-type{
    padding-right: 2rem;
  }
  .simple-tip-card-box {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .bullet-container {
    align-items: center;
  }
  .bullet-img {
    display: flex;
    justify-content: end;
    width: 30%;
  }
  .bullet-img img {
    width: 20rem;
  }
  .summary-container {
    display: flex;
    gap: 2rem;
  }
  .summary-img {
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .summary-img img {
    height: 30rem;
  }
  .benefits-container {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .price-box {
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
  .price-box-info {
    width: 100%;
    margin: 0 -2rem;
  }
  .price-box-img img {
    width: 25rem;
  }
}
/**
 * Telas de tamanho grande
 * ref code: lg
 * range: Notebooks e TV's menores (1264px > < 1904px)
 */
@media (min-width: 1264px) {
  .section-container {
    display: flex;
    justify-content: center;
  }
  .section-content {
    width: 1200px;
    padding: 0 1rem;
    gap: 2rem;
  }
  .section-one {
    margin: 3rem 0;
  }
  .section-title {
    font-size: 2rem;
  }
  .image-box {
    position: absolute;
    align-items: start;
  }
  .image-box img {
    position: relative;
    left: 42rem;
    top: 7.3rem;
    width: 20rem;
  }
  .image-box-icon {
    font-size: 1.125rem;
    position: relative;
    left: 28.5rem;
    top: 9.5rem;
  }
  .text-box {
    width: 60%;
  }
  .simple-tip-card-box {
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 3rem;
  }
  .benefits-container {
    justify-content: space-between;
  }
  .benefits-component {
    width: 60%;
  }
}
/**
 * Telas de tamanho extra grande
 * ref code: xl
 * range: Notebooks FHD+ e TV's de alta resolução (> 1904px)
 */
@media (min-width: 1904px) {}
</style>
<template>
  <div class="feedback-card-container">
    <div class="feedback-rating">
      <div>
        <font-awesome-icon
          v-for="ss in countSolidStart"
          :key="ss"
          class="start-color"
          :icon="['fas', 'star']"
        />
        <font-awesome-icon
          v-for="rs in countRegularStart"
          :key="rs"
          class="start-color"
          :icon="['far', 'star']"
        />
      </div>
      <div>
        <span class="name-user">{{ userName }}</span>
        <font-awesome-icon :icon="['fas', 'user']" />
      </div>
    </div>
    <div class="feedback-text">
      {{ getTruncatedText() }}
    </div>
  </div>
</template>
<script>
/**
 * Cria um card com informações e feedback's de usuários sobre o ebook
 */
export default {
  name: 'FeedbackCard',
  props: {
    rating: {
      type: Number,
      default: 5
    },
    userName: {
      type: String,
      default: 'Test Name'
    },
    feedback: {
      type: String,
      default: 'Feedback texto'
    }
  },
  data() {
    return {
      countSolidStart: 0,
      countRegularStart: 5,
    }
  },
  created() {
    this.countStars();
  },
  methods: {
    /**
     * Define o número de cada tipo de estrela à ser renderizada,
     * de acordo com o valor da avaliação do usuário.
     */
    countStars() {
      this.countSolidStart = this.rating;
      this.countRegularStart = (5 - this.rating);
    },
    /**
     * Retorna o máximo de caracteres que pode ser exibido, garantindo o layout do componente.
     */
    getTruncatedText() {
      const limChar = 280;
      return (this.feedback.length <= limChar) ? this.feedback : (this.feedback.substring(0, limChar) + '...');
    }
  }
}
</script>
<style scoped>
.feedback-card-container {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 12rem;
  border-radius: 0.5rem;
  padding: 1rem;
}
.feedback-rating {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.feedback-rating .name-user{
  font-size: 1rem;
  font-style: italic;
  font-weight: 500;
  margin-right: 0.5rem;
}
.feedback-text {
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
}
.start-color {
  color: rgb(230, 197, 15);
}

/* Responsividade - Aplicado o Material Design Breakpoints */

/**
 * Telas de tamanho pequeno/médio
 * ref code: sm
 * range: Celulares maiores e Tablet's (600px > < 960px)
 */
@media (min-width: 600px) {
  .feedback-rating .name-user {
    font-size: 1.25rem;
  }
  .feedback-text {
    font-size: 1.25rem;
  }
}
/**
 * Telas de tamanho médio
 * ref code: md
 * range: Tablet's maiores e Notebook's HD- (960px > < 1264px)
 */
@media (min-width: 960px) {
  .feedback-card-container {
    width: 30rem;
  }
  .feedback-rating .name-user {
    font-size: 1.25rem;
  }
  .feedback-text {
    font-size: 1.25rem;
  }
}
/**
 * Telas de tamanho grande
 * ref code: lg
 * range: Notebooks e TV's menores (1264px > < 1904px)
 */
@media (min-width: 1264px) {
  .feedback-card-container {
    width: 25rem;
  }
  .feedback-rating .name-user {
    font-size: 1.25rem;
  }
  .feedback-text {
    font-size: 1.25rem;
  }
}
/**
 * Telas de tamanho extra grande
 * ref code: xl
 * range: Notebooks FHD+ e TV's de alta resolução (> 1904px)
 */
@media (min-width: 1904px) {}
</style>
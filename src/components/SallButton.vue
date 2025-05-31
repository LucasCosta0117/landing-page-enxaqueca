<template>
  <div class="sall-btn-container">
    <a :href="seleUrl" target="_blank" >
      <input type="button" class="btn-input" :value="btnTextValue" />
    </a>
    <a :href="seleUrl">
      <font-awesome-icon icon="fa-solid fa-download" bounce />
    </a>
  </div>
</template>

<script>
/**
 * Componente responsável por direcionar o usuário para página de vendas do produto.
 */
export default {
    name: 'SallButton',
    props: {
      /**
       * Cor para o botão
       */
      btnTextColor: {
        type: String,
        default: '#FFFFFF'
      },
      /**
       * Cor para o botão
       */
      btnBgColor: {
        type: String,
        default: '#000000'
      },
      /**
       * Texto exibido no botão
       */
      btnTextValue: {
        type: String,
        default: 'COMPRAR AGORA'
      }
    },
    data() {
      return {
        /**
         * URL para realização da compra do produto
         */
        seleUrl: 'https://pay.kiwify.com.br/K69aXFM'
      }
    }
}
</script>

<style scoped>
.sall-btn-container {
  display: flex;
  gap: 1rem;
  justify-content: start;
  align-items: center;
}
.btn-input {
  background: v-bind(btnBgColor);
  color: v-bind(btnTextColor);
  min-width: 7.5rem;
  max-width: 10;
  height: 2.75rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.1875rem;
  box-shadow: 1px 1px 1px rgb(220, 220, 220);
}
.btn-input:hover {
  transform: scale(0.98);
  box-shadow: none;
  cursor: pointer;
}
.fa-bounce {
  /* display: none; */
  font-size: 2rem;
  color: v-bind(btnBgColor);
  animation-duration: 2.5s;
}

/* Responsividade - Aplicado o Material Design Breakpoints */

/**
 * Telas de tamanho pequeno/médio
 * ref code: sm
 * range: Celulares maiores e Tablet's (600px > < 960px)
 */
@media (min-width: 600px) {}
/**
 * Telas de tamanho médio
 * ref code: md
 * range: Tablet's maiores e Notebook's HD- (960px > < 1264px)
 */
@media (min-width: 960px) {}
/**
 * Telas de tamanho grande
 * ref code: lg
 * range: Notebooks e TV's menores (1264px > < 1904px)
 */
@media (min-width: 1264px) {}
/**
 * Telas de tamanho extra grande
 * ref code: xl
 * range: Notebooks FHD+ e TV's de alta resolução (> 1904px)
 */
@media (min-width: 1904px) {}
</style>
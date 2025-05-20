<template>
  <div class="benefits-card-container">
    <div class="benefits-title">
      <span>O QUE VOCÊ RECEBERÁ</span>
    </div>
    <div class="benefits-itens">
      <ul class="benefits-list">
        <li v-for="(item, index) in benefitsItem" :key="index">
          <span class="checkmark">✔</span> {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
/**
 * Cria um card listando os benefícios em adquirir o Ebook
 */
export default {
  name: 'BenefitsCard',
  props: {

  },
  data() {
    return {
      benefitsItem: [
        'ACESSO POR TEMPO ILIMITADO',
        'LEIA QUANDO QUISER EM QUALQUER LUGAR DO MUNDO',
        'IMPRIMA E TENHA A VERSÃO FÍSICA',
        'GARANTIA DE RECEBIMENTO DO PRODUTO',
        'GARANTIA INCONDICIONAL (CASH)',
       ' LINGUAGEM OBJETIVA E DE FÁCIL ENTENDIMENTO',
        'SATISFAÇÃO GARANTIDA',
        'INFORMAÇÕES REVISADAS E ATUALIZADAS',
        'RECEBA O EBOOK IMEDIATAMENTE APÓS A COMPRA'
      ]
    }
  }
}
</script>
<style scoped>
.benefits-card-container {
  display: flex;
  flex-direction: column;
  background-color: #007edb;
  color: white;
  border-radius: 0.5rem;
  width: 100%;
  box-shadow: rgba(255, 255, 255) -0.45rem 0.45rem;
}
.benefits-title {
  display: flex;
  background-color: #df5312;
  padding: 0.5rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.benefits-title span{
  color: white;
  font-weight: bold;
  font-size: 1.75rem;
  text-shadow: rgb(192, 189, 189) -0.25rem 0.25rem 1rem;
}
.benefits-itens {
  padding: 0.5rem 1rem;
}
.benefits-itens ul {
  list-style: none;
}
.benefits-itens li {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  font-size: 1.125rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.checkmark {
  color: #ffc107;
  font-size: 1.25rem;
  margin-right: 0.5rem;
}

/* Responsividade - Aplicado o Material Design Breakpoints */

/**
 * Telas de tamanho pequeno/médio
 * ref code: sm
 * range: Celulares maiores e Tablet's (600px > < 960px)
 */
@media (min-width: 600px) {
  .benefits-itens li {
    font-size: 1.375rem;
  }
}
/**
 * Telas de tamanho médio
 * ref code: md
 * range: Tablet's maiores e Notebook's HD- (960px > < 1264px)
 */
@media (min-width: 960px) {
  .benefits-card-container {
    width: 35rem;
  }
}
/**
 * Telas de tamanho grande
 * ref code: lg
 * range: Notebooks e TV's menores (1264px > < 1904px)
 */
@media (min-width: 1264px) {
  .benefits-card-container {
    width: 35rem;
  }
}
/**
 * Telas de tamanho extra grande
 * ref code: xl
 * range: Notebooks FHD+ e TV's de alta resolução (> 1904px)
 */
@media (min-width: 1904px) {

}
</style>
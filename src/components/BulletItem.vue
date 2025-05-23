<template>
  <div class="bullet-item-container">
    <font-awesome-icon icon="fa-solid fa-circle-check" />
    <p class="text-item">{{ text }}</p>
  </div>
</template>

<script>
/**
 * Cria um texto com item de marcadador
 */
export default {
    name: "BulletItem",
    props: {
      /**
       * Texto a ser renderizado
       */
      text: {
        required: true,
        default: 'a'
      }
        
    },
    data(){ 
        return {}
    }
}
</script>

<style scoped>
.bullet-item-container{
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  padding: 0 0.375rem;
  background-color: #ffffff;
}
.text-item {
  font-size: 1.125rem;
  font-weight: 500;
}

/* Responsividade - Aplicado o Material Design Breakpoints */

/**
 * Telas de tamanho pequeno/médio
 * ref code: sm
 * range: Celulares maiores e Tablet's (600px > < 960px)
 */
@media (min-width: 600px) {
  .text-item {
    font-size: 1.25rem;
    font-weight: 500;
  }
}
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
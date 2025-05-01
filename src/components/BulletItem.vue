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
  font-size: 1.25rem;
  font-weight: 500;
}

/** Responsividade para telas até 768px (Tabletes) */
@media(min-width: 481px) and (max-width: 768px) {
  .text-item {
    font-size: 1.5rem;
  }
}

/** Responsividade para telas até 1366px (Notebooks/telas HD) */
@media (min-width: 769px) and (max-width: 1024px) {
  .text-item {
    font-size: 1.5rem;
  }
}

/** Responsividade para telas até 1366px (Notebooks/telas HD) */
@media (min-width: 1025px) and (max-width: 1366px) {
  .text-item {
    font-size: 1.75rem;
  }
}
</style>
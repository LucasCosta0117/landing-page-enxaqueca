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
</style>
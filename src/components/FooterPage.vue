<template>
  <div class="footer-container">
    <p>Copyright © 2025 Todos os direitos reservados |</p>
    <p>Desenvolvido por <a :href="github" target="_blank">Lucas Costa</a></p>
  </div>
</template>
<script>
/**
 * Rodapé da página
 */
export default {
  name: 'FooterPage',
  props: {

  },
  data() {
    return {
      github: 'https://github.com/LucasCosta0117'
    }
  }
}
</script>
<style scoped>
.footer-container {
  background: radial-gradient(circle at right, rgb(16, 2, 122) 0%, rgb(0, 0, 0) 100%);
  padding: 1.5rem;
  font-weight: 400;
  font-size: 0.8rem;
  text-align: left;
  color: white;
}
.footer-container a {
  font-weight: 800;
  text-decoration: none;
  color: rgb(190, 190, 190);
}
</style>
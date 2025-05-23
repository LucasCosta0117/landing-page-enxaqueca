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
<template>
  <div class="footer-container">
    <div class="footer-section">
      <div class="footer-info">
        <div class="footer-logo">
          <img src="@/assets/images/logo_salus_books_2.png" alt="">
        </div>
        <p>Conteúdo digital com qualidade e responsabilidade.</p>
      </div>
      <div class="footer-contact">
        <span>Contacte-nos</span>
        <div class="contact-email">
          <font-awesome-icon :icon="['far', 'envelope']" />
          <p>suporte.salusbooks@gmail.com</p>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <p>Copyright © 2025 Todos os direitos reservados</p>
      <p>Developed by <a :href="github" target="_blank">Lucas Costa</a></p>
    </div>
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: radial-gradient(circle at right, rgb(16, 2, 122) 0%, rgb(0, 0, 0) 100%);
  padding: 1.5rem;
  font-weight: 400;
  font-size: 0.8rem;
  text-align: left;
  color: white;
}
.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.footer-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.footer-info p {
  margin-top: 0.5rem;
  font-size: 0.7rem;
  color: #55a28a;
  font-weight: 700;
  margin-left: 0.75rem;
  max-width: 9rem;
}
.footer-logo {
  display: flex;
}
.footer-logo img {
  height: 3rem;
  gap: 1rem;
}
.footer-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-contact span {
  font-size: 1rem;
  font-weight: 600;
  border-bottom: white 1px solid;
  text-transform: uppercase;
}
.contact-email {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  margin-top: 0.5rem;
}
.contact-email p {
  margin-left: 0.25rem;
}
.footer-copyright {
  font-size: 0.7rem;
}
.footer-copyright a {
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
@media (min-width: 600px) {
  .footer-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .footer-copyright {
    display: flex;
    justify-content: center;
    font-size: 0.7rem;
    gap: 1rem;
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
<template>
  <div class="home-view-container">
    <div class="home-content">
      <section id="section-01">
        test
      </section>
    </div>
  </div>
</template>

<script>
/**
 * Responsável por organizar todo o conteúdo da landing page
 */
export default {
    name: 'HomePage',
    data() {
        return {
            msgTest: 'Olá Lucas'
        }
    }

}
</script>

<style>
.home-view-container {
  /* Definições gerais */
}
.home-content {
  /* Def dos conteúdos, largura máxima e etc */
}
#section-01 {
  background-image: url('../assets/images/bg-01.png');
  height: 100vh;
}
</style>
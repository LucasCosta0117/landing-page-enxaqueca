<template>
  <nav class="top-nav-bar-container">
    <div class="nav-content">
      <div class="logo-box">
        <font-awesome-icon icon="fa-circle" size="2x" fade style="color: green"/>
      </div>
      <div class="btn-box">
        <sall-button/>
      </div>
    </div>
  </nav>
</template>

<script>
import SallButton from '../components/SallButton.vue'

/**
 * Barra de navegação superior da página.
 */
export default {
  name: 'TopNavBar',
  components: {
    SallButton
  },
  data() {
    return {
      viewControl: false,
    }
  }

}
</script>

<style scoped>
.top-nav-bar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    height: 3rem;
    box-shadow: 0px 1px 5px rgba(71, 71, 71, 0.8);
    background: #2D2F31;
    position: fixed;
}
.nav-content {
  display: flex;
  flex-direction: row;
  width: 1640px;
  padding: 0px 20px;
  justify-content: space-between;
}
</style>
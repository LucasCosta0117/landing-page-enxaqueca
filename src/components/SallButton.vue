<template>
    <div class="sall-btn-container">
        <a :href="seleUrl">
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
            seleUrl: 'https://www.google.com'
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
    font-size: 1rem;
    min-width: 7.5rem;
    max-width: 10;
    height: 2.75rem;
    padding: 0.5rem;
    border: none;
    border-radius: 0.1875rem;
    box-shadow: 0.0625rem 0.0625rem 0.125rem lightslategray;
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

/** Responsividade para telas até 768px (Tabletes) */
@media(min-width: 481px) and (max-width: 768px) {
  .btn-input {
    font-size: 1.25rem;
  }
}

/** Responsividade para telas até 1024px (Notebooks/telas HD) */
@media(min-width: 769px) and (max-width: 1024px) {
  .btn-input {
    font-size: 1.25rem;
  }
}

/** Responsividade para telas até 1366px (Notebooks/telas HD+) */
@media(min-width: 1025px) and (max-width: 1366px) {
  .btn-input {
    font-size: 1.25rem;
  }
}

/** Responsividade para telas até 1920px (Notebooks/telas FHD) */
@media(min-width: 1367px) and (max-width: 1920px) {
  .btn-input {
    font-size: 1.5rem;
  }
}

/** Responsividade para telas maiores que 1920px (Notebooks/telas FHD+) */
@media(min-width: 1921px) {
  .btn-input {
    font-size: 1.5rem;
  }
}
</style>
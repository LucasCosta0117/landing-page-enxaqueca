<template>
    <div class="quote-card-container">
        <div class="quote-card-icon">
            <font-awesome-icon
                icon="fa-solid fa-quote-left"
                :size="`${iconSize}x`"
            />
        </div>
        <p class="quote-card-text" >"{{ getTruncatedText() }}"</p>
    </div>
</template>

<script>
/**
 * Cria um cartão com uma pequena citação
 */
export default {
    name: 'QuoteCard',
    props: {
        /**
         * Tamanho do icone com base na prop size da lib FontAwesomeIcon
         */
        iconSize: {
            type: Number,
            required: false,
            default: 3
        },
        /**
         * Texto a ser exibido no card
         */
        textCard: {
            type: String,
            required: true,
            default: ''
        }
    },
    data() {
        return {}
    },
    methods: {
        /**
         * Retorna o máximo de caracteres que pode ser exibido, garantindo o layout do componente.
         */
        getTruncatedText() {
            const limChar = 100;
            return (this.textCard.length <= limChar) ? this.textCard : (this.textCard.substring(0, limChar) + '...');
        }
    }
}
</script>

<style scoped>
.quote-card-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 0.5rem;
    padding: 1rem;
    width: 100%;
    height: 8rem;
}
.quote-card-icon {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    height: 100%;
    width: 20%;
}
.quote-card-text {
    font-size: 1.25rem;
    font-weight: 400;
    padding-right: 1rem;
    text-align: right;
    border-right: lightgray solid 2px;
}

/** Responsividade para telas até 768px (Tabletes) */
@media(min-width: 481px) and (max-width: 768px) {
  .quote-card-text {
    font-size: 1.5rem;
  }
}

/** Responsividade para telas até 1366px (Notebooks/telas HD) */
@media (min-width: 769px) and (max-width: 1024px) {
    .quote-card-container {
        height: 5rem;
        width: 49%;
    }
    .quote-card-container:hover {
        scale: 0.98;
        transition: scale 0.2s linear;
    }
    .quote-card-text {
        font-size: 1.5rem;
    }
}

/** Responsividade para telas até 1366px (Notebooks/telas HD) */
@media (min-width: 1025px) and (max-width: 1366px) {
    .quote-card-container {
        height: 5rem;
        width: 49%;
    }
    .quote-card-container:hover {
        scale: 0.98;
        transition: scale 0.2s linear;
    }
    .quote-card-text {
        font-size: 1.75rem;
    }
}
</style>
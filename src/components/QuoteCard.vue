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
            return (this.textCard.length <= 100) ? this.textCard : (this.textCard.substring(0, 100) + '...');
        }
    }
}
</script>

<style scoped>
.quote-card-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #ffffff;
    border-radius: 0.5rem;
    padding: 1rem;
    width: 100%;
    height: 12rem;
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
    font-size: 1.675rem;
    font-weight: 400;
    margin: 1rem;
    text-align: center;
    border-right: lightgray solid 2px;
}
</style>
<template>
  <div class="tip-card-container">
    <span class="tip-card-icon">
        <font-awesome-icon
            :icon="iconName"
            :size="`${iconSize}x`"
            :class="iconAnimation"
        />
    </span>
    <p class="tip-card-text">{{ getTruncatedText() }}</p>
  </div>
</template>

<script>
/**
 * Cria um pequeno card com um icone da libery FontAwesomeIcon, e
 * um texto com número limitado de caracteres.
 */
export default {
    name: 'SimpleTipCard',
    props: {
        /**
         * Nome do icone com base na lib FontAwesomeIcon
         */
        iconName: {
            type: String,
            required: true,
            default: 'stethoscope'
        },
        /**
         * Tamanho do icone com base na prop size da lib FontAwesomeIcon
         */
        iconSize: {
            type: Number,
            required: false,
            default: 3
        },
        /**
         * Nome da classe para animação com base nas opções da lib FontAwesomeIcon
         */
        iconAnimation: {
            type: String,
            required: false,
            default: ''
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
.tip-card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 0.5rem;
    padding: 1rem;
    width: 100%;
    height: 12rem;
}
.tip-card-icon {
    display: flex;
    align-items: center;
    height: 50%;
}
.tip-card-text {
    font-size: 1.25rem;
    font-weight: 400;
    margin-top: 1rem;
    text-align: center;
}
</style>
<template>
    <div class="tip-card-container">
        <span class="tip-card-icon">
            <font-awesome-icon :icon="iconName" :size="`${iconSize}x`" :class="iconAnimation" />
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
    height: 12rem;
}
.tip-card-container:hover {
    scale: 1.05;
    transition: scale 0.3s linear;
}
.tip-card-icon {
    display: flex;
    align-items: center;
    height: 50%;
}
.tip-card-text {
    font-size: 1.125rem;
    font-weight: 400;
    margin-top: 1rem;
    text-align: center;
}

/* Responsividade - Aplicado o Material Design Breakpoints */

/**
 * Telas de tamanho pequeno/médio
 * ref code: sm
 * range: Celulares maiores e Tablet's (600px > < 960px)
 */
@media (min-width: 600px) {
    .tip-card-text {
        font-size: 1.25rem;
    }
}

/**
 * Telas de tamanho médio
 * ref code: md
 * range: Tablet's maiores e Notebook's HD- (960px > < 1264px)
 */
@media (min-width: 960px) {
    .tip-card-container {
        width: 48%;
    }
}

/**
 * Telas de tamanho grande
 * ref code: lg
 * range: Notebooks e TV's menores (1264px > < 1904px)
 */
@media (min-width: 1264px) {
    .tip-card-container {
        height: 18rem;
        width: 48%;
    }

    .tip-card-container:hover {
        scale: 1.05;
        transition: scale 0.5s linear;
    }
}

/**
 * Telas de tamanho extra grande
 * ref code: xl
 * range: Notebooks FHD+ e TV's de alta resolução (> 1904px)
 */
@media (min-width: 1904px) {
    
}
</style>
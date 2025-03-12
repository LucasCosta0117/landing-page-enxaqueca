<template>
    <a :href="seleUrl">
        <input type="button" class="btn-input" :value="btnTextValue" />
    </a>
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
</style>
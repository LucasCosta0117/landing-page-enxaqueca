<template>
    <a :href="seleUrl">
        <input type="button" class="sall-btn" :value="btnTextValue" />
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
            default: '#DE0000'
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

<style>
.sall-btn {
    background: v-bind(btnBgColor);
    color: v-bind(btnTextColor);
    min-width: 230px;
    height: 45px;
    padding: 10px;
    border: none;
    border-radius: 3px;
    font-size: 24px;
    box-shadow: 1px 1px 2px lightslategray;
}
.sall-btn:hover {
    transform: scale(0.98);
    box-shadow: none;
    cursor: pointer;
}
</style>
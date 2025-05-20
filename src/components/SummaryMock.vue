<template>
    <div class="summary-mock-container">
        <ul class="summary-list">
            <li 
                v-for="(item, key) in summaryItens" 
                :key="key"
            >
                <b>{{ key + 1 }}.</b> {{ item }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'SummaryMock',
    data() {
        return{
            summaryItens: [
                'VOCÊ NÃO ESTÁ SÓ (QUANTAS PESSOAS SOFREM COM ENXAQUECA NO BRASIL?)',
                'COMO EU SEI QUE SOFRO DE ENXAQUECA? (DEFINIÇÃO E DIAGNÓSTICO)',
                'QUAL TIPO DE ENXAQUECA ME ATINGE? (CLASSIFICAÇÃO DA ENXAQUECA)',
                'COMO ME CURAR? (HÁ CURA PARA A ENXAQUECA?)',
                'COMO TRATAR? (CONTROLE DA ENXAQUECA)',
                'QUAIS HÁBITOS DE VIDA PODEM ME AJUDAR? (TRATAMENTOS SEM USO DE MEDICAMENTOS)',
                'PRECISO MESMO DE ALGUM REMÉDIO? (TRATAMENTOS COM USO DE MEDICAMENTOS)',
                'ACOMPANHAMENTO PSICOLÓGICO',
                'CONHECIMENTOS BÁSICOS PARA A AUTOAVALIAÇÃO E ACOMPANHAMENTO',
                'COMO IDENTIFICAR UM BOM MÉDICO?',
                'BÔNUS'
            ]
        }
    }
}
</script>
<style scoped>
.summary-mock-container {
    background: linear-gradient(135deg, rgba(249,150,108,1) 0%, rgba(247,175,144,1) 45%, rgba(255,208,188,1) 100%);
    border-radius: 0.5rem;
    padding: 2rem;
}
.summary-list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 0.5rem;
}
.summary-list:only-child {
    font-size: 1.125rem;
    font-weight: 500;
}

/* Responsividade - Aplicado o Material Design Breakpoints */

/**
 * Telas de tamanho pequeno/médio
 * ref code: sm
 * range: Celulares maiores e Tablet's (600px > < 960px)
 */
@media (min-width: 600px) {
  .summary-list:only-child {
    font-size: 1.25rem;
  }
}
/**
 * Telas de tamanho médio
 * ref code: md
 * range: Tablet's maiores e Notebook's HD- (960px > < 1264px)
 */
@media (min-width: 960px) {
    .summary-mock-container {
        width: 30rem;
    }
  .summary-list:only-child {
    font-size: 1.25rem;
  }
}
/**
 * Telas de tamanho grande
 * ref code: lg
 * range: Notebooks e TV's menores (1264px > < 1904px)
 */
@media (min-width: 1264px) {
    .summary-mock-container {
        width: 40rem;
    }
    .summary-list:only-child {
    font-size: 1.25rem;
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
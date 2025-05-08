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

/** Responsividade para telas até 768px (Tabletes) */
@media(min-width: 481px) and (max-width: 768px) {
  .summary-list:only-child {
    font-size: 1.25rem;
  }
}

/** Responsividade para telas até 1024px (Tablets/Notebooks/telas HD) */
@media (min-width: 769px) and (max-width: 1024px) {
    .summary-mock-container {
        width: 30rem;
    }
  .summary-list:only-child {
    font-size: 1.25rem;
  }
}

/** Responsividade para telas até 1366px (Notebooks/telas HD+) */
@media (min-width: 1025px) and (max-width: 1366px) {
    .summary-mock-container {
        width: 40rem;
    }
    .summary-list:only-child {
    font-size: 1.25rem;
    }
}
</style>
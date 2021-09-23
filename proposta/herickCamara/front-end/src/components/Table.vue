<template>
<div id="table">
  <div hc-dev>
    <div>
      <input placeholder="Buscar" type="text"><p class='search'><i >icon</i></p> 
    </div>
    <div>
      <button>Exporta</button>
      <button>Imprimir</button>
    </div>
  </div>
      <table class="table">
      <thead>
        <tr class="tr-th-1">
          <th colspan="2" rowspan="2">Data</th>
          <th colspan="2" rowspan="2">Taxa(%a.a)</th>
          <th colspan="2" rowspan="2">Fator diario</th>
          <th colspan="2">Base de calculo</th>
          <th colspan="5">Estatisticas</th>
        </tr>
        <tr class="tr-th-2">
          <th>Finaceiro(R$)</th>
          <th>Operaçoes</th>
          <th>Media</th>
          <th>Mediana</th>
          <th>Moda</th>
          <th>Desvio padrão</th>
          <th>Indice de curtose</th>
        </tr>
      </thead>
    

      <tbody>
      
        <tr  v-for="(r,i) in registros" :key="(r.id= i)" >
          <td
            
            colspan="2"
          >
            {{ r.dataCotacao }}
          </td>
          <td
            
            colspan="2"
          >
            {{ r.taxaAnual }}
          </td>
          <td
            
            colspan="2"
          >
            {{ r.fatorDiario }}
          </td>
          <td
            
            colspan="1"
          >
            {{ r.financeiro }}
          </td>
          <td
            
            colspan="1"
          >
            {{ r.qtdOperacoes }}
          </td>
          <td
            
            colspan="1"
          >
            {{ r.media }}
          </td>
          <td
            
            colspan="1"
          >
            {{ r.mediana }}
          </td>
          <td
            
            colspan="1"
          >
            {{ r.moda }}
          </td>
          <td
            
            colspan="1"
          >
            {{ r.desvioPadrao }}
          </td>
          <td
            
            colspan="1"
          >
            {{ r.indiceCurtose }}
          </td>
        </tr>

      </tbody>
    </table>
</div>
  
</template>

<script>
import '../../scss/table/table.css'

export default {
 props:{ 
   registros:"",
 },
 mounted(){
   
 }
 };
</script>

<style>
  </style>

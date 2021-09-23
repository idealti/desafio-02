<template>
  <div id="app">
      <Header />
        <aside>
          <div class="input">
          <input type="date" lang="pt-br" v-model="startData" />
          <input type="date" v-model="endData"   />

          </div>
          <div class="button">
            <button @click="clearInput" >Limpar</button>
            <button @click="Filter" >Consultar</button>
          </div>
        </aside>

        <Table :registros="registros"  />
        <footer>Silic</footer>
  </div>
</template>

<script>
import Registros from './serve/register'
import '../scss/main.css'
import Header from './components/Header.vue'
import Table from './components/Table.vue'
 
export default {
    components:
    { 
      Header, 
      Table, 
    },
    data(){
      return {
        allData:{}, 
        startData: '01/01/2010',
        endData: '02/01/2020',
        registros: [],


      }
    },

  methods: {
    //======================= Consumindo api json============================
    getJSON1(){
       Registros.lista()
        .then((res) => this.allData = res.data).then(r=> this.registros = r.registros)      
    },
//=========================== function ==================================
    Filter(){
      
      let start= this.startData.split('-')
      let end= this.endData.split('-')
      let registros= this.allData.registros

      start = `${start[2]}/${start[1]}/${start[0]}`
      end = `${end[2]}/${end[1]}/${end[0]}`
      
      this.retorno(registros,start, end)
    },
    converteData(d) {
            const dataSplit = d.split("/");
           const novaData = new Date(
             parseInt(dataSplit[2], 10),
            parseInt(dataSplit[1], 10) - 1,
            parseInt(dataSplit[0], 10)
          );
        
           return novaData 
          
       },

      async retorno(registros, start,end){
        if(start == null && end==null)
          return true
        else{
          start = this.converteData(start)
          end = this.converteData(end)
     
          registros = await registros.filter(e => this.converteData(e.dataCotacao) >= start && this.converteData(e.dataCotacao) <= end)
          
          this.registros = registros
        }
       },
      async clearInput(){
       startData='01/01/2010'
        endData= '02/01/2020'
    },
    },
  computed: {
   
    
  },
 async mounted() {
    //  await this.getJSON()
     await this.getJSON1()
    // this.filtro();
    // this.addR()
    
  }
      
        
      

}
</script>
  


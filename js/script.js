
  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        data:[],
      }
    },
    methods: {
        getData(){
            axios.get('./server.php').then((res)=>{
                // console.log(res.data);
                const data = JSON.parse(res.data)
                this.data = data;
            })
        },
        delete(i){

        }
        
    },
    created(){
        this.getData()
      }
    
  }).mount('#app')


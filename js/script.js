var app=new Vue({

    el:'#app', /* nombre del elemento en el html */
    
    data:{
        productos:[] /* arreglo para los productos*/
    },
    created:function(){
        this.leerServicio();
    },
    methods:{
        leerServicio:function(){
          var api='https://pedrojm.000webhostapp.com/productos.php';
           axios.get(api)
           .then(function(res){
               console.log(res.data);
               app.productos=res.data;
           })
        }
    }

});
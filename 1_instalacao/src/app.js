const MyNameApp = {
    data(){
        return{
             nome: "",
             idade: 30,
             input_name: ""
        }
    },
    methods: {
        submitForm(e){

                e.preventDefault();

               console.log(this.input_name);

               this.nome = this.input_name
                
        }
    }
}

Vue.createApp(MyNameApp).mount("#mensagem")


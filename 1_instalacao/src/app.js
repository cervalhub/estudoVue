const MyNameApp = {
    data(){
        return{
             nome: "Matheus",
             idade: 30
        }
    }
}

Vue.createApp(MyNameApp).mount("#mensagem")


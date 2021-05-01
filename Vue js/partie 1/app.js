new Vue({
    el:'#app',
    /* template: "<h2> {{ nbPartie }}</p>", */ /* écrase le contenu de l'autre contenu dans la div */
    data:{
        //1
        message: "Hello Vue !",
        //2
         lien: 'https://ecam.be',
         mycolor: 'green',
         mysize: '20pt',
         seen : false,
        //3
         todos : [{
                 text: "Quinoa"
             },
             {
                 text: "Voc"
             },
             {
                 text: "Sport"
             }],
        //4
        txtBouton : "Coucou",

        //5
        model: "Test model",

        },
         
    methods: {
        changeMessage: function(){
            this.txtBouton = "Hello"
        }
    }
})

new Vue({
    el:'#app2',
    template: "<h2> {{ nbPartie }}</p>",  /* écrase le contenu HTML dans la div */
    data:{
        //6 
        nbPartie: "6",
         },
})

Vue.component("composant", {
    template: "<div>le composant enfant</div>"
})

new Vue({
    el: "#app3",
    template: "<h2>7<div>Composant parent contient <composant></composant></div></h2>",
    data: {

    }
})
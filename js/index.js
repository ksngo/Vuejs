

var app = new Vue({
    el:"#app",
    data:{
        message:"Hello Vue!"
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message:"you loaded this page on" + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el:"#app-4",
    data:{
        todos: [
            {text:"learn javascript"},
            {text:"learn vue"},
            {text: "build something"}
        ]
    }
})

var app5 = new Vue({
    el:"#app-5",
    data:{
        message: "temporary only"
    },
    methods:{
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        } 
        
    }
})

var app6 =  new Vue({
    el:"#app-6",
    data:{
        message:"Hello Vue!"
    }
})


Vue.component("vue-component",{
    template: "<li> This is a vue component.</li>"
})

var app7 = new Vue({
    el: "#app-7"
})


Vue.component("vue-component-ex2",{
    props: ['prop'],
    template: "<li> {{prop.text}}</li>"
})

var app8 =  new Vue({
    el: "#app-8",
    data:{
        my_list: [ {id:0, text:"coconuts"}, {id:1, text:"pinapple"}, {id:2, text:"apple"}]
    }
})
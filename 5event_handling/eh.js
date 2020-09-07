
var example1 = new Vue({
    el : "#app",
    data: {
        counter : 0,
        count : 0,
        message : "Your message will show here.",
        input : "Enter your message",
        warning : "",
        warning2 : ""
    },

    methods: {
        greet : function(event){
            this.count+=1
            //event is native DOM event 
            alert(event.target.tagName) //button
            alert(event) // [object Mouseevent]
            alert(event.target) // [object HTMLButtonElement]
        },

        say : function(msg){
            alert(msg)
        },

        reveal : function(){
            this.message = this.input
        },

        on_keyup_enter : function(){
            this.warning = "You have pressed enter!"
        },

        on_keyup_pgdn : function(){
            this.warning2 = " You have pressed pgdn!"
        }
    }
})
new Vue({

    el : "#app",
    data: {
        trueOrFalse: true
    }
})

new Vue({

    el: "#app2",
    
})

new Vue({
    el : "#app3",
    data : {
        type : 'D'
    }
})

new Vue({
    el :"#app4",
    data : {
        loginType : "username"
    },
    methods : {
        toggle : function(){
            if(this.loginType == "username"){
                this.loginType = "email"
            } else {
                this.loginType = "username"
            }
        }
    }
})


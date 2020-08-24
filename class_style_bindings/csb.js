
//<!-- Binding HTML classes -->
    // object inline
var app = new Vue({
    el: "#app",
    data: {
        isActive : true
    }
})

    // object not inline

var app2 = new Vue({
    el: "#app2",
    data: {
        classObject : {
            active : true
        }
    }
})

    // bind to computed object 

var app3 =  new Vue({
    el: "#app3",
    data:{
        isActive : true

    },
    computed:{
        classObject:function(){
            return {
                active : this.isActive
            }
        }
    }
})

    //<!--array syntax-->

var app4 = new Vue({
    el: "#app4",
    data:{
        activeClass: "active",
        errorClass : "text-danger",
        isActive : true
    }
})

//<!--binding inline style-->

var app5 = new Vue({
    el: "#app5",
    data:{
        myStyle : "color: red; background-color: yellow;",
        mycolor : "gold",
        mybgcolor : "silver",
        myStyleObject : {
            color: "green" ,
            "background-color": "blue"
        }
    }
})


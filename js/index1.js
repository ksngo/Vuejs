
// properties in data are reactive when the instance(e.g. foo) was created

var obj = { foo : "fool"}

//Object.freeze(obj) //prevents existing properties from being changed; reactivity system can't track changes

 var app = new Vue({
     el : "#app",
     data : obj 
 })
 
 //using prefix $ to differentiate from user-defined properties
 console.log( app.$el === document.getElementById("app")) //true
 console.log(app.$data) // {foo :"fool"}
 console.log(app.$data.foo) //fool
 console.log(app.foo) //fool

 //$watch is an instance method
 app.$watch("foo", function(){ //function runs when app.foo changes
     app.$el.style.color = "red"
     console.log("hello")
 })


 // -----------instance lifecycle hook 
 //gives users to run code when an instance is created
 //created hook

 var app_2 = new Vue({
     el: "#app2",
     data: {
         a : 99,
         b : 88 ,
         c : [{number: 1},{number: 2}, {number: 3}],
         d : { text1: "one", text2: "two", text3: "three"}
     },
     created : function(){
         console.log("d.text1 is "+ this.d.text1 +'\n'+"c[0] is "+this.c[0])
     }
 })

 //-------------------Interpolations(raw html)

 var app_3 = new Vue({
     el: "#app3",
     data : {
         rawhtml : "<span style='color:red;'>Hello World</span> "
     }
 })

 //-------------------Interpolations(attribute)

 var app_4 = new Vue({
     el:"#app4",
     data : {
        dynamicId : "my_id2"
     }
 })

 //---------------------Interpolations(using javascript expression-->

 var app_5 = new Vue({
     el: "#app5",
     data: {
         number: 5,
         ok: true,
         message: "Hello world"

     }
 })

 //----------------------directive (v-)-->
 //------directive(v-) taking argument denoted by colon(:)-->

 var app_6 =  new Vue({
     el: "#app6",
     data:{
         appear:true,
         attribute_name: "href",
         url: "https://www.google.com/"
         
     },
     methods: {
        change: function(){
            document.getElementsByTagName("a")[0].style.color = "pink"
        }
    }
 })

 //<!-----------directive Shorthands-->

 var app_7 = new Vue({
     el: "#app7",
     data: {
         url : "https://www.youtube.com/"

     },
     methods:{
         doSomething : function(){
             this.$el.style.backgroundColor = "pink"
         }
     }
 })
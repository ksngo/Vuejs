
// -----------------computed property(default getter-only)

var app = new Vue({
    el: "#app",
    data: {
        foo : "hello"
       
    },
    computed: {
        reverse_func : function(){
            return this.foo.split('').reverse().join('')
        }
    },

    //<!--------------------computed caching vs methods-->
    //computed properties are cached based and will only reevaluate when 
    //its reactive dependencies have changed
    //method invocation will always run the function when re-render
    methods:{
        reverse_mtd : function(){
            return this.foo.split('').reverse().join('')
        }
    }

    

})


//---------------------computed setter

let newValue ="Johnny Walker"

var app2 = new Vue({
    el: "#app2",
    data: {
        firstName : "ngo",
        lastName : "kee siang"
    },
    computed: {
        fullName_func: {
            get: function(){
                return this.firstName + " " + this.lastName
            },

            //in console.log(app2.fullName_func = "Johnny Walker")
            set: function(newValue){
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length -1]
            } 
        }
    }
})

app2.fullName_func = "Sun Zhong Shan"


//------------------------watcher instead of computed


var app3 =  new Vue({
    el: "#app3",
    data: {
        question: "",
        answer:"Please insert a question."
    },
    watch: {
        question: function(){
            this.answer = "Waiting for you to stop typing..."
            this.debouncedGetAnswer()
        }
    },
    created: function(){
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods:{
        getAnswer : function(){
            if(this.question.indexOf('?') === -1){ 
                this.answer = 'Questions need a question mark :)'
                return
            }

            this.answer ="thinking..."
            var vm = this

            axios.get("https://yesno.wtf/api").then(function(response){
                console.log(response)
                console.log(response.data)
                console.log(response.data.answer)

                vm.answer =  response.data.answer
            }).catch(function(error){
                vm.answer="Error! cannot reach API!"+error
            })
        }
        
    }

})
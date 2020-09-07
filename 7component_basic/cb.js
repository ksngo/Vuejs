


Vue.component('my_button', {
    data: function(){
        return {count:0}
    },
    
    template : '<button v-on:click="count++">You clicked me {{count}} times </button>'

})

new Vue({ 
    el : "#app",


})



// Normally without using Vue.component

new Vue({
    el : "#app2",
    data : {
        count:0
    },
    methods : {
        count_method : function(){
            this.count++
        }
    }
})

//end 


//Cannot work!!!!!
 /*        Vue.component('my_button3', {
            
            template : '<button v-on:click="count_method">You clicked me {{count}} times </button>'

        })

        new Vue({ 
            el : "#app3",
            data : {
                count:0
            },
            methods : {
                count_method : function(){
                    this.count++
                }
            }


        })
    */
// end


// Introducing props

Vue.component("prop_example", {
    props : ["clip","clipper"],
    template : "<h3> {{clip}} : {{ clipper }} </h3>"
})

new Vue({
    el: "#app_prop",
    data : {
        my_array : [
            { id : "audi" ,  desc : "German car"},
            { id : "Ford" , desc : "American Car"},
            { id : "Toyota" , desc : "Japan Car"}
        ]
    }
})

//introducing props with single root element
//(1) a longer template with ` `
//(2) named a class  equal to the single root element name
//(3) in html, as usual need to v-bind:single_element to item in my_array
//(4) in Vue.component template, simply refer to each object by single_element.desc , single_element.fact etc , single_element.id etc..


Vue.component("prop_example2", {
    props: ["single_element"],
    template : 
    `
    <div class="prop_example2">
        <h3> {{ single_element.id}} </h3>
        <div v-html="single_element.desc"></div>
        <div v-html="single_element.fact"></div>
        <button v-on:click="$emit('enlarge_font')"> Enlarge </button>  
        <button v-on:click="$emit('smaller_font' , 0.5)"> Smaller </button>
        <button v-on:click="$emit('change_color')"> Color </button>
        <span> color is {{button_css}} </span>
    </div>

    `
    //<<<<<--------------   
})

new Vue({
    el: "#app_prop2",
    data : {
        my_array : [
            { id : "audi" ,  desc : "German car", fact : "Singapore, NZ"},
            { id : "Ford" , desc : "American Car", fact : "LA, Chicago"},
            { id : "Toyota" , desc : "Japan Car" , fact : "Tokyo"}
        ],
        button_css : "red",
        postFontSize : 2   //<<<-------------adjust fontsize
        
    },
    methods : {
        switch_color :  function(){
            alert(this.button_css)
            if (this.button_css == "red") this.button_css = "yellow"
            else this.button_css = "red"
        }

    }
    
})

// Using v-model on Components

Vue.component("my_input", {
    props : ["value"],
    template : `

        <input 
        
        v-bind:value="value"
        v-on:input="$emit('input' , $event.target.value)"
        
        > </input>
    `
})

new Vue({
    el: "#app4",
    data : {
        searchText :""
    }

})

//using slot in component template
//allows to fill in text between the custom component made tags <alert-box>

Vue.component('alert-box', {
    template: `
      <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
      </div>
    `
  })

new Vue({
    el: "#app5"

})
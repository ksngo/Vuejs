
// global registration

Vue.component("my-component", {
    props : [ "my_prop1", "my_prop2"],
    data : function(){
        return {count:0}
    },
    template : 
    `
    <div class="my-component"> 
        <h1> {{my_prop1}} </h1>
        <button v-on:click="count++"> {{my_prop2}}, Clicked me {{count}} times! </button>
    </div>
    `
})

new Vue({
    el: "#app"
})

new Vue({
    el: "#app2"
})

//local registration

var componentA = {
    props : [ "my_prop1", "my_prop2"],
    data : function(){
        return {count:0}
    },
    template : 
    `
    <div class="my-component"> 
        <h1> {{my_prop1}} </h1>
        <button v-on:click="count++"> {{my_prop2}}, Clicked me {{count}} times! </button>
    </div>
    `
}

new Vue({
    el : "#app3",
    components : {
        "component-a" : componentA
    }
})

// v-bind:my_prop1 = " {object} or  [array]   or number  or VueObjectInstance(e.g. post.title) "
// using global registration example above for #app4

new Vue({
    el: "#app4",
    data : {
        post : {
            title : "post.title example"
        }
    }
})

//Props : one-way data flow

var componentB = {
    props : ["initial-counter"],
    data : function(){
        return{
            counter: this.initialCounter
        }
    },
    template : 
    `
    <div class="component-b">
        <br><br><br>
        <h3> {{counter}} </h3>
        <slot></slot>
        <br><br><br>
    </div>
    `
}

new Vue({
    el: "#app5",
    components:{
        "component-b" : componentB
    }
})

var componentC = {
    props: ["entry"],
    data : function(){
        return { counter : this.entry}
    },
    methods: {
        normalisedSize :  function(){
            return this.counter = this.counter.toLowerCase()+"?"
        }
    },
    template :
    `
        <div class="component-c">
            <input v-model="counter">
            <span> {{counter}} </span>
            <button v-on:click="normalisedSize"> Size </button>
        </div>
    `
}

new Vue({
    el: "#app6",
    components:{
        "component-c" : componentC
    }
})

//None-Prop Attributes

var componentD ={
    
    template: "<h3> <slot>Check the browser that npa='Non Prop Attribute test' is still in the tag h3</slot> </h3>"
}

var app7 = new Vue({
    el :"#app7",
    components:{
        "component-d" :componentD
    }
})


// Not clear inheritAttrs:false & v-bind='$attrs' usage

var componentE ={
    inheritAttrs:false,
    template: "<h3 v-bind='$attrs'> <slot>Check the browser that npa='Non Prop Attribute test' is still in the tag h3</slot> </h3>"
}

var app8 = new Vue({
    el :"#app8",
    components:{
        "component-e" :componentE
    }
})


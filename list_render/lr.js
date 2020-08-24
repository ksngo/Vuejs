

var app = new Vue({
    el:"#app",
    data: {
        items : ["hello",  "world"] ,

        items2 : [
            {person : "john"},
            {person : "terry"},
            {person : "andy"}
        ],


        //array []


        // title and author are properties of object
        object : {
            title: "properties of object",
            author: "keesiang"
        }
    }
})


//**  Mutation methods */
app.items.push("many");
app.items.pop();
//app.items.shift()
//unsift()
//splice()
//sort()
//reverse()

//** non mutating methods */
//do not mutate original array but always return a new array

//filter()
//concat()
//slice()
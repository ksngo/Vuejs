
new Vue({
    el: "#app",
    data: {
        message : "",
        checked : true,
        choice : [],
        radio_choice : "",
        option_choice : "",
        option_choice_multi : [],
        selected : "Audi 2020",
        options : [
            {text : "Audi" , value : "Audi 2020"},
            {text : "BMW" , value : "BMW 2020"},
            {text : "Mercedes",  value : "Mercs 2020"}
        ],
        wt_test_lazy : "",
        test_lazy : ""
    }
})
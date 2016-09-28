var ChuckNorris = function(){
    this.lastFact = "";
    this.fetchFact = function(){
        a.jax({
            method: "get",
            url:"https://advanced-js.herokuapp.com/chuck_norris",
            success: function(data){
                console.log(this);
                this.lastFact = data.fact;
            }.bind(this)
        })
    }
}

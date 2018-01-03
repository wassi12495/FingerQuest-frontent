class Adapter {

  static getItems(){

    fetch('http://localhost:3000/api/V1/items')
    .then(resp => resp.json())
    .then(json => {
      json.forEach(function(item){
        new Item(item)
      })


    })
  }


}

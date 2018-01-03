class Item {

  constructor(json){
    this.name = json.name
    this.effect = json.effect
    this.image = json.image
    this.id = json.id
    Item.all.push(this)
  }


}
Item.all = []

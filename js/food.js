class Food{
    constructor(){
        this.image = loadImage("images/Milk.png")
        
    }

    display(){
        var x = 100,y = 80;

        imageMode(CENTER);
        image(this.image,220,320,70,70)

        if(foodStock !== 0){
            for(var i;i<=foodStock;i++){
                if(i % 10 === 0){
                    x = 80;
                    y = y + 50;
                }

                image(this.image,x,y,50,50)
                x = x + 30;
            }
        }

       feedFood.mousePressed(function(){
            foodStock -= 1;

            if(foodStock <= 0){
                foodStock = 0;
            }      
        })

        addFood.mousePressed(function(){
            foodStock += 1;   
        })
    }
    
    getFoodStock(){
        var foodStockRef = database.ref('Food');
        foodStockRef.on("value",function (data){
            foodStock = data.val();
          });  
          console.log(foodStock)      

    }

    updateFoodStock(count){
        database.ref('/').update({
          Food : count
        })
    }

      
}
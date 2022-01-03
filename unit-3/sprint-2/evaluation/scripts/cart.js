let dish = JSON.parse(localStorage.getItem("cartDB"));

let dishesDiv = document.querySelector('#dishesDiv');

let total = document.querySelector('.total');

function displayDishes(dish){
  let sum = 0;
  dish.map(function(ele){
    let ddiv = document.createElement('div');
    ddiv.setAttribute('class','ddiv');

    let img = document.createElement('img');
    img.src = ele.image;

    let dname = document.createElement('span');
    dname.setAttribute('class','dname');
    dname.innerHTML = ele.name;

    let del = document.createElement('button');
    del.setAttribute('class','del');
    del.textContent = "Remove";
    
    let dprice = document.createElement('span');
    dprice.setAttribute('class','dprice');
    dprice.innerHTML = "Rs."+ele.price;

    sum =  sum + ele.price;

    ddiv.append(img,dname,del,dprice);

    dishesDiv.append(ddiv);
  })

  total.textContent = "Total: Rs. " + sum;
  dishesDiv.append(total);
}

displayDishes(dish);

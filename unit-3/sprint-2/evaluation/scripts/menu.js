async function getDishes(){
  let url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

  try{
    let res = await fetch(url);
    let data = await res.json();
    let m = data.meals;
    console.log("data:",data);
    storeData(m);
  }
  catch(err){
    console.log("err:",err);
  }
}

getDishes();

let mobj = [];

function storeData(m){
  m.map(function(ele){

    let p = Math.round(Math.random() * 500);

    if(p < 100){
      p = p + 100;
    }

    let obj = {
      id : ele.idMeal,
      name : ele.strMeal,
      image : ele.strMealThumb,
      price : p,
    }
    mobj.push(obj);
  });
  localStorage.setItem('mealDB',JSON.stringify(mobj));
  addItem(mobj);
}

let dishDiv = document.getElementById('dishDiv');
let cart = document.querySelector('.cart');

let addCart = [];

function addItem(mobj){
  mobj.map(function(ele,index){
    let mDiv = document.createElement('div');
    mDiv.setAttribute('class','mDiv');

    let imgDiv = document.createElement('div');
    imgDiv.setAttribute('class','imgDiv');

    let img = document.createElement('img');
    img.src = ele.image;

    imgDiv.append(img);

    let dname = document.createElement('p');
    dname.setAttribute('class','dname');
    dname.innerHTML = ele.name;

    let dprice = document.createElement('span');
    dprice.setAttribute("class","dprice");
    dprice.innerHTML = "Rs. " + ele.price;

    let dcart = document.createElement('button');
    dcart.setAttribute("class","dcart");
    dcart.innerHTML = "Add Cart";

    dcart.addEventListener('click',function(){
      addCart.push(ele);
      cart.textContent = addCart.length;
      console.log(addCart);
    });

    mDiv.append(imgDiv,dname,dprice,dcart);

    dishDiv.append(mDiv);
  })
}

cart.addEventListener('click',cartDetails);

function cartDetails(){
  localStorage.setItem("cartDB",JSON.stringify(addCart));
  window.location.href = "cart.html";
}








// idMeal: "52959"
// strMeal: "Baked salmon with fennel & tomatoes"
// strMealThumb: "https://www.themealdb.com/images/media/meals/1548772327.jpg"
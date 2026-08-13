
window.MHAC={
 stores:{
  "Jollibee":{categories:{
   "Chickenjoy":[
    {id:"jb-c1",name:"1-pc. Chickenjoy w/ Drink",price:99,img:"assets/chickenjoy.jpg",addons:[{name:"Coke Regular",price:0},{name:"Coke Zero Regular",price:0},{name:"Go Coke Float",price:45}]},
    {id:"jb-c2",name:"2-pc. Chickenjoy w/ Drink",price:165,img:"assets/chickenjoy.jpg",addons:[{name:"Coke Regular",price:0},{name:"Coke Zero Regular",price:0},{name:"Go Coke Float",price:45}]},
    {id:"jb-c4",name:"4-pc. Chickenjoy Family Box Solo",price:370,img:"assets/chickenjoy.jpg"},
    {id:"jb-c6",name:"6-pc. Chickenjoy with Palabok Family Pan",price:999,img:"assets/chickenjoy.jpg"},
    {id:"jb-c8",name:"8-pc. Chickenjoy with Palabok Family Pan",price:1099,img:"assets/chickenjoy.jpg"}],
   "Jolly Spaghetti":[
    {id:"jb-s1",name:"Jolly Spaghetti Solo",price:65,img:"assets/spaghetti.jpg"},
    {id:"jb-s2",name:"Jolly Spaghetti w/ Chickenjoy",price:125,img:"assets/spaghetti.jpg"}],
   "Burgers":[{id:"jb-b1",name:"Yumburger",price:45,img:"assets/burger.jpg"},{id:"jb-b2",name:"Cheesy Yumburger",price:75,img:"assets/burger.jpg"}],
   "Super Meals":[{id:"jb-m1",name:"1-pc Chickenjoy Super Meal",price:149,img:"assets/chickenjoy.jpg"}],
   "Sides":[{id:"jb-side1",name:"Regular Fries",price:55,img:"assets/fries.jpg"}],
   "Drinks":[{id:"jb-d1",name:"Coke Regular",price:45,img:"assets/drink.jpg"},{id:"jb-d2",name:"Coke Zero",price:45,img:"assets/drink.jpg"}]
  }},
  "McDonald's":{categories:{"Chicken":[{id:"mc-c1",name:"1-pc Chicken McDo w/ Rice",price:99,img:"assets/chickenjoy.jpg"}],"Burgers":[{id:"mc-b1",name:"McDo Burger",price:69,img:"assets/burger.jpg"}],"Drinks":[{id:"mc-d1",name:"Coke",price:45,img:"assets/drink.jpg"}]}},
  "Local Food":{categories:{"Meals":[{id:"lf-1",name:"Local Chicken Meal",price:120,img:"assets/chickenjoy.jpg"},{id:"lf-2",name:"Local Rice Meal",price:95,img:"assets/chickenjoy.jpg"}],"Drinks":[{id:"lf-d1",name:"Softdrink",price:35,img:"assets/drink.jpg"}]}},
  "Mang Inasal":{categories:{"Chicken":[{id:"mi-1",name:"Paa Large Meal",price:145,img:"assets/chickenjoy.jpg"}],"Drinks":[{id:"mi-d1",name:"Softdrink",price:45,img:"assets/drink.jpg"}]}},
  "KFC":{categories:{"Chicken":[{id:"kfc-1",name:"1-pc Chicken Meal",price:115,img:"assets/chickenjoy.jpg"}],"Burgers":[{id:"kfc-b1",name:"KFC Burger",price:95,img:"assets/burger.jpg"}]}}
 },
 rate:{base:40,perKm:10,secondStore:5,service:.10},
 cart:JSON.parse(localStorage.getItem("mhac_cart")||"[]"),
 orders:JSON.parse(localStorage.getItem("mhac_orders")||"[]")
};
MHAC.save=()=>{localStorage.setItem("mhac_cart",JSON.stringify(MHAC.cart));localStorage.setItem("mhac_orders",JSON.stringify(MHAC.orders))}
MHAC.foodTotal=()=>MHAC.cart.reduce((s,i)=>s+i.price*i.qty,0);
MHAC.storeCount=()=>[...new Set(MHAC.cart.map(i=>i.store))].length;
MHAC.deliveryFee=()=>{let km=Number(localStorage.getItem("mhac_km")||1);return Math.max(40,40+Math.max(0,Math.ceil(km)-1)*10)}
MHAC.serviceFee=()=>MHAC.foodTotal()*MHAC.rate.service;
MHAC.secondStoreFee=()=>Math.max(0,MHAC.storeCount()-1)*5;
MHAC.grandTotal=()=>MHAC.foodTotal()+MHAC.serviceFee()+MHAC.deliveryFee()+MHAC.secondStoreFee();

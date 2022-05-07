import select from "../component/select.js";
let sel = select();
let create = (a)=>{
    return document.createElement(a)
}

//compliment products --->
let compliData = [{image: 'https://www.bobbibrown.in/media/export/cms/products/80x80/bb_prod_EPJA40_80x80_0.jpg', name: 'VITAMIN ENRICHED FACE BASE', discription: '', category: 'Neutral Rose', price: ''},{image: 'https://www.bobbibrown.in/media/export/cms/products/80x80/bb_prod_EPJA41_80x80_0.jpg', name: 'HYDRATING FACE CREAM SAMPLE', discription: '', category: '', price: ''},{image: 'https://www.bobbibrown.in/media/export/cms/products/80x80/bb_prod_EPJ940_80x80_0.jpg', name: 'MINI SOOTHING CLEANSING OIL', discription: '', category: '', price: ''},{image: 'https://www.bobbibrown.in/media/export/cms/products/80x80/bb_prod_EPJ940_80x80_0.jpg', name: 'MINI SOOTHING CLEANSING OIL', discription: '', category: '', price: ''},{image: 'https://www.bobbibrown.in/media/export/cms/products/80x80/bb_prod_EL1941_80x80_0.jpg', name: 'VITAMIN ENRICHED EYE BASE SAMPLE', discription: '', category: '', price: ''},]

let compliment = (a) =>{
    document.getElementById("box-compli-prod").innerHTML=null;
    compliData.forEach((el,i) => {
    console.log("i :",i)
    
   if(a==="forward" || a==="null")
   {
    if(i<=2)
    {   
        let box = create("div");
    box.setAttribute("id","box");
    let img  = create("img");
    let h3 = create("h5");
    let btn =  create("button");
    img.src = el.image;
     btn.innerText="Select"
    h3.innerText =el.name;
    box.append(img,h3,btn);
    document.getElementById("box-compli-prod").append(box)
    };
   }
   else if(a==="backward")
   { 
    if(i>0 && i<compliData.length-1)
    {
        let box = create("div");
    box.setAttribute("id","box");
    let img  = create("img");
    img.src = el.image;
    let h3 = create("h5");
    h3.innerText =el.name;
    box.append(img,h3);
    document.getElementById("box-compli-prod").append(box)
    };

   }
    
});
}
compliment("null");
document.getElementById("forward").addEventListener("click",fun);
function fun()
{
    compliment("forward");
    console.log("aa")
}
document.getElementById("backward").addEventListener("click",funback);
function funback()
{
    compliment("backward");
    console.log("aa")
}


// compli_box - display and hide,

let compli_box =document.querySelector("#compliment-box");
let compli_control =document.querySelector("#compli_control");
let i =0;
 let compliControl =()=>{
     
   if(i%2===0)
    { 
        compli_box.style.display = "none"
        compli_control.setAttribute("class","fa-solid fa-angle-down");
    }
    if(i%2!==0)
    {
        compli_box.style.display = "block";
        compli_control.setAttribute("class","fa-solid fa-angle-up");
    }
   i++;
 }
 document.querySelector("#compli_control").addEventListener("click", compliControl)
 












let getProd = JSON.parse(localStorage.getItem("cart"))

let c=0;
getProd.forEach(el => {
    let innerbox = create("div");
    let box = create("div");
    let imgdiv = create("div")
    box.setAttribute("class","item");
    let img =create("img");
    img.src = el.image;
    let h4 = create("h4");
    let h3 = create("h3");
    let des= create("p");
    let price = create("p");
    let rating = create("p")
     let select= create("div")
      select.innerHTML = sel;
    select.setAttribute("class","selectbtn")
    
    h4.innerText = el.category;
    h3.innerText =el.name;
    des.innerText =el.discription;
    price.innerText = `Rs :${el.price}`;
    rating.innerText=`size : MRP inclusive of all taxes | ${el.size}g`
    //btn.innerText= "ADD TO CART";
    imgdiv.append(img)
    innerbox.append(h4,h3,des,rating,price,select);
    box.append(imgdiv,innerbox)
    document.getElementById("products").append(box)
   c++;

});
document.querySelector("#noOfProduct").innerText = `(${c})`




// for rigth box---->
let box1 =document.querySelector("#temp");
let change =document.querySelector("#hide");
let count =0;
 let hideOrderSummary =()=>{
     
   if(count%2===0)
    { 
        box1.style.display = "none"
    change.setAttribute("class","fa-solid fa-angle-down");
    }
    if(count%2!==0)
    {
        box1.style.display = "block";
        change.setAttribute("class","fa-solid fa-angle-up");
    }
   count++;
 }
 document.querySelector("#hide").addEventListener("click", hideOrderSummary)
 


 //for hide and display of offercode block;'
  c=0;
 let box2 = document.getElementById("coupon-code");
 let modify = document.getElementById("hide1");
 let hideOffer =()=>{
     
    if(count%2===0)
     { 
         box2.style.display = "none"
     modify.setAttribute("class","fa-solid fa-angle-down");
     }
     if(count%2!==0)
     {
         box2.style.display = "block";
         modify.setAttribute("class","fa-solid fa-angle-up");
     }
    count++;
  }
  document.querySelector("#hide1").addEventListener("click", hideOffer)
import { product_type, customize } from "./export.js";

// add customization html code to the html body 

document.body.innerHTML += customize();
console.log(customize());

//
show_prod();

function show_prod() {
    let parent = document.querySelector(".single-product");
    parent.innerHTML = null;


    let prod = JSON.parse(localStorage.getItem("single-prod"));
    console.log(prod)
    let div1 = document.createElement("div");
    div1.setAttribute("class","prod-img")
    div1.innerHTML = `<img src="${prod.img}" / >`;

    let div2 = document.createElement("div");

    let div3 = document.createElement("div");
    div3.setAttribute("class","prod-head")
    let div4 = document.createElement("div");
    div4.innerHTML = prod.name;
    let div5 = document.createElement("div");
    div5.innerHTML = `<img class="prod-type" src="${product_type(prod)}"> &#8377; ${prod.price}`;
    div3.append(div4, div5);


    let div6 = document.createElement("div");
    div6.setAttribute("class", "prod-rating-add");
    let div7 = document.createElement("div");
    div7.innerHTML = `	&#9733; ${prod.rating}`;
    let div8 = document.createElement("div");
    div8.innerHTML = `<div class="prod-add">ADD</div><p>customisable</p>`;
    div6.append(div7, div8);

    div8.addEventListener("click", () => {
        document.querySelector(".custom-parent").classList.add("active-custom");
              show_customize(prod);
        
    })

    let div_top = document.createElement("div");
    div_top.append(div3, div6);
    div_top.setAttribute("class", "prod-head-name")

    let div9 = document.createElement("div");
    div9.innerHTML = prod.description;
    div9.setAttribute("class", "prod-description")

    let div10 = document.createElement("div");
        div10.setAttribute("class", "tag")

    let div11 = document.createElement("div");

    div11.innerHTML = `<p>Tags<p>`;
    
    for (let i = 0; i < prod.tags.length; i++) {

        let div = document.createElement("div");
        div.innerHTML = `${prod.tags[i]}`
        div10.append(div)
    }
    

    div2.append(div_top,div9,div11, div10);

    parent.append(div1, div2);

}


// close custom 
document.getElementById("custom-close").addEventListener("click",()=> {
    document.querySelector(".custom-parent").classList.remove("active-custom");
    
});
//
document.querySelector(".custom-bottom").addEventListener("click", () => {
    document.querySelector(".custom-parent").classList.remove("active-custom");
    // cartData();
});





//function for customizable option 
function show_customize(prod) {
    let parent = document.querySelector(".custom-middle");
    let type_src = product_type(prod);
    console.log(type_src)
    parent.innerHTML = `<div class="head">
    <div><img src = ${type_src} /></div>
    <div><h3>${prod.name}</h3></div>
    </div>
    <div><p> MAKE YOUR FAVOURITE MEAL </p></div>
    <div class="custom-option">
    <div class = "option">
    <div class = "option-head">
    <div><img src ="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png" />Potato Wedges (Medium) Thums Up (250ml) (Save Rs26)</div>
    <div>	&#8377 87<input type="checkbox" id="vehicle2" name="" value="87"></div>
    </div>
    </div>

    <div class = "option-head">
    <div><img src ="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png" />Coke 330 ml.</div>
    <div>	&#8377 57<input type="checkbox" id="" name="" value="55"></div>
    </div>
    </div>
    </div>`
        ;

}

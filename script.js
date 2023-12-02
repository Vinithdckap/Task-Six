let filterCategory = document.querySelectorAll(".filter-category");
let openType = document.querySelector(".type");

for (let i = 0; i < filterCategory.length; i++) {
    
    filterCategory[i].addEventListener("click",()=>{
       
        openType.classList.toggle("open");
       
    })
    
}


let listIcon = document.querySelector(".list");
let list = document.querySelector(".product-listing");
let gridIcon = document.querySelector(".grid");
let grid = document.querySelector(".grid-products");

listIcon.addEventListener("click",()=>{
    list.style.display ="block";
    grid.style.display="none";
    gridIcon.style.color="black";
    listIcon.style.color="#740000";
    
})

gridIcon.addEventListener("click",()=>{
    grid.style.display ="grid";
    list.style.display="none";
    gridIcon.style.color="#740000";
    listIcon.style.color="black";


})
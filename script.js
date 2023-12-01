let filterCategory = document.querySelectorAll(".filter-category");
let openType = document.querySelector(".type");

for (let i = 0; i < filterCategory.length; i++) {
    
    filterCategory[i].addEventListener("click",()=>{
       
        openType.classList.toggle("open");
       
    })
    
}



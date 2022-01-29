
const leadingBtn = document.querySelector(".leadingBtn");
const topBtn = document.querySelector(".topBtn");
const tabs = document.querySelectorAll(".tab");



tabs.forEach((i)=>{
  leadingBtn.addEventListener("click",()=>{
    i.style.flexDirection = "row";
  })
  topBtn.addEventListener("click",()=>{
    i.style.flexDirection = "column";
  })
})


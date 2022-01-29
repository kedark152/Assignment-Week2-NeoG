// const snackbarBtns = document.querySelectorAll(".btn-snackbar");
const baselineBtn = document.querySelector(".btn-baseline");
const leadingBtn = document.querySelector(".btn-leading");
const stackedBtn = document.querySelector(".btn-stacked");
const baseline = document.querySelector(".snackbar-baseline");
const leading = document.querySelector(".snackbar-leading");
const stacked = document.querySelector(".snackbar-stacked");


baselineBtn.addEventListener("click",()=>{
    baseline.style.display="flex";
           setTimeout(()=>{  baseline.style.display="none";},5000);
})
leadingBtn.addEventListener("click",()=>{
    leading.style.display="flex";
           setTimeout(()=>{  leading.style.display="none";},5000);
})
stackedBtn.addEventListener("click",()=>{
    stacked.style.display="flex";
           setTimeout(()=>{ stacked.style.display="none";},5000);
})

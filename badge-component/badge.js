const hideBtn = document.querySelector(".button-badge-visib");
const hideBadge = document.querySelector(".badge-visib");

hideBtn.addEventListener("click",()=>{
    if (hideBadge.style.display === "none") {
        hideBadge.style.display = "inline";
      } else {
        hideBadge.style.display = "none";
      }
})
//Buttons Opens the Dialog Box
const alertDialogBtn = document.querySelector(".alert-dialog-btn");
const simpleDialogBtn = document.querySelector(".simple-dialog-btn");
const confirmDialogBtn = document.querySelector(".confirm-dialog-btn");

//Buttons closes dialog box
const actionBtn1 = document.querySelector(".action1");
const actionBtn2 = document.querySelector(".action2");
const simpleDialogItms = document.querySelectorAll(".dialog-items");
const saveBtn = document.querySelector(".saveBtn");
const cancelBtn = document.querySelector(".cancelBtn");

//dialog boxes
const alertBox = document.querySelector(".alert-dialog-box");
const simpleBox = document.querySelector(".simple-dialog-box");
const confirmBox = document.querySelector(".confirm-dialog-box");


//To Show Dialog Box
alertDialogBtn.addEventListener("click",()=>{
  
  alertBox.style.display="flex";
})
simpleDialogBtn.addEventListener("click",()=>{
  
  simpleBox.style.display="flex";
})
confirmDialogBtn.addEventListener("click",()=>{
  
  confirmBox.style.display="flex";
})





//To hide dialog Box

actionBtn1.addEventListener("click",()=>{
    alertBox.style.display="none";
})
actionBtn2.addEventListener("click",()=>{
    alertBox.style.display="none";
})

simpleDialogItms.forEach((i)=>{
  i.addEventListener("click",()=>{
    simpleBox.style.display="none";
  })
})


saveBtn.addEventListener("click",()=>{
    confirmBox.style.display="none";
})
cancelBtn.addEventListener("click",()=>{
    confirmBox.style.display="none";
})

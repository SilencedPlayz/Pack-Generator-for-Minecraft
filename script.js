const intro = document.getElementById("intro");
const scrollText = document.getElementById("intro-scrolldown")
let isShowForm = false
setInterval(()=>{
  if(!isShowForm){
    if(window.scrollY >= 15){
      scrollText.style.display = "none"
    }else{
      scrollText.style.display = "block"
    }
  }
},1)

//show and hide create form
const selpack = document.getElementById("selectpack-bg");
const tf = document.getElementById("tools-footer");

const createbtn = document.getElementById("intro-button")
createbtn.addEventListener("click", ()=>{
  selpack.style.display = "block"
  intro.style.display = "none"
  tf.style.display = "none"
  isShowForm = true
  scrollText.style.display = "none"
})

const intIcon = document.getElementById("intro-button-icon")
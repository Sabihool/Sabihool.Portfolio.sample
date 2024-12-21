
  AOS.init();
  
  
  
let menu = document.querySelector(".menu")
let x = document.querySelector(".x")
let slide = document.querySelector(".slidebar")

let a = document.querySelectorAll(".menubar a")

menu.onclick = () =>{
 
  slide.classList.add("slidebar2")
  
}
x.onclick = () =>{
 
  slide.classList.remove("slidebar2")
  
}

a.forEach(a1 =>{
  a1.onclick = () =>{
  slide.classList.remove("slidebar2")

 
}
  
  
  
})



let name = document.querySelector("#user-email")

/*name.addEventListener("focus", () =>{

let contact = document.querySelector(".contact-section")


  contact.style.position = "absolute";
  contact.style.top = "0";
  contact.style.left = "0";
  contact.style.xIndex = "100";
  
  console.log("0")
  
})

  
  */


document.querySelectorAll('input, textarea').forEach((element) => {
    element.addEventListener('focus', () => {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});

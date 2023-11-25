// pura js ka code ek throttle function ke andar likhe hai 
// throttle function: ek function hai jo 
     
const throttleFunction=(func, delay)=>{
  let prev = 0; 
  return (...args) => {
    let now = new Date().getTime(); 

    if(now - prev> delay){ 
      prev = now;
 
      return func(...args);  
    }
  }
}
document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets)=>{
  console.log("chala")
  let div = document.createElement("div")   /*ek div create hua js ke through */
  div.classList.add("imagediv");            /*iss div ko class name diye */

  

    //  iss div ko left and top ka value diye through clientX and Y, joki center id ke andar se x and y value niklega & wahi position mil jayega 
  div.style.left =dets.clientX + 'px'
  div.style.top = dets.clientY + 'px'


  document.body.appendChild(div)  /*phir uss div ko add kr denge body me */



  let img = document.createElement("img")
  img.setAttribute("src","https://i.pinimg.com/564x/2c/6c/39/2c6c39f678456fe89ff8a1aa017a6d80.jpg")

  div.appendChild(img)



 

//   kuch time har ek div remove hona start ho jayega
  setTimeout(function(){
    div.remove()
  },2000)

 

  
//   gsap js ka animation library hai yahan pe use kiye hai
  gsap.to(img, {
    y: "0",
    ease: Power1,
    duration:.7,
    
});

gsap.to(img,{
    y:"100%",
    delay:.8,
    ease:Power2,
    duration:.7,
})
 



}, 500));
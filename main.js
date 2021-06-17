document.addEventListener("DOMContentLoaded", (event) => {
    window.addEventListener("resize", detectOrientation) ;
    detectOrientation() ;
   });
   function detectOrientation(){
    //Votre code ici

    let rotate = document.getElementById('rotateScreen');
    let discont = document.getElementById('displayContent');

    console.log(window.orientation);
    

    if  (window.orientation == 0)  {
        rotate.setAttribute("style" , "display:block");
        discont.setAttribute("style" , "display:none");


    }else {
        rotate.setAttribute("style" , "display:none");
        discont.setAttribute("style" , "display:block");

    }
   
   }
   
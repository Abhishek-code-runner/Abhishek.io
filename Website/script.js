var slideIndex = 0;
showSlides();

function showSlides() {
var i;
var slides = document.getElementsByClassName("mySlides");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
slides[slideIndex-1].style.display = "block";  
setTimeout(showSlides, 5000);
}

function showSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'flex'
    }
    function hideSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'none'
    }
      const body = document.querySelector("body"),
            nav = document.querySelector("nav"),
            modeToggle = document.querySelector(".dark-light"),
            searchToggle = document.querySelector(".searchToggle"),
            sidebarOpen = document.querySelector(".sidebarOpen"),
            siderbarClose = document.querySelector(".siderbarClose");
      
          
      
      
            modeToggle.addEventListener("click" , () =>{
              modeToggle.classList.toggle("active");
              body.classList.toggle("dark");
      
              
              if(!body.classList.contains("dark")){
                  localStorage.setItem("mode" , "light-mode");
              }else{
                  localStorage.setItem("mode" , "dark-mode");
              }
            });
      
      
       
            
      
      sidebarOpen.addEventListener("click" , () =>{
          nav.classList.add("active");
      });
      
      body.addEventListener("click" , e =>{
          let clickedElm = e.target;
      
          if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu,l")){
              nav.classList.remove("active");
          }
      });
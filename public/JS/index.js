function btnLength1(){
  if(window.innerWidth<=768){
document.getElementById("priBtnsee").style.width="150px"
    document.getElementById("priBtnQoute").style.width="100px"
  }else if(window.innerWidth>768){
    document.getElementById("priBtnsee").style.width="220px"
    document.getElementById("priBtnQoute").style.width="120px"
  }

   
}
function btnLength2(){
  if(window.innerWidth<=768){
    document.getElementById("priBtnQoute").style.width="150px"
    document.getElementById("priBtnsee").style.width="100px"
  }else{
    document.getElementById("priBtnQoute").style.width="220px"
    document.getElementById("priBtnsee").style.width="120px"
  }
   

}
function btnLength3(){
  if(window.innerWidth<=768){
    document.getElementById("priBtnQoute").style.width="40%"
    document.getElementById("priBtnsee").style.width="40%"   
  }else{
    document.getElementById("priBtnQoute").style.width="165px"
    document.getElementById("priBtnsee").style.width="165px"   
  }
   
}
function btnLength12(){
    document.getElementById("seoBtnherodarkpriBtn").style.width="220px"

 document.getElementById("seoBtnherodarksecBtn").style.width="120px"
}
function btnLength22(){
    document.getElementById("seoBtnherodarksecBtn").style.width="220px"


    document.getElementById("seoBtnherodarkpriBtn").style.width="120px"

}
function btnLength32(){
    document.getElementById("seoBtnherodarkpriBtn").style.width="165px"

    document.getElementById("seoBtnherodarksecBtn").style.width="165px"   
}

function showFonNav(){
    document.getElementById("fonNav").style.right="0%"
}
function closeFonNav(){
    document.getElementById("fonNav").style.right="-100%"

}


window.addEventListener("load", function(){
    document.getElementById("screenLoader").style.display="none"
 })
 

 function toHome(){
    document.getElementById("fonNav").style.right="-100%"
    window.location.href="index.html#Home"
 }
 function toHomeSEO(){
    document.getElementById("fonNav").style.right="-100%"
    window.location.href="index.html"
 }

function toSEO(){
  document.getElementById("fonNav").style.right="-100%"
  window.location.href="SEO.html"

}

 function toContact(){
    document.getElementById("fonNav").style.right="-100%"
    window.location.href="Contact.html"
 }
 function toServices(){
    document.getElementById("fonNav").style.right="-100%"
    window.location.href="index.html#Services"
 }
 function toPorfolio(){
     document.getElementById("fonNav").style.right="-100%"
    window.location.href="index.html#Portfolio"
 }
function toTestimonials(){
     document.getElementById("fonNav").style.right="-100%"
    window.location.href="index.html#Testimonials"
}

 const faqs = document.querySelectorAll(".faq");
 const faqContainer = document.getElementById("FAQ");
 
 faqs.forEach((faq) => {
   faq.addEventListener("click", () => {
     if (faq.classList.contains("active")) {
       faq.classList.remove("active");

     } else {
       faqs.forEach((item) => {
         item.classList.remove("active");

       });
       faq.classList.add("active");
     }


     
   });
 });
 




 async function submit(){
  var name = document.getElementById("Name").value;
  var email = document.getElementById("Email").value;
  var phone = document.getElementById("Phone").value;
  var budget = document.getElementById("Budget").value;
  var description = document.getElementById("Description").value;



  if(name&&email&&phone&&description){
    const actEmail=`
  
  Name : ${name}
  Email : ${email}
  Phone : ${phone}
  Budget : ${budget}
  Description : ${description}

  `
  const subject="CLIENT INQUIRY - PORT ORCHARD"
  const url = 'https://port-orchard-backend-u1ic.vercel.app/sendEmail'

  try{

    const response= await fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({actEmail,email,subject})
    })

    const result= await response
    console.log(result)
    if(result.status==200){
      document.getElementById("Name").value=''
      document.getElementById("Email").value=''
      document.getElementById("Phone").value=''
      document.getElementById("Budget").value=''
      document.getElementById("Description").value=''
      Swal.fire(`Thank you for contacting us. We'll get in touch shortly.`)
    }else{
      Swal.fire('An error occured. Try again')
    }
  }catch(error){
    console.log(error)

}

  }else{
    Swal.fire(" Please fill out all required fields")
  }

 }









 let currentIndex = 0;
 const slides = document.querySelectorAll('.projectDiv');
 const totalSlides = slides.length;
 
 function goToSlide(slideIndex) {
   currentIndex = slideIndex;
   const offset = -currentIndex * 100; // Calculate the percentage offset
   document.querySelector('.projectsWrap').style.transform = `translateX(${offset}%)`;
   var slideIndexReps= document.querySelectorAll('.slideIndexRep')

slideIndexReps.forEach((slideIndexRep, index) => {
    if (index === currentIndex) {
      slideIndexRep.classList.add('stagedProject');
    } else {
      slideIndexRep.classList.remove('stagedProject');
    }
  });


 }
 
 function nextSlide() {
   currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide after the last one
   goToSlide(currentIndex);


 }
 
 let autoSlideInterval = setInterval(nextSlide, 6000);
 
 document.querySelectorAll('.slideIndexRep').forEach(button => {
   button.addEventListener('click', () => {
     clearInterval(autoSlideInterval); // Stop auto-slide when manually navigating
     autoSlideInterval = setInterval(nextSlide, 3000); // Restart auto-slide after manual click
   });
 });
 

 function toAmbient(){
  window.open('https://ambientimer.com/','blank')
 }
 

 function toWaweru(){
  window.open('https://wawerulaw.com/','blank')
 }
 function toIntegrity(){
  window.open('https://integritycareclinic.com/','blank')
 }
 function toFacebook(){
  window.open('https://www.facebook.com/people/Port-Orchard-Web-Design-SEO/61564940619532/','blank')
 }
 function tOTOAD(){
  window.open("https://toad8.com/",'blank')
 }
 function tOEssymons(){
  window.open('https://essymons.com/','blank')
 }
 function tOTarmac(){
  window.open('https://usatarmac.com/','blank')
 }
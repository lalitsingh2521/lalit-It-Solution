// Smooth scroll to section
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Contact Form Popup
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  Swal.fire({
    title: "✅ Message Sent!",
    text: "Thank you for contacting us. We will reply soon.",
    icon: "success",
    confirmButtonColor: "#facc15",
    confirmButtonText: "OK"
  });
  this.reset();
});

// Service buttons popup
document.querySelectorAll('.service-card button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    Swal.fire({
      title: "🚀 Request Received",
      text: "Thank you! We will contact you regarding this service.",
      icon: "info",
      confirmButtonColor: "#facc15",
      confirmButtonText: "Great!"
    });
  });
});

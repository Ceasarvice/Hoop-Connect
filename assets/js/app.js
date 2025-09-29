
(function(){
  const btn = document.getElementById('themeToggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved){root.setAttribute('data-theme', saved); btn?.querySelector('span')?.textContent = saved==='dark'?'Light':'Dark';}
  btn?.addEventListener('click', ()=>{
    const next = root.getAttribute('data-theme')==='dark'?'light':'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    btn.querySelector('span').textContent = next==='dark'?'Light':'Dark';
  });
})();
document.getElementById('newsletter')?.addEventListener('submit', (e)=>{e.preventDefault();alert('Subscribed to Dragons newsletter!');});
const cart=[];function addToCart(item){cart.push(item);renderCart();}
function renderCart(){const list=document.getElementById('cartList');const totalEl=document.getElementById('cartTotal');if(!list)return;list.innerHTML='';let total=0;cart.forEach(p=>{{total+=p.price;const li=document.createElement('li');li.className='list-group-item d-flex justify-content-between align-items-center';li.innerHTML=`<span>${{p.name}}</span><span>$${{p.price.toFixed(2)}}</span>`;list.appendChild(li);}});if(totalEl) totalEl.textContent='$'+total.toFixed(2);}
document.getElementById('bookForm')?.addEventListener('submit',(e)=>{{e.preventDefault();alert('Training session requested. We will contact you by email.');}});




function sendBooking() {
  const form = document.getElementById("bookingForm");

  // Validate form
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const phoneNumber = "237652258221"; // Replace with your WhatsApp number

  // Collect form data
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const service = document.getElementById("service").value;

  // Build WhatsApp message
  const message = `Hello, I would like to confirm my booking:%0A
  Name: ${name}%0A
  Date: ${date}%0A
  Time: ${time}%0A
  Service: ${service}`;

  // Show success toast
  const toastEl = document.getElementById("successToast");
  const toast = new bootstrap.Toast(toastEl);
  toast.show();

  // Redirect to WhatsApp after 2 seconds
  setTimeout(() => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  }, 2000);
}
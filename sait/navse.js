window.onload = function geoFindMe() {
    const status = document.getElementById('status');
    const mapLink = document.getElementById("daun");
    const a = document.getElementById('negeradot')
    const a2 = document.getElementById('nocursor') 
    mapLink.textContent = "";
    

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  const API_KEY = "4bee7a19800a4f6288a61a4df94b0be6"
      const reverseGeocodingUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`;

      fetch(reverseGeocodingUrl)
        .then(response => response.json())
        .then(data => {
          const formattedAddress = data.results[0].formatted;
          const addressParts = formattedAddress.split(',');
          let city = '';
          let country = '';

          for (const part of addressParts){
            const trimmedPart = part.trim();
            country += trimmedPart
            city += trimmedPart + ', ';
          }
          country = country.slice(16,22)
          city = city.slice(0, 9);
          a.style.display='none'
          status.style.display = 'none';
          mapLink.textContent = `${city}, ${country}`;
          mapLink.style.display='table-cell'
          a2.style.display='table'
          
        })
        .catch(error => {
          status.textContent = "Невозможно получить ваше местоположение";
          mapLink.style.display='none'
          a2.style.display='none'
        });
    }

    function error() {
      status.textContent = "Невозможно получить ваше местоположение";
      mapLink.style.display='none'
          a2.style.display='none'

    }

    if (!navigator.geolocation) {
      status.textContent = "Geolocation не поддерживается вашим браузером";
      mapLink.style.display='none'
          a2.style.display='none'
    } else {
      status.textContent = "Определение местоположения…";
      mapLink.style.display='none'
          a2.style.display='none'
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  const but1 = document.getElementById('but1')
  const but2 = document.getElementById('but2')
  const burger1 = document.getElementById('id01')
  const burger2 = document.getElementById('id02')
   let progressbar = document.querySelector('.jsline')
   const a3 = document.getElementById('naming')
   const exit = document.getElementById('Exit')
   document.onscroll=function(){
    let prog = window.scrollY / (document.body.clientHeight - window.innerHeight)*100
    progressbar.style.width = prog + '%'

   }


document.getElementById('modal-content').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordcheck = document.getElementById('passwordcheck').value
    localStorage.setItem('Entered?', 0)
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  if (passwordcheck === password){
    alert('Registration successful!');
    burger1.style.display = 'none'
  }
else{
  alert('Passwords are different')
}

});

document.getElementById('modal-content2').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById('email2').value;
    const loginPassword = document.getElementById('password2').value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        burger2.style.display = 'none'
        localStorage.setItem('Entered?', 1)
          const email = localStorage.getItem('email');
          const localPart = email.split('@')[0];
          a3.textContent = localPart;
          but1.style.display = 'none'
          but2.style.display = 'none'
          a3.style.display = 'block'
          exit.style.display = 'block'
          alert('Login successful!');
    } else {
        alert('Invalid email or password.');
    }
});
const entered = localStorage.getItem('Entered?')
if (entered == 1){
  const email = localStorage.getItem('email');
  const localPart = email.split('@')[0];
  a3.textContent = localPart;
  but1.style.display = 'none'
  but2.style.display = 'none'
  a3.style.display = 'block'
  exit.style.display = 'block'
  
}
const cursor = document.querySelector('.cursor');
const enterin = document.getElementById('Enterin')
document.addEventListener('mousemove', function(e) {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
});
exit.addEventListener('click', function(e){
location.reload()
  localStorage.setItem('Entered?',0)
  but1.style.display = 'block'
  but2.style.display = 'block'
  a3.style.display = 'none'
  exit.style.display = 'none'
})
enterin.addEventListener('click', function(e){
  document.getElementById('id02').style.display='block'
  location.reload()
  })
var imgs = document.querySelectorAll('.slider img');
var currentImg = 0;
const interval = 4000;

function changeSlide() {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove('active');
  }

  currentImg = (currentImg + 1) % imgs.length;

  imgs[currentImg].classList.add('active');
}

var timer = setInterval(changeSlide, interval);
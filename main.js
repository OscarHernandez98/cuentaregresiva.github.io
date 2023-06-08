// Obtener la fecha de término
const endDate = new Date('August 30, 2023 00:00:00').getTime();

// Actualizar el contador cada segundo
const timer = setInterval(updateCountdown, 1000);

function updateCountdown() {
  // Obtener la fecha y hora actual
  const now = new Date().getTime();

  // Calcular la diferencia de tiempo en milisegundos
  const timeDifference = endDate - now;

  // Calcular los días, horas, minutos y segundos restantes
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Actualizar los elementos HTML con los valores correspondientes
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

  // Verificar si se ha alcanzado la fecha de término
  if (timeDifference < 0) {
    clearInterval(timer);
    document.getElementById('countdown').innerHTML = '¡El contador ha terminado!';
  }
}


// Select videos
// video1
const select1 = document.getElementById('select1');
const iframe1 = document.getElementById('video1')
select1.addEventListener('click', function (){
  team();
});
function team(){
  document.getElementById('video1').style.display="block";
  document.getElementById('video2').style.display="none";
  document.getElementById('video3').style.display="none";
  document.getElementById('video4').style.display="none";
  
  let url1 = iframe1.src;
  url1 += '?autoplay=1&mute=1&loop=1';
  iframe1.src = url1;
}
// video2
const select2 = document.getElementById('select2');
const iframe2 = document.getElementById('video2')
select2.addEventListener('click', function (){
  travel();
});
function travel(){
  document.getElementById('video1').style.display="none";
  document.getElementById('video2').style.display="block";
  document.getElementById('video3').style.display="none";
  document.getElementById('video4').style.display="none";

  let url2 = iframe2.src;
  url2 += '?autoplay=1&mute=1&loop=1';
  iframe2.src = url2;
}
// video3
const select3 = document.getElementById('select3');
const iframe3 = document.getElementById('video3')
select3.addEventListener('click', function (){
  velocidad();
});
function velocidad(){
  document.getElementById('video1').style.display="none";
  document.getElementById('video2').style.display="none";
  document.getElementById('video3').style.display="block";
  document.getElementById('video4').style.display="none";

  let url3 = iframe3.src;
  url3 += '?autoplay=1&mute=1&loop=1';
  iframe3.src = url3;
}
// video4
const select4 = document.getElementById('select4');
const iframe4 = document.getElementById('video4')
select4.addEventListener('click', function (){
  experiencia();
});
function experiencia(){
  document.getElementById('video1').style.display="none";
  document.getElementById('video2').style.display="none";
  document.getElementById('video3').style.display="none";
  document.getElementById('video4').style.display="block";

  let url4 = iframe4.src;
  url4 += '?autoplay=1&mute=1&loop=1';
  iframe4.src = url4;
}
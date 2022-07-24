const nightmodeIcon= document.getElementById('night-mode-icon');
const h2List= document.querySelectorAll("section#services div h2");
const pList= document.querySelectorAll("section#services div p");

nightmodeIcon.addEventListener('click', handleClick);

function handleClick(e){
  // alert('hel')
  document.body.classList.toggle("night-mode");
  h2List.forEach(h2=> h2.classList.toggle('light-color'));
  pList.forEach(p=> p.classList.toggle('light-color'));
}
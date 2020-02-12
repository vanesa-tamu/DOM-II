// Your code goes here

//changing background image!
const adventureAwaitsImg = document.querySelector('.img-fluid')
console.log(adventureAwaitsImg)
adventureAwaitsImg.addEventListener('click', e => {
    adventureAwaitsImg.src="https://static.scientificamerican.com/sciam/cache/file/BCC3BD1E-5DC0-4843-A841706AE575C694_source.jpg?w=590&h=800&39BBF62E-5F96-4C6A-A59590CCF416DA11"
})

const navBar = document.querySelectorAll('.nav-link')
console.log(navBar)
navBar.forEach(nav => {
    nav.addEventListener('click', e => {
        nav.style.backgroundColor = 'yellow'
        event.preventDefault()
        console.log('prevent Default in action')
    })
})




window.addEventListener('load', (event) => {
    window.alert("Welcome!")
  });


const pickDestination = document.querySelector('.content-destination')

pickDestination.addEventListener('dblclick', e => {
    pickDestination.style.color = 'pink'
})


const images = document.getElementsByTagName('img')
console.log(images)

Array.from(images).forEach(i => {
    i.addEventListener('mouseenter', e => {
        i.style.transform = "scale(1.1)"
  
    })
    i.addEventListener('mouseleave', e => {
        i.style.transform = "scale(1)"

    })
})

const title = document.querySelector('.logo-heading')
console.log(title)
title.addEventListener('mouseover', e => {
    e.target.style.color = 'orange'

    setTimeout(()=> {
        e.target.style.color = ''
    }, 400)
})


function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    scale = Math.min(Math.max(.125, scale), 4);
  
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('.img-fluid');
  el.onwheel = zoom;

  let funBusGone = document.querySelector('header img');
funBusGone.addEventListener('drag', function(event){
    console.log(`Bus selected`);
    event.target.style.display = 'none';
})
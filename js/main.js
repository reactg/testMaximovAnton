let burger = document.querySelector('.burger-menu')
let navigation = document.querySelector('.burger-navigation')
let wrapperMenu = document.querySelector('.wrapper-menu')
let frontCard = document.querySelector('.frontSide')
let backCard = document.querySelector('.backSide')


let you = `<iframe  class="youTube" 
                    width="100%" 
                    height="90%" 
                    src="https://www.youtube.com/embed/lve6KTZTKDw?controls=0&amp;start=17&autoplay=1" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture" 
                    allowfullscreen></iframe>`

burger.addEventListener('click', e => {
  e.preventDefault();
  if(navigation.classList.contains('active')){
    navigation.classList.remove('active');
    wrapperMenu.classList.remove('active')
  }else{
    navigation.classList.add('active');
    wrapperMenu.classList.add('active')
  }
    
})

frontCard.addEventListener('click', e => {
  e.preventDefault()
  if(frontCard.classList.contains('activeCard')){
    frontCard.classList.remove('activeCard');
    backCard.classList.remove('activeCard')
    
  }else{
    frontCard.classList.add('activeCard');
    backCard.classList.add('activeCard')
  }
})

backCard.addEventListener('click', e => {
  e.preventDefault()
  if(backCard.classList.contains('activeCard')){
    backCard.classList.remove('activeCard');
    frontCard.classList.remove('activeCard');
  }else{
    backCard.classList.add('activeCard');
    frontCard.classList.add('activeCard');
  }
})

frontCard.addEventListener('click', e => {
  e.preventDefault()
  if(document.querySelector('.youTube')){
    return false
  }else{
    backCard.insertAdjacentHTML('afterbegin', you)
  }
})


 
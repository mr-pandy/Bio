
const resizeContainer = document.querySelector('nav');

const changeToContainerFluid = ()=>{
  
    if(window.innerWidth < 1025){
        resizeContainer.classList.add('container-fluid');
        resizeContainer.classList.remove('container');
    }else{
        resizeContainer.classList.add('container');
        resizeContainer.classList.remove('container-fluid');
    }
}
changeToContainerFluid();
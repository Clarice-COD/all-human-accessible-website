
// document.ElementsByClassName('page') = selecteerd alle elementen in de class page
// const pages = een verzameling van alle classes met page
const pages = document.getElementsByClassName('page');
  for(var i = 0; i < pages.length; i++)
    {
      var page = pages[i];
      if (i % 2 === 0)
        {
          page.style.zIndex = (pages.length - i);
        }
    }

  document.addEventListener('DOMContentLoaded', function(){
    for(var i = 0; i < pages.length; i++)
      {
  
        pages[i].pageNum = i + 1;
        pages[i].onclick=function()
          {
            if (this.pageNum % 2 === 0)
              {
                this.classList.remove('flipped');
                this.previousElementSibling.classList.remove('flipped');
              }
            else
              {
                this.classList.add('flipped');
                this.nextElementSibling.classList.add('flipped');
              }
           }
        }
  })


  // MENU

var openButton = document.querySelector(".menu > button");

openButton.addEventListener("click", openMenu);


// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("nav");
  
  // voeg class toe aan nav
  deNav.classList.add("toonMenu"); 
}

var sluitButton = document.querySelector("nav button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.addEventListener("click", sluitMenu);

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}

window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    const deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}
// Sticky Navigation Menu Js

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;
window.onload = function () {
  Particles.init({
    selector: ".background"
  });
};
var particles = Particles.init({
  selector: ".background",
  color: ["#03dac6", "#ff0266", "#000000"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#faebd7", "#03dac6", "#ff0266"],
        maxParticles: 43,
        connectParticles: false
      }
    }
  ]
});


window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

// Side Navigation Menu Js
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflowX = "hidden";
  scrollBtn.style.pointerEvents = "none";
}



// Side Navigation Bar Close While We click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 10; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "auto";
  });
}


//switch for darl to light mode 

const switchContainer = document.querySelector('.switch-container');
const switchCheckbox = document.querySelector('.switch-checkbox');

// Check if the user has a preferred theme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  switchContainer.classList.add('dark-mode');
}

// Event listener for theme switch
switchCheckbox.addEventListener('change', function () {
  if (this.checked) {
    switchContainer.classList.remove('light-mode');
    switchContainer.classList.add('dark-mode');
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    switchContainer.classList.remove('dark-mode');
    switchContainer.classList.add('light-mode');
    document.documentElement.setAttribute('data-theme', 'light');
  }
});

//project
function openProject(projectName) {
  const modal = document.getElementById('project-modal');
  const titleElement = document.getElementById('project-title');
  const descriptionElement = document.getElementById('project-description');
  const iframeElement = document.getElementById('project-iframe');

  // Set project details
  titleElement.textContent = projectName;
  descriptionElement.textContent = `Description of ${projectName} project.`;
  iframeElement.src = `projects/${projectName}/index.html`;

  modal.style.display = 'block';
}

function closeProject() {
  const modal = document.getElementById('project-modal');
  const iframeElement = document.getElementById('project-iframe');

  // Clear project details
  iframeElement.src = '';

  modal.style.display = 'none';
}

window.onclick = function (event) {
  const modal = document.getElementById('project-modal');
  if (event.target === modal) {
      closeProject();
  }
};


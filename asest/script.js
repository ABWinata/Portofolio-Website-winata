// TOGEL SIDEBAR
const toggleSidebarButton = document.getElementById('toggle-sidebarBtn');
const sidebarContainer = document.getElementById('container-MainSidebar');

toggleSidebarButton.addEventListener('click', () => {
  sidebarContainer.classList.toggle('sidebarHidden');
});

//TOGGLE CV EX 
const toggleCvPro = document.getElementById('toggleCvEx');
const cvProHidden = document.getElementById('continer-cvEx');

toggleCvPro.addEventListener('click', () => {
  cvProHidden.classList.toggle('cvEx-hidden')
})
const btnTop = document.getElementById('btnTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const projectButtons = document.querySelectorAll('.btn-show-details');
const projectDetails = document.getElementById('projectDetails');

if (projectButtons && projectDetails) {
  projectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const project = btn.dataset.project;
      let content = '';

      if (project === 'cv') {
        content = `
          <strong>CV Interactif :</strong>
          Projet académique utilisant HTML, CSS (Bootstrap) et JavaScript pour construire
          un CV en ligne structuré, responsive, avec sections dynamiques, formulaire simulé
          et hébergement via GitHub Pages.
        `;
      } 
      else if (project === 'ccf') {
        content = `
          <strong>Cinematic Video for CCF Brand :</strong>
          Vidéo cinématique produite pour Cosmic Cell Foods avec montage avancé,
          storytelling, sound design et VFX légers pour transmettre un message business puissant.
        `;
      }

      projectDetails.innerHTML = content;
      projectDetails.classList.remove('d-none');
      projectDetails.scrollIntoView({ behavior: 'smooth' });
    });
  });
}


const btnEnvoyer = document.getElementById('btnEnvoyer');
const contactAlert = document.getElementById('contactAlert');

if (btnEnvoyer && contactAlert) {
  btnEnvoyer.addEventListener('click', () => {
    contactAlert.classList.remove('d-none');
    contactAlert.textContent = "Merci ! Votre message a été simulé avec JavaScript.";

    setTimeout(() => {
      contactAlert.classList.add('d-none');
    }, 3000);
  });
}

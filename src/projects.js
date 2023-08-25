'use strict';

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectContainer = document.querySelector('.projects');
categories.addEventListener('click', (e) => {
  const filter = e.target.dataset.type;
  if(filter == null) {
    return;
  }
  handleActiveSelection(e.target);
  filterProjects(filter);
});

function handleActiveSelection(target) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjects(filter) {
  projects.forEach((project) => {
    if(filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projectContainer.classList.remove('anim-out');
  }, 250);
}
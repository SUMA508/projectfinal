const showAllBtn = document.getElementById('showAllBtn');
const extraCards = document.getElementById('extraCards');

showAllBtn.addEventListener('click', (e) => {
  e.preventDefault();

  extraCards.classList.toggle('active');

  if(extraCards.classList.contains('active')){
    showAllBtn.textContent = 'Show less';
  } else {
    showAllBtn.textContent = 'Show all';
  }
});

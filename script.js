// navigation
document.querySelector('#projects-nav').addEventListener('click' , (e)=>{
  window.location.href = './projects.html'
})

document.querySelector('#home-nav').addEventListener('click' , (e)=>{
  window.location.href = './index.html'
})

document.querySelector('.git-link').addEventListener('click' , (e)=>{
  window.location.href = 'https://www.github.com/tahmied'
})

// blur effect
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.getElementById('main-content').classList.remove('blurred');
    }, 500); 
  });

// highlight effect
document.querySelectorAll('.highlight').forEach((el) => {
  const text = el.textContent;
  el.innerHTML = Array.from(text)
    .map((char) =>
      char === ' '
        ? ' '
        : `<span class="letter">${char}</span>`
    )
    .join('');
});

setTimeout(() => {
  document.querySelectorAll('.highlight').forEach((el) => {
    el.classList.add('active');
    const letters = el.querySelectorAll('.letter');
    const totalDuration = 1150; // 2s for all letters
    const delay = totalDuration / letters.length;

    letters.forEach((letter, i) => {
      setTimeout(() => {
        letter.classList.add('colored');
      }, i * delay);
    });
  });
}, 2000);

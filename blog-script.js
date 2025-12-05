// blur effect
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.getElementById('main-content').classList.remove('blurred');
    }, 500); 
  });

  // navigation
document.querySelector('#projects-nav').addEventListener('click' , (e)=>{
  window.location.href = './projects.html'
})

document.querySelector('#home-nav').addEventListener('click' , (e)=>{
  window.location.href = './index.html'
})

document.querySelector('#blog-nav').addEventListener('click' , (e)=>{
  window.location.href = './blog.html'
})



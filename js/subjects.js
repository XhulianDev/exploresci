document.querySelectorAll('.topic button').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const subjectName = window.location.pathname.split('/').pop().replace('.html', '');
    
    window.location.href = `../display.html?subject=${subjectName}&id=${index + 1}`;
  });
});
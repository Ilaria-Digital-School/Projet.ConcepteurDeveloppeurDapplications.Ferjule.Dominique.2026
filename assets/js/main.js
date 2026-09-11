
/*document.querySelector(".scroll-top").addEventListener("click", function () {
    window.scrollTo({
        top: 0
    })
})*/

const panels = document.querySelectorAll('.panel');

panels.forEach(function(panel) {
  panel.addEventListener('click', function() {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach(function(panel) {
    panel.classList.remove('active');
  });
}

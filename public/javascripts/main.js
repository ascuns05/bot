document.addEventListener('DOMContentLoaded', ready);

function ready() {
  document.querySelector('.exit').addEventListener('click', function(e) {
    e.preventDefault();
    document.cookie = 'uid=';
  });


}
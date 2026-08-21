document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.copy-link-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      var url = btn.getAttribute('data-url');
      navigator.clipboard.writeText(url).then(function(){
        var original = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(function(){ btn.textContent = original; }, 2000);
      });
    });
  });
});

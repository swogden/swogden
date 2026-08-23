document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.fb-share-popup').forEach(function(link){
    link.addEventListener('click', function(e){
      e.preventDefault();
      var url = link.getAttribute('href');
      var width = 626, height = 436;
      var left = (window.screen.width / 2) - (width / 2);
      var top = (window.screen.height / 2) - (height / 2);
      window.open(
        url,
        'facebook-share-dialog',
        'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top + ',menubar=no,toolbar=no,location=no,status=no'
      );
    });
  });

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

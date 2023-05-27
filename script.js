function updateWindowSize() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
  
    document.getElementById('window-width').textContent = windowWidth;
    document.getElementById('window-height').textContent = windowHeight;
  }
  
  function updateContentSize() {
    var contentWidth = document.getElementById('content-size').offsetWidth;
    var contentHeight = document.getElementById('content-size').offsetHeight;
  
    document.getElementById('content-width').textContent = contentWidth;
    document.getElementById('content-height').textContent = contentHeight;
  }
  
  window.addEventListener('resize', function() {
    updateWindowSize();
    updateContentSize();
  });
  
  window.addEventListener('DOMContentLoaded', function() {
    updateWindowSize();
    updateContentSize();
  });
  
function calcularMedidas() {
  document.getElementById('cuerpo').style.opacity = '0';
  document.getElementById('loader').style.display = 'block';

  setTimeout(function() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var contentWidth = document.getElementById('cuerpo').offsetWidth;
    var contentHeight = document.getElementById('cuerpo').offsetHeight;

    document.getElementById('window-width').textContent = windowWidth + (" px");
    document.getElementById('window-height').textContent = windowHeight + (" px");
    document.getElementById('content-width').textContent = contentWidth + (" px");
    document.getElementById('content-height').textContent = contentHeight + (" px");

    document.getElementById('cuerpo').style.display = 'none';
    document.getElementById('loader').style.display = 'none';
    document.getElementById('resultados').classList.add('mostrar-resultados');
    document.getElementById('cuerpo').style.opacity = '1';
  }, 2000);
}

const pageStatus = 0;

if (pageStatus === 1) {
  const overlay = document.querySelector('div'); // Finde das Overlay-Element
  if (overlay) {
    overlay.remove(); // Entferne das Overlay
  }
  document.body.style.overflow = 'auto'; // Erlaube das Scrollen auf der Seite
} else {
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.background = 'gray';
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
}

/* ============================================
   PRELOADER FAS VIRTUAL — PÓSTER → VIDEO → WEB
   ============================================ */
(function () {
  console.log('[PRELOADER] Iniciado');

  const preloader = document.getElementById('preloader');
  const poster    = document.getElementById('preloader-poster');
  const video     = document.getElementById('preloader-video');
  const skipBtn   = document.getElementById('skip-intro');
  const barFill   = document.querySelector('.preloader-progress-fill');

  if (!preloader || !poster || !video || !skipBtn) {
    console.error('[PRELOADER] Faltan elementos en el DOM');
    return;
  }

  console.log('[PRELOADER] Elementos encontrados ✓');

  const POSTER_DURATION = 3200;
  const MAX_DURATION = 22000;
  let done = false;

  function hidePreloader() {
    if (done) return;
    done = true;
    console.log('[PRELOADER] Ocultando preloader');
    preloader.classList.add('hidden');
    setTimeout(() => {
      try { video.pause(); } catch (e) {}
      if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
    }, 1000);
  }

  // FASE 1 → FASE 2
  setTimeout(() => {
    console.log('[PRELOADER] Cambiando a fase video');
    preloader.classList.add('video-phase');
    poster.classList.add('fade-out');
    video.classList.add('active');

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => console.log('[PRELOADER] Video reproduciéndose ✓'))
        .catch(err => console.warn('[PRELOADER] Video no pudo reproducirse:', err));
    }
  }, POSTER_DURATION);

  // Barra de progreso
  video.addEventListener('loadedmetadata', () => {
    console.log('[PRELOADER] Metadata del video cargada, duración:', video.duration);
    video.addEventListener('timeupdate', () => {
      const pct = Math.min((video.currentTime / video.duration) * 100, 100);
      barFill.style.width = pct + '%';
    });
  });

  // Fin del video
  video.addEventListener('ended', () => {
    console.log('[PRELOADER] Video terminó');
    hidePreloader();
  });

  // Botón saltar
  skipBtn.addEventListener('click', () => {
    console.log('[PRELOADER] Botón saltar pulsado');
    hidePreloader();
  });

  // Error del video
  video.addEventListener('error', (e) => {
    console.error('[PRELOADER] Error cargando video:', e);
  });

  // Timeout de seguridad
  setTimeout(() => {
    console.warn('[PRELOADER] Timeout alcanzado, cerrando');
    hidePreloader();
  }, MAX_DURATION);

  // Accesibilidad
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    console.log('[PRELOADER] reduced-motion detectado');
    hidePreloader();
  }
})();
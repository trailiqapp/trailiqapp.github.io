// Keep the published clean URLs while allowing a complete file-based preview.
if (location.protocol === 'file:') {
  for (const link of document.querySelectorAll('a[href]')) {
    const url = new URL(link.getAttribute('href'), location.href);
    if (url.protocol === 'file:' && url.pathname.endsWith('/')) {
      url.pathname += 'index.html';
      link.href = url.href;
    }
  }
}

function revealLinkedWorkflow() {
  let id;
  try {
    id = decodeURIComponent(location.hash.slice(1));
  } catch {
    return;
  }
  const target = document.getElementById(id);
  const workflow = target?.closest('details');
  if (workflow) {
    workflow.open = true;
    target.scrollIntoView({ block: 'start' });
  }
}

revealLinkedWorkflow();
window.addEventListener('hashchange', revealLinkedWorkflow);

const screenshots = document.querySelectorAll('figure img[src*="screen-"], .showcase-media img[src*="screen-"]');
if (screenshots.length) {
  const dialog = document.createElement('dialog');
  dialog.className = 'screenshot-dialog';
  dialog.setAttribute('aria-label', 'Trail IQ screenshot');
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'screenshot-close';
  close.textContent = 'Close';
  close.addEventListener('click', () => dialog.close());
  const enlarged = document.createElement('img');
  dialog.append(close, enlarged);
  document.body.append(dialog);
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  for (const screenshot of screenshots) {
    const link = document.createElement('a');
    link.className = 'screenshot-link';
    link.href = screenshot.src;
    link.setAttribute('aria-label', `Enlarge: ${screenshot.alt}`);
    screenshot.before(link);
    link.append(screenshot);
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      enlarged.src = screenshot.src;
      enlarged.alt = screenshot.alt;
      dialog.showModal();
    });
  }
}

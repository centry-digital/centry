window.addEventListener('DOMContentLoaded', function () {
  if (!window.location.search) {
    return;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const iframes = document.querySelectorAll('iframe[src^="https://tally.so"]');

  iframes.forEach(function (iframe) {
    searchParams.forEach(function (value, key) {
      iframe.src += iframe.src.indexOf('?') === -1 ? `?${key}=${value}` : `&${key}=${value}`;
    });
  });
});
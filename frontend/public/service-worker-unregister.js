// Force unregister all service workers
window.addEventListener('load', function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      registrations.forEach(function(registration) {
        registration.unregister();
        console.log('ServiceWorker unregistered');
      });
    });
  }
  
  // Clear all caches
  if ('caches' in window) {
    caches.keys().then(function(names) {
      names.forEach(function(name) {
        caches.delete(name);
        console.log('Cache deleted:', name);
      });
    });
  }
});
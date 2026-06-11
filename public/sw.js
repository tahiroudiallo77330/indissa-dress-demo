// Focus Barber — Service Worker for Web Push notifications
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("push", (event) => {
  let payload = { title: "Focus Barber", body: "Nouvelle notification", url: "/admin/bookings" };
  try {
    if (event.data) {
      payload = { ...payload, ...event.data.json() };
    }
  } catch (e) {
    // fallback to text
    try {
      payload.body = event.data.text();
    } catch {}
  }

  const options = {
    body: payload.body,
    icon: "/icon-192.png",
    badge: "/badge-72.png",
    data: { url: payload.url || "/admin/bookings" },
    tag: "focus-barber-booking",
    renotify: true,
    requireInteraction: false,
  };

  event.waitUntil(self.registration.showNotification(payload.title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || "/admin/bookings";

  event.waitUntil(
    (async () => {
      const allClients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
      for (const client of allClients) {
        const url = new URL(client.url);
        if (url.pathname.startsWith("/admin")) {
          await client.focus();
          if (url.pathname !== targetUrl) {
            client.navigate(targetUrl);
          }
          return;
        }
      }
      await self.clients.openWindow(targetUrl);
    })()
  );
});

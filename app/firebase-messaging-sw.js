// Service worker de Firebase Cloud Messaging para la PWA (#25).
// El plugin firebase_messaging_web lo registra solo — no hace falta
// referenciarlo desde index.html.
//
// apiKey/appId se sustituyen en build time (ver .github/workflows/
// web-release.yml) con los valores de la app Web registrada en Firebase
// Console. No son secretos de verdad: Firebase los diseña para vivir en
// código cliente, protegidos por las reglas de seguridad del proyecto,
// no por ocultar la clave. El resto de campos son del proyecto entero,
// ya públicos en android/app/google-services.json.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: '',
  appId: '',
  messagingSenderId: '352871363604',
  projectId: 'tablefoe',
  authDomain: 'tablefoe.firebaseapp.com',
  storageBucket: 'tablefoe.firebasestorage.app',
});

const messaging = firebase.messaging();

// El navegador ya muestra la notificación si el mensaje FCM lleva payload
// `notification` (igual que en Android/iOS) — el log es solo para depurar.
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Mensaje en background:', payload);
});

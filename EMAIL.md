# Envío automático de emails

Con esto, los participantes que tienen email reciben su enlace solos, desde tu Gmail, con un solo botón. Lo configuras una vez por navegador.

## 1. Crea el script (5 minutos)

1. Entra en [script.google.com](https://script.google.com) con tu cuenta de Gmail y pulsa **Nuevo proyecto**.
2. Borra lo que haya y pega el contenido de [`apps-script/Codigo.gs`](apps-script/Codigo.gs).
3. En la línea `const CLAVE = 'CAMBIA-ESTA-CLAVE';` pon una palabra secreta tuya (por ejemplo `turron-2026-xk`). Guarda (⌘S / Ctrl+S).
4. Arriba a la derecha: **Implementar → Nueva implementación**.
   - Tipo: **Aplicación web**
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier usuario**
5. Pulsa **Implementar** y autoriza el acceso a tu Gmail. Google avisará de que la app no está verificada: es normal porque la has creado tú. Pulsa **Configuración avanzada → Ir a … (no seguro)** y permite.
6. Copia la **URL de la aplicación web** (termina en `/exec`).

## 2. Conéctalo en la web

Después de sortear, en la pantalla *Sorteo realizado*, pulsa **Configurar envío automático**, pega la URL y la clave y pulsa **Guardar y probar**. Desde ese momento verás el botón **Enviar N emails**.

## Bueno saber

- Gmail permite unos 100 destinatarios al día con este método.
- Los correos quedan en tu carpeta *Enviados*. Solo llevan el enlace, nunca a quién le toca a cada uno.
- La URL y la clave se guardan solo en tu navegador; no están en este repositorio.
- Si cambias el código del script, tienes que crear una **nueva versión** de la implementación (Implementar → Gestionar implementaciones → editar → Nueva versión).

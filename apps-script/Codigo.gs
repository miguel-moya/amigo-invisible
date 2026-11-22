/**
 * Envío automático de emails para amigo.invisible
 * Se ejecuta en TU cuenta de Google y envía desde TU Gmail.
 *
 * 1. Cambia la clave de abajo por una palabra secreta tuya.
 * 2. Implementar > Nueva implementación > Aplicación web
 *    - Ejecutar como: Yo
 *    - Quién tiene acceso: Cualquier usuario
 * 3. Copia la URL que termina en /exec y pégala en la web junto a la clave.
 */
const CLAVE = 'CAMBIA-ESTA-CLAVE';
const REMITENTE = 'Amigo invisible';

function doPost(e) {
  let salida;
  try {
    const d = JSON.parse(e.postData.contents);
    if (CLAVE === 'CAMBIA-ESTA-CLAVE' || d.key !== CLAVE) throw new Error('Clave incorrecta');
    if (d.test) return json({ ok: true, quota: MailApp.getRemainingDailyQuota() });
    const correos = (d.mails || []).slice(0, 60);
    const res = correos.map(function (m) {
      try {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m.to)) throw new Error('Email no válido');
        MailApp.sendEmail({ to: m.to, subject: m.subject, body: m.body, htmlBody: m.html, name: REMITENTE });
        return { to: m.to, ok: true };
      } catch (err) {
        return { to: m.to, ok: false, error: String(err.message || err) };
      }
    });
    salida = { ok: true, res: res, quota: MailApp.getRemainingDailyQuota() };
  } catch (err) {
    salida = { ok: false, error: String(err.message || err) };
  }
  return json(salida);
}

function doGet() {
  return json({ ok: true, app: 'amigo-invisible' });
}

function json(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

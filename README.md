# RGV CASHFLOW (versión PWA)

App de gastos personales: gasto por categorías, nómina y pagos fijos, inversiones/ahorro/colchón, calendario y registro rápido.
Funciona en el navegador, se puede añadir a la pantalla de inicio del iPhone y abre sin conexión.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app completa |
| `manifest.webmanifest` | Nombre, colores e iconos de la app |
| `sw.js` | Permite abrirla sin conexión |
| `icons/` | Iconos de la app |
| `.nojekyll` | Evita que GitHub Pages procese los archivos |

## Publicarla gratis con GitHub Pages

1. Crea una cuenta en https://github.com si no tienes.
2. Pulsa **New repository**. Ponle un nombre (por ejemplo `rgv-cashflow`), déjalo en **Public** y créalo.
   - GitHub Pages gratuito requiere repositorio público. El código no contiene tus datos: estos se guardan solo en tu dispositivo.
3. En el repositorio: **Add file → Upload files**. Arrastra todo el contenido de esta carpeta (incluida la carpeta `icons` y el archivo `.nojekyll`) y pulsa **Commit changes**.
   - Si el archivo `.nojekyll` no se deja arrastrar, no pasa nada: puedes omitirlo.
4. Ve a **Settings → Pages**. En *Build and deployment* elige **Deploy from a branch**, rama **main** y carpeta **/ (root)**. Guarda.
5. Espera uno o dos minutos. Arriba aparecerá la dirección: `https://TU-USUARIO.github.io/rgv-cashflow/`.

## Instalarla en el iPhone

1. Abre esa dirección en **Safari**.
2. Pulsa **Compartir** y luego **Añadir a pantalla de inicio**.
3. Ábrela desde el icono nuevo.

## Traer tus datos de la versión anterior (dentro de Claude)

1. En la versión de Claude, baja hasta el final y pulsa **Guardar copia completa (JSON)**.
2. Pasa ese archivo al iPhone (por AirDrop, Archivos o iCloud Drive).
3. En la PWA, pulsa **Importar copia** y elige el archivo.

Importar reemplaza los datos del dispositivo por los de la copia.

## Importante sobre los datos

- Los datos se guardan **solo en el dispositivo** donde usas la app. El iPhone y el ordenador no se sincronizan solos.
- Usa **Guardar copia (JSON)** de vez en cuando. Si borras los datos de Safari o desinstalas la app, se pierden.
- Para pasar datos de un dispositivo a otro: **Guardar copia** en uno e **Importar copia** en el otro.

## Actualizar la app

Cuando haya cambios, se reemplazan los archivos del repositorio (o se suben nuevos con **Add file → Upload files**). GitHub Pages se actualiza solo en uno o dos minutos. La app descarga la versión nueva al abrirla con conexión. Si no ves los cambios, ciérrala del todo y vuelve a abrirla.

Para forzar la renovación de la copia sin conexión, cambia el número de versión en `sw.js` (`rgv-cashflow-v1` → `rgv-cashflow-v2`).

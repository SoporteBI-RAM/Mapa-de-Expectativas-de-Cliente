# Mapa de Expectativas de Cliente

Esta es una aplicación web interactiva diseñada para ayudar a definir las expectativas de un proyecto basándose en la ponderación de diferentes frases clave. La aplicación genera un gráfico de orientación y un resumen textual que se actualizan en tiempo real.

## Estructura del Proyecto

El proyecto está construido con una estructura simple de archivos para facilitar su entendimiento y despliegue:

- `index.html`: Contiene la estructura principal de la página web.
- `style.css`: Define todos los estilos visuales de la aplicación.
- `script.js`: Contiene toda la lógica de la aplicación, incluyendo el manejo de datos, la actualización del gráfico y la exportación a PDF.

## ¿Cómo ejecutar la aplicación?

No necesitas un servidor complejo ni pasos de compilación. Puedes ejecutar esta aplicación directamente en tu navegador.

**Instrucciones:**

1. **Guarda los archivos:** Asegúrate de que los tres archivos (`index.html`, `style.css` y `script.js`) estén en la misma carpeta en tu computador.
2. **Abre el archivo `index.html`:** Navega hasta la carpeta donde guardaste los archivos y haz doble clic en `index.html`. Se abrirá automáticamente en tu navegador web predeterminado (como Chrome, Firefox, etc.).

¡Y eso es todo! La aplicación estará funcionando localmente en tu máquina.

## ¿Cómo subirlo a un servidor (Hosting)?

Si deseas que esta herramienta sea accesible en línea, puedes subirla a cualquier servicio de hosting que soporte archivos estáticos (la gran mayoría lo hace).

1. **Contrata un servicio de hosting:** Si aún no tienes uno, puedes usar servicios como Netlify, Vercel, GitHub Pages, o cualquier hosting web tradicional.
2. **Sube los archivos:** Usando el panel de control de tu hosting o un cliente FTP, sube los tres archivos (`index.html`, `style.css`, `script.js`) a la carpeta principal de tu sitio web (generalmente llamada `public_html`, `www`, o similar).
3. **Accede a tu dominio:** Una vez subidos los archivos, visita tu nombre de dominio en un navegador y la aplicación debería estar funcionando.

## Funcionalidades

- **Ajuste de Pesos:** Utiliza los controles deslizables (sliders) para asignar un valor de 0 a 10 a cada frase.
- **Visualización en Tiempo Real:** El gráfico radial y el resumen de texto se actualizarán automáticamente con cada ajuste que hagas.
- **Exportar a PDF:** Haz clic en el botón "Exportar a PDF" para descargar un informe con la configuración actual, incluyendo el gráfico y el resumen.

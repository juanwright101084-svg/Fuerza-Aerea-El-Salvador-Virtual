# ✈️ FAS Virtual — Escuadrón de Repaints

Tienda web estática de **repaints (liveries)** de la **Fuerza Aérea Salvadoreña (FAS)** para simuladores de vuelo **FSX / Prepar3D**, con una bitácora histórica de la FAS.

🌐 **Sitio en vivo:** https://fas-virtual.netlify.app/

> Proyecto independiente de aficionados. No está afiliado, patrocinado ni respaldado por la Fuerza Aérea Salvadoreña ni por la Fuerza Armada de El Salvador.

---

## ✨ Características

- **Hangar (galería):** tarjetas generadas desde un arreglo de JavaScript, con filtros por estado: *Todos*, *Disponibles*, *Bajo consulta*, *Vendidos* e *Internacionales*.
- **Carga de imágenes tolerante:** el sitio prueba automáticamente `.jpg`, `.jpeg`, `.png` y `.webp`, y variantes del nombre (espacios → `_` o sin espacios).
- **Compra por WhatsApp:** cada livery tiene un botón que abre WhatsApp con un mensaje prellenado.
- **Encargo a medida:** formulario que arma el pedido y lo envía por WhatsApp (no se guarda nada en el sitio).
- **Bitácora histórica:** línea de tiempo con hitos de la FAS (1923, 1969, 1980s, 1998, 2023).
- **Compatibilidad:** insignias de Tacview y TacPack.
- **Responsive**, con menú móvil y diseño de estilo aeronáutico (paneles remachados, tipografías Oswald / IBM Plex).
- Sin frameworks, sin dependencias y sin proceso de build.

## 🗂️ Estructura

```
Tienda Online FAS Virtual/
├── imagenes/      # Capturas de las liveries, escarapela FAS e insignias
├── _headers       # Cabeceras HTTP personalizadas para Netlify
├── index.html     # Página principal (HTML + CSS)
└── script.js      # Configuración, catálogo de liveries, filtros y pedidos
```

## ⚙️ Configuración

Al inicio de `script.js` está el objeto `CONFIG`:

```js
const CONFIG = {
  whatsapp: "503XXXXXXXX",   // código de país, sin + ni espacios
  email: "correo@ejemplo.com",
};
```

### Agregar una livery

Añade un objeto al arreglo `liveries` en `script.js`:

```js
{ file:"NOMBRE_IMAGEN", name:"UH-1M FAS", reg:"FAS", base:"Addon Bell UH-1M",
  price:3, status:"disponible", desc:"Descripción corta." }
```

| Campo | Descripción |
|-------|-------------|
| `file` | Nombre de la imagen dentro de `imagenes/`, **sin extensión** |
| `status` | `"disponible"`, `"consulta"` o `"vendido"` |
| `category` | Opcional: `"internacional"` para liveries no salvadoreñas |

Usa `status:"consulta"` para modelos base *payware* (p. ej. CeraSim, Carenado) mientras no haya permiso comercial del desarrollador.

## 🚀 Ejecutar en local

1. Abre `index.html` en el navegador, **o**
2. Usa la extensión *Live Server* de VS Code, **o**
3. Copia la carpeta a `C:\xampp\htdocs` y abre `http://localhost/Tienda Online FAS Virtual/`.

## ☁️ Despliegue

Alojado en **Netlify** como sitio estático. Para desplegar desde este repositorio:

1. Netlify → *Add new site → Import an existing project* y conecta el repo.
2. *Build command*: vacío. *Publish directory*: raíz (`/`).

> Netlify distingue mayúsculas y minúsculas en los nombres de archivo: `imagenes/` debe coincidir exactamente con lo que usa el código.

## ⚖️ Nota legal

Los repaints se venden **solo como textura** y requieren que el usuario posea legalmente el modelo/addon base. Este repositorio contiene únicamente el sitio web, **no los archivos de las liveries**.

## 👤 Autor

Desarrollado por **Juan** — [Marconi IT & Aerospace Solutions](https://marconiitaero.netlify.app/)

© 2026 FAS Virtual.

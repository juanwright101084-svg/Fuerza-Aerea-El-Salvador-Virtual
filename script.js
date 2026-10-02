/* ===================== CONFIG — edita esto, Juan ===================== */
const CONFIG = {
  whatsapp: "50360649822",      // TODO: pon tu número con código de país, sin +, sin espacios
  email: "marconiitaero@outlook.com", // TODO: pon tu correo real
};
/* ======================================================================= */

document.getElementById('waLink').href = "https://wa.me/" + CONFIG.whatsapp;
document.getElementById('waLink').textContent = "+" + CONFIG.whatsapp;
document.getElementById('mailLink').href = "mailto:" + CONFIG.email;
document.getElementById('mailLink').textContent = CONFIG.email;

/* =====================================================================
   HANGAR — lista de liveries. Edita este arreglo a mano: cada objeto es
   una tarjeta en la tienda. "file" es el nombre del archivo dentro de
   la carpeta imagenes/ SIN extensión — el sitio prueba .jpg, .jpeg, .png
   y .webp automáticamente, así que no importa en qué formato lo guardaste.

   status: "disponible" | "consulta" | "vendido"
     - "consulta": úsalo para modelos base payware (Carenado, CeraSim, etc.)
       hasta que tengas permiso comercial del desarrollador para vender
       el repaint.
   ===================================================================== */
const liveries = [
  { file:"BELL 412", name:"Bell 412 FAS", reg:"FAS", base:"CeraSim Bell 412 (payware)", price:3, status:"consulta", desc:"Livery FAS con roundel y serial." },
  { file:"C-47 TURBO", name:"C-47 Turbo FAS", reg:"FAS", base:"Addon C-47 Turbo", price:3, status:"disponible", desc:"Repaint del clásico transporte de la FAS." },
  { file:"FOUGA FAS", name:"Fouga Magister FAS", reg:"FAS", base:"Addon Fouga CM.170 Magister", price:3, status:"disponible", desc:"Livery del histórico jet de entrenamiento/ataque ligero de la FAS." },
  { file:"HUGES-500", name:"Hughes 500 FAS", reg:"FAS", base:"Addon Hughes 500", price:3, status:"disponible", desc:"Repaint del helicóptero ligero Hughes 500 en colores FAS." },
  { file:"UH-1H", name:"UH-1H FAS", reg:"FAS", base:"Addon Bell UH-1H", price:3, status:"disponible", desc:"Livery del Huey UH-1H salvadoreño." },
  { file:"UH-1M FAES", name:"UH-1M FAES", reg:"FAES", base:"Addon Bell UH-1M", price:3, status:"disponible", desc:"Variante UH-1M con marcas FAES." },
  { file:"UH-1M FAS", name:"UH-1M FAS", reg:"FAS", base:"Addon Bell UH-1M", price:3, status:"disponible", desc:"Livery UH-1M estándar de la Fuerza Aérea Salvadoreña." },
  { file:"UH-1M PAX", name:"UH-1M FAS — Versión PAX", reg:"FAS", base:"Addon Bell UH-1M", price:3, status:"disponible", desc:"Configuración de transporte de pasajeros del UH-1M FAS." },
  { file:"UH-1M", name:"UH-1M FAS", reg:"FAS", base:"Addon Bell UH-1M", price:3, status:"disponible", desc:"Repaint base del UH-1M en colores de la FAS." },
  { file:"UH-1M_CAZADOR_tracers", name:"UH-1M \"Cazador\"", reg:"215", base:"Addon Bell UH-1M", price:3, status:"disponible", desc:"Versión \"Cazador\" con efecto de trazadoras en vuelo — matrícula 215." },
  { file:"FAS VIRTUAL UH-1M CAZADOR", name:"UH-1M \"Cazador\" — Póster", reg:"215", base:"Addon Bell UH-1M", price:3, status:"disponible", desc:"Arte promocional del UH-1M \"Cazador\", matrícula 215, escuadrón FAS Virtual." },
  { file:"UN MD-500 FAS", name:"MD 500 FAS", reg:"FAS", base:"Addon MD Helicopters MD 500", price:3, status:"disponible", desc:"Repaint del helicóptero ligero MD 500 en colores de la FAS." },
  { file:"CIRRUS EL SALVADOR", name:"Cirrus SR22 \"El Salvador\"", reg:"N694SY", base:"Carenado Cirrus SR22 (payware)", price:3, status:"consulta", desc:"Livery temática de El Salvador sobre el Cirrus SR22." },
  { file:"UH-1H FAS", name:"UH-1H FAS", reg:"FAS", base:"Addon Bell UH-1H", price:3, status:"disponible", desc:"Livery del UH-1H en colores de la Fuerza Aérea Salvadoreña." },
  { file:"UH-1H SEA", name:"UH-1H FAS — Sobre el mar", reg:"FAS", base:"Addon Bell UH-1H", price:3, status:"disponible", desc:"UH-1H FAS en vuelo sobre el mar." },
  { file:"Between clouds", name:"UH-1H FAS — Entre nubes", reg:"FAS", base:"Addon Bell UH-1H", price:3, status:"disponible", desc:"UH-1H FAS en vuelo entre nubes." },
  { file:"FAS ILO", name:"UH-1H FAS — Ilopango", reg:"FAS", base:"Addon Bell UH-1H", price:3, status:"disponible", desc:"UH-1H FAS sobre la base de Ilopango." },
  { file:"FAS READY TO START", name:"UH-1H FAS — Listo para arrancar", reg:"FAS", base:"Addon Bell UH-1H", price:3, status:"disponible", desc:"UH-1H FAS en tierra, listo para encender motores." },
  { file:"CESSNA_O-2A__FLY", name:"Cessna O-2A FAS — En vuelo", reg:"FAS", base:"Conversión O-2A (FS2004→FSX, freeware)", price:3, status:"disponible", desc:"Cessna O-2A Skymaster en vuelo, colores FAS." },
  { file:"CESSNA O2-A FAS", name:"Cessna O-2A FAS", reg:"FAS", base:"Conversión O-2A (FS2004→FSX, freeware)", price:3, status:"disponible", desc:"Livery estándar del O-2A de observación de la FAS." },
  { file:"CESSNA O2-A", name:"Cessna O-2A FAS — Perfil", reg:"FAS", base:"Conversión O-2A (FS2004→FSX, freeware)", price:3, status:"disponible", desc:"Vista de perfil del O-2A en colores FAS." },
  { file:"O2-A ON MISSION", name:"Cessna O-2A FAS — En misión", reg:"FAS", base:"Conversión O-2A (FS2004→FSX, freeware)", price:3, status:"disponible", desc:"O-2A FAS en misión de observación." },
  { file:"O2-A RECO", name:"Cessna O-2A FAS — Reconocimiento", reg:"FAS", base:"Conversión O-2A (FS2004→FSX, freeware)", price:3, status:"disponible", desc:"O-2A FAS en vuelo de reconocimiento." },
  { file:"O2A", name:"Cessna O-2A FAS — Ángulo bajo", reg:"FAS", base:"Conversión O-2A (FS2004→FSX, freeware)", price:3, status:"disponible", desc:"O-2A FAS, toma en ángulo bajo." },
  { file:"O2-A", name:"Cessna O-2A FAS — Estudio", reg:"FAS", base:"Conversión O-2A (FS2004→FSX, freeware)", price:3, status:"disponible", desc:"Toma de estudio del O-2A en colores FAS." },
  { file:"FENIX_700", name:"Cessna Grand Caravan \"Fénix 700\" — En vuelo", reg:"FENIX 700", base:"Addon Cessna 208 Grand Caravan", price:3, status:"disponible", desc:"Grand Caravan de transporte FAS, matrícula Fénix 700, sobre el mar." },
  { file:"FENIX_FAS", name:"Cessna Grand Caravan \"Fénix 700\" — Vuelo costero", reg:"FENIX 700", base:"Addon Cessna 208 Grand Caravan", price:3, status:"disponible", desc:"Grand Caravan \"Fénix 700\" en vuelo sobre la costa." },
  { file:"FENIX_STOPPED", name:"Cessna Grand Caravan \"Fénix 700\" — En tierra", reg:"FENIX 700", base:"Addon Cessna 208 Grand Caravan", price:3, status:"disponible", desc:"Grand Caravan \"Fénix 700\" estacionado en plataforma." },
  { file:"O2A_MARTILLO", name:"Cessna O-2A FAS \"Martillo\"", reg:"624", base:"Conversión O-2A (FS2004→FSX, freeware)", price:3, status:"disponible", desc:"O-2A en esquema camuflado \"Martillo\", matrícula 624." },
  { file:"AC47_FAES", name:"AC-47 Gunship FAES 116 — Vista trasera", reg:"FAES 116", base:"Addon AC-47 Gunship (Douglas C-47)", price:3, status:"disponible", desc:"AC-47 gris FAES 116, toma trasera en vuelo." },
  { file:"AC47_GUNS", name:"AC-47 Gunship FAES 116 — En vuelo", reg:"FAES 116", base:"Addon AC-47 Gunship (Douglas C-47)", price:3, status:"disponible", desc:"AC-47 FAES 116 sobre el mar de nubes." },
  { file:"AC47", name:"AC-47 Gunship FAES 116 — Aterrizaje", reg:"FAES 116", base:"Addon AC-47 Gunship (Douglas C-47)", price:3, status:"disponible", desc:"AC-47 FAES 116 en aproximación final." },
  { file:"AC47FAS", name:"AC-47 Gunship FAES 116 — Entre nubes", reg:"FAES 116", base:"Addon AC-47 Gunship (Douglas C-47)", price:3, status:"disponible", desc:"AC-47 FAES 116 en vuelo entre nubes." },
  { file:"AC47GUNSHIP", name:"AC-47 Gunship FAES 106 — Camuflado", reg:"FAES 106", base:"Addon AC-47 Gunship (Douglas C-47)", price:3, status:"disponible", desc:"AC-47 camuflado FAES 106, vuelo bajo sobre el terreno." },
  { file:"AC47MINIGUN", name:"AC-47 Gunship FAES 106 — Minigun activa", reg:"FAES 106", base:"Addon AC-47 Gunship (Douglas C-47)", price:3, status:"disponible", desc:"AC-47 FAES 106 con destellos de minigun en vuelo nocturno." },
  { file:"AC47OLIVO", name:"AC-47 Gunship FAES 106 — Entre nubes", reg:"FAES 106", base:"Addon AC-47 Gunship (Douglas C-47)", price:3, status:"disponible", desc:"AC-47 camuflado FAES 106 en vuelo entre nubes." },
  { file:"AC4780S", name:"AC-47 Gunship FAES 106 — Perfil", reg:"FAES 106", base:"Addon AC-47 Gunship (Douglas C-47)", price:3, status:"disponible", desc:"Vista de perfil del AC-47 camuflado FAES 106." },
  { file:"T-41_MESCALERO", name:"Cessna T-41 Mescalero FAS 95 — Vista trasera", reg:"FAS 95", base:"Addon Cessna T-41 Mescalero", price:3, status:"disponible", desc:"T-41 Mescalero de entrenamiento, matrícula FAS 95, toma trasera en vuelo." },
  { file:"T41", name:"Cessna T-41 Mescalero FAS 95 — Vista inferior", reg:"FAS 95", base:"Addon Cessna T-41 Mescalero", price:3, status:"disponible", desc:"T-41 Mescalero FAS 95 visto desde abajo en vuelo." },
  { file:"T-41", name:"Cessna T-41 Mescalero FAS — Cola", reg:"FAS", base:"Addon Cessna T-41 Mescalero", price:3, status:"disponible", desc:"Vista de cola del T-41 Mescalero en colores FAS." },
  { file:"MESCALERO_FAS", name:"Cessna T-41 Mescalero FAS 95 — Sobre el mar", reg:"FAS 95", base:"Addon Cessna T-41 Mescalero", price:3, status:"disponible", desc:"T-41 Mescalero FAS 95 en vuelo sobre el mar." },
  { file:"PC-9", name:"Pilatus PC-9 RAAF — En vuelo", reg:"A23-044", base:"Addon Pilatus PC-9", price:3, status:"disponible", category:"internacional", desc:"Livery de fábrica de la Real Fuerza Aérea Australiana (RAAF), escuadrón 2FTS." },
  { file:"PC-9_Parked", name:"Pilatus PC-9 RAAF — En plataforma", reg:"A23-044", base:"Addon Pilatus PC-9", price:3, status:"disponible", category:"internacional", desc:"PC-9 RAAF estacionado en plataforma, escuadrón 2FTS." },
  { file:"Top_Gun", name:"F-14 Tomcat \"Top Gun\" — Vista superior", reg:"104", base:"Addon Grumman F-14 Tomcat", price:3, status:"disponible", category:"internacional", desc:"Livery de la Marina de EE. UU. inspirada en \"Top Gun\", escuadrón VF-1." },
  { file:"F-14_Clouds", name:"F-14 Tomcat \"Top Gun\" — Entre nubes", reg:"104", base:"Addon Grumman F-14 Tomcat", price:3, status:"disponible", category:"internacional", desc:"F-14 Tomcat \"Top Gun\" en vuelo entre nubes." },
  { file:"F-14_TOP_GUN", name:"F-14 Tomcat \"Top Gun\" — Maniobra", reg:"104", base:"Addon Grumman F-14 Tomcat", price:3, status:"disponible", category:"internacional", desc:"F-14 Tomcat \"Top Gun\" en maniobra de combate simulado." },
  { file:"UH60_Flying", name:"UH-60 Black Hawk USAF Rescue — En vuelo", reg:"USAF 26212", base:"Addon Sikorsky UH-60", price:3, status:"disponible", category:"internacional", desc:"Livery USAF Pararescue/Rescue del UH-60 Black Hawk, en vuelo entre nubes." },
  { file:"UH60", name:"UH-60 Black Hawk USAF Rescue — Frontal", reg:"USAF 26212", base:"Addon Sikorsky UH-60", price:3, status:"disponible", category:"internacional", desc:"Vista frontal del UH-60 USAF Rescue en pista." },
  { file:"PARARESCUE", name:"UH-60 Black Hawk USAF Pararescue — Aterrizaje", reg:"USAF 26212", base:"Addon Sikorsky UH-60", price:3, status:"disponible", category:"internacional", desc:"UH-60 USAF Pararescue en aproximación sobre terreno." },
  { file:"412_bell", name:"Bell 412 FAS — Sobre el agua, puertas abiertas", reg:"FAS", base:"CeraSim Bell 412 (payware)", price:3, status:"consulta", desc:"Bell 412 FAS en vuelo estacionario sobre el agua, puertas abiertas." },
  { file:"412_no_doors", name:"Bell 412 FAS — Vista lateral sobre el agua", reg:"FAS", base:"CeraSim Bell 412 (payware)", price:3, status:"consulta", desc:"Bell 412 FAS en vuelo sobre el agua." },
  { file:"bell_412", name:"Bell 412 FAS — Bambi bucket, vista superior", reg:"FAS", base:"CeraSim Bell 412 (payware)", price:3, status:"consulta", desc:"Bell 412 FAS visto desde arriba con bambi bucket para combate de incendios." },
  { file:"bell_412_air", name:"Bell 412 FAS — Vista frontal en tierra", reg:"FAS", base:"CeraSim Bell 412 (payware)", price:3, status:"consulta", desc:"Bell 412 FAS visto de frente sobre terreno." },
  { file:"bell_412_bambi", name:"Bell 412 FAS — Con bambi bucket en vuelo", reg:"FAS", base:"CeraSim Bell 412 (payware)", price:3, status:"consulta", desc:"Bell 412 FAS en vuelo con bambi bucket sobre el mar." },
  { file:"bell_412_main", name:"Bell 412 FAS — Toma principal", reg:"FAS", base:"CeraSim Bell 412 (payware)", price:3, status:"consulta", desc:"Bell 412 FAS con \"Fuerza Aérea Salvadoreña\" visible en el fuselaje." },
  { file:"bell_412_water", name:"Bell 412 FAS — Vista superior sobre el agua", reg:"FAS", base:"CeraSim Bell 412 (payware)", price:3, status:"consulta", desc:"Bell 412 FAS visto desde arriba sobre el agua." },
  { file:"412_bam", name:"Bell 412 FAS — Bambi bucket, cielo nublado", reg:"FAS", base:"CeraSim Bell 412 (payware)", price:3, status:"consulta", desc:"Bell 412 FAS con bambi bucket bajo cielo nublado." },
  { file:"412_lake", name:"Bell 412 FAS — Bambi bucket sobre el lago", reg:"FAS", base:"CeraSim Bell 412 (payware)", price:3, status:"consulta", desc:"Bell 412 FAS con bambi bucket volando bajo sobre un lago." },
  { file:"bam_412", name:"Bell 412 FAS — Bambi bucket, vuelo nocturno", reg:"FAS", base:"CeraSim Bell 412 (payware)", price:3, status:"consulta", desc:"Bell 412 FAS con bambi bucket en escena nocturna." },
  { file:"bam_bi", name:"Bell 412 FAS — Bambi bucket, vuelo bajo", reg:"FAS", base:"CeraSim Bell 412 (payware)", price:3, status:"consulta", desc:"Bell 412 FAS con bambi bucket en vuelo bajo sobre el terreno." },
  { file:"bell_412_1", name:"Bell 412 FAS — Primer plano, puertas abiertas", reg:"FAS", base:"CeraSim Bell 412 (payware)", price:3, status:"consulta", desc:"Bell 412 FAS en primer plano con \"Fuerza Aérea Salvadoreña\" visible." },
  { file:"bell_412_acces_panels", name:"Bell 412 FAS — En tierra, paneles de acceso", reg:"FAS", base:"CeraSim Bell 412 (payware)", price:3, status:"consulta", desc:"Bell 412 FAS en plataforma con equipo de tierra conectado." },
  { file:"bell_412_landing", name:"Bell 412 FAS — Aproximación entre nubes", reg:"FAS", base:"CeraSim Bell 412 (payware)", price:3, status:"consulta", desc:"Bell 412 FAS en aproximación con nubes de fondo." },
  { file:"bambi", name:"UH-1H FAS 215 — Bambi bucket en vuelo", reg:"215", base:"Addon Bell UH-1H", price:3, status:"disponible", desc:"UH-1H de transporte FAS con bambi bucket, matrícula 215." },
  { file:"bambi_h_bucket", name:"UH-1H FAS 215 — Bambi bucket sobre el mar", reg:"215", base:"Addon Bell UH-1H", price:3, status:"disponible", desc:"UH-1H de transporte FAS con bambi bucket volando sobre el mar." },
  { file:"bambi_uh", name:"UH-1H FAS 215 — Bambi bucket, vista de vientre", reg:"215", base:"Addon Bell UH-1H", price:3, status:"disponible", desc:"UH-1H de transporte FAS visto desde abajo con bambi bucket sobre el mar." },
  { file:"bambibucket_uh", name:"UH-1H FAS 215 — Bambi bucket, vista superior", reg:"215", base:"Addon Bell UH-1H", price:3, status:"disponible", desc:"UH-1H de transporte FAS visto desde arriba con bambi bucket entre nubes." },
  { file:"bucket_bambi_h", name:"UH-1H FAS 215 — Bambi bucket, vista de cañón", reg:"215", base:"Addon Bell UH-1H", price:3, status:"disponible", desc:"UH-1H de transporte FAS con bambi bucket, toma desde la posición de tirador." },
  { file:"uh_bambi", name:"UH-1H FAS 215 — Bambi bucket al atardecer", reg:"215", base:"Addon Bell UH-1H", price:3, status:"disponible", desc:"UH-1H de transporte FAS con bambi bucket sobre el mar con luz de atardecer." },
  { file:"Basler_FAS", name:"Basler BT-67 FAS 115", reg:"FAS 115", base:"Addon Basler BT-67 (Douglas DC-3 turbo)", price:3, status:"disponible", desc:"Basler BT-67 FAS en plataforma de Ilopango." },
  { file:"Blackhawk_ilo", name:"UH-60 Black Hawk — US Army, Ilopango", reg:"US ARMY", base:"Addon Sikorsky UH-60", price:3, status:"disponible", category:"internacional", desc:"UH-60 con matrícula de EE. UU. en plataforma de Ilopango." },
  { file:"Fouga", name:"Fouga Magister FAS 509 — En plataforma, Ilopango", reg:"509", base:"Addon Fouga CM.170 Magister", price:3, status:"disponible", desc:"Fouga Magister FAS 509 estacionado en la base de Ilopango." },
  { file:"Helica_en_Atunero", name:"R44 Raven II HELICA — En cubierta de buque atunero", reg:"YS-1006-P", base:"Addon Robinson R44 Raven II (flotadores)", price:3, status:"disponible", desc:"R44 Raven II con flotadores posado en la cubierta de un buque atunero." },
  { file:"helica_en_vuelo", name:"R44 Raven II HELICA — Vuelo sobre el mar", reg:"YS-1006-P", base:"Addon Robinson R44 Raven II (flotadores)", price:3, status:"disponible", desc:"R44 Raven II con flotadores en vuelo sobre el mar, captura en simulador." },
  { file:"Helica_vuelo", name:"R44 Raven II HELICA — Vuelo costero", reg:"YS-1006-P", base:"Addon Robinson R44 Raven II (flotadores)", price:3, status:"disponible", desc:"R44 Raven II con flotadores en vuelo sobre la costa salvadoreña." },
  { file:"PC21_ArmeedelAir_vuelo", name:"Pilatus PC-21 Armée de l'Air — En vuelo", reg:"708FC", base:"Addon Pilatus PC-21", price:3, status:"disponible", category:"internacional", desc:"PC-21 de la Armée de l'Air francesa en viraje sobre la costa." },
  { file:"PC21_ArmeedelAir_cockpit", name:"Pilatus PC-21 Armée de l'Air — Cabina", reg:"708FC", base:"Addon Pilatus PC-21", price:3, status:"disponible", category:"internacional", desc:"Vista de cabina del PC-21 con panel de instrumentos y moving map." },
  { file:"PC21_ArmeedelAir_lateral", name:"Pilatus PC-21 Armée de l'Air — Vista lateral", reg:"708FC", base:"Addon Pilatus PC-21", price:3, status:"disponible", category:"internacional", desc:"Vista lateral del PC-21 en vuelo, matrícula 708FC." },
  { file:"A10_Warthog_rampa", name:"A-10 Thunderbolt II \"Warthog\" — En rampa", reg:"81-949", base:"Addon Fairchild A-10", price:3, status:"disponible", category:"internacional", desc:"A-10 Warthog USAF con boca de tiburón, código de cola DM (Davis-Monthan), en rampa." },
  { file:"A10_Warthog_bajo_vuelo", name:"A-10 Thunderbolt II \"Warthog\" — Vuelo rasante", reg:"81-949", base:"Addon Fairchild A-10", price:3, status:"disponible", category:"internacional", desc:"A-10 Warthog USAF en vuelo rasante sobre campos, código de cola DM." },
  { file:"A10_Warthog_vuelo", name:"A-10 Thunderbolt II \"Warthog\" — En vuelo", reg:"81-949", base:"Addon Fairchild A-10", price:3, status:"disponible", category:"internacional", desc:"A-10 Warthog USAF en vuelo sobre campiña, código de cola DM." },
  { file:"VRS_F18_Top_Gun", name:"F/A-18 Super Hornet \"Top Gun\" — Vista superior", reg:"US NAVY", base:"Addon VRS F/A-18 (payware)", price:3, status:"disponible", category:"internacional", desc:"F/A-18 con livery inspirada en Top Gun, vista superior en ascenso con postcombustión." },
  { file:"Mirage2000_ChevalierDuCiel", name:"Mirage 2000-10 \"Chevalier du Ciel\" — Dassault", reg:"Armée de l'Air", base:"Addon Dassault Mirage 2000", price:3, status:"disponible", category:"internacional", desc:"Mirage 2000-10 con livery especial negra y roja \"Chevalier du Ciel\", armado con misil, en rampa." },
  { file:"T45_Goshawk_practica_bombas", name:"T-45 Goshawk US Navy — Práctica de bombas", reg:"303", base:"Addon McDonnell Douglas T-45 Goshawk", price:3, status:"disponible", category:"internacional", desc:"T-45 Goshawk de la US Navy, código de cola B, en vuelo con bombas de práctica." },
  { file:"MD530_ARMED_FAS", name:"MD 530 FAS — Armed", reg:"FAS", base:"Addon MD Helicopters MD 530", price:3, status:"disponible", desc:"MD 530 FAS equipado con configuración armada." },
  { file:"MD_530_Armed", name:"MD 530 FAS — Armed", reg:"FAS", base:"Addon MD Helicopters MD 530", price:3, status:"disponible", desc:"MD 530 FAS en configuración armada." },
  { file:"MD_530_FAS ARMED", name:"MD 530 FAS — Armed", reg:"FAS", base:"Addon MD Helicopters MD 530", price:3, status:"disponible", desc:"MD 530 FAS con configuración armada, vista promocional." },
  { file:"ONU_Armed_Mali", name:"FAS — Misión ONU Mali Armed", reg:"ONU", base:"Addon compatible", price:3, status:"disponible", category:"internacional", desc:"Livery FAS para misión de Naciones Unidas en Mali, en configuración armada." },
  { file:"ONU_Mali", name:"FAS — Misión ONU Mali", reg:"ONU", base:"Addon compatible", price:3, status:"disponible", category:"internacional", desc:"Livery FAS para misión de Naciones Unidas en Mali." },
  { file:"Mision_Mali_FAS", name:"FAS — Misión Mali", reg:"FAS", base:"Addon compatible", price:3, status:"disponible", category:"internacional", desc:"Livery FAS inspirada en una misión internacional en Mali." },
];

let currentFilter = "all";
const IMG_EXTS = ["jpg","jpeg","png","webp"];

function imgWithFallback(basePath, alt){
  // builds a list of candidate paths: original name, spaces->underscore,
  // spaces removed — each tried across common extensions, in order,
  // until one loads. Shows a placeholder only if none work.
  const variants = [...new Set([
    basePath,
    basePath.replace(/ /g, "_"),
    basePath.replace(/ /g, ""),
  ])];
  const candidates = [];
  variants.forEach(v => IMG_EXTS.forEach(ext => candidates.push(v + "." + ext)));

  const id = "img_" + Math.random().toString(36).slice(2);
  setTimeout(() => {
    const el = document.getElementById(id);
    if(!el) return;
    let i = 0;
    el.onerror = function(){
      i++;
      if(i < candidates.length){
        el.src = candidates[i];
      }else{
        el.replaceWith(Object.assign(document.createElement('div'), {className:'ph', textContent:'Imagen no encontrada: ' + basePath}));
      }
    };
  }, 0);
  return `<img id="${id}" src="${candidates[0]}" alt="${alt}">`;
}

function statusTag(status){
  if(status === "disponible") return '<span class="tag disp">Disponible</span>';
  if(status === "vendido") return '<span class="tag vendido">Vendido</span>';
  return '<span class="tag consulta">Bajo consulta</span>';
}

function renderGallery(){
  const grid = document.getElementById('galleryGrid');
  const filtered = currentFilter === "all" ? liveries
    : currentFilter === "internacional" ? liveries.filter(l => l.category === "internacional")
    : liveries.filter(l => l.status === currentFilter);

  if(filtered.length === 0){
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">
      ${liveries.length === 0
        ? "Aún no hay liveries publicados. Agrega el primero editando el arreglo liveries en el código."
        : "No hay liveries en esta categoría todavía."}
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map((l) => {
    const realIndex = liveries.indexOf(l);
    const canBuy = l.status === "disponible";
    const btnLabel = l.status === "vendido" ? "No disponible" : "Comprar";
    const canClick = l.status !== "vendido";
    const imgPath = "imagenes/" + l.file;
    return `
    <div class="card riveted">
      <span class="rivet-bl"></span><span class="rivet-br"></span>
      <div class="thumb">
        ${imgWithFallback(imgPath, escapeHtml(l.name))}
      </div>
      <div class="card-head">
        <h3>${escapeHtml(l.name)}</h3>
        <div style="display:flex; flex-direction:column; gap:5px; align-items:flex-end;">
          ${statusTag(l.status)}
          ${l.category === "internacional" ? '<span class="tag intl">Internacional</span>' : ''}
        </div>
      </div>
      <div class="reg">${escapeHtml(l.reg || '—')} · ${escapeHtml(l.base || '')}</div>
      <p class="desc">${escapeHtml(l.desc || '')}</p>
      <div class="card-foot">
        <span class="price">$${Number(l.price || 0).toFixed(2)}</span>
        <button class="btn ${canClick ? '' : 'ghost'}" ${canClick ? '' : 'disabled'} data-buy-index="${realIndex}">${btnLabel}</button>
      </div>
    </div>`;
  }).join('');
}

function escapeHtml(str){
  const d = document.createElement('div');
  d.textContent = str || '';
  return d.innerHTML;
}

function buyLivery(index){
  const l = liveries[index];
  if(!l) return;
  const msg = `Hola! Me interesa el livery "${l.name}" (${l.reg || 'sin matrícula'}) por $${Number(l.price||0).toFixed(2)}. ¿Está disponible?`;
  window.open("https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(msg), "_blank", "noopener,noreferrer");
}

/* delegación de eventos: reemplaza los antiguos onclick="buyLivery(...)" inline */
document.getElementById('galleryGrid').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-buy-index]');
  if(!btn) return;
  buyLivery(Number(btn.dataset.buyIndex));
});

/* filters */
document.getElementById('filterTabs').addEventListener('click', (e) => {
  if(e.target.tagName !== 'BUTTON') return;
  document.querySelectorAll('#filterTabs button').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  currentFilter = e.target.dataset.filter;
  renderGallery();
});

/* order form -> whatsapp */
document.getElementById('btnOrder').addEventListener('click', () => {
  const name = document.getElementById('oName').value.trim();
  const contact = document.getElementById('oContact').value.trim();
  const aircraft = document.getElementById('oAircraft').value.trim();
  const sim = document.getElementById('oSim').value.trim();
  const details = document.getElementById('oDetails').value.trim();

  const msg = `Hola! Soy ${name || '(sin nombre)'}.\nQuiero encargar un livery.\nAeronave/addon: ${aircraft || '-'}\nSimulador: ${sim || '-'}\nDetalles: ${details || '-'}\nMi contacto: ${contact || '-'}`;
  window.open("https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(msg), "_blank", "noopener,noreferrer");
});

/* mobile nav menu */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

renderGallery();

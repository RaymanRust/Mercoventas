// ---------- CONFIGURACIÓN ----------
const USD_TO_CUP = 700;
let useCUP = false;

const BANNER_SLIDES = [
  { image: 'img/banner1.jpg', text: 'Sabados de Ofertas ' },
  { image: 'img/banner2.jpg', text: 'Envíos gratis +9.9 USD' },
  { image: 'img/banner2.jpg', text: 'Siente lo nuevo' },
];

const CATEGORIES = [
  { id: 'todas', name: 'Todos los productos', icon: 'border-all' },
  { id: 'solar', name: 'Solar', icon: 'sun' },
  { id: 'electricas', name: 'Eléctricas', icon: 'bolt' },
  { id: 'herramientas', name: 'Herramientas', icon: 'tools' },
  { id: 'refrigeracion', name: 'Refrigeración y Clima', icon: 'snowflake' }
];

// PRODUCTOS CON MÚLTIPLES CATEGORÍAS (array categories)
const PRODUCTS = [
  { id: 1, name: 'Acoplador Rapido Amaricano de 2 vias 1/4', desc: '', categories: ['herramientas'], images: ['img/productos/Acoplador-rapido-amercano-de-2-vias.jpg','img/productos/Acoplador-rapido-amercano-de-2-vias1.jpg'], priceBase: 9, price1: 8.06, price2: 7.59, price3: 6.84 },
  { id: 2, name: 'Acoplador Rapido kit alta/baja plateado', desc: '', categories: ['herramientas'], images: ['img/productos/acoplador-rapido-kit-altabaja-plateado.jpg'], priceBase: 16, price1: 13.86, price2: 12.79, price3: 11.18 },
  { id: 3, name: 'Adaptador Corto 410', desc: '', categories: ['refrigeracion'], images: ['img/productos/adaptador-corto.jpg'], priceBase: 2.5, price1: 2.18, price2: 2.02, price3: 1.78 },
  { id: 4, name: 'Alambre de Soldadura de estano 100g', desc: '', categories: ['herramientas'], images: ['img/productos/alambre-de-soldadura-de-estano.jpg'], priceBase: 0.5, price1: 0.45, price2: 0.42, price3: 0.38 },
  { id: 5, name: 'Alambre para soldar C/ Nucleo Fundente 1kg - 0,8 mm', desc: '', categories: ['herramientas'], images: ['img/productos/alambre-para-soldar-con-nucleo-fundente.jpg'], priceBase: 10, price1: 8.76, price2: 8.14, price3: 7.21 },
  { id: 6, name: 'Alambre de Soldadura Solido 1kg', desc: '', categories: ['herramientas'], images: ['img/productos/alambre-de-soldadura-solido.jpg'], priceBase: 10.50, price1: 9.44, price2: 8.91, price3: 8.11 },
  { id: 7, name: 'Alicate de Corte Diagonal 7"', desc: '', categories: ['herramientas'], images: ['img/productos/alicate-de-corte-diagonal-7.jpg'], priceBase: 8, price1: 7.16, price2: 6.74, price3: 6.11 },
  { id: 8, name: 'Alicatede Presion recto 10"', desc: '', categories: ['herramientas'], images: ['img/productos/alicate-de-presion-recto-10.jpg'], priceBase: 8, price1: 6.90, price2: 6.35, price3: 5.53 },
  { id: 9, name: 'Adaptador rotomartillo SDS PLUS 8"/200 mm', desc: '', categories: ['herramientas'], images: ['img/productos/adaptador-rotomartillo.jpg'], priceBase: 20, price1: 17.94, price2: 16.91, price3: 15.36 },
  { id: 10, name: 'Alicatede Multifuncion C/ Bolsa 11 en 1', desc: '', categories: ['herramientas'], images: ['img/productos/alicate-multifuncion-con-bolsa-11enuno.jpg'], priceBase: 6, price1: 5.33, price2: 5, price3: 4.50 },
  { id: 11, name: 'Alicate punta curva 6"', desc: '', categories: ['herramientas'], images: ['img/productos/alicate-punta-curva-6.jpg'], priceBase: 6, price1: 5.30, price2: 4.94, price3: 4.42 },
  { id: 12, name: 'Alicatede punta curva de 8"', desc: '', categories: ['herramientas'], images: ['img/productos/alicate-punta-curva-8.jpg'], priceBase: 8, price1: 7.03, price2: 6.55, price3: 5.82 },
  { id: 13, name: 'Alicate punta larga de 6"', desc: '', categories: ['herramientas'], images: ['img/productos/alicate-punta-larga-6.jpg'], priceBase: 6.5, price1: 5.64, price2: 5.21, price3: 4.56 },
  { id: 14, name: 'Arandelas Autoblocantes de 4mm', desc: '', categories: ['herramientas'], images: ['img/productos/arandela-autoblocante-de-4mm.jpg'], priceBase: 1.60, price1: 1.44, price2: 1.35, price3: 1.23 },
  { id: 15, name: 'Arandelas Autoblocantes de 6mm', desc: '', categories: ['herramientas'], images: ['img/productos/arandela-autoblocante-de-6mm.jpg'], priceBase: 1.90, price1: 1.68, price2: 1.57, price3: 1.41 },
  { id: 16, name: 'Aspa para Micromotor  Refrigerador Fino', desc: '', categories: ['herramientas'], images: ['img/productos/aspa-para-micromotor-refrigerador-fina.jpg'], priceBase: 2.5, price1: 2.24, price2: 2.11, price3: 1.91 },
  { id: 17, name: 'Aspa para Micromotor 0 Fan Eje Gordo', desc: '', categories: ['herramientas'], images: ['img/productos/aspa-para-micromotor-o-fan-eje-gorda.jpg'], priceBase: 2, price1: 1.85, price2: 1.78, price3: 1.67 },
  { id: 18, name: 'Bateria de LiFePO4 12V 200Ah', desc: '', categories: ['solar'], images: ['img/productos/bateria lifepo4 12V 200Ah.jpeg'], priceBase: 550, price1: 550, price2: 550, price3: 515.89 },
  { id: 19, name: 'Bateria de Lifepo4 24V 200Ah', desc: '', categories: ['solar'], images: ['img/productos/bateria lifepo4 24V 200Ah.jpeg'], priceBase: 1050, price1: 1050, price2: 1050, price3: 990  },
  { id: 20, name: 'Bateria de Lifepo4 48V 100Ah', desc: '', categories: ['solar'], images: ['img/productos/bateria lifepo4 48V 100Ah.jpeg'], priceBase: 1200, price1: 1200, price2: 1200, price3: 1150 },
  { id: 21, name: 'Bateria Inteligente LiFePO4 51.2V 100Ah', desc: '', categories: ['solar'], images: ['img/productos/bateria powmr.jpg'], priceBase: 1100, price1: 1100, price2: 1100, price3: 1050 },
  { id: 22, name: 'Breaker DC de 25A', desc: '', categories: ['solar'], images: ['img/productos/breaker 25 DC.jpg'], priceBase: 18, price1: 15.56, price2: 14.35, price3: 12.52 },
  { id: 23, name: 'Breaker DC de 63A ', desc: '', categories: ['solar','electricas'], images: ['img/productos/breaker 63 DC.jpg'], priceBase: 20, price1: 17.17, price2: 15.76, price3: 13.64 },
  { id: 24, name: 'Breaker doble AC de 16A 120/240V', desc: '', categories: ['solar','electricas'], images: ['img/productos/Breaker 16 AC.jpg'], priceBase: 4, price1: 3.56, price2: 3.35, price3: 3.03 },
  { id: 25, name: 'Breaker doble AC de 32A 120/240V', desc: '', categories: ['solar','electricas'], images: ['img/productos/breaker 32 AC.jpg'], priceBase: 4, price1: 3.55, price2: 3.33, price3: 2.99 },
  { id: 26, name: 'Cable original para estacion de energia portatil 3m', desc: '', categories: ['solar'], images: ['img/productos/Cable original para estacion de energia portatil.jpeg'], priceBase: 50, price1: 43.26, price2: 39.89, price3: 34.84 },
  { id: 27, name: 'Cable original para estacion de energia portatil 5m', desc: '', categories: ['solar'], images: ['img/productos/Cable original para estacion de energia portatil.jpeg'], priceBase: 70, price1: 61.15, price2: 56.72, price3: 50.08 },
  { id: 28, name: 'Conectores para paneles solares tipo Y MC4 con cable', desc: '', categories: ['solar'], images: ['img/productos/mc4 y con cable.jpg'], priceBase: 12, price1: 10.66, price2: 9.97, price3: 8.96 },
  { id: 29, name: 'Conectores para paneles solares tipo Y MC4 Rígido', desc: '', categories: ['solar'], images: ['img/productos/mc4 y rigido.jpg'], priceBase: 12, price1: 10.61, price2: 9.92, price3: 8.87 },
  { id: 30, name: 'Conectores MC4 (pareja)', desc: '', categories: ['solar'], images: ['img/productos/conector mc4.jpg'], priceBase: 2.5, price1: 1.72, price2: 1.59, price3: 11.38 },
  { id: 31, name: 'Conectores Xt60I-F (1 pieza) marca Amass', desc: '', categories: ['solar','electricas'], images: ['img/productos/conector xt60i-F.jpg'], priceBase: 5, price1: 4.35, price2: 4.02, price3: 3.53 },
  { id: 32, name: 'Cuchilla doble tiro monof 63 amp', desc: '', categories: ['herramientas','electricas'], images: ['img/productos/cuchilla doble tiro monof 63 amp.png'], priceBase: 12, price1: 10.36, price2: 9.53, price3: 8.30 },
  { id: 33, name: 'Cuchilla doble tiro trif 63 amp', desc: '', categories: ['herramientas','electricas'], images: ['img/productos/cuchilla doble tiro trif 63 amp.png'], priceBase: 18, price1: 15.49, price2: 14.23, price3: 12.34 },
  { id: 34, name: 'Cuchilla doble tiro trif 100 amp', desc: '', categories: ['herramientas','electricas'], images: ['img/productos/cuchilla doble tiro trf 100amp.png'], priceBase: 24, price1: 20.71, price2: 19.07, price3: 16.60 },
  { id: 35, name: 'Estacion de energia portatil DABBSON', desc: '', categories: ['solar'], images: ['img/productos/Estacion de energia portatil DABBSON.jpeg'], priceBase: 950, price1: 950, price2: 950, price3: 950  },
  { id: 36, name: 'Estacion de Energia Portatil Delta 3 Classic', desc: '', categories: ['solar'], images: ['img/productos/estacion de energia portatil Delta 3 Classic.jpeg'], priceBase: 720, price1: 720, price2: 720, price3: 720 },
  { id: 37, name: 'EcoFlow DELTA 3 Max Series Portable Power Station', desc: '(2048 wh)-4800 pico', categories: ['solar'], images: ['img/productos/estacion de energia portatil Delta 3 Max.jpeg'], priceBase: 1220, price1: 1150.6, price2: 11115.9, price3: 1063.8 },
  { id: 38, name: 'Hidrolavadora de 1400W', desc: '', categories: ['herramientas','refrigeracion'], images: ['img/productos/hidrolavadora.jpg'], priceBase: 160, price1: 144.87, price2: 137.30, price3: 125.95 },
  { id: 39, name: 'Hidrolavadora de 1650W', desc: '', categories: ['herramientas','refrigeracion'], images: ['img/productos/hidrolavadora.jpg'], priceBase: 190, price1: 171.38, price2: 162.07, price3: 148.11 },
  { id: 40, name: 'Inversor híbrido SOLAR PowMr 6.5KW 48Vdc 120/240V', desc: '', categories: ['solar'], images: ['img/productos/Inversor Powmr.jpg'], priceBase: 1350, price1: 1350, price2: 1350, price3: 1250 },
  { id: 41, name: 'Inversor híbrido SOLAR PowMr 5KW 48Vdc 120V', desc: '', categories: ['solar'], images: ['img/productos/Inversor Powmr.jpg'], priceBase: 850, price1: 850, price2: 850, price3: 800 },
  { id: 42, name: 'Inversor híbrido SOLAR SUMRY 4000W/120VAC', desc: '', categories: ['solar'], images: ['img/productos/inversor negro.jpg'], priceBase: 480, price1: 480, price2: 405.8, price3: 395 },
  { id: 43, name: 'Juego de Manometros R410a/R134a/R22 Cowplandt', desc: '', categories: ['herramientas','refrigeracion'], images: ['img/productos/manometro.jpg'], priceBase: 36, price1: 34.55, price2: 31.83, price3: 27.75 },
  { id: 44, name: 'Kit de conectores variados 1200 pcs y pinza de Crimpado', desc: '', categories: ['solar','electricas'], images: ['img/productos/pinza crimpadora.jpg'], priceBase: 45, price1: 38.79, price2: 35.69, price3: 31.04 },
  { id: 45, name: 'Kit de conectores variados 2000 pcs y pinza de Crimpado', desc: '', categories: ['solar','electricas'], images: ['img/productos/pinza crimpadora.jpg'], priceBase: 50, price1: 44.41, price2: 41.61, price3: 37.42 },
  { id: 46, name: 'LLave Combinada Ratchet 10mm', desc: '', categories: ['herramientas'], images: ['img/productos/llave ratchet 10.jpg'], priceBase: 4, price1: 3.57, price2: 3.36, price3: 3.03 },
  { id: 47, name: 'LLave Combinada Ratchet 11mm', desc: '', categories: ['herramientas'], images: ['img/productos/llave ratchet 11.jpg'], priceBase: 4, price1: 3.57, price2: 3.35, price3: 3.03 },
  { id: 48, name: 'LLave Combinada Ratchet 12mm', desc: '', categories: ['herramientas'], images: ['img/productos/llave ratchet 12.jpg'], priceBase: 4, price1: 3.64, price2: 3.45, price3: 3.18 },
  { id: 49, name: 'LLave Combinada Ratchet Flexible 10mm', desc: '', categories: ['herramientas'], images: ['img/productos/llave ratchet flexible 10.jpg'], priceBase: 6, price1: 5.3, price2: 4.95, price3: 4.43 },
  { id: 50, name: 'LLave Combinada Ratchet Flexible 12mm', desc: '', categories: ['herramientas'], images: ['img/productos/llave ratchet flexible 12.jpg'], priceBase: 6, price1: 5.31, price2: 4.97, price3: 4.45 },
  { id: 51, name: 'LLave Combinada Ratchet Flexible 13mm', desc: '', categories: ['herramientas'], images: ['img/productos/llave ratchet flexible 13.jpg'], priceBase: 7, price1: 6.16, price2: 5.74, price3: 5.11 },
  { id: 52, name: 'Regulador de Oxigeno 9/16" -18RH (entrada 150 Bar/salida 12.5 Bar', desc: '', categories: ['herramientas','refrigeracion'], images: ['img/productos/regulador de oxígeno.jpg'], priceBase: 27, price1: 26.31, price2: 24.46, price3: 21.69 },
  { id: 53, name: 'Set clip para cables blanco/negros varias medidas 60pcs', desc: '', categories: ['herramientas','refrigeracion'], images: ['img/productos/set clip para cables blanco negro.jpg'], priceBase: 2.25, price1: 2.22, price2: 2.07, price3: 1.86 },
  { id: 54, name: 'Taladro de Impacto 13mm (1/2" 600W)', desc: '', categories: ['herramientas'], images: ['img/productos/taladro de impacto 13mm.jpg'], priceBase: 58, price1: 52.24, price2: 49.36, price3: 45.03 },
  { id: 55, name: 'Terminales de crimpado tubulares E 60-12 (10 AWG-6 mm)', desc: '', categories: ['solar','electricas'], images: ['img/productos/terminal redondo 10awg.jpg'], priceBase: 0.08, price1: 0.07, price2: 0.06, price3: 0.06 },
  { id: 56, name: 'Terminales de crimpado tubulares E 40-09 (12 AWG-4 mm)', desc: '', categories: ['solar','electricas'], images: ['img/productos/terminal redondo 12awg.jpg'], priceBase: 0.06, price1: 0.05, price2: 0.04, price3: 0.03 },
  { id: 57, name: 'Terminales de crimpado tubulares E 15-08 (16 AWG-1.5 mm)', desc: '', categories: ['solar','electricas', 'herramientas'], images: ['img/productos/terminal redondo 16awg.jpg'], priceBase: 0.05, price1: 0.04, price2: 0.03, price3: 0.03 },
  { id: 58, name: 'Terminales de crimpado tubulares E 16-12 (6 AWG-16 mm)', desc: '', categories: ['solar','electricas'], images: ['img/productos/terminal redondo 6awg.jpg'], priceBase: 0.12, price1: 0.10, price2: 0.09, price3: 0.08 },
  { id: 59, name: 'Terminales de crimpado tubulares E 10-08 (18 AWG-1mm)', desc: '', categories: ['solar','electricas'], images: ['img/productos/terminal redondo 18awg.jpg'], priceBase: 0.05, price1: 0.04, price2: 0.03, price3: 0.03 },
  { id: 60, name: 'Terminales de crimpado tubulares E 75-08 (20 AWG-0.75mm)', desc: '', categories: ['solar','electricas'], images: ['img/productos/terminal redondo 20awg.jpg'], priceBase: 0.05, price1: 0.04, price2: 0.03, price3: 0.03 },
  { id: 61, name: 'Terminal Macho Redondo Amarillo 12-10 AWG', desc: '', categories: ['herramientas','refrigeracion'], images: ['img/productos/terminal amarillo.jpg'], priceBase: 0.07, price1: 0.06, price2: 0.06, price3: 0.06 },
  { id: 62, name: 'Controlador de carga solar MPPT 30A ,1200 W Input 12 60 V Carga:48,60,72', desc: '', categories: ['solar'], images: ['img/productos/mppt.png'], priceBase: 120, price1: 104.89, price2: 97.34, price3: 86.01 },
  { id: 63, name: 'Termómetro Infrarrojo Laser HYTAIS TS600 (-50 °C -600°C)', desc: '', categories: ['refrigeracion'], images: ['img/productos/term inf.png'], priceBase: 20, price1: 17.70, price2: 16.55, price3: 14.82 },
  { id: 64, name: 'Ventilador Recargable X13 20000mAh c/mando', desc: '', categories: ['solar'], images: ['img/productos/ventilador n.png'], priceBase: 60, price1: 53.10, price2: 49.65, price3: 44.48 },
  { id: 65, name: 'Ventilador Recargable inteligente c/spray fan y luces (verde)', desc: '', categories: ['solar'], images: ['img/productos/ventilador verde.png'], priceBase: 45, price1: 40.82, price2: 42.22, price3: 38.34 },
  { id: 66, name: 'Soporte magnetico multiuso para telefono giratorio 360° ,plegable y y extensible', desc: '', categories: [''], images: ['img/productos/so001.jpg'], priceBase: 8, price1: 6.83, price2: 6.24, price3: 5.36 },
  { id: 67, name: 'Lampara Solar con Sensor Led (3 luces)', desc: '', categories: ['solar'], images: ['img/productos/lampara.png'], priceBase: 28, price1: 24.62, price2: 22.93, price3: 20.39 },
  { id: 68, name: 'Refrigerante R32 (cilindro) 3kg', desc: '', categories: ['refrigeracion'], images: ['img/productos/refrigerante r32 3kg.png'], priceBase: 80, price1: 74, price2: 71, price3: 66.50 },
  { id: 69, name: 'Juego de Brocas Macho 6 piezas HSS Hoteche ( M3 a M10 )', desc: '', categories: ['herramientas'], images: ['img/productos/ju034.png'], priceBase: 15, price1: 13.40, price2: 12.60, price3: 11.39 },
  { id: 70, name: 'Virulero mediano 1/8 a 3/4 CFT 275', desc: '', categories: ['herramientas'], images: ['img/productos/vi001.png'], priceBase: 45, price1: 38.70, price2: 35.56, price3: 30.84 },
  { id: 71, name: 'Termostato k59-Q2800 Original Refrig. Haier', desc: '', categories: ['herramientas'], images: ['img/productos/te049.png'], priceBase: 10, price1: 8.86, price2: 8.29, price3: 7.44 },
  { id: 72, name: 'Pesa digital Cowplandt de 40 kg', desc: '', categories: ['herramientas'], images: ['img/productos/pe003.png'], priceBase: 50, price1: 43.90, price2: 40.85, price3: 36.27 },
  { id: 73, name: 'Porta celular carro a retrovisor', desc: '', categories: ['herramientas'], images: ['img/productos/po001.png'], priceBase: 5, price1: 4.51, price2: 4.27, price3: 3.90 },
  { id: 74, name: 'Manguera corrugada de goma para Lavadora ( 17-30 cm) Diam 2.5 cm', desc: '', categories: ['herramientas'], images: ['img/productos/ma007.png'], priceBase: 4, price1: 3.57, price2: 3.35, price3: 3.02 },
  { id: 75, name: 'Juego de Brocas Para Taladro SDS PLUS (para hormigón) 5PCS', desc: '', categories: ['herramientas'], images: ['img/productos/ju038.png'], priceBase: 10, price1: 8.95, price2: 8.42, price3: 7.63 },
  { id: 76, name: 'Cargador telescopico para vehiculos 4 en 1 ', desc: '', categories: ['herramientas'], images: ['img/productos/ca1291.png'], priceBase: 20, price1: 18.10, price2: 17.16, price3: 17.16 },
  { id: 77, name: 'Filtro/regulador y lubricador tamaño del puerto : 1/4" (Max 1MPA)', desc: '', categories: ['herramientas'], images: ['img/productos/fi014.png'], priceBase: 12, price1: 10.89, price2: 10.33, price3: 9.50 },
  { id: 78, name: 'Juego 5 PCS de Cepillo de Alambre Circular 1/4" con vástago', desc: '', categories: ['solar'], images: ['img/productos/ju010.png'], priceBase: 9, price1: 8, price2: 7.50, price3: 6.75 },
  { id: 79, name: 'Juego de 9 piezas llaves hexagonales (allen) largas', desc: '', categories: ['solar'], images: ['img/productos/ju024.png'], priceBase: 9, price1: 7.80, price2: 7.20, price3: 6.30 },
  { id: 80, name: 'Juego de 9 piezas llaves hexagonales (allen) cortas', desc: '', categories: ['solar'], images: ['img/productos/ju023.png'], priceBase: 9, price1: 7.75, price2: 7.12, price3: 6.18 },
  { id: 81, name: 'Juego de sierras de Copa P/Metal 5PCS', desc: '', categories: ['solar'], images: ['img/productos/ju075.png'], priceBase: 26, price1: 23.36, price2: 22.04, price3: 20.06 },
  { id: 82, name: 'Juego de sierras para Agujero 3PCS', desc: '', categories: ['solar'], images: ['img/productos/ju077.png'], priceBase: 5, price1: 4.43, price2: 4.15, price3: 3.72 },
  { id: 83, name: 'Junta de refrigerador con Iman (2,5 m)', desc: '', categories: ['solar'], images: ['img/productos/ju084.png'], priceBase: 20, price1: 17.81, price2: 16.72, price3: 15.08 },
  { id: 84, name: 'Llave Combinada 17mm', desc: '', categories: ['solar'], images: ['img/productos/ll019.png'], priceBase: 4, price1: 3.54, price2: 3.31, price3: 2.97 },
  { id: 85, name: 'Llave Combinada 19mm', desc: '', categories: ['solar'], images: ['img/productos/ll020.png'], priceBase: 4, price1: 3.49, price2: 3.24, price3: 2.85 },
  { id: 86, name: 'Llave de Tubo 12"/250mm', desc: '', categories: ['solar'], images: ['img/productos/ll036.png'], priceBase: 16, price1: 13.60, price2: 12.40, price3: 10.61 },
  { id: 87, name: 'Manguera Salida de agua de Split x Metros', desc: '', categories: ['solar'], images: ['img/productos/ma015.png'], priceBase: 1, price1: 0.84, price2: 0.76, price3: 0.65 },
  { id: 88, name: 'Refrigerante 600a', desc: '', categories: ['refrigeracion'], images: ['img/productos/re014.png'], priceBase: 90, price1: 81.36, price2: 77.04, price3: 70.55 },
  { id: 89, name: 'Sierra Corona para copa bimetálica HSS 19mm (3/4")', desc: '', categories: ['refrigeracion'], images: ['img/productos/si001.png'], priceBase: 3.80, price1: 3.43, price2: 3.25, price3: 2.97 },
  { id: 90, name: 'Sierra Corona para copa bimetálica HSS 20mm (25/32")', desc: '', categories: ['refrigeracion'], images: ['img/productos/si002.png'], priceBase: 4.10, price1: 3.69, price2: 3.48, price3: 3.18 },
  { id: 91, name: 'Sierra Corona para copa bimetálica HSS 22mm (7/8")', desc: '', categories: ['refrigeracion'], images: ['img/productos/si003.png'], priceBase: 4.10, price1: 3.59, price2: 3.34, price3: 2.96 },
  { id: 92, name: 'Sierra Corona para copa bimetálica HSS 25mm (1")', desc: '', categories: ['refrigeracion'], images: ['img/productos/si004.png'], priceBase: 4.20, price1: 3.73, price2: 3.49, price3: 3.13 },
  { id: 93, name: 'Sierra Corona para copa bimetálica HSS 29mm (1-1/8")', desc: '', categories: ['refrigeracion'], images: ['img/productos/si005.png'], priceBase: 4.20, price1: 3.78, price2: 3.57, price3: 3.25 },
  { id: 94, name: 'Sierra Corona para copa bimetálica HSS 32mm (1/4")', desc: '', categories: ['refrigeracion'], images: ['img/productos/si006.png'], priceBase: 6, price1: 5.28, price2: 4.92, price3: 4.38 },
  { id: 95, name: 'Sierra Corona para copa bimetálica HSS 35mm (1-3/8")', desc: '', categories: ['refrigeracion'], images: ['img/productos/si007.png'], priceBase: 6.50, price1: 5.72, price2: 5.33, price3: 4.74 },
  { id: 96, name: 'Sierra Corona para copa bimetálica HSS 44mm (1-3/4")', desc: '', categories: ['refrigeracion'], images: ['img/productos/si009.png'], priceBase: 8, price1: 7.06, price2: 6.58, price3: 5.87 },
  { id: 97, name: 'Sierra Corona para copa bimetálica HSS 51mm (2")', desc: '', categories: ['refrigeracion'], images: ['img/productos/si010.png'], priceBase: 9, price1: 7.95, price2: 7.43, price3: 6.64 },
  { id: 98, name: 'Bomba de aire para neumáticos 101-150 psi 12V 120W 8000mAh (con accesorios) con función Power Bank', desc: '', categories: ['refrigeracion'], images: ['img/productos/bo0011.jpg'], priceBase: 40, price1: 35.07, price2: 32.60, price3: 28.90 },
  { id: 99, name: 'Cloche Dig LG 7-13kg Doble Engranaje E/largo TURBODRUM', desc: '', categories: ['refrigeracion'], images: ['img/productos/cl015.jpg'], priceBase: 80, price1: 70.96, price2: 66.44, price3: 59.65 },
  { id: 100, name: 'Cloche Dig LG Eje cuadrado 25 x10 mm P/31cm 1P', desc: '', categories: ['refrigeracion'], images: ['img/productos/cl016.jpg'], priceBase: 80, price1: 69.02, price2: 63.53, price3: 55.29 },
  { id: 101, name: 'Codo de Cobre Soldable 45 º 5/8 "', desc: '', categories: ['refrigeracion'], images: ['img/productos/co003.jpg'], priceBase: 0.90, price1: 0.78, price2: 0.73, price3: 0.64 },
  { id: 102, name: 'Codo de Cobre Soldable 45 º 7/8 "', desc: '', categories: ['refrigeracion'], images: ['img/productos/co003.jpg'], priceBase: 1.85, price1: 1.67, price2: 1.58, price3: 1.44 },
  { id: 103, name: 'Codo de Cobre Soldable 90 º 1/2 "', desc: '', categories: ['refrigeracion'], images: ['img/productos/co005.jpg'], priceBase: 0.70, price1: 0.61, price2: 0.56, price3: 0.49 },
  { id: 104, name: 'Codo de Cobre Soldable 90 º 1/4 "', desc: '', categories: ['refrigeracion'], images: ['img/productos/co005.jpg'], priceBase: 0.40, price1: 0.35, price2: 0.33, price3: 0.29 },
  { id: 105, name: 'Codo de Cobre Soldable 90 º 3/8 "', desc: '', categories: ['refrigeracion'], images: ['img/productos/co005.jpg'], priceBase: 0.60, price1: 0.52, price2: 0.48, price3: 0.42 },
  { id: 106, name: 'Codo de Cobre Soldable 90 º 5/8 "', desc: '', categories: ['refrigeracion'], images: ['img/productos/co005.jpg'], priceBase: 0.90, price1: 0.79, price2: 0.73, price3: 0.65 },
  { id: 107, name: 'Codo de Cobre Soldable 90 º 7/8 "', desc: '', categories: ['refrigeracion'], images: ['img/productos/co005.jpg'], priceBase: 1.85, price1: 1.62, price2: 1.50, price3: 1.33 },
  { id: 108, name: 'Condensador/Parrilla de 11 vueltas (110 x43.5 cm)', desc: '', categories: ['refrigeracion'], images: ['img/productos/co055.jpg'], priceBase: 35, price1: 29.13, price2: 26.20, price3: 21.80 },
  { id: 109, name: 'Condensador/Parrilla de 12 vueltas (120 x43,5 cm)', desc: '', categories: ['refrigeracion'], images: ['img/productos/co057.jpg'], priceBase: 38, price1: 31.66, price2: 28.49, price3: 23.74 },
  { id: 110, name: 'Fan o Micromotor 110v Nev IS-32108SCH cables c/enchufe (C-20366)', desc: '', categories: ['refrigeracion'], images: ['img/productos/fa025.jpg'], priceBase: 13, price1: 11.54, price2: 10.81, price3: 9.72 },
  { id: 111, name: 'Fan o Motor de Ventilador Axial 350 mm 350SE 3PH (Extractor) 3PH', desc: '', categories: ['refrigeracion'], images: ['img/productos/fa057.jpg'], priceBase: 160, price1: 137.68, price2: 126.52, price3: 109.78 },
  { id: 112, name: 'Filtro domestico Sellado al Vacio', desc: '', categories: ['refrigeracion'], images: ['img/productos/fi005.jpg'], priceBase: 180, price1: 155.04, price2: 142.45, price3: 123.50 },
  { id: 113, name: 'Hidrolavadora 110v Hoteche -1400 W- 1525psi', desc: '', categories: ['refrigeracion'], images: ['img/productos/hi001.jpg'], priceBase: 160, price1: 144.87, price2: 137.30, price3: 125.95 },
  { id: 114, name: 'Juego de Dados 14 piezas', desc: '', categories: ['refrigeracion'], images: ['img/productos/ju042.jpg'], priceBase: 18, price1: 16.11, price2: 15.17, price3: 13.75 },
  { id: 115, name: 'Juego de Destornillador ratchet 14 en 1 (articulado)', desc: '', categories: ['refrigeracion'], images: ['img/productos/ju046.jpg'], priceBase: 12, price1: 10.59, price2: 9.89, price3: 8.83 },
  { id: 116, name: 'Lampara solar con sensor de movimiento c/mando 84 x 225 mm 1200 mAh', desc: '', categories: ['refrigeracion'], images: ['img/productos/la006.jpg'], priceBase: 16, price1: 14.42, price2: 13.63, price3: 12.45 },
  { id: 117, name: 'Válvula de Expansión Térmica Universal (-29⁰C a 10⁰C) 1T,1-1/2,2T', desc: '', categories: ['refrigeracion'], images: ['img/productos/va002.jpg'], priceBase: 20, price1: 17.89, price2: 16.84, price3: 15.26 },
  { id: 118, name: 'Valvula saca gusanillo 1/4-5/16', desc: '', categories: ['refrigeracion'], images: ['img/productos/va011.jpg'], priceBase: 25, price1: 21.71, price2: 20.07, price3: 17.61 },
  { id: 119, name: 'Pinza de Crimpado hexagonal (30-4 AWG)', desc: '', categories: ['refrigeracion'], images: ['img/productos/pi0121.jpg'], priceBase: 60, price1: 53.87, price2: 50.80, price3: 46.20 },
  { id: 120, name: 'Tee de cobre 3/4"', desc: '', categories: ['refrigeracion'], images: ['img/productos/te001.jpg'], priceBase: 2.50, price1: 2.17, price2: 2.01, price3: 1.76 },
  { id: 121, name: 'Tee de cobre 5/8"', desc: '', categories: ['refrigeracion'], images: ['img/productos/te001.jpg'], priceBase: 2, price1: 1.73, price2: 1.60, price3: 1.40 },
  { id: 122, name: 'Tee de cobre 7/8"', desc: '', categories: ['refrigeracion'], images: ['img/productos/te001.jpg'], priceBase: 2.50, price1: 2.34, price2: 2.25, price3: 2.13 },
  { id: 123, name: 'Trampa de Cobre Soldable 3/4"', desc: '', categories: ['refrigeracion'], images: ['img/productos/tr001.jpg'], priceBase: 9.50, price1: 8.42, price2: 7.88, price3: 7.06 },
  { id: 124, name: 'Trampa de Cobre Soldable 5/8"', desc: '', categories: ['refrigeracion'], images: ['img/productos/tr001.jpg'], priceBase: 7, price1: 6.08, price2: 5.62, price3: 4.93 },
  { id: 125, name: 'Trampa de Cobre Soldable 7/8"', desc: '', categories: ['refrigeracion'], images: ['img/productos/tr001.jpg'], priceBase: 12, price1: 10.74, price2: 10.11, price3: 9.17 },
  { id: 126, name: 'Llave Combinada 6mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/ll011-ll018.png'], priceBase: 1.50, price1: 1.29, price2: 1.19, price3: 1.03 },
  { id: 127, name: 'Llave Combinada 7mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/ll011-ll018.png'], priceBase: 1.50, price1: 1.30, price2: 1.20, price3: 1.05 },
  { id: 128, name: 'Llave Combinada 8mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/ll011-ll018.png'], priceBase: 2, price1: 1.73, price2: 1.59, price3: 1.39 },
  { id: 129, name: 'Llave Combinada 9mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/ll011-ll018.png'], priceBase: 2, price1: 1.73, price2: 1.59, price3: 1.39 },
  { id: 130, name: 'Llave Combinada 10mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/ll011-ll018.png'], priceBase: 2.50, price1: 2.14, price2: 1.97, price3: 1.70 },
  { id: 131, name: 'Llave Combinada 11mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/ll011-ll018.png'], priceBase: 2.50, price1: 2.16, price2: 1.98, price3: 1.73 },
  { id: 132, name: 'Llave Combinada 12mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/ll011-ll018.png'], priceBase: 2.50, price1: 2.18, price2: 2.02, price3: 1.78 },
  { id: 133, name: 'Llave Combinada 13mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/ll011-ll018.png'], priceBase: 3, price1: 2.60, price2: 2.40, price3: 2.10 },
  { id: 134, name: 'Llave Combinada 14mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/ll011-ll018.png'], priceBase: 3.50, price1: 3.01, price2: 2.76, price3: 2.39 },
  { id: 135, name: 'Llave Combinada 15mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/ll011-ll018.png'], priceBase: 3.50, price1: 3.05, price2: 2.82, price3: 2.48 },
  { id: 136, name: 'Llave Elevadora de mango Tipo L 1/2" -250 mm (200901)', desc: '', categories: ['refrigeracion'], images: ['img/productos/ll011-ll018.png'], priceBase: 9, price1: 7.66, price2: 7, price3: 6 },
  { id: 137, name: 'Llave Fija Doble Boca 6x7 mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/ll042.jpg'], priceBase: 2.50, price1: 2.24, price2: 2.11, price3: 1.88 },          
  { id: 138, name: 'Llave Fija Doble Boca 16x17 mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/ll042.jpg'], priceBase: 4, price1: 3.54, price2: 3.31, price3: 2.96 },
  { id: 139, name: 'Llave Fija Doble Boca 25x28mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/ll042.jpg'], priceBase: 4, price1: 3.54, price2: 3.31, price3: 2.96 },
  { id: 140, name: 'Llave Ratchet Universal de 7-19mm (1/4"-3/4")', desc: '', categories: ['refrigeracion'], images: ['img/productos/ll051.jpg'], priceBase: 26, price1: 23.15, price2: 21.72, price3: 19.59 },
  { id: 141, name: 'Disco de lijado de óxido de aluminio con velcro P320 5"/125 mm x u', desc: '', categories: ['refrigeracion'], images: ['img/productos/di004.jpg'], priceBase: 0.25, price1: 0.21, price2: 0.20, price3: 0.17 },
  { id: 142, name: 'Disco de lijado de óxido de aluminio con velcro P240 5"/125 mm x u', desc: '', categories: ['refrigeracion'], images: ['img/productos/di004.jpg'], priceBase: 0.25, price1: 0.21, price2: 0.20, price3: 0.17 },
  { id: 143, name: 'Disco de lijado de óxido de aluminio con velcro P320 7"/180 mm x u', desc: '', categories: ['refrigeracion'], images: ['img/productos/di004.jpg'], priceBase: 0.40, price1: 0.35, price2: 0.33, price3: 0.29 },
  { id: 144, name: 'Disco de lijado de óxido de aluminio con velcro P240 7"/180 mm x u', desc: '', categories: ['refrigeracion'], images: ['img/productos/di004.jpg'], priceBase: 0.40, price1: 0.35, price2: 0.33, price3: 0.29 },
  { id: 145, name: 'Disco de lijado de óxido de aluminio con velcro P120 7"/180 mm x u', desc: '', categories: ['refrigeracion'], images: ['img/productos/di004.jpg'], priceBase: 0.50, price1: 0.44, price2: 0.41, price3: 0.37 },
  { id: 146, name: 'Disco de lijado de óxido de aluminio con velcro P180 7"/180 mm x u', desc: '', categories: ['refrigeracion'], images: ['img/productos/di004.jpg'], priceBase: 0.50, price1: 0.44, price2: 0.41, price3: 0.37 },
  { id: 147, name: 'Disco de lijado de óxido de aluminio con velcro P40 7"/180 mm x u', desc: '', categories: ['refrigeracion'], images: ['img/productos/di004.jpg'], priceBase: 0.50, price1: 0.44, price2: 0.42, price3: 0.37 },
  { id: 148, name: 'Disco de lijado de óxido de aluminio con velcro P60 7"/180 mm x u', desc: '', categories: ['refrigeracion'], images: ['img/productos/di004.jpg'], priceBase: 0.50, price1: 0.45, price2: 0.43, price3: 0.39 },
  { id: 149, name: 'Disco de lijado de óxido de aluminio con velcro P80 7"/180 mm x u', desc: '', categories: ['refrigeracion'], images: ['img/productos/di004.jpg'], priceBase: 0.50, price1: 0.44, price2: 0.41, price3: 0.37 },
  { id: 150, name: 'Disco de lijado de óxido de aluminio con velcro P240 9"/225 mm x u', desc: '', categories: ['refrigeracion'], images: ['img/productos/di004.jpg'], priceBase: 0.50, price1: 0.45, price2: 0.42, price3: 0.38 },
  { id: 151, name: 'Detector de fuga fluorecente 2,5 ML', desc: '', categories: ['refrigeracion'], images: ['img/productos/de0241.jpg'], priceBase: 5, price1: 4.54, price2: 4.30, price3: 3.96 },
  { id: 152, name: 'Bomba de aire para neumáticos 101-150 psi 12V 120W 8000mAh con función Power Bank', desc: '', categories: ['refrigeracion'], images: ['img/productos/bo0012.jpg'], priceBase: 35, price1: 30.12, price2: 27.68, price3: 24.02 },
  { id: 153, name: 'Disco para lijar con Velcro 115 mm x M14', desc: '', categories: ['refrigeracion'], images: ['img/productos/di011.jpg'], priceBase: 4, price1: 3.54, price2: 3.32, price3: 2.97 },
  { id: 154, name: 'Escuadra de Soldadura Magnética 4" 50 lb', desc: '', categories: ['refrigeracion'], images: ['img/productos/es006-007.jpg'], priceBase: 7, price1: 6.19, price2: 5.79, price3: 5.18 },
  { id: 155, name: 'Escuadra de Soldadura Magnética 5" 75 lb', desc: '', categories: ['refrigeracion'], images: ['img/productos/es006-007.jpg'], priceBase: 14, price1: 12.57, price2: 11.85, price3: 10.78 },
  { id: 156, name: 'Expansor de tubo de cobre set 5 pcs', desc: '', categories: ['refrigeracion'], images: ['img/productos/ex002.jpg'], priceBase: 18, price1: 15.96, price2: 14.94, price3: 13.41 },
  { id: 157, name: 'Filtro Secador doméstico 5/16 x 1/4 kaled 2T Hercules', desc: '', categories: ['refrigeracion'], images: ['img/productos/fi009.jpg'], priceBase: 4, price1: 3.56, price2: 3.34, price3: 3.01 },
  { id: 158, name: 'Jucon o Pinza Amperimetrica ANENG /Capacitancia ST180', desc: '', categories: ['refrigeracion'], images: ['img/productos/ju002.jpg'], priceBase: 30, price1: 26.21, price2: 24.31, price3: 21.47 },
  { id: 159, name: 'Juego de Adaptadores de dados de impacto 6 piezas C-206106', desc: '', categories: ['refrigeracion'], images: ['img/productos/ju027.jpg'], priceBase: 20, price1: 17.34, price2: 16.01, price3: 14.02 },
  { id: 160, name: 'Juego de destornilladores de precisión de 6 piezas (mango engomado) 241806', desc: '', categories: ['refrigeracion'], images: ['img/productos/ju049.jpg'], priceBase: 5, price1: 4.31, price2: 3.97, price3: 3.46 },
  { id: 161, name: 'Juego de destornilladores de precisión de 6 piezas (mango metálico) 242006', desc: '', categories: ['refrigeracion'], images: ['img/productos/ju050.jpg'], priceBase: 5, price1: 4.36, price2: 4.04, price3: 3.57 },
  { id: 162, name: 'Juego de Extractor de pernos y tuercas 11 piezas', desc: '', categories: ['refrigeracion'], images: ['img/productos/ju052.png'], priceBase: 30, price1: 26.92, price2: 25.38, price3: 23.07 },
  { id: 163, name: 'Kit para limpieza de drenaje de refrigeracion', desc: '', categories: ['refrigeracion'], images: ['img/productos/ki006.jpg'], priceBase: 5.50, price1: 4.99, price2: 4.74, price3: 4.36 },
  { id: 164, name: 'Manguera de Entrada de agua para LAVADORA 1.5 m', desc: '', categories: ['refrigeracion'], images: ['img/productos/ma009.jpg'], priceBase: 6, price1: 5.51, price2: 5.27, price3: 4.90 },
  { id: 165, name: 'Pintura Spray para Interior/Exterior 450ml Blanco/Blanco Mate', desc: '', categories: ['refrigeracion'], images: ['img/productos/pi006.jpg'], priceBase: 5, price1: 4.60, price2: 4.40, price3: 4.10 },
  { id: 166, name: 'Protector Circuito Breaker 220 V 63A Cowplandt', desc: '', categories: ['refrigeracion'], images: ['img/productos/pr011.jpg'], priceBase: 28, price1: 24.86, price2: 23.29, price3: 20.94 },
  { id: 167, name: 'Protector ajustable-programable de voltaje TOMZN LN 220V 63A 2P(pantalla digital -VA)', desc: '', categories: ['refrigeracion'], images: ['img/productos/pr022.jpg'], priceBase: 28, price1: 24.43, price2: 22.64, price3: 19.96 },
  { id: 168, name: 'Relay de Estado Solido JTSSR 40A', desc: '', categories: ['refrigeracion'], images: ['img/productos/re024.jpg'], priceBase: 8, price1: 7.19, price2: 6.79, price3: 6.19 },
  { id: 169, name: 'Tapas de cable eléctrico azul 22-14 AWG', desc: '', categories: ['refrigeracion'], images: ['img/productos/ta012.jpg'], priceBase: 0.06, price1: 0.05, price2: 0.05, price3: 0.05 },
  { id: 170, name: 'Tapas de cable eléctrico gris 22-16 AWG', desc: '', categories: ['refrigeracion'], images: ['img/productos/ta013.jpg'], priceBase: 0.04, price1: 0.04, price2: 0.03, price3: 0.03 },
  { id: 171, name: 'Tapas de cable eléctrico rojo 18-10 AWG', desc: '', categories: ['refrigeracion'], images: ['img/productos/ta014.jpg'], priceBase: 0.10, price1: 0.09, price2: 0.09, price3: 0.08 },
  { id: 172, name: 'Tarjeta Refrigerador Mabe 225D7291G006', desc: '', categories: ['refrigeracion'], images: ['img/productos/ta019.jpg'], priceBase: 40, price1: 35.66, price2: 33.49, price3: 30.23 },
  { id: 173, name: 'Terminal Rojo Hembra Estandar (6,3 mm)', desc: '', categories: ['refrigeracion'], images: ['img/productos/te036.jpg'], priceBase: 0.15, price1: 0.13, price2: 0.11, price3: 0.10 },
  { id: 174, name: 'Terminal Rojo Hembra Estandar con Extension', desc: '', categories: ['refrigeracion'], images: ['img/productos/te037.jpg'], priceBase: 0.15, price1: 0.13, price2: 0.12, price3: 0.10 },
  { id: 175, name: 'Turbina A.A Vent 178x50 Eje 5/16 Plast', desc: '', categories: ['refrigeracion'], images: ['img/productos/tu012-014.jpg'], priceBase: 15, price1: 12.10, price2: 10.65, price3: 8.47 },
  { id: 176, name: 'Turbina A.A Vent 182x52 Eje 5/16 Plast', desc: '', categories: ['refrigeracion'], images: ['img/productos/tu012-014.jpg'], priceBase: 15, price1: 12.10, price2: 10.65, price3: 8.47 },
  { id: 177, name: 'Turbina A.A Vent 182x76 Eje 1/2 Plast', desc: '', categories: ['refrigeracion'], images: ['img/productos/tu012-014.jpg'], priceBase: 15, price1: 12.89, price2: 11.83, price3: 10.25 },
  { id: 178, name: 'Turbina P/Split 96x611mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/tu018.jpg'], priceBase: 20, price1: 17.49, price2: 16.24, price3: 14.36 },
  { id: 179, name: 'Válvula dispensadora para bala de refrigerante (Azul)', desc: '', categories: ['refrigeracion'], images: ['img/productos/va009.jpg'], priceBase: 7, price1: 6.24, price2: 5.86, price3: 5.29 },
  { id: 180, name: 'Válvula dispensadora para bala de refrigerante (Plateada)', desc: '', categories: ['refrigeracion'], images: ['img/productos/va010.jpg'], priceBase: 9, price1: 7.98, price2: 7.47, price3: 6.71 },
  { id: 181, name: 'Breker Extintor en aeresol', desc: '', categories: ['refrigeracion'], images: ['img/productos/br0070.jpg'], priceBase: 12, price1: 10.31, price2: 9.47, price3: 8.20 },
  { id: 182, name: 'Cinta Metálica 5cm x 25m', desc: '', categories: ['refrigeracion'], images: ['img/productos/ci017.jpg'], priceBase: 6, price1: 5.31, price2: 4.97, price3: 4.46 },
  { id: 183, name: 'Cinturón de soporte lumbar 20 x 108 cm (Talla L)', desc: '', categories: ['refrigeracion'], images: ['img/productos/ci024.jpg'], priceBase: 15, price1: 13.42, price2: 12.62, price3: 11.44 },
  { id: 184, name: 'Cinturón de soporte lumbar 20 x 116 cm (Talla XL)', desc: '', categories: ['refrigeracion'], images: ['img/productos/ci025.jpg'], priceBase: 15, price1: 13.42, price2: 12.62, price3: 11.44 },
  { id: 185, name: 'Capacitor plastico Bomba de agua 14 µF 400v', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca0412.jpg'], priceBase: 3.50, price1: 3.02, price2: 2.78, price3: 2.42 },
  { id: 186, name: 'Capacitor plastico Bomba de agua 15 µF 400v', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca0413.jpg'], priceBase: 4, price1: 3.43, price2: 3.15, price3: 2.73 },
  { id: 187, name: 'Compresor R134 110v 1/3 hp Cowplandt 110v', desc: '', categories: ['refrigeracion'], images: ['img/productos/co025.jpg'], priceBase: 160, price1: 142.50, price2: 133.76, price3: 120.63 },
  { id: 188, name: 'Compresor R134 110v 1/4 hp SECOP (Danfoss)', desc: '', categories: ['refrigeracion'], images: ['img/productos/co029.jpg'], priceBase: 150, price1: 134.69, price2: 127.04, price3: 115.56 },
  { id: 189, name: 'Compresor R134 110v 1/5-1/6 hp Cowplandt', desc: '', categories: ['refrigeracion'], images: ['img/productos/co033.jpg'], priceBase: 110, price1: 98.75, price2: 93.13, price3: 84.69 },
  { id: 190, name: 'Compresor R134 220v 1/3 hp Tecumseh Refrigeración', desc: '', categories: ['refrigeracion'], images: ['img/productos/co043.jpg'], priceBase: 170, price1: 158, price2: 152, price3: 143 },
  { id: 191, name: 'Condensador/Parrilla 6 vueltas (60 x 43.5 cm)', desc: '', categories: ['refrigeracion'], images: ['img/productos/co049.jpg'], priceBase: 22, price1: 18.47, price2: 16.70, price3: 14.05 },
  { id: 192, name: 'Condensador/Parrilla 7 vueltas (70 x 43.5 cm)', desc: '', categories: ['refrigeracion'], images: ['img/productos/co050.jpg'], priceBase: 25, price1: 21.04, price2: 19.06, price3: 16.09 },
  { id: 193, name: 'Conector de manguera de cocina de gas 1.1 cm', desc: '', categories: ['refrigeracion'], images: ['img/productos/co063.jpg'], priceBase: 2.50, price1: 2.32, price2: 2.22, price3: 2.09 },
  { id: 194, name: 'Corta Tubo Ratchet Hoteche 3-32 mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/co087.jpg'], priceBase: 10, price1: 8.99, price2: 8.48, price3: 7.72 },
  { id: 195, name: 'Corta Tubo 3-22 mm hoteche', desc: '', categories: ['refrigeracion'], images: ['img/productos/co0891.jpg'], priceBase: 8, price1: 6.89, price2: 6.33, price3: 5.49 },
  { id: 196, name: 'Dado Profundo de 1/2" de 21 mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/da006.jpg'], priceBase: 5, price1: 4.42, price2: 4.13, price3: 3.70 },
  { id: 197, name: 'Destornillador PH 2x100mm (241610)', desc: '', categories: ['refrigeracion'], images: ['img/productos/de006.jpg'], priceBase: 3, price1: 2.61, price2: 2.42, price3: 2.13 },
  { id: 198, name: 'Destornillador PH 2x300mm (241630)', desc: '', categories: ['refrigeracion'], images: ['img/productos/de008.jpg'], priceBase: 4, price1: 3.51, price2: 3.26, price3: 2.89 },
  { id: 199, name: 'Destornillador PH 2x38 mm (Chico) (241638)', desc: '', categories: ['refrigeracion'], images: ['img/productos/de009.jpg'], priceBase: 2, price1: 1.74, price2: 1.62, price3: 1.43 },
  { id: 200, name: 'Destornillador PH 3x150mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/de010.jpg'], priceBase: 4, price1: 3.56, price2: 3.35, price3: 3.02 },
  { id: 201, name: 'Destornillador punta pasante PH3 x 200 mm (245820)', desc: '', categories: ['refrigeracion'], images: ['img/productos/de012.jpg'], priceBase: 5, price1: 4.48, price2: 4.23, price3: 3.84 },
  { id: 202, name: 'Destornillador PZ1 x 100mm (242510)', desc: '', categories: ['refrigeracion'], images: ['img/productos/de013.jpg'], priceBase: 2.50, price1: 2.19, price2: 2.04, price3: 1.81 },
  { id: 203, name: 'Destornillador PZ2 x 150mm (242615)', desc: '', categories: ['refrigeracion'], images: ['img/productos/de015.jpg'], priceBase: 4, price1: 3.46, price2: 3.18, price3: 2.77 },
  { id: 204, name: 'Destornillador punta pasante PH2 x 100 mm (245610)', desc: '', categories: ['refrigeracion'], images: ['img/productos/de0061.jpg'], priceBase: 3.50, price1: 3.14, price2: 2.96, price3: 2.69 },
  { id: 205, name: 'Destornillador PH 2x250mm (241625)', desc: '', categories: ['refrigeracion'], images: ['img/productos/de0071.jpg'], priceBase: 3.50, price1: 3.10, price2: 2.90, price3: 2.60 },
  { id: 206, name: 'Toma Doble Universal -110-15A Blanco Q7-Lumina', desc: '', categories: ['refrigeracion'], images: ['img/productos/to003.jpg'], priceBase: 2.20, price1: 1.93, price2: 1.79, price3: 1.58 },
  { id: 207, name: 'Tomacorriente Tri.20A/240V-Blanco-Q7-Lumina', desc: '', categories: ['refrigeracion'], images: ['img/productos/to004.jpg'], priceBase: 2.00, price1: 1.72, price2: 1.59, price3: 1.38 },
  { id: 208, name: 'Termico Universal Rotativo Protector 36000 Btu A.A 110V', desc: '', categories: ['refrigeracion'], images: ['img/productos/te019.jpg'], priceBase: 2.00, price1: 1.70, price2: 1.55, price3: 1.32 },
  { id: 209, name: 'Terminal Macho Redon/Amr 195 12-10 AWG 100', desc: '', categories: ['refrigeracion'], images: ['img/productos/te0261.jpg'], priceBase: 0.08, price1: 0.07, price2: 0.06, price3: 0.06 },
  { id: 210, name: 'Taladro de Impacto 13mm (1/2")-600W 5amp', desc: '', categories: ['refrigeracion'], images: ['img/productos/ta002.jpg'], priceBase: 58, price1: 52.24, price2: 49.36, price3: 45.03 },
  { id: 211, name: 'Timer 8Hr20min Plas Bco AP14', desc: '', categories: ['refrigeracion'], images: ['img/productos/ti004.jpg'], priceBase: 8, price1: 6.96, price2: 6.44, price3: 5.66 },
  { id: 212, name: 'Timer Deshielo 10Hrs Orig.2188371', desc: '', categories: ['refrigeracion'], images: ['img/productos/ti010.jpg'], priceBase: 8, price1: 6.97, price2: 6.45, price3: 5.67 },
  { id: 213, name: 'Timer Deshielo 10Hrs/30m 110V Mabe /GE', desc: '', categories: ['refrigeracion'], images: ['img/productos/ti011.jpg'], priceBase: 8, price1: 6.98, price2: 6.47, price3: 5.71 },
  { id: 214, name: 'Timer univ 4H 25min DS004A 1/2HP 110V 10A', desc: '', categories: ['refrigeracion'], images: ['img/productos/ti017.jpg'], priceBase: 8, price1: 6.96, price2: 6.44, price3: 5.66 },
  { id: 215, name: 'Silicona Multiuso -Negra-85 G-Q7', desc: '', categories: ['refrigeracion'], images: ['img/productos/si011.jpg'], priceBase: 1.80, price1: 1.57, price2: 1.45, price3: 1.28 },
  { id: 216, name: 'Sellador de Gotera Multi Uso -Negro-400ml Q7', desc: '', categories: ['refrigeracion'], images: ['img/productos/se005.jpg'], priceBase: 6, price1: 5.18, price2: 4.77, price3: 4.15 },
  { id: 217, name: 'Set clip para cables blanco/negro medidas varias 60 PZAS', desc: '', categories: ['refrigeracion'], images: ['img/productos/se037.jpg'], priceBase: 2.50, price1: 2.22, price2: 2.07, price3: 1.86 },
  { id: 218, name: 'Presostato CP1-7M716R Cowplandt 0.5-7Bar (C-5259)', desc: '', categories: ['refrigeracion'], images: ['img/productos/pr002.jpg'], priceBase: 20, price1: 17.81, price2: 16.71, price3: 15.06 },
  { id: 219, name: 'Presostato CP5-32M14R Cowplandt 8-30 Bar (C-5444)', desc: '', categories: ['refrigeracion'], images: ['img/productos/pr003.jpg'], priceBase: 22, price1: 19.79, price2: 18.68, price3: 17.02 },
  { id: 220, name: 'Presostato Nev 010-1402 Baja (C-3090)', desc: '', categories: ['refrigeracion'], images: ['img/productos/pr005.jpg'], priceBase: 22, price1: 19.67, price2: 18.51, price3: 16.77 },
  { id: 221, name: 'Fan o Motor de Ventilador Axial 450MM YWF4E-450BC', desc: '', categories: ['refrigeracion'], images: ['img/productos/fa062.jpg'], priceBase: 190, price1: 164.36, price2: 151.54, price3: 1132.31 },
  { id: 222, name: 'Pie de Rey 5"/Calibre Vernier de 120mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/pi00123.jpg'], priceBase: 8, price1: 6.84, price2: 6.27, price3: 5.40 },
  { id: 223, name: 'Pie de Rey 6"/Calibre Vernier de 150mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/pi00123.jpg'], priceBase: 15, price1: 13.55, price2: 12.82, price3: 11.74 },
  { id: 224, name: 'Pie de Rey 8"/Calibre Vernier de 200mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/pi00123.jpg'], priceBase: 28.50, price1: 25.65, price2: 24.22, price3: 22.09 },
  { id: 225, name: 'Espatula 1"(25mm)', desc: '', categories: ['refrigeracion'], images: ['img/productos/es012.jpg'], priceBase: 2.50, price1: 2.20, price2: 2.05, price3: 1.83 },
  { id: 226, name: 'Espatula 2"(50mm)', desc: '', categories: ['refrigeracion'], images: ['img/productos/es014.jpg'], priceBase: 3.00, price1: 2.65, price2: 2.48, price3: 2.21 },
  { id: 227, name: 'Espatula 3"(75mm)', desc: '', categories: ['refrigeracion'], images: ['img/productos/es016.jpg'], priceBase: 4.00, price1: 3.51, price2: 3.27, price3: 2.91 },
  { id: 228, name: 'Espatula 6"(150mm)', desc: '', categories: ['refrigeracion'], images: ['img/productos/es021.jpg'], priceBase: 5.50, price1: 4.89, price2: 4.59, price3: 4.13 },
  { id: 229, name: 'Disco de lana para pulir de velcro 7"/180mm', desc: '', categories: ['refrigeracion'], images: ['img/productos/di003.jpg'], priceBase: 9, price1: 8.17, price2: 7.75, price3: 7.12 },
  { id: 230, name: 'Alicate /Crimpadora Modular 7.5" (140811)', desc: '', categories: ['refrigeracion'], images: ['img/productos/al021.jpg'], priceBase: 15, price1: 13.46, price2: 12.70, price3: 11.55 },
  { id: 231, name: 'Alicate de Crimpado con Ratchet 9"/23 cm- Acero de Alto Carbono (140801)', desc: '', categories: ['refrigeracion'], images: ['img/productos/al022.jpg'], priceBase: 22, price1: 19.65, price2: 18.48, price3: 16.72 },
  { id: 232, name: 'Alicate para Engarzar/Crimpar conectores modulares: 4P. 6P y 8P (8"/200) (140802)', desc: '', categories: ['refrigeracion'], images: ['img/productos/al023.jpg'], priceBase: 22, price1: 19.66, price2: 18.48, price3: 16.73 },
  { id: 233, name: 'Bomb Vacio 3CFM 1/3HP115V 2Etapas Cowplandt', desc: '', categories: ['refrigeracion'], images: ['img/productos/bo0061.jpg'], priceBase: 220, price1: 200.37, price2: 190.56, price3: 175.84 },
  { id: 234, name: 'Bomb Vacio 5CFM 1/2HP 115V 2Etapas PR 1 Cowplandt', desc: '', categories: ['refrigeracion'], images: ['img/productos/bo0062.jpg'], priceBase: 240, price1: 221.97, price2: 212.95, price3: 199.42 },
  { id: 235, name: 'Cable Eléctrico Doble Royal Cord -90/10 #10 x metro', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca004.jpg'], priceBase: 1.20, price1: 1.07, price2: 1.01, price3: 0.91 },
  { id: 236, name: 'Cable Eléctrico Doble Royal Cord -90/10 #12 x metro', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca005.jpg'], priceBase: 1.00, price1: 0.88, price2: 0.83, price3: 0.74 },
  { id: 237, name: 'Cable Eléctrico Doble Royal Cord -90/10 #14 x metro', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca006.jpg'], priceBase: 0.30, price1: 0.27, price2: 0.25, price3: 0.22 },
  { id: 238, name: 'Cable Eléctrico Individual Negro #12x328FT x metro', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca007.jpg'], priceBase: 0.30, price1: 0.27, price2: 0.25, price3: 0.22 },
  { id: 239, name: 'Cable Eléctrico Individual Rojo #12x328FT x metro', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca008.jpg'], priceBase: 0.30, price1: 0.27, price2: 0.25, price3: 0.22 },
  { id: 240, name: 'Capacitor de Arranque 700 mf 450V metalico', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca112.jpg'], priceBase: 12, price1: 10.46, price2: 9.69, price3: 8.53 },
  { id: 241, name: 'Capacitor de Arranque Gris 1000 µF 250v-450v', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca114.jpg'], priceBase: 16, price1: 13.79, price2: 12.68, price3: 11.02 },
  { id: 242, name: 'Capacitor de Arranque Blanco 1000 µF 250v', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca115.jpg'], priceBase: 12, price1: 10.46, price2: 9.69, price3: 8.54 },
  { id: 243, name: 'Capacitor de Arranque 1200 mf 450V metalico', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca116.jpg'], priceBase: 15, price1: 13.05, price2: 12.08, price3: 10.62 },
  { id: 244, name: 'Capacitor Microwave 0,75 mf 2100v', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca118.jpg'], priceBase: 6, price1: 5.25, price2: 4.87, price3: 4.31 },
  { id: 245, name: 'Capacitor Microwave 0,80 mf 2100v', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca119.jpg'], priceBase: 6, price1: 5.27, price2: 4.90, price3: 4.35 },
  { id: 246, name: 'Capacitor Microwave 0,85 mf 2100v', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca120.jpg'], priceBase: 6, price1: 5.30, price2: 4.95, price3: 4.43 },
  { id: 247, name: 'Capilar 0,80 3m', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca123.jpg'], priceBase: 4, price1: 3.54, price2: 3.31, price3: 2.97 },
  { id: 248, name: 'Capilar 0,85 3m', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca124.jpg'], priceBase: 4.50, price1: 3.95, price2: 3.67, price3: 3.26 },
  { id: 249, name: 'Capilar 0.054"x 0.106"x 1m', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca126.jpg'], priceBase: 1.50, price1: 1.33, price2: 1.24, price3: 1.11 },
  { id: 250, name: 'Capilar 0.064"x 0.125"x 1m', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca127.jpg'], priceBase: 2, price1: 1.79, price2: 1.68, price3: 1.52 },
  { id: 251, name: 'Cargador de Batería Multifuncional de lithium', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca129.jpg'], priceBase: 30, price1: 27.54, price2: 26.31, price3: 24.47 },
  { id: 252, name: 'Cautin con Estaño 120v 30w', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca132.jpg'], priceBase: 7, price1: 6.27, price2: 5.90, price3: 5.35 },
  { id: 253, name: 'Cautin con Estaño 120v 60w', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca133.jpg'], priceBase: 8, price1: 7.16, price2: 6.74, price3: 6.11 },
  { id: 254, name: 'Casco para soldar oscurecimiento automatico con diseño (439007)', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca134.jpg'], priceBase: 35, price1: 31.07, price2: 29.11, price3: 26.16 },
  { id: 255, name: 'Casco para soldar oscurecimiento automatico color negro (439008)', desc: '', categories: ['refrigeracion'], images: ['img/productos/ca135.jpg'], priceBase: 25, price1: 22.24, price2: 20.87, price3: 18.80 },
  














  





  










];

// 🔄 ORDENAR PRODUCTOS ALFABÉTICAMENTE
function sortProductsAlphabetically(products) {
    return [...products].sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }));
}

const SORTED_PRODUCTS = sortProductsAlphabetically(PRODUCTS);

// Estado global
let cart = [];
let activeCategory = 'todas';
let currentTotal = 0;
let baseTotal = 0;
let currentPage = 1;
const PRODUCTS_PER_PAGE = 16;
let searchTerm = '';
let filteredSearchProducts = [];

// Modal variables
let productModal, modalClose, modalImg, modalName, modalDesc, modalPrice, modalAddBtn;
let currentModalProductId = null;
let currentModalImageIndex = 0;
let modalImages = [];

let swipeStartX = 0;
const swipeThreshold = 50;

// Elementos DOM
let productsContainer, catListMobile, catListDesktop;
let cartItemsContainer, cartItemsMobile;
let cartTotalSpan, cartTotalMobile;
let savingsMsg, savingsMsgMobile;
let savingsAmountDesktop, savingsAmountMobile;
let cartBadge;
let menuToggle, sideMenu, menuOverlay, closeMenu;
let cartToggleMobile, cartDrawer, cartOverlay, closeCartDrawer;
let clearCartBtn, clearCartBtnMobile, sendWhatsApp, sendWhatsAppMobile;
let currencyToggleDesktop, currencyToggleMobile;
let bannerContainer, bannerDots;

// ---------- UTILIDADES DE MONEDA ----------
function formatMoney(amount) {
  return useCUP ? `CUP ${(amount * USD_TO_CUP).toFixed(2)}` : `$${amount.toFixed(2)}`;
}

function getPriceForTotal(product, total) {
  if (total >= 1000) return product.price3;
  if (total >= 500) return product.price2;
  if (total >= 200) return product.price1;
  return product.priceBase;
}

function getPriceTierLabel() {
  if (currentTotal >= 1000) return 'Súper oferta';
  if (currentTotal >= 500) return 'Mejor oferta';
  if (currentTotal >= 200) return 'Oferta';
  return '';
}

function getSavingsMessage(total) {
  if (total >= 1000) return '🎉 ¡Súper oferta activa!';
  if (total >= 500) return '🏷️ Mejor oferta activa';
  if (total >= 200) return '✨ Oferta activa';
  return `💡 Agrega ${formatMoney(200 - total)} más para ofertas`;
}

function calculateStableTotals() {
  let base = 0;
  cart.forEach(item => {
    const product = SORTED_PRODUCTS.find(p => p.id === item.id);
    if (product) base += product.priceBase * item.quantity;
  });
  baseTotal = base;
  let newTotal = baseTotal;
  for (let i = 0; i < 5; i++) {
    let tempTotal = 0;
    cart.forEach(item => {
      const product = SORTED_PRODUCTS.find(p => p.id === item.id);
      if (product) tempTotal += getPriceForTotal(product, newTotal) * item.quantity;
    });
    if (Math.abs(tempTotal - newTotal) < 0.001) break;
    newTotal = tempTotal;
  }
  currentTotal = newTotal;
}

function refreshUI() {
  calculateStableTotals();
  updateCartBadgeAndMessages();
  renderCartItems(cartItemsContainer);
  renderCartItems(cartItemsMobile);
  renderProducts();
  updateTotalAndSavingsDisplay();
}

function updateCartBadgeAndMessages() {
  const totalItems = cart.reduce((acc, i) => acc + i.quantity, 0);
  cartBadge.textContent = totalItems;
  const msg = getSavingsMessage(currentTotal);
  if (savingsMsg) savingsMsg.textContent = msg;
  if (savingsMsgMobile) savingsMsgMobile.textContent = msg;
}

function updateTotalAndSavingsDisplay() {
  if (cartTotalSpan) cartTotalSpan.textContent = formatMoney(currentTotal);
  if (cartTotalMobile) cartTotalMobile.textContent = formatMoney(currentTotal);
  const saving = baseTotal - currentTotal;
  if (saving > 0.001) {
    const savingStr = formatMoney(saving);
    if (savingsAmountDesktop) {
      savingsAmountDesktop.textContent = `💰 Ahorro: ${savingStr}`;
      savingsAmountDesktop.style.display = 'block';
    }
    if (savingsAmountMobile) {
      savingsAmountMobile.textContent = `💰 Ahorro: ${savingStr}`;
      savingsAmountMobile.style.display = 'block';
    }
  } else {
    if (savingsAmountDesktop) savingsAmountDesktop.style.display = 'none';
    if (savingsAmountMobile) savingsAmountMobile.style.display = 'none';
  }
}

function renderCartItems(container) {
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = '<p style="text-align:center; opacity:0.6;">🛒 Carrito vacío</p>';
    return;
  }
  let html = '';
  cart.forEach(item => {
    const product = SORTED_PRODUCTS.find(p => p.id === item.id);
    if (!product) return;
    const price = getPriceForTotal(product, currentTotal);
    const subtotal = price * item.quantity;
    html += `<div class="cart-item">
      <div class="cart-item-details">
        <span class="cart-item-name">${product.name}</span>
      </div>
      <div class="cart-item-controls">
        <div>
          <button class="decr-btn" data-id="${item.id}">−</button>
          <span style="margin:0 8px;">${item.quantity}</span>
          <button class="incr-btn" data-id="${item.id}">+</button>
        </div>
        <span class="cart-item-subtotal">${formatMoney(subtotal)}</span>
      </div>
    </div>`;
  });
  container.innerHTML = html;
  container.querySelectorAll('.incr-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      const product = SORTED_PRODUCTS.find(p => p.id === id);
      if (product) addToCart(product);
    });
  });
  container.querySelectorAll('.decr-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      decreaseQuantity(id);
    });
  });
}

// ---------- PAGINACIÓN ----------
function renderPaginationControls(totalPages) {
  let paginationDiv = document.getElementById('pagination-controls');
  if (!paginationDiv && productsContainer) {
    paginationDiv = document.createElement('div');
    paginationDiv.id = 'pagination-controls';
    paginationDiv.className = 'pagination';
    productsContainer.insertAdjacentElement('afterend', paginationDiv);
  }
  if (!paginationDiv) return;
  if (totalPages <= 1) {
    paginationDiv.innerHTML = '';
    return;
  }
  let controlsHtml = `<button class="page-btn" data-page="prev" ${currentPage === 1 ? 'disabled' : ''}>◀ Anterior</button>`;
  for (let i = 1; i <= totalPages; i++) {
    controlsHtml += `<button class="page-btn" data-page="${i}" ${i === currentPage ? 'class="active-page"' : ''}>${i}</button>`;
  }
  controlsHtml += `<button class="page-btn" data-page="next" ${currentPage === totalPages ? 'disabled' : ''}>Siguiente ▶</button>`;
  paginationDiv.innerHTML = controlsHtml;
  paginationDiv.querySelectorAll('.page-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = btn.dataset.page;
      if (page === 'prev' && currentPage > 1) currentPage--;
      else if (page === 'next' && currentPage < totalPages) currentPage++;
      else if (!isNaN(parseInt(page))) currentPage = parseInt(page);
      renderProducts();
      if (productsContainer) productsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ---------- RENDER PRODUCTOS CON SOPORTE PARA MÚLTIPLES CATEGORÍAS ----------
function renderProducts() {
  let productsToRender = [...SORTED_PRODUCTS];
  
  if (searchTerm.trim()) {
    productsToRender = productsToRender.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  // FILTRO POR CATEGORÍA (ahora revisa si activeCategory está en el array categories)
  if (activeCategory !== 'todas') {
    productsToRender = productsToRender.filter(p => 
      p.categories && p.categories.includes(activeCategory)
    );
  }
  
  if (searchTerm.trim()) {
    filteredSearchProducts = productsToRender;
  }
  
  const totalProducts = productsToRender.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const pageProducts = productsToRender.slice(start, end);
  
  let html = '';
  pageProducts.forEach(prod => {
    const qty = cart.find(i => i.id === prod.id)?.quantity || 0;
    const price = getPriceForTotal(prod, currentTotal);
    const tier = getPriceTierLabel();
    const showOld = currentTotal >= 200 && price < prod.priceBase;
    const oldPriceHtml = showOld ? `<span class="old-price">${formatMoney(prod.priceBase)}</span>` : '';
    const badge = tier ? `<span class="price-tier-badge">${tier}</span>` : '';
    const imgSrc = (prod.images && prod.images.length) ? prod.images[0] : 'img/placeholder.png';
    html += `<div class="product-card">
      <img src="${imgSrc}" alt="${prod.name}" class="product-img" onerror="this.src='img/placeholder.png'">
      <div class="product-name">${prod.name}</div>
      <div class="product-price">${oldPriceHtml} ${formatMoney(price)} ${badge}</div>
      <div class="product-actions">
        <button class="decr-prod-btn" data-id="${prod.id}" ${qty === 0 ? 'disabled' : ''}>−</button>
        <span>${qty}</span>
        <button class="incr-prod-btn" data-id="${prod.id}">+</button>
      </div>
    </div>`;
  });
  productsContainer.innerHTML = html || '<p>No hay productos disponibles</p>';

  document.querySelectorAll('.product-img').forEach(img => {
    img.addEventListener('click', function() {
      const productId = parseInt(this.closest('.product-card').querySelector('.incr-prod-btn').dataset.id);
      openProductModal(productId);
    });
  });

  document.querySelectorAll('.incr-prod-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      const product = SORTED_PRODUCTS.find(p => p.id === id);
      if (product) addToCart(product);
    });
  });
  document.querySelectorAll('.decr-prod-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      decreaseQuantity(id);
    });
  });
  renderPaginationControls(totalPages);
}

// ---------- BÚSQUEDA CON AUTOCOMPLETADO (MULTICATEGORÍA EN SUGERENCIAS) ----------
function filterProductsBySearch(term) {
  if (!term.trim()) return [];
  const lowerTerm = term.toLowerCase();
  return SORTED_PRODUCTS.filter(p => p.name.toLowerCase().includes(lowerTerm));
}

function showSuggestions(term, inputElement, suggestionsContainer) {
  if (!term.trim()) {
    suggestionsContainer.classList.remove('show');
    return;
  }
  const matches = filterProductsBySearch(term);
  if (matches.length === 0) {
    suggestionsContainer.innerHTML = '<div class="no-suggestions">No hay productos 😕</div>';
    suggestionsContainer.classList.add('show');
    return;
  }
  let html = '';
  matches.forEach(product => {
    // Obtener nombres de las categorías del producto (puede tener varias)
    const catNames = product.categories
      .map(catId => CATEGORIES.find(c => c.id === catId)?.name || catId)
      .join(', ');
    html += `<div class="suggestion-item" data-id="${product.id}">
              <span class="suggestion-name">${product.name}</span>
              <span class="suggestion-category">${catNames}</span>
            </div>`;
  });
  suggestionsContainer.innerHTML = html;
  suggestionsContainer.classList.add('show');
  suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
      const productId = parseInt(item.dataset.id);
      const product = SORTED_PRODUCTS.find(p => p.id === productId);
      if (product) {
        searchTerm = product.name;
        inputElement.value = product.name;
        filteredSearchProducts = [product];
        activeCategory = 'todas';
        currentPage = 1;
        renderProducts();
        renderCategoryLists();
        suggestionsContainer.classList.remove('show');
      }
    });
  });
}

function initSearch() {
  const searchInputs = document.querySelectorAll('.search-input');
  searchInputs.forEach(input => {
    const suggestionsContainer = input.closest('.search-container').querySelector('.suggestions-list');
    input.addEventListener('input', (e) => {
      const term = e.target.value;
      searchTerm = term;
      currentPage = 1;
      if (term.trim() === '') {
        filteredSearchProducts = [];
        suggestionsContainer.classList.remove('show');
        renderProducts();
        activeCategory = 'todas';
        renderCategoryLists();
      } else {
        filteredSearchProducts = filterProductsBySearch(term);
        showSuggestions(term, input, suggestionsContainer);
        renderProducts();
      }
    });
    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !suggestionsContainer.contains(e.target)) {
        suggestionsContainer.classList.remove('show');
      }
    });
  });
}

// ---------- CATEGORÍAS (sin cambios visuales) ----------
function renderCategoryLists() {
  const render = (cont) => {
    if (!cont) return;
    cont.innerHTML = '';
    CATEGORIES.forEach(cat => {
      const li = document.createElement('li');
      li.className = 'category-item';
      li.innerHTML = `<i class="fas fa-${cat.icon}"></i> ${cat.name}`;
      li.dataset.cat = cat.id;
      if (cat.id === activeCategory) li.classList.add('active');
      li.addEventListener('click', () => {
        activeCategory = cat.id;
        searchTerm = '';
        filteredSearchProducts = [];
        document.querySelectorAll('.search-input').forEach(inp => inp.value = '');
        currentPage = 1;
        renderCategoryLists();
        renderProducts();
        if (sideMenu && sideMenu.classList.contains('active')) {
          sideMenu.classList.remove('active');
          if (menuOverlay) menuOverlay.classList.remove('active');
        }
      });
      cont.appendChild(li);
    });
  };
  render(catListMobile);
  render(catListDesktop);
}

// ---------- CARRITO ----------
function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  existing ? existing.quantity++ : cart.push({ id: product.id, quantity: 1 });
  refreshUI();
}

function decreaseQuantity(id) {
  const idx = cart.findIndex(i => i.id === id);
  if (idx === -1) return;
  if (cart[idx].quantity > 1) cart[idx].quantity--;
  else cart.splice(idx, 1);
  refreshUI();
}

function clearCart() {
  cart = [];
  refreshUI();
}

// ---------- WHATSAPP ----------
function sendOrder() {
  if (cart.length === 0) return;
  let msg = '🛒 *Pedido Mercoventas*%0A';
  cart.forEach(item => {
    const p = SORTED_PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return;
    const price = getPriceForTotal(p, currentTotal);
    msg += `• ${p.name} x${item.quantity} - ${formatMoney(price * item.quantity)}%0A`;
  });
  msg += `%0A*Total: ${formatMoney(currentTotal)}*`;
  if (baseTotal > currentTotal) msg += `%0A*Ahorro: ${formatMoney(baseTotal - currentTotal)}*`;
  window.open(`https://wa.me/+5350746228?text=${msg}`, '_blank');
}

// ---------- BANNER ----------
let currentSlide = 0, slideInterval;
function initBanner() {
  if (!bannerContainer) return;
  BANNER_SLIDES.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = `banner-slide ${i === 0 ? 'active' : ''}`;
    div.style.backgroundImage = `url('${s.image}')`;
    if (s.text) {
      const span = document.createElement('span');
      span.textContent = s.text;
      div.appendChild(span);
    }
    bannerContainer.insertBefore(div, bannerDots);
  });
  document.querySelectorAll('.banner-slide').forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = `dot ${i === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => {
      document.querySelectorAll('.banner-slide').forEach((s, j) => s.classList.toggle('active', j === i));
      document.querySelectorAll('.dot').forEach((d, j) => d.classList.toggle('active', j === i));
      currentSlide = i;
    });
    bannerDots.appendChild(dot);
  });
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % BANNER_SLIDES.length;
    document.querySelectorAll('.banner-slide').forEach((s, j) => s.classList.toggle('active', j === currentSlide));
    document.querySelectorAll('.dot').forEach((d, j) => d.classList.toggle('active', j === currentSlide));
  }, 4000);
}

// ---------- DRAWERS ----------
function closeAll() {
  if (sideMenu) sideMenu.classList.remove('active');
  if (cartDrawer) cartDrawer.classList.remove('active');
  if (menuOverlay) menuOverlay.classList.remove('active');
  if (cartOverlay) cartOverlay.classList.remove('active');
  if (productModal) closeModal();
}

// ========== MODAL CON SWIPE ==========
function openProductModal(productId) {
  const prod = SORTED_PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  currentModalProductId = productId;
  modalImages = prod.images && prod.images.length ? [...prod.images] : [];
  if (modalImages.length === 0) modalImages = ['img/placeholder.png'];
  currentModalImageIndex = 0;

  updateModalImage();
  modalName.textContent = prod.name;
  modalDesc.textContent = prod.desc || 'Producto de alta calidad, nuevo y sellado. Usted lo estrena';

  const price = getPriceForTotal(prod, currentTotal);
  const showOld = currentTotal >= 200 && price < prod.priceBase;
  modalPrice.innerHTML = showOld
    ? `<span class="old-price">${formatMoney(prod.priceBase)}</span> ${formatMoney(price)}`
    : formatMoney(price);

  productModal.classList.add('active');
  setupSwipeContainer();
}

function updateModalImage() {
  if (modalImages.length === 0) return;
  const src = modalImages[currentModalImageIndex];
  modalImg.src = src;
  modalImg.onerror = () => { modalImg.src = 'img/placeholder.png'; };
}

function nextImage() {
  if (modalImages.length <= 1) return;
  currentModalImageIndex = (currentModalImageIndex + 1) % modalImages.length;
  updateModalImage();
}

function prevImage() {
  if (modalImages.length <= 1) return;
  currentModalImageIndex = (currentModalImageIndex - 1 + modalImages.length) % modalImages.length;
  updateModalImage();
}

function setupSwipeContainer() {
  let swiper = document.getElementById('modal-image-swiper');
  if (!swiper) {
    swiper = document.createElement('div');
    swiper.id = 'modal-image-swiper';
    swiper.style.position = 'relative';
    swiper.style.overflow = 'hidden';
    swiper.style.userSelect = 'none';
    modalImg.parentNode.insertBefore(swiper, modalImg);
    swiper.appendChild(modalImg);
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'modal-dots';
    swiper.appendChild(dotsContainer);
  }
  updateModalDots();

  swiper.removeEventListener('touchstart', handleSwipeStart);
  swiper.removeEventListener('touchend', handleSwipeEnd);
  swiper.addEventListener('touchstart', handleSwipeStart, {passive: true});
  swiper.addEventListener('touchend', handleSwipeEnd);

  swiper.removeEventListener('mousedown', handleMouseDown);
  swiper.removeEventListener('mouseup', handleMouseUp);
  swiper.addEventListener('mousedown', handleMouseDown);
  swiper.addEventListener('mouseup', handleMouseUp);
  modalImg.addEventListener('dragstart', e => e.preventDefault());
}

function updateModalDots() {
  const swiper = document.getElementById('modal-image-swiper');
  if (!swiper || modalImages.length <= 1) return;
  let dotsContainer = swiper.querySelector('.modal-dots');
  if (!dotsContainer) {
    dotsContainer = document.createElement('div');
    dotsContainer.className = 'modal-dots';
    swiper.appendChild(dotsContainer);
  }
  dotsContainer.innerHTML = '';
  for (let i = 0; i < modalImages.length; i++) {
    const dot = document.createElement('span');
    dot.className = `modal-dot ${i === currentModalImageIndex ? 'active' : ''}`;
    dot.addEventListener('click', () => {
      currentModalImageIndex = i;
      updateModalImage();
      updateModalDots();
    });
    dotsContainer.appendChild(dot);
  }
}

function handleSwipeStart(e) {
  swipeStartX = e.touches[0].clientX;
}

function handleSwipeEnd(e) {
  if (!swipeStartX) return;
  const diff = e.changedTouches[0].clientX - swipeStartX;
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) prevImage();
    else nextImage();
    updateModalDots();
  }
  swipeStartX = 0;
}

function handleMouseDown(e) {
  e.preventDefault();
  swipeStartX = e.clientX;
}

function handleMouseUp(e) {
  if (!swipeStartX) return;
  const diff = e.clientX - swipeStartX;
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) prevImage();
    else nextImage();
    updateModalDots();
  }
  swipeStartX = 0;
}

function closeModal() {
  productModal.classList.remove('active');
  currentModalProductId = null;
  modalImages = [];
}

// ---------- INICIALIZACIÓN ----------
function init() {
  productsContainer = document.getElementById('products-container');
  catListMobile = document.getElementById('categories-list');
  catListDesktop = document.getElementById('desktop-categories-list');
  cartItemsContainer = document.getElementById('cart-items-container');
  cartItemsMobile = document.getElementById('cart-items-container-mobile');
  cartTotalSpan = document.getElementById('cart-total');
  cartTotalMobile = document.getElementById('cart-total-mobile');
  savingsMsg = document.getElementById('savings-message');
  savingsMsgMobile = document.getElementById('savings-message-mobile');
  savingsAmountDesktop = document.getElementById('savings-amount-desktop');
  savingsAmountMobile = document.getElementById('savings-amount-mobile');
  cartBadge = document.getElementById('cart-count-badge');
  menuToggle = document.getElementById('menuToggle');
  sideMenu = document.getElementById('sideMenu');
  menuOverlay = document.getElementById('menuOverlay');
  closeMenu = document.getElementById('closeMenu');
  cartToggleMobile = document.getElementById('cartToggleMobile');
  cartDrawer = document.getElementById('cartDrawer');
  cartOverlay = document.getElementById('cartOverlay');
  closeCartDrawer = document.getElementById('closeCartDrawer');
  clearCartBtn = document.getElementById('clearCartBtn');
  clearCartBtnMobile = document.getElementById('clearCartBtnMobile');
  sendWhatsApp = document.getElementById('sendWhatsApp');
  sendWhatsAppMobile = document.getElementById('sendWhatsAppMobile');
  currencyToggleDesktop = document.getElementById('currencyToggleDesktop');
  currencyToggleMobile = document.getElementById('currencyToggleMobile');
  bannerContainer = document.getElementById('banner');
  bannerDots = document.getElementById('bannerDots');

  productModal = document.getElementById('productModal');
  modalClose = document.getElementById('modalClose');
  modalImg = document.getElementById('modal-img');
  modalName = document.getElementById('modal-name');
  modalDesc = document.getElementById('modal-desc');
  modalPrice = document.getElementById('modal-price');
  modalAddBtn = document.getElementById('modal-add-btn');

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) closeModal();
    });
  }
  if (modalAddBtn) {
    modalAddBtn.addEventListener('click', () => {
      if (currentModalProductId) {
        const product = SORTED_PRODUCTS.find(p => p.id === currentModalProductId);
        if (product) addToCart(product);
        closeModal();
      }
    });
  }

  initBanner();
  renderCategoryLists();
  refreshUI();
  initSearch();

  if (menuToggle) menuToggle.addEventListener('click', () => {
    if (sideMenu) sideMenu.classList.add('active');
    if (menuOverlay) menuOverlay.classList.add('active');
  });
  if (closeMenu) closeMenu.addEventListener('click', closeAll);
  if (menuOverlay) menuOverlay.addEventListener('click', closeAll);
  if (cartToggleMobile) cartToggleMobile.addEventListener('click', () => {
    if (cartDrawer) cartDrawer.classList.add('active');
    if (cartOverlay) cartOverlay.classList.add('active');
  });
  if (closeCartDrawer) closeCartDrawer.addEventListener('click', closeAll);
  if (cartOverlay) cartOverlay.addEventListener('click', closeAll);
  if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);
  if (clearCartBtnMobile) clearCartBtnMobile.addEventListener('click', clearCart);
  if (sendWhatsApp) sendWhatsApp.addEventListener('click', sendOrder);
  if (sendWhatsAppMobile) sendWhatsAppMobile.addEventListener('click', sendOrder);

  const toggleCurrency = (checked) => {
    useCUP = checked;
    refreshUI();
  };
  if (currencyToggleDesktop) currencyToggleDesktop.addEventListener('change', (e) => {
    if (currencyToggleMobile) currencyToggleMobile.checked = e.target.checked;
    toggleCurrency(e.target.checked);
  });
  if (currencyToggleMobile) currencyToggleMobile.addEventListener('change', (e) => {
    if (currencyToggleDesktop) currencyToggleDesktop.checked = e.target.checked;
    toggleCurrency(e.target.checked);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });
}

document.addEventListener('DOMContentLoaded', init);
window.addEventListener('beforeunload', () => {
  if (slideInterval) clearInterval(slideInterval);
});
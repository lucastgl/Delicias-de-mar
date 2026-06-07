// Solo productos con Activo = "S" Y Publicar en Web = "S" (columnas X y Z del Excel)

export interface Product {
  id: string
  name: string
  tag?: string
}

export interface ProductSubcategory {
  id: string
  label: string
  products: Product[]
}

// ─── PESCADOS Y MARISCOS ──────────────────────────────────────────────────────

export const pescadosFrescos: Product[] = [
  { id: "73", name: "Besugo" },
  { id: "61", name: "Filet Merluza Austral" },
  { id: "345", name: "Filet de Atún Gallo" },
  { id: "70", name: "Filet de Gallo" },
  { id: "477", name: "Filet de Robalo" },
  { id: "74", name: "Palometa" },
  { id: "18", name: "Pejerrey Entero" },
  { id: "156", name: "Rabas Rebozadas x Kilo" },
  { id: "821", name: "Salmón Entero" },
  { id: "27", name: "Salmón Rosado Entero" },
  { id: "349", name: "Surubí Despinado" },
  { id: "62", name: "Corvina Despinada" },
  { id: "820", name: "Truchón Entero" },
]

export const pescadosCombos: Product[] = [
  { id: "2010", name: "Combo Brotola + Merluza 1 Kg c/u", tag: "Combo" },
  { id: "2012", name: "Combo Calamar + Merluza 1 Kg c/u", tag: "Combo" },
]

export const mariscosXKilo: Product[] = [
  { id: "21", name: "Pulpo Español x Kg" },
  { id: "403", name: "Rabas x Kg" },
  { id: "65", name: "Tubo Rabas Premium x Kg" },
  { id: "338", name: "Rabas Rebozadas Solimelo x 250 g" },
  { id: "2011", name: "Combo Tubo Calamar + Cornalitos 1 Kg c/u", tag: "Combo" },
  { id: "2013", name: "Combo Langostino Pelado + Rabas 1 Kg c/u", tag: "Combo" },
]

export const mariscosXUnidad: Product[] = [
  { id: "800", name: "Kanikama x 250 g" },
  { id: "760", name: "Rabas a la Romana" },
]

// ─── CONGELADOS ───────────────────────────────────────────────────────────────

export const congeladosMerluza: Product[] = [
  // ARTICO
  { id: "982", name: "Crocante de Merluza 300 g (Artico)" },
  // GRANGYS
  { id: "424", name: "Medallón de Merluza (Grangys)" },
  { id: "429", name: "Medallón de Merluza con Calabaza (Grangys)" },
  { id: "426", name: "Medallón de Merluza con Capresse (Grangys)" },
  { id: "425", name: "Medallón de Merluza con Espinaca y Queso (Grangys)" },
  { id: "427", name: "Medallón de Merluza con Jamón y Queso (Grangys)" },
  { id: "428", name: "Medallón de Merluza Primavera (Grangys)" },
  { id: "430", name: "Bastones de Merluza Rebozados (Grangys)" },
  { id: "431", name: "Filet de Merluza Rebozado (Grangys)" },
  { id: "432", name: "Filet de Merluza Crocante Finas Hierbas (Grangys)" },
  { id: "442", name: "Dino (Grangys)", tag: "Para niños" },
  // LA GRANJITA
  { id: "410", name: "Filet de Merluza Finas Hierbas (La Granjita)" },
  { id: "411", name: "Filet de Merluza Rebozado (La Granjita)" },
  { id: "421", name: "Rabas Rebozadas (La Granjita)" },
  { id: "422", name: "Varita de Merluza (La Granjita)" },
  // SOLIMELO
  { id: "55", name: "Langostino Rebozado (Solimelo)" },
]

export const congeladosPollo: Product[] = [
  // GRANGYS
  { id: "433", name: "Medallón de Pollo (Grangys)" },
  { id: "434", name: "Medallón de Pollo Jamón y Queso (Grangys)" },
  { id: "435", name: "Medallón de Pollo con Espinaca y Queso (Grangys)" },
  { id: "436", name: "Patitas de Pollo (Grangys)" },
  { id: "437", name: "Patitas de Pollo Jamón y Queso (Grangys)" },
  { id: "438", name: "Patitas de Pollo Espinaca y Queso (Grangys)" },
  { id: "439", name: "Nuggets de Pollo Crocante (Grangys)" },
  { id: "440", name: "Nuggets de Pollo Gigantes (Grangys)" },
  { id: "441", name: "Tiritas de Pollo Crocantes (Grangys)" },
  // LA GRANJITA
  { id: "780", name: "Arrollado de Pollo x Kg (La Granjita)" },
  { id: "412", name: "Medallón de Pollo (La Granjita)" },
  { id: "413", name: "Medallón de Pollo con Cheddar (La Granjita)" },
  { id: "414", name: "Medallón de Pollo Espinaca y Muzzarella (La Granjita)" },
  { id: "415", name: "Medallón de Pollo Jamón y Muzzarella (La Granjita)" },
  { id: "416", name: "Minisaurios (La Granjita)", tag: "Para niños" },
  { id: "417", name: "Nuggets Crocante (La Granjita)" },
  { id: "418", name: "Palito de Pollo (La Granjita)" },
  { id: "419", name: "Palito de Pollo Picante (La Granjita)" },
  { id: "420", name: "Patitas de Pollo (La Granjita)" },
  // TRES ARROYOS
  { id: "981", name: "Ricosaurio 1 Kg (Tres Arroyos)", tag: "Para niños" },
]

export const congeladosBocaditos: Product[] = [
  // GRANGYS
  { id: "443", name: "Bocadito de Espinaca Rebozado (Grangys)" },
  { id: "444", name: "Bocadito de Muzzarella (Grangys)" },
  { id: "445", name: "Bocadito de Muzzarella y Jamón (Grangys)" },
  { id: "446", name: "Bocadito Capresse (Grangys)" },
  { id: "447", name: "Bocadito de Papa y Queso (Grangys)" },
  // LA GRANJITA
  { id: "423", name: "Varita Muzzarella (La Granjita)" },
]

// ─── ROTISERÍA ────────────────────────────────────────────────────────────────

export const cocinaSushi: Product[] = [
  { id: "455", name: "Barco 70 Piezas" },
  { id: "457", name: "Seña Barco 40 Piezas" },
  { id: "756", name: "Pionono" },
  { id: "761", name: "Sushi 10 Piezas Full Salmón" },
  { id: "763", name: "Sushi 22 Unid. Full Salmón" },
  { id: "748", name: "Sushi Promo", tag: "Promo" },
  { id: "762", name: "Torta Sushi 2 Kg" },
]

export const cocinaEmpanadas: Product[] = [
  { id: "459", name: "Calzón de Atún" },
  { id: "466", name: "Calzón de Merluza" },
  { id: "467", name: "Calzón de Calamar" },
  { id: "464", name: "Calzón de Salmón y Verdura" },
  { id: "465", name: "Sándwich Completo" },
  { id: "757", name: "Sándwich Completo (variante)" },
]

export const cocinaPaellaArroces: Product[] = [
  { id: "790", name: "Paella ¼" },
  { id: "745", name: "Promo Paella", tag: "Promo" },
  { id: "900", name: "Arroz con Calamar" },
  { id: "737", name: "Fideos con Calamar" },
  { id: "736", name: "Sorrentinos de Salmón y Verdura" },
  { id: "758", name: "Tallarín con Crema y Langostinos" },
]

export const cocinaTartas: Product[] = [
  { id: "730", name: "Tarta de Atún" },
  { id: "734", name: "Tarta de Salmón Rosado" },
  { id: "744", name: "Pastel de Papa de Pollo de Mar" },
  { id: "724", name: "Tortilla de Papa" },
  { id: "738", name: "Tortilla de Papa, Jamón y Queso" },
  { id: "729", name: "Pizzeta" },
  { id: "733", name: "Suflé" },
]

export const cocinaEnsaladas: Product[] = [
  { id: "711", name: "Ensalada Rusa Guarnición" },
  { id: "739", name: "Ensalada Veggie" },
  { id: "735", name: "Salpicón de Atún" },
]

export const cocinaPlatos: Product[] = [
  { id: "314", name: "Filet Rebozado Cocinado x Kg" },
  { id: "741", name: "Menú Napolitano con Guarnición" },
  { id: "742", name: "Menú con Guarnición" },
  { id: "731", name: "Menú sin Guarnición" },
  { id: "743", name: "Menú Promo", tag: "Promo" },
  { id: "752", name: "Menú Chicos Taller" },
  { id: "747", name: "Hamburguesa Lechuga y Tomate" },
  { id: "746", name: "Hamburguesa con Huevo y Guarnición" },
  { id: "751", name: "Hamburguesa Salmón con Guarnición" },
  { id: "754", name: "Brotola sin Guarnición" },
  { id: "759", name: "Escalope con Crema" },
  { id: "764", name: "Salmón en Chucrut" },
  { id: "802", name: "Vitel Toné" },
  { id: "804", name: "Lengua a la Vinagreta" },
  { id: "740", name: "Matambre" },
  { id: "755", name: "Pollo al Escabeche" },
  { id: "749", name: "Fritas Porción" },
  { id: "768", name: "Mejillón Porción ¼" },
  { id: "753", name: "Rabas Chicos Taller" },
  { id: "750", name: "Picada de Mariscos" },
  { id: "461", name: "Envíos" },
]

// ─── ALMACÉN ─────────────────────────────────────────────────────────────────

export const almacenSalsas: Product[] = [
  { id: "674", name: "Salsa Sweet Chili" },
  { id: "89", name: "Pasta de Ajíes" },
  { id: "672", name: "Salsa Teriyaki Ahumada Blister" },
  { id: "100", name: "Tapenade" },
  { id: "86", name: "Hummus Sésamo y Limón" },
  { id: "93", name: "Aceto Glasé Reducción" },
  { id: "84", name: "Merkén Chileno" },
  { id: "51", name: "Peperoncino" },
  { id: "88", name: "Salsa Thine S.R." },
  { id: "357", name: "Salsa de Ajíes Picantes Cristo de los Cerros" },
  { id: "83", name: "Salsa Wasabi" },
  { id: "81", name: "Salsa César R.D.E." },
  { id: "85", name: "Salsa Tahibe Recetas de Entonces" },
  { id: "69", name: "Salsa Passata" },
  { id: "597", name: "Blister Salsa Maracuyá" },
  { id: "777", name: "Pampa Chili Sweet" },
  { id: "778", name: "Pampa Sriracha" },
  { id: "673", name: "Salsa Teriyaki Fumeiga" },
  { id: "52", name: "Salsa Teriyaki Lee Kum Kee x 25 g" },
  { id: "478", name: "Salsa Soja Lee Kum Kee 150 ml" },
  { id: "725", name: "Salsa de Ajo Ahumado" },
  { id: "87", name: "Babaganush" },
  { id: "82", name: "Salsa Coleslaw" },
  { id: "505", name: "Salsa Premium Fumeiga" },
]

export const almacenConservas: Product[] = [
  { id: "94", name: "Lomitos de Atún al Natural Cumana" },
  { id: "95", name: "Atún Cumana Lomito en Aceite" },
  { id: "677", name: "Atún al Natural La Campagnola" },
  { id: "97", name: "La Campagnola Lomo de Atún Natural" },
  { id: "96", name: "La Campagnola Caballa en Aceite" },
  { id: "79", name: "Sardinas Argentinas en Aceite" },
  { id: "722", name: "Cholitos en Aceite" },
  { id: "530", name: "Calnort de Gambas x 80 g" },
  { id: "22", name: "Bacalao Noruego x Kg" },
  { id: "75", name: "Aceitunas Rellenas con Pasta de Pimiento" },
  { id: "76", name: "Aceitunas Rellenas con Pasta de Anchoa" },
  { id: "720", name: "Tomates Cubeteados" },
  { id: "62", name: "Corvina Despinada" },
]

export const almacenSushi: Product[] = [
  { id: "517", name: "Jengibre para Sushi Blanco x 250 g" },
  { id: "516", name: "Jengibre para Sushi Rosa x 250 g" },
  { id: "510", name: "Arroz Asahi Yamani x 1 Kg" },
  { id: "463", name: "Vinagre de Arroz Saborizado p/Sushi Kong Yen 300 ml" },
  { id: "354", name: "Vinagre Sushi Gochiso" },
  { id: "356", name: "Vinagre Sushi Kong Yen x 300 ml" },
  { id: "652", name: "Set Sushi Chico" },
  { id: "675", name: "Hongos Shitake Bilas x 25 g" },
  { id: "676", name: "Hongos Shypake" },
]

export const almacenArrocesPastas: Product[] = [
  { id: "602", name: "Arroz Paella Corto El Ruedo x 400 g" },
  { id: "50", name: "Panko Naranja x 250 g" },
  { id: "351", name: "Panko Blanco Gochiso 500 g" },
  { id: "561", name: "Panko Naranja Gochiso 500 g" },
  { id: "671", name: "Fideos Fusilloni Tinta de Calamar" },
  { id: "669", name: "Fideos Conchiglioni Tinta de Calamar" },
  { id: "563", name: "Paellero Valenciana" },
]

export const almacenEspecias: Product[] = [
  { id: "53", name: "Pimentón de la Vera Agridulce" },
  { id: "91", name: "Albahaca Fresca" },
  { id: "980", name: "Caritas Bembrasil" },
  { id: "458", name: "Seña Pedidos a Retirar" },
]

export const almacenVinos: Product[] = [
  { id: "721", name: "Santa Emilia Rosé Pomelo" },
  { id: "621", name: "Santa Julia Chenin Dulce" },
]

// ─── CATEGORY TREE ────────────────────────────────────────────────────────────

export const categoryTree = {
  pescados: {
    label: "Pescados y Mariscos",
    href: "/productos/pescados",
    subcategories: [
      {
        id: "frescos",
        label: "Pescados Frescos",
        href: "/productos/pescados/frescos",
        products: pescadosFrescos,
      },
      {
        id: "mariscos",
        label: "Mariscos",
        href: "/productos/pescados/mariscos",
        products: [...mariscosXKilo, ...mariscosXUnidad],
      },
    ],
  },
  congelados: {
    label: "Congelados",
    href: "/productos/congelados",
    subcategories: [
      { id: "merluza", label: "De Merluza", products: congeladosMerluza },
      { id: "pollo", label: "De Pollo", products: congeladosPollo },
      { id: "bocaditos", label: "Bocaditos", products: congeladosBocaditos },
    ],
  },
  cocina: {
    label: "Rotisería",
    href: "/productos/cocina",
    subcategories: [
      { id: "sushi", label: "Sushi y Rolls", products: cocinaSushi },
      { id: "empanadas", label: "Empanadas y Calzones", products: cocinaEmpanadas },
      { id: "paella", label: "Paella y Arroces", products: cocinaPaellaArroces },
      { id: "tartas", label: "Tartas y Pasteles", products: cocinaTartas },
      { id: "ensaladas", label: "Ensaladas", products: cocinaEnsaladas },
      { id: "platos", label: "Platos y Menús", products: cocinaPlatos },
    ],
  },
  almacen: {
    label: "Almacén",
    href: "/productos/almacen",
    subcategories: [
      { id: "salsas", label: "Salsas y Condimentos", products: almacenSalsas },
      { id: "conservas", label: "Conservas", products: almacenConservas },
      { id: "sushi", label: "Para Sushi", products: almacenSushi },
      { id: "arroces", label: "Arroces y Panko", products: almacenArrocesPastas },
      { id: "especias", label: "Especias y Varios", products: almacenEspecias },
      { id: "vinos", label: "Vinos", products: almacenVinos },
    ],
  },
}

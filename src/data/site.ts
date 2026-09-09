export interface NavLink {
	href: string;
	label: string;
}

export interface BrandValue {
	title: string;
	text: string;
}

export interface ScheduleRow {
	days: string;
	hours: string;
}

export const site = {
	name: "Rengue",
	tagline: "Alta bisutería & complementos",
	description:
		"Tienda de alta bisutería, complementos y moda flamenca en Jerez de la Frontera. Collares, pendientes y piezas exclusivas para bodas y eventos, desde hace más de 40 años.",
};

export const nav: NavLink[] = [
	{ href: "#coleccion", label: "Colección" },
	{ href: "#galeria", label: "Galería" },
	{ href: "#nosotros", label: "Nosotros" },
	{ href: "#contacto", label: "Contacto" },
];

export const hero = {
	eyebrow: site.tagline,
	headline: "Piezas únicas para momentos que lo merecen",
	body: "Seleccionamos joyas y complementos con atención al detalle, pensados para acompañarte en el día a día y en las ocasiones especiales.",
};

export const about = {
	eyebrow: "Nuestra historia",
	headline: "Más de 40 años en Jerez de la Frontera",
	body: "Rengue abrió sus puertas hace ya cerca de 40 años como una tienda de mercería, especializada en costura y botonería. Con el tiempo fue ampliando su oferta hasta especializarse en bisutería y complementos. Desde hace una década está al frente Raquel, que le dio un giro moderno y exclusivo a la tienda: artículos de alta bisutería y ediciones limitadas, seleccionados con mimo para quien busca algo diferente.",
	stats: [
		{ value: "+40", label: "años de historia en Jerez" },
		{ value: "100%", label: "piezas seleccionadas con mimo" },
		{ value: "Varias", label: "ediciones en la Pasarela Flamenca de Jerez" },
	],
};

export const trajectory = {
	eyebrow: "Trayectoria",
	headline: "Referentes en Jerez en moda flamenca y eventos",
	body: "Somos un referente en Jerez de la Frontera en complementos para bodas, eventos y trajes de flamenca, además de contar con una amplia gama de bisutería para el día a día. Hemos participado en varias ediciones de la Pasarela Flamenca de Jerez, vistiendo a las modelos con piezas de nuestra tienda.",
};

// El catálogo ya no se define aquí: las piezas se cargan automáticamente
// desde las fotos en src/assets/products/ (ver Catalog.astro).

export const values: BrandValue[] = [
	{
		title: "Piezas exclusivas",
		text: "Alta bisutería y ediciones limitadas, seleccionadas para quien busca algo distinto.",
	},
	{
		title: "Especialistas en boda, eventos y flamenca",
		text: "Referentes en Jerez para complementar el look de tus días más especiales.",
	},
	{
		title: "Trato cercano",
		text: "Atención personalizada antes y después de la compra, con el trato de toda la vida.",
	},
];

// Datos del titular, para el Aviso Legal y la Política de Privacidad.
export const legal = {
	ownerName: "Raquel Domínguez Labajo",
	nif: "31702281R",
	tradeName: site.name,
};

export const contact = {
	whatsappNumber: "34692403083", // formato internacional, sin "+"
	instagramHandle: "rengue_r",
	street: "C/ Corredera, 11",
	locality: "Jerez de la Frontera",
	region: "Cádiz",
	country: "ES",
	get address() {
		return `${this.street} — ${this.locality} (${this.region})`;
	},
	mapsQuery: "C%2F+Corredera%2C+11%2C+Jerez+de+la+Frontera%2C+C%C3%A1diz",
	schedule: [
		{ days: "Lunes a viernes", hours: "10:00–14:00 y 17:30–20:30" },
		{ days: "Sábados", hours: "10:00–14:00" },
	] satisfies ScheduleRow[],
};

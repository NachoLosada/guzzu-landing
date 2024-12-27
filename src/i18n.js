import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			title: "Guzzu winds down",
			subtitle_1:
				"The difficult decision has been made to wind down operations and say goodbye",
			body_text_1:
				"When we embarked on this journey over three years ago, we envisioned a bright future: one where musicians and artists from around the world could integrate digital merchandise into their monetization strategies. We recognized the limitations and challenges of the music industry—an environment where artists often lack the tools and opportunities to sustain themselves. The streaming model, instead of driving autonomy, has exacerbated financial insecurity for many.",
			body_text_2:
				"Our idea was straightforward: What if an artist could give their biggest fans the same sense of connection and pride that a t-shirt provides, but in the digital space? Just like wearing a favorite band’s t-shirt and finding a sense of community with others who share that passion, digital merchandise could offer a similar experience. The technology of NFTs and the Web3 framework gave us the tools: the ability to assign value and ownership to digital assets, sparking desirability. Artists could create limited editions of digital merch to enhance the experience of their superfans, allowing them to collect and showcase their support in innovative ways.",
			subtitle_3a: "So, ",
			subtitle_3b: "what went wrong?",
			body_text_3:
				"The market we envisioned turned out to be a temporary trend, driven by the global cryptocurrency boom and ultimately deflating under its own weight. The broader environment wasn’t ready for mass NFT adoption, and the promise of Web3’s decentralization and accessibility collided with reality. Without active consumers or clear demand, the ecosystem couldn’t gain momentum. To complicate matters, the underlying technology became a source of public skepticism, tarnishing its reputation and fostering distrust.",
			body_text_4:
				"This was our first entrepreneurial venture, and it has been a profound learning experience. We learned what true risk entails, how to operate without a safety net, and how to manage both short- and long-term expectations. Most importantly, we proposed a bold vision: a future where technology could empower the most vulnerable link in the music distribution chain—the artists who inspire and bring joy to so many of us.",
			subtitle_4:
				"In our next endeavors, we will continue to advocate for artists and create products that improve their present circumstances.",
			body_text_5:
				"We want to extend our heartfelt thanks to all the artists, record labels, management companies, and other partners who trusted GUZZU with their digital merchandising releases. We also want to thank the members of the GUZZU team, whose contributions helped build this platform, as well as the investors who placed their confidence in our idea and founding team.",
			footer_text_1: "If you have any questions, contact us at ",
			contact_us: "hello@guzzu.io",
			footer_text_2: "Thank you for being part of our journey.",
			bye_text: "¡Hasta pronto!",
		},
	},
	es: {
		translation: {
			title: "Guzzu llega a su fin",
			subtitle_1: "Ha llegado el difícil momento de decir adiós.",
			body_text_1:
				"Cuando comenzamos esta aventura hace más de tres años, veíamos el futuro muy claro: uno en el que los músicos y artistas de cualquier parte pudieran incorporar el merchandising digital como parte de sus estrategias de capitalización. Sabíamos bien que la industria de la música está muy limitada y llena de vicios; a los artistas les faltan formatos y vías para sostenerse, ya que el modelo del streaming ha resultado ser un generador de precariedad y no un catalizador hacia la autonomía.",
			body_text_2:
				"La premisa era simple: ¿Y si un artista pudiera brindar a sus mayores fans el mismo sentimiento de pertenencia que genera una de sus camisetas pero en el plano digital? Todos hemos comprado camisetas de nuestro grupo favorito para luego llevarla orgullosos mientras buscamos a otros iguales con los que compartir esa pasión. Lo teníamos todo a nuestro alcance: la tecnología de los NFTs y el marco de la WEB3 hacían posible que cualquier asset digital tuviera un precio, un propietario y pudiera despertar deseabilidad. Los artistas podrían crear sus propias ediciones de merch digital y acompañar a sus lanzamientos y roll outs para así mejorar la experiencia de sus súper fans, quienes podrían coleccionar esos bienes digitales y seguir mostrando su confianza en los músicos.",
			subtitle_3a: "Entonces: ",
			subtitle_3b: "¿Qué ocurrió?",
			body_text_3:
				"El mercado que intuíamos resultó ser una tendencia pasajera vitaminada a partir de una explosión de las criptomonedas a nivel mundial. Se acabó desinflando por la propia inercia. Nuestro contexto todavía no estaba preparado para una adopción masiva de los NFTs y la promesa de horizontalidad y descentralización de la WEB3 se topó con la cruda realidad: sin consumidores activos, sin una demanda clara, el ecosistema completo no podía levantarse y andar. Además, la tecnología tras nuestro proyecto y otros muchos se transformó en tóxica y erosionó la opinión del público, implantando un aura de desconfianza sobre todo lo que viniera de este lugar.",
			body_text_4:
				"Fue nuestra primera aventura como emprendedores y aprendimos tanto que nunca dejaremos de estar agradecidos; supimos lo que era el riesgo de verdad, lo que significa no tener una red de seguridad, gestionar talento y expectativas a corto y largo plazo. Pero sobre todo propusimos algo: una ventana a un futuro posible. Un proyecto con las intenciones de mejorar la vida del eslabón más frágil en toda la cadena de distribución musical. Aquellos que tantas alegrías nos han dado y nos seguirán dando: los artistas.",
			subtitle_4:
				"En nuestros siguientes proyectos, seguiremos luchando por ellos y por crear productos que puedan mejorar su presente.",
			body_text_5:
				"Queremos agradecer a todas y todos los artistas, sellos discográficos, empresas de management y otras entidades que han depositado su confianza en GUZZU para el lanzamiento de sus releases de Digital Merchandising. Por supuesto también queremos agradecer a todos y todas las personas que han formado parte del equipo de GUZZU y que en mayor o menor medida nos han ayudado a construir esta plataforma. Finalmente también queremos agradecer la confianza y esfuerzo que han depositado los inversores en la idea y el equipo fundador de GUZZU.",
			footer_text_1: "Si tienes alguna duda puedes contactarnos a través de ",
			contact_us: "hello@guzzu.io",
			footer_text_2: "Muchas gracias por acompañarnos en este viaje.",
			bye_text: "¡Hasta pronto!",
		},
	},
};

// Inicializar i18next
i18n.use(initReactI18next).init({
	resources,
	lng: "en", // Idioma por defecto
	interpolation: {
		escapeValue: false, // React ya se encarga de la protección contra XSS
	},
});

export default i18n;

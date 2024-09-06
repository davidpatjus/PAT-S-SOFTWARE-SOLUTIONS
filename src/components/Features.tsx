import Feature from "./Feature";

const plans = [
  {
    title: "Plan Básico",
    description: "Ideal para individuos y pequeños negocios que buscan presencia en línea de manera rápida y efectiva.",
    price: "$800.000",
    features: [
      "Landing page (5 Secciones)",
      "2 rutas adicionales (por ejemplo: página de servicios y contacto)",
      "Integraciones básicas (correo, Google Maps, redes sociales)",
      "Soporte básico",
      "Dominio personalizado (1 año)"
    ],
  },
  {
    title: "Plan Premium",
    description: "Perfecto para medianas empresas que buscan mayor personalización e integraciones avanzadas.",
    price: "$1.600.000",
    features: [
      "Landing page (8 Secciones)",
      "4 Rutas adicionales",
      "Integraciones avanzadas (calendarios, chat en vivo, formularios dinámicos)",
      "Optimización SEO básica",
      "Soporte prioritario (email y chat)",
      "Certificado SSL (1 año incluido)",
      "Diseño responsive avanzado (optimizado para dispositivos móviles, tabletas y escritorio)"
    ],
  },
  {
    title: "Plan Enterprise",
    description: "El plan más completo para grandes empresas con necesidades avanzadas.",
    price: "$3.500.000",
    features: [
      "Sitio web de hasta 10 secciones",
      "8 Rutas adicionales",
      "Integraciones personalizadas (ERP, CRM, APIs de terceros)",
      "E-commerce básico con carrito y pasarela de pagos",
      "Consultoría en diseño y desarrollo (1 sesión)",
      "Optimización SEO avanzada (optimización de velocidad, meta tags, análisis de palabras clave)",
      "Soporte técnico dedicado 24/7 (vía email, chat y llamadas)",
      "Capacitación del equipo para gestión del contenido",
      "Almacenamiento y hosting (1 año incluido)"
    ],
  },
  {
    title: "Plan Custom",
    description: "Soluciones totalmente personalizadas para empresas con necesidades específicas.",
    price: "A convenir",
    features: [
      "Diseño y desarrollo a medida",
      "Rutas y secciones ilimitadas",
      "Integraciones a medida (ERP, CRM, bases de datos, pasarelas de pago, APIs complejas)",
      "E-commerce avanzado (con funcionalidades de suscripción, manejo de inventario, y personalización del cliente)",
      "Aplicaciones web o móviles integradas",
      "Soporte técnico y mantenimiento personalizado (según el acuerdo)",
      "Optimización de rendimiento a nivel de código, velocidad y seguridad",
      "Consultoría estratégica continua",
      "Almacenamiento y hosting premium"
    ],
  },
];

export const Features = () => {
  return (
    <div id="Planes" className="bg-black text-white py-[72px] sm:py-24 overflow-x-hidden">
      <div className="container">
        
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Todo lo que necesitas
        </h2>
        
        <div className="max-w-xl xl:max-w-3xl mx-auto">
          <p className="text-center mt-5 text-xl md:text-2xl xl:text-3xl text-white/70">
            Escoge el plan que mejor se adapte a las necesidades de tu negocio, desde una landing page básica hasta soluciones completamente personalizadas.
          </p>
        </div>

        {/* Ajuste de las columnas según el tamaño de pantalla */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mx-auto">
          {plans.map(({ title, description, price, features }, index) => (
            <Feature title={title} description={description} price={price} features={features} key={index} />
          ))}
        </div>

      </div>
    </div>
  )
};


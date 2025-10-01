"use client";

const TermsContent = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Aceptación de los Términos
              </h2>
              <p className="text-muted-foreground mb-4">
                Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos de servicio,
                todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de
                cualquier ley local aplicable.
              </p>
              <p className="text-muted-foreground">
                Si no está de acuerdo con alguno de estos términos, se le prohíbe usar o acceder a este sitio.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Descripción del Servicio
              </h2>
              <p className="text-muted-foreground mb-4">
                Promociones Hoy! es una plataforma que recopila y organiza información sobre promociones
                de tarjetas de crédito de fuentes públicas y oficiales. Nuestro servicio es completamente
                gratuito y no requiere registro obligatorio.
              </p>
              <p className="text-muted-foreground">
                No somos afiliados ni patrocinados por ningún banco o entidad financiera. Actuamos únicamente
                como un agregador de información pública.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Uso Permitido
              </h2>
              <p className="text-muted-foreground mb-4">
                Usted puede usar nuestro sitio web para:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Consultar promociones de tarjetas de crédito</li>
                <li>Filtrar y buscar ofertas específicas</li>
                <li>Compartir enlaces a promociones específicas</li>
                <li>Suscribirse a alertas de nuevas promociones</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Limitaciones de Responsabilidad
              </h2>
              <p className="text-muted-foreground mb-4">
                La información sobre promociones se recopila de fuentes públicas y se actualiza periódicamente.
                Sin embargo, no garantizamos la exactitud, completitud o vigencia de toda la información presentada.
              </p>
              <p className="text-muted-foreground mb-4">
                Recomendamos encarecidamente verificar los términos y condiciones directamente con el banco
                o comercio correspondiente antes de aprovechar cualquier promoción.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Privacidad y Datos Personales
              </h2>
              <p className="text-muted-foreground mb-4">
                Respetamos su privacidad y manejamos sus datos personales de acuerdo con nuestra Política de Privacidad.
                Al utilizar nuestros servicios, usted consiente la recopilación y uso de información según se describe
                en dicha política.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Modificaciones a los Términos
              </h2>
              <p className="text-muted-foreground mb-4">
                Nos reservamos el derecho de revisar estos términos de servicio en cualquier momento sin previo aviso.
                Al usar este sitio web, usted acepta estar sujeto a la versión actual de estos términos de servicio.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Contacto
              </h2>
              <p className="text-muted-foreground mb-4">
                Si tiene alguna pregunta sobre estos Términos de Servicio, puede contactarnos a través de
                los medios proporcionados en nuestro sitio web.
              </p>
            </div>

            {/*<div className="bg-muted p-6 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Nota:</strong> Este es contenido de placeholder. El texto oficial será actualizado posteriormente
                por el equipo legal correspondiente.
              </p>
            </div>*/}

          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsContent;

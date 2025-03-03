<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 2
      h1 Validación de transacciones
    
    p.mb-3 Para este proceso se deben tener en cuenta algunos cuidados al momento de registrar los productos y así evitar los reclamos, robos y averías. A continuación, se presentan algunos.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.col-8.col-sm-6
        img(src='@/assets/curso/tema2/img001.png', alt='')
      .col-lg-8
        .py-4
        SlyderA.bg6.p-3
          .row.justify-content-center.align-items-center.mb-5.p-4
            .col-md-3.col-8
              figure
                img(src='@/assets/curso/tema2/img02.png', alt='')
              .py-2
            .col-md-7.mb-4.mb-md-0
              h5 Validación de transacciones
              p Debe tener concentración en el registro, sin descuidar lo que pasa alrededor del puesto de pago.
          
          .row.justify-content-center.align-items-center.mb-5.p-4
            .col-md-3.col-8
              figure
                img(src='@/assets/curso/tema2/img03.png', alt='')
              .py-2
            .col-md-7.mb-4.mb-md-0
              p Cuando registre debe verificar que la mercancía esté en perfecto estado, vajillas, huevos, etc.
          
          .row.justify-content-center.align-items-center.mb-5.p-4
            .col-md-3.col-8
              figure
                img(src='@/assets/curso/tema2/img04.png', alt='')
              .py-2
            .col-md-7.mb-4.mb-md-0
              p Cuando registre un producto lo debe ubicar con cuidado y organizadamente en el lugar de empaque, recuerde que la mercancía es del cliente.
          
          .row.justify-content-center.align-items-center.mb-5.p-4
            .col-md-3.col-8
              figure
                img(src='@/assets/curso/tema2/img05.png', alt='')
              .py-2
            .col-md-7.mb-4.mb-md-0
              p Debe retirar o desactivar los #[em tag’s] de seguridad, recuerde que algunos proveedores los colocan a sus productos, como cosméticos, medicamentos, algunas marcas de leche en polvo, libros y revistas o los #[em hard tag] que le colocan a los textiles, zapatos y otros productos que no se dañan con este sistema de seguridad.
          
          .row.justify-content-center.align-items-center.mb-5.p-4
            .col-md-3.col-8
              figure
                img(src='@/assets/curso/tema2/img06.png', alt='')
              .py-2
            .col-md-7.mb-4.mb-md-0
              p Debe revisar con sutileza los recipientes con tapa o empacados en cajas, baldes, ollas, planchas, licuadoras, vajillas, licores, tinturas y las cremas dentales que vea que han sido destapadas. 
              p Estos productos se prestan para guardar mercancía o cambiar su contenido. Su revisión también le permite verificar su estado.
          
          .row.justify-content-center.align-items-center.mb-5.p-4
            .col-md-3.col-8
              figure
                img(src='@/assets/curso/tema2/img07.png', alt='')
              .py-2
            .col-md-7.mb-4.mb-md-0
              p Los textiles, calzado y productos de papelería los debe revisar al registrar o empacar, tocando los bolsillos de las prendas, revisando las tallas de los zapatos y revisando las revistas y cuadernos. Productos como los bombillos deben verificarse con el cliente si fueron ensayados.           
    
    .row.justify.start.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/tema2/ico1.png")
          .bg55.py-2.w-card-text.fw-bold.text-white El desactivador de #[em tag’s]     

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-12.col-12
        .bloque-texto-g.bgazul.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img002.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-4 Es el equipo para que se desactiven los #[em tag’s] o dispositivos de seguridad que le colocan en el almacén a los productos para evitar que salgan sin ser registrados, la mayoría de ellos son de textiles, variedades y licores. 
            br
            br
            |
            p Los puestos de pago también tienen incorporado un desactivador para los #[em tag’s] que traen internamente en el empaque algunos cosméticos y medicamentos, estos dispositivos son colocados por el fabricante y no son reutilizables.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .cajon.color-acento-contenido.p-4.mb-4
          p Nota. Siempre se debe retirar y / o deshabilitar el #[em tag] del producto para evitar que se activen las alarmas en las salidas del almacén, incomodando al cliente.
    
    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Precios

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-8.col-sm-6
        img(src='@/assets/curso/tema2/img003.png', alt='')
      .col-lg-7
        .py-2
        p Cuando  se habla del precio se hace referencia a que a todo producto o servicio se le da una cuantía representativa, la calidad y la cantidad forman parte del intercambio de productos y servicios que se conoce como compra - venta, a lo largo del tiempo el hombre ha adoptado este término para hacer correspondencia a lo que se tiene que pagar por algún producto o servicio.
        .cajon.color-acento-contenido.p-4.mb-4
          p Cabe destacar que el término precio hace referencia a la cantidad de dinero que se necesita para poder adquirir un bien o servicio, incluso un objeto, mediante los diferentes tipos de dinero que existen, pero depende de la región donde se esté haciendo la compra.
      .col-lg-1.col-3
        img(src='@/assets/curso/tema2/etiqueta.png', alt='')
    
    .row.justify-content-start.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/tema2/ico2.png")
          .bg55.py-2.w-card-text.fw-bold.text-white Características de los precios
    p La principal característica del término “precio” es que se mide en unidades monetarias y se le asigna un valor específico. Además, varía según la región donde se realice la transacción de compraventa de bienes, productos o servicios. En esencia, el precio refleja la relación en el intercambio de bienes y servicios disponibles para los clientes dentro del mercado.
    
    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2  Legalidad de medios de pago

    p.mb-2 Cabe destacar que un medio de pago es un instrumento que permite la adquisición de productos o servicios. Se considera un bien equivalente al dinero, como las tarjetas de débito o crédito, que facilitan la realización de compras o el pago de deudas. El dinero, en particular, funciona como medio de pago, de cambio e incluso como forma de ahorro.
    .row.justify-content-start.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/tema2/ico2.png")
          .bg55.py-2.w-card-text.fw-bold.text-white Ejemplos de medios de pago
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-8.col-sm-6
        img(src='@/assets/curso/tema2/img004.png', alt='')
      .col-lg-8
        .py-2
        p Algunos medios de pago son:
        ul.lista-ul--color
          li
            i.fas.fa-circle-check
            |El dinero, en forma de monedas y billetes, actúa como medio de cambio.
          li
            i.fas.fa-circle-check
            |Los cheques, en todas sus modalidades.
          li
            i.fas.fa-circle-check
            |Las tarjetas de débito o crédito.
          li
            i.fas.fa-circle-check
            |Los instrumentos de pago por Internet como Paypal también son medios de pago.
        p En los últimos años se ha incrementado el número de personas que efectúan transacciones, es una creciente tendencia teniendo en cuenta el volumen de transacciones que se llevan a cabo en la economía mundial.
        .cajon.color-secundario.p-4.mb-4
          p Las empresas comerciales, instituciones financieras y autoridades han encontrado alternativas para masificar los servicios a través del uso del plástico (crédito, débito, prepagadas) y pagos móviles desde celulares, las diferentes plataformas que se encuentran en la Internet tienen el propósito de atender una creciente demanda que masifica la experiencia de pagos, los avances tecnológicos contribuyen de manera importante y no dejarán de sorprender.
      .py-4
      p Más allá de factores como la rapidez o la accesibilidad en la modalidad de pago que se escoja, la experiencia cotidiana enseña que en el momento de verdad esa diversidad de medios de pago es fundamental a la hora de escoger las diferentes opciones que ofrece el mercado, para esa selección es importante tener en cuenta que existen dos aspectos básicos:
    
    .cont_5_1.mt-4.mb-5
      .row.justify-content-center
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema2/img021.png' alt="")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center Incentivo
              p.mt-4.text-white.mb-0.text-center Es el costo - beneficio que recibe el cliente con respecto a las ventajas que lo exoneran al utilizar cada uno de los medios de pago.
        
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema2/img022.png")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center Condiciones de seguridad (confiabilidad) 
              p.mt-4.text-white.mb-0.text-center Es la seguridad que ofrecen las instituciones con las alternativas de sus medios de pago.
       
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.py-2.col-sm-6
        img(src='@/assets/curso/tema2/img005.png', alt='')
      .col-lg-7
        p Con respecto al tema de costo beneficio, cada empresa oferta diferentes planes de mercadotecnia o estrategia que considere atractiva para su público objetivo.
        p En las condiciones actuales teniendo en cuenta el reto principal que es la aceptación de las diferentes opciones de medios de pago, uno de los mayores atractivos para el cliente es el argumento de la seguridad que ofrezca cada alternativa y sobre todo la percepción que tenga el público usuario. Así como se ha señalado, la tecnología no dejará de sorprender en cuanto a seguridad se refiere, recuerde que la tecnología tiene dos caras, una positiva y una negativa que vulnera los sistemas o medios de pago.
        .cajon.color-acento-contenido.p-4.mb-4
          p Las autoridades que tienen que ver con medios de pago en Colombia han avanzado en la regulación de nuevas modalidades que cumplan con correctas opciones de medios de pago para que el cliente incremente su nivel de confiabilidad y perciba absolutamente la funcionalidad de la condición de seguridad más elemental, que lo invite a hacer uso de las nuevas opciones.
      .col-lg-1.col-3
        img(src='@/assets/curso/tema2/pago.png', alt='')
    

    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3  Seguridad y herramientas

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12.col-md-12.col-12
        .bloque-texto-g.bgazul.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img006.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-4 Los métodos de pago seguros en Colombia tienen una relevancia en el mundo del comercio electrónico, estos métodos son aquellos donde todas las operaciones se realizan de forma telemática, son las herramientas con las que se transfiere el dinero del comprador al vendedor, la fase crítica se da en las tiendas #[em online], por eso los propietarios de un #[em e-commerce] necesitan tener sus medios de pago bajo control y para ello necesitan saber cómo funcionan.
            br
            br
            |
            p Se puede definir un método de pago #[em online] como un instrumento que permite recibir pagos de los clientes de forma inmediata, el dinero se dirige del comprador al vendedor pasando por un puente de pagos, que regula y autoriza el flujo.
      .py-3
      p.mb-2 Los diferentes niveles de seguridad que existen en las plataformas de pago #[em online] agrupan los terminales de punto de venta virtuales (TPV virtual) que otorgan las entidades bancarias o los medios de pago, y que no dependen de ningún banco, ni de los pagos PayPal, Stripe o similares.
    .row.justify-content-start.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/tema2/ico3.png")
          .bg55.py-2.w-card-text.fw-bold.text-white Los tres niveles de seguridad de pago son 
    
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-12   
        .tarjeta--container.row.mb-2
          .col-md.tarjeta.color-primario.bd.p-4
            .row.justify-content-center.mb-4
                  .col-8
                    figure
                      img.img-a.img-t.my-2(src='@/assets/curso/tema2/num1.png', alt='Texto que describa la imagen')
                  p.mb-4.text-center El conocido como modo seguro o 3D Secure.
          
          .col-md.tarjeta.color-primario.bdd.p-4
            .row.justify-content-center.mb-4
                .col-8
                  figure
                    img.img-a.img-t.my-2(src='@/assets/curso/tema2/num2.png', alt='Texto que describa la imagen')
                p.mb-4.text-center El modo mixto.
            
          .col-md.tarjeta.color-primario.bd.p-4
            .row.justify-content-center.mb-4
              .col-8
                figure
                  img.img-a.img-t.my-2(src='@/assets/curso/tema2/num3.png', alt='Texto que describa la imagen')
              p.mb-4.text-center Modo normal o sin 3D Secure.
    .py-3
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-8.py-2.col-sm-6
        img(src='@/assets/curso/tema2/img007.png', alt='')
      .col-lg-8
        p La mayoría de las entidades bancarias conceden de forma automática a los independientes y pymes un TPV (Terminal punto de venta virtual), estos contienen un nivel de seguridad para poder recibir pagos en su #[em e-commerce], el nivel de seguridad exige que todas las compras sean efectuadas con tarjetas que cumplan con el protocolo 3D Secure.
        .cajon.color-secundario.p-4.mb-4
          p Hay que tener en cuenta que todas las tarjetas débito y crédito están compuestas por 16 dígitos, tienen fecha de caducidad y un criptograma visual (CVV) de tres dígitos de control para la verificación de la transacción en el sitio web del banco, el cual pide una clave adicional como medida de seguridad, que ayuda a disminuir los niveles de inseguridad en los pagos que se realizan con tarjetas débito y crédito, ofreciendo confiabilidad en los pagos electrónicos que realizan los clientes.
        p.mb-4 La condición o circunstancia desventajosa para las tiendas #[em online] es que a pesar de que algunas de las tarjetas 3D Secure están habilitadas para las compras #[em online], fallan al momento de la compra, las tarjetas se entregan deshabilitadas cuando las entrega la entidad financiera o cuando se renuevan y requieren una activación inicial con el banco.
      .py-2
      p.mb-3 Para habilitar una tarjeta con 3D Secure y que esté disponible al momento de la compra #[em online] en un TPV virtual tan solo hay que contactar al banco para habilitar esta opción, el inconveniente que genera esta operación es que hay compradores que a pesar de que se está viviendo una revolución en las formas de pago, aún no se han adaptado a esta tecnología por los niveles de desconfianza que existen.

    separador
    #t_2_4.titulo-segundo.mb-5
      h2 2.4  Excedentes de pago

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-1.col-4.py-2.col-sm-3
        img(src='@/assets/curso/tema2/pago.png', alt='')
      .col-lg-7
        p Cuando suceda que al momento del arqueo haya menos dinero del que debería haber o que haya un valor de caja mayor que el reportado, son errores comunes que se pueden presentar en el cierre de caja.
        p El proceso de arqueo o cierre de caja es un proceso contable que se realiza al final de una jornada de ventas para saber si el efectivo más otros comprobantes de pago físicos coinciden con los valores reportados en la venta de caja.

        .cajon.color-acento-contenido.p-4.mb-4
          p Toda caja hace su apertura con un valor inicial en efectivo, con el fin de que haya una base como punto de partida de las operaciones diarias, durante el día se hacen ventas que se pagan con diferentes medios de pago tales como efectivo, tarjetas débito, crédito, bonos, cheques, redenciones de sistemas de puntos, pagos a plazos, créditos internos, etc.
      
      .col-lg-4.col-8.col-sm-6
        img(src='@/assets/curso/tema2/img008.png', alt='')
      .py-2
      p.mb-3.text-center En el proceso de arqueo o cierre de caja se pueden detectar los siguientes errores presentes en el punto de pago:

      .row.justify-content-center.mb-5.bg6.p-4(data-aos="fade-left")
        .col-lg-5
          h5.mb-3 Faltantes de dinero, lo cual puede suceder por:
          ul.lista-ul--color
            li
              i.fas.fa-circle-check
              |Dar devoluciones superiores a los clientes. 
            li
              i.fas.fa-circle-check
              |No tener en cuenta salidas de dinero para compras u otros gastos del negocio.
            li
              i.fas.fa-circle-check
              |Se pierden comprobantes de pago.
            li
              i.fas.fa-circle-check
              |No se registran algunos descuentos concedidos a los clientes.
            li
              i.fas.fa-circle-check
              |Cuando se registra y no se tiene en cuenta si son ventas a crédito o por plazos.
            li
              i.fas.fa-circle-check
              |Robo.
        .col-lg-4.py-2.col-sm-6
          img(src='@/assets/curso/tema2/img009.svg', alt='')
        .col-lg-3
          h5.mb-3 Sobrantes de dinero, lo cual puede suceder por:
          ul.lista-ul--color
            li
              i.fas.fa-circle-check
              |El cajero entrega menos devolución de dinero.

            li
              i.fas.fa-circle-check
              |Algunas entradas recibidas por el cajero no son contabilizadas.

            li
              i.fas.fa-circle-check
              |Se cobra un valor mayor al cliente por las compras realizadas.

      .cajon.color-acento-contenido.p-4.mb-4
        p Las tarjetas de crédito, débito o cheques tienen un manejo diferente, estos documentos deben ser protegidos para poder realizar las conciliaciones bancarias en el momento de recibir los extractos bancarios.
    
    separador
    #t_2_5.titulo-segundo.mb-5
      h2 2.5 Devoluciones

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.col-8.py-2.col-sm-6
        img(src='@/assets/curso/tema2/img10.png', alt='')
      .col-lg-8
        p Las devoluciones de mercancía que deben asumir las empresas para mantener una buena relación con los clientes le permiten minimizan el impacto económico que implican. La creciente incorporación del modelo omnicanal, es uno de los grandes impulsores de las devoluciones. Para muchas organizaciones la devolución es un dolor de cabeza, pero resulta que, para otras, es una forma natural de hacer negocios.
        .cajon.color-secundario.p-4.mb-4
          p El secreto en el manejo de las devoluciones de productos reside en la capacidad que tienen las organizaciones para hacerlas, esto permite comercializar nuevamente lo que esté en buenas condiciones y rescatar del producto las partes útiles que se puedan recuperar y volver a vender en su estado original.

    




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 1
      h1 Recaudo en el punto de pago
  
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-12.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img001.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-4 Para comenzar es importante esta definición, que es la acción de culminar con amabilidad la experiencia de compra de nuestros clientes en el almacén, registrando con agilidad y precisión los artículos que este ha seleccionado. La función general como cajero es atender de forma cortés a los clientes y registrar con oportunidad y exactitud los artículos que estos han seleccionado.
            br
            br
            |
            p La finalidad del recaudo es brindar un excelente servicio al cliente en el puesto de pago, efectuando el correcto registro y cobro de las mercancías que este adquiere, cumpliendo con las normas, políticas y procedimientos definidos por la compañía. Para iniciar el proceso de recaudo se debe contar con una base, conocer la estructura de la terminal POS y hacer la apertura de la caja.


    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1	Base de la caja

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-4.col-8
        img.mb-2(src='@/assets/curso/tema1/img002.png', alt='')
      .col-lg-7
        p La base es la primera cantidad de dinero que se recibe en billetes y monedas de diferente denominación para dar el cambio o las “vueltas” a los clientes. Para reclamar la base, primero debe ingresar y salir del sistema POS, con esta acción se carga la base al sistema y se obtiene la tirilla con el valor a reclamar. Antes de dirigirse al puesto de pago debe verificar la cantidad recibida.
        p Recuerde llevar siempre al puesto de pago el sacudidor y el dispensador de agua que le suministra el jefe inmediato, luego de distribuir la base en la gaveta verifique el material de empaque entregado por la empresa.
        .cajon.color-acento-contenido.p-4.mb-4
          p Nota. Cuando llegue al puesto de pago no devuelva a los clientes, sugiérales que lo esperen mientras organiza la base.
      .col-lg-1.col-3
        img(src='@/assets/curso/tema1/cajero.png', alt='')
    
    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2  Apertura de la caja

    p.mb-5 Las operaciones que realiza el cajero en el puesto de pago durante su jornada se clasifican en las etapas definidas como el antes, el durante y el después, consulta el siguiente video.       
    
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-12.col-12.col-md-12
        figure(data-aos="fade-right").py-2
          .video.mb-1
            iframe(width="560" height="315" src="https://www.youtube.com/embed/dd9KCOLr3x0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. Apertura de la caja

   
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<template>
  <div class="about-view">
    <Header/>
    <section>
      <h1>Vårt kaffe</h1>
      <p><strong>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.
      </strong></p>
      <p>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.
      </p>
      <p>Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.
      </p>
      <figure>
        <img src="@/assets/graphics/eva-cortado.jpg" alt="Eva Cortado">
        <h2>Eva Cortado</h2>
        <p>VD & Grundare</p>
      </figure>
    </section>
    <footer></footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default{
  components: { Header }
}
</script>

<style lang="scss" scoped>
.about-view{
  width: 100%;
  background-color: #F3E4E1;
  display: flex;
  flex-direction: column;
  section{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    h1{
      align-self: flex-start;
      font-size: 3rem;
      font-family: 'PT Serif', serif;
      margin: 0;
      
    }
    p{
      font-size: 14px;
      font-family: 'Work Sans', sans-serif;
      letter-spacing: 1.4px;
      line-height: 1.4rem;
      margin-bottom: 1rem;
    }
    figure{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 3rem;
      img{
        width: 4rem;
        border-radius: 999rem;
        margin: .3rem;
      }
      h2{
        font-size: 1rem;
      }
      h2, p{
        margin: 0;
      }
    }
  }
  footer{
    margin: auto auto 0 auto;
    width: 100%;
    height: 4.5rem;
    background-image: url('../assets/graphics/graphics-footer.svg');
    background-size: cover;
  }
}
</style>

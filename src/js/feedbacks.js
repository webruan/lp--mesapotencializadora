const testimonials = [
  { 
    highlight: "...clientes relatam uma experiência única...",
    text: "Desde que comecei a usar a Mesa Potencializadora em meus atendimentos, meus <span class='f-medium'>clientes relatam uma experiência única.</span> Um deles me disse que sentiu uma energia incrivelmente positiva fluindo por seu corpo durante a sessão. Era algo totalmente diferente de qualquer outro tratamento que já havia experimentado.", 
  },
  { 
    highlight: "...proporcionaram um profundo entendimento...",
    text: "Desde que comecei a explorar a Mesa Potencializadora e seus recursos, minha jornada no mundo do biomagnetismo mudou completamente. As mais de 90 páginas de conteúdos exclusivos me <span class='f-medium'>proporcionaram um profundo entendimento</span> das técnicas de radiestesia, Placas de Ressonância Quântica e biomagnetismo. Isso realmente ampliou meus conhecimentos e habilidades.",
  },
  { 
    highlight: "...diferença notável nos resultados...",
    text: "A Mesa Potencializadora é uma verdadeira revolução no campo do biomagnetismo. Desde que comecei a utilizá-la, percebi uma <span class='f-medium'>diferença notável nos resultados</span> dos meus atendimentos. A combinação das técnicas de radiestesia, Placas de Ressonância Quântica e biomagnetismo permite um tratamento mais eficaz. Meus clientes estão experimentando melhorias notáveis em sua saúde e bem-estar.",
  },
  { 
    highlight: "...experiência com a Mesa Potencializadora tem sido incrível...",
    text: "Minha <span class='f-medium'>experiência com a Mesa Potencializadora tem sido incrível</span>. A capacidade de trabalhar com a bioenergia e equilibrar o pH do corpo durante o tratamento é verdadeiramente impressionante. Isso acelera a recuperação, e também promove equilíbrio e harmonia. Estou grato por ter adicionado essa inovação nos meus atendimentos de biomagnetismo.",
  }
];

function generateCarouselItems() {
  let carouselItemsHtml = '';

  const itemsToShow = 3;
  const middleItemIndex = Math.floor(testimonials.length / 2);

  let startIndex = middleItemIndex - Math.floor(itemsToShow / 2);
  startIndex = Math.max(0, startIndex);
  startIndex = Math.min(testimonials.length - itemsToShow, startIndex);

  for (let i = startIndex; i < startIndex + itemsToShow && i < testimonials.length; i++) {
    const testimonial = testimonials[i];
    const isCentralItem = i === middleItemIndex;
    const cardClass = isCentralItem ? 'central-card' : '';

    carouselItemsHtml += 
    `
      <div class="row item carousel-card ${cardClass}">
        <i class='bx bx-happy-heart-eyes'></i>
        <div class="column text">
          <h6>${testimonial.highlight}</h6>
          <p>${testimonial.text}</p>
        </div>
        <i class='bx bx-heart-circle' ></i>
      </div>
    `;
  }    
  document.getElementById('carousel').innerHTML = carouselItemsHtml;
};

generateCarouselItems();

function goToNextFeedback() {
  testimonials.push(testimonials.shift());
  generateCarouselItems();
}

function goToPreviousFeedback() {
  testimonials.unshift(testimonials.pop());
  generateCarouselItems();
}

document.querySelector('#prev').addEventListener('click', goToPreviousFeedback);
document.querySelector('#next').addEventListener('click', goToNextFeedback);
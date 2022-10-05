let sectionsWithLorem = document.querySelectorAll('.lorem-ipsum');

function addLoremIpsum(pagePart) {
  let loremIpsum = document.createElement('p');
  loremIpsum.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  loremIpsum.setAttribute('class', 'lore-paragraph');
  pagePart.appendChild(loremIpsum);
}

window.addEventListener('load', () =>{
  sectionsWithLorem.forEach((project) => addLoremIpsum(project));
})
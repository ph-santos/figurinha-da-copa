let isIgnite = true

function changeCard(event) {
    const card = event.currentTarget
    const backgroundImage = isIgnite ? 'url(./assets/images/bg-ignite.svg)' :  'url(./assets/images/bg-explore.svg)'
    isIgnite = !isIgnite
    card.style.backgroundImage = backgroundImage
}

document.querySelector('.card').addEventListener('click', changeCard)
import './style.css'

type Member = {
  name: string,
  mobId: string
}

const mobContainer = document.querySelector('.mob__container');

const fetchMob = async () => {
  const getMembers = await fetch(`http://localhost:3000/mobs/1/members`);
  const memberCards = await getMembers.json()
  memberCards.forEach((member : Member) => {
    mobContainer!.innerHTML += `<article><div class="mob__card"><h2 class="mob__item">${member.name}</h2></div></article>`
  } )
}

fetchMob();
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
    mobContainer!.innerHTML += `<article><h2>${member.name}</h2></article>`
  } )
}

fetchMob();
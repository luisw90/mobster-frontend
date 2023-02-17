import './style.css'

type Member = {
  name: string,
  linkedin: string,
  github: string,
  mobId: string
}

const mobContainer = document.querySelector('.mob__container');

const fetchMob = async () => {
  const getMembers = await fetch(`http://localhost:3000/mobs/1/members`);
  const memberCards = await getMembers.json()
  memberCards.forEach((member : Member) => {
    mobContainer!.innerHTML += `
    <article>
      <div class="mob__card">
        <h2 class="mob__item-name">${member.name}</h2>
        <p class="mob___item-linkedin-link">${member.linkedin}</p>
        <p class="mob___item-github-link">${member.github}</p>
      </div>
    </article>`
  } )
}

fetchMob();
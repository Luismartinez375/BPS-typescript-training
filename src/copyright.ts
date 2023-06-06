


const year = document.getElementById('year') as HTMLElement
const thisYear = new Date().getFullYear()as unknown as string
year.setAttribute('datetime',thisYear) 
year.textContent = thisYear

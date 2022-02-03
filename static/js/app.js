import API from './api.js'
const api = new API()
console.log("HOla")

const $characterContainer = document.querySelector('#character-container')

const characterTemplate = `
<article class="character">
    <div class="character-grid">
        <h2>Rick Sanchez</h2>
        <img src="" alt="">
    </div>
</article>
`



class Character {
    render() {
        $characterContainer.innerHTML = characterTemplate
    }
}

const rick = new Character()
rick.render()
console.log(api.getCharacter(2))
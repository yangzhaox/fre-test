import { h, render, useState, useEffect } from 'https://unpkg.com/fre@2.3.3/dist/fre.js'
import htm from 'https://unpkg.com/htm@3.1.0/dist/htm.module.js'
const html = htm.bind(h)

// import { html, render, useState, useEffect } from 'https://unpkg.com/htm@3.1.0/preact/standalone.module.js'

const FinalPage = function (props) {
    const [canBackHome, setCanBackHome] = useState(false)

    useEffect(() => {
        setTimeout(() => setCanBackHome(true), 2000)
    }, [])

    const backHomeButton = canBackHome ? html`<div>
        <button type="button">Click Me!</button>
    </div>` : ''

    return html`<div>
        <h1>Hello</h1>
        ${backHomeButton}
    </div>`
}
render(html`<${FinalPage} />`, document.body)
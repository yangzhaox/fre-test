import { h, render, useState, useEffect } from 'https://unpkg.com/fre@2.3.3/dist/fre.js'
import htm from 'https://unpkg.com/htm@3.1.0/dist/htm.module.js'
const html = htm.bind(h)

// import { html, render, useState, useEffect } from 'https://unpkg.com/htm@3.1.0/preact/standalone.module.js'

const WaitingPage = function (props) {
    const [title, setTitle] = useState('Waiting')

    return html`<div>${title}</div>`
}

const FinalPage = function (props) {
    const [canBackHome, setCanBackHome] = useState(false)

    useEffect(() => {
        setTimeout(() => setCanBackHome(true), 5000)
    }, [])

    const backHomeButton = canBackHome ? html`<div>
        <button>Click Me!</button>
    </div>` : null

    return html`<div>
        <h1>Hello</h1>
        ${backHomeButton}
    </div>`
}

const App = function (props) {
    const [isFinal, setIsFinal] = useState(false)
    const waitingBlock = !isFinal ? html`<${WaitingPage} />` : null
    const finalBlock = isFinal ? html`<${FinalPage} />` : null
    return html`<div>
        <button onClick=${() => setIsFinal(true)}>Finish</button>
        ${waitingBlock}
        ${finalBlock}
    </div>`
}
render(html`<${App} />`, document.body)
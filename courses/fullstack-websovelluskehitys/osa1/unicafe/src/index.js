import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, handleClick }) => (
    <button type="button" onClick={handleClick}>
        {text}
    </button>
)

const Statistic = ({ text, value }) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
)

const Statistics = ({ textHyva, valueHyva, textNeutraali, valueNeutraali,
                        textHuono, valueHuono, textKeskiarvo, valueKeskiarvo,
                        textPositiivisia, valuePositiivisia }) => (
    <div>
        {
            (valueHyva + valueNeutraali + valueHuono) === 0 
                ?   <p>ei yhtään palautetta annettu</p>
                :   <div>
                        <table>
                            <tbody>
                                <Statistic
                                    text={textHyva}
                                    value={valueHyva}
                                />
                                <Statistic
                                    text={textNeutraali}
                                    value={valueNeutraali}
                                />
                                <Statistic
                                    text={textHuono}
                                    value={valueHuono}
                                />
                                <Statistic
                                    text={textKeskiarvo}
                                    value={valueKeskiarvo}
                                />
                                <Statistic
                                    text={textPositiivisia}
                                    value={valuePositiivisia}
                                />
                            </tbody>
                        </table>
                    </div>
        }
    </div>
)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    onClickPalaute = (palauteType, stateUpdate) => {
        let update = {}
        update[palauteType] = stateUpdate + 1
        return () => {
            this.setState(update)
        }
    }

    render() {
        return (
            <div>
                <h2>anna palautetta</h2>
                <Button
                    handleClick={this.onClickPalaute('hyva', this.state.hyva)}
                    text="hyvä"
                />
                <Button
                    handleClick={this.onClickPalaute('neutraali', this.state.neutraali)}
                    text="neutraali"
                />
                <Button
                    handleClick={this.onClickPalaute('huono', this.state.huono)}
                    text="huono"
                />
                <h2>statistiikka</h2>
                <Statistics
                    textHyva="hyvä"
                    valueHyva={this.state.hyva}
                    textNeutraali="neutraali"
                    valueNeutraali={this.state.neutraali}
                    textHuono="huono"
                    valueHuono={this.state.huono}
                    textKeskiarvo="keskiarvo"
                    valueKeskiarvo={(this.state.hyva + this.state.huono + this.state.neutraali) === 0 ? 
                        0 : (this.state.hyva - this.state.huono) / (this.state.hyva + this.state.huono + this.state.neutraali)}
                    textPositiivisia="positiivisia"
                    valuePositiivisia={(this.state.hyva + this.state.huono + this.state.neutraali) === 0 ?
                        0 : this.state.hyva / (this.state.hyva + this.state.huono + this.state.neutraali)}
                />

            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
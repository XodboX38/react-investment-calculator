import investmentImage from '../assets/investment-calculator-logo.png'
export function Header() {
    return (
        <div id="header">
            <h1>React Investment Calculator</h1>
            <img src={investmentImage}/>
        </div>
    )
}
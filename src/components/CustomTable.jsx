import {  formatter } from '../util/investment.js'
export function CustomTable({ newTableData }) {
    const  initialInvestment = newTableData[0].valueEndOfYear - newTableData[0].annualInvestment * newTableData[0].year;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Intrest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            < tbody >
                {newTableData.map((currentData) => {
                    const totalIntrest = currentData.valueEndOfYear - currentData.annualInvestment * currentData.year -initialInvestment
                    const totalAmountInvested = currentData.valueEndOfYear - totalIntrest
                    return (
                        <tr key={currentData.year}>
                            <td >{currentData.year}</td>
                            <td >{formatter.format(currentData.valueEndOfYear)}</td>
                            <td >{formatter.format(currentData.interest)}</td>
                            <td >{formatter.format(totalIntrest)}</td>
                            <td >{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )

}
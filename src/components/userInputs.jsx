
function hanndleInvestment(setInvestmentData, identifier, value) {

    setInvestmentData((prevInvestmentData) => {
        return {
            ...prevInvestmentData,
            [identifier]: +value
        }
    });

}


export function UserInputs({ investmentData, setInvestmentData }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type='number'
                        value={investmentData.initialInvestment}
                        required
                        onChange={(event) => hanndleInvestment(setInvestmentData, 'initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type='number'
                        required
                        value={investmentData.annualInvestment}
                        onChange={(event) => hanndleInvestment(setInvestmentData, 'annualInvestment', event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected return</label>
                    <input
                        type='number'
                        required
                        value={investmentData.expectedReturn}
                        onChange={(event) => hanndleInvestment(setInvestmentData, 'expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type='number'
                        required
                        value={investmentData.duration}
                        onChange={(event) => hanndleInvestment(setInvestmentData, 'duration', event.target.value)} />
                </p>
            </div>
        </section>
    )
}
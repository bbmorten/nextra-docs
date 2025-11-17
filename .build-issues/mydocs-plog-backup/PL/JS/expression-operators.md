#  Expressions and Operators

##  Spread Operator

### Operator usage

```javascript
const args = [0, 1, 2];
const newargs = {...args, 0:3, 1:4}
```

```shell
> newargs
{ '0': 3, '1': 4, '2': 2 }
```

```javascript
// Define an object
const initialInvestment = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
};

// Use the spread operator to create a new object with additional properties
const updatedInvestment = {
    ...initialInvestment,
    annualInvestment: 1500, // Overwrite the annualInvestment property
    riskLevel: 'medium' // Add a new property
};

// Log the updated object
console.log(updatedInvestment);
```

### React Example

```javascript
import { useState } from 'react';
export default function UserInput() {

    const [userInput,setUserInput] = useState( {
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        })
    }




    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required 
                    value={userInput.initialInvestment}
                    onChange={(event) => handleChange('initialInvestment', event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required
                    value={userInput.annualInvestment}
                    onChange={(event) => handleChange('annualInvestment', event.target.value)}/>
                </p>
                <p>
                    <label>Expected Return</label>
                    <input type="number" required
                    value={userInput.expectedReturn}
                    onChange={(event) => handleChange('expectedReturn', event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required
                    value={userInput.duration}
                    onChange={(event) => handleChange('duration', event.target.value)}/>
                </p>



            </div>

        </section>
    )
}
```

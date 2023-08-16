import React, { useState } from 'react'
import styles from './InvestmentInput.module.css'


const initialUserInput = {
  'current-savings': 1000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  'duration': 10
}

const InvestmentInput = (props) => {


 const [userInput, setUserInput] = useState(initialUserInput)

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput)
  }


  const onResetButtonHandler = () => {
   setUserInput(initialUserInput)
  }


  const onChangeHandler = (input, value ) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  


    return (
        <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input value={userInput['current-savings']} type="number" id="current-savings" onChange={(event) => onChangeHandler('current-savings', event.target.value ) } />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input value={userInput['yearly-contribution']} type="number" id="yearly-contribution" onChange={(event) => onChangeHandler('yearly-contribution', event.target.value ) } />
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input value={userInput['expected-return']}  type="number" id="expected-return" onChange={(event) => onChangeHandler('expected-return', event.target.value ) } />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input value={userInput['duration']}  type="number" id="duration" onChange={(event) => onChangeHandler('duration', event.target.value ) } />
          </p>
        </div>
        <p className="actions">

          {/*Listen for click event on reset button*/}
          <button type="reset" onClick={onResetButtonHandler} className={styles.buttonAlt}>
            Reset
          </button>
         
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    )
}

export default InvestmentInput
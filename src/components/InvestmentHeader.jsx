import React from "react";
import styles from './InvestmentHeader.module.css'
import logo from '../assets/investment-calculator-logo.png';

const InvestmentHeader = () => {
    return (
    <header className={styles.header}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    )
}

export default InvestmentHeader
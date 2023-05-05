import { useState } from 'react';
import styles from './Form.module.css';

const Form = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const result = weight / (height * height);

    const renderMessage = () => {
        if (result <= 18.5) {
            return <h4>Abaixo do peso</h4>
        } else if (result > 18.5 && result <= 24.9) {
            return <h4>Peso normal</h4>
        } else if (result > 24.9 && result <= 29.9) {
            return <h4>Excesso de peso</h4>
        } else if (result > 29.9 && result <= 34.9) {
            return <h4>Obesidade classe I</h4>
        } else if (result > 34.9 && result <= 39.9) {
            return <h4>Obesidade classe II</h4>
        } else if (result >= 40) {
            return <h4>Obesidade classe III</h4>
        }
    }

    return (
        <>
            <div className="container">
                <form className={styles.form}>
                    <div className={styles.field}>
                        <label htmlFor="altura">Altura</label>
                        <input type="number" id='altura' onChange={(e) => setHeight(e.target.value)} />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="peso">Peso</label>
                        <input type="number" id='peso' placeholder='KG' onChange={(e) => setWeight(e.target.value)} />
                    </div>
                </form>

                

                <h1>Resultado: {result.toFixed(2)}</h1>

                {renderMessage()}

            </div>
        </>
    )
}

export default Form;
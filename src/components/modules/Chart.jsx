import styles from './Chart.module.css'
import { convertData } from '../../helpers/convertData';
import { useState } from 'react';
export function Chart({chart,setChart}) {
    const [type,setType] = useState("prices");
    console.log(convertData(chart, type));

    return (
        <>
            <div className={styles.container}>
                <span className={styles.cross} onClick={() => setChart(null)}>X</span>
                <div className={styles.chart}></div>
                </div>
        </>
    )
}

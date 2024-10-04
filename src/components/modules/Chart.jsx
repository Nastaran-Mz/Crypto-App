import styles from './Chart.module.css'

export function Chart({chart,setChart}) {
    

    return (
        <>
            <div className={styles.container}>
                <span className={styles.cross} onClick={() => setChart(null)}>X</span>
                <div className={styles.chart}></div>
                </div>
        </>
    )
}

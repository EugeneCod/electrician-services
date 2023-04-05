import styles from './Services.module.scss';

const Services = () => {
  return (
    <section className={styles.root}>
      <h1 className={styles.title}>Перечень цен и услуг</h1>
      <table className={styles.table}>
        <tr className={styles.table}>
          <th>Наименования услуг</th>
          <th>Ед. изм.</th>
          <th>Стоимость (руб.)</th>
        </tr>
        <tr>
          <th>Установка и подлючение осветительных приборов</th>
        </tr>
        <tr>
          <td>Монтаж/подключение люстры с креплением к потолку</td>
          <td>шт.</td>
          <td>500-1000</td>
        </tr>
        <tr>
          <td>Монтаж/подключение потолочных светильников</td>
          <td>шт.</td>
          <td>325</td>
        </tr>
        <tr>
          <td>Подключение патрона Е14, Е27</td>
          <td>шт.</td>
          <td>70</td>
        </tr>
        <tr>
          <td>Монтаж/подключение светодиодной ленты</td>
          <td>м.п.</td>
          <td>250</td>
        </tr>
      </table>
    </section>
  )
}

export default Services
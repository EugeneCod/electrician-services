import styles from './Services.module.scss';
import {
  inflationRate, 
  lightingDevices, 
  socketsSwitches, 
  modularDevices, 
  variousServices, 
  pipesCableChannels, 
  trays,
  furrowMaking,
  drillingWalls,
  landingNests,
  junctionBox,
  cable,
  productionNiches,
  dismantling,
  retroWiring,
  bushing,
  earthworks,
  note
} from '../../data/services'

const Services = () => {

  function getCurrentPrice (price: number): number {
    return Math.ceil(Math.floor(price * inflationRate) / 5 ) * 5;
  }

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
        {lightingDevices.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{getCurrentPrice(value.price)}</td>
            </tr>
          )
        })}
        <tr>
          <th>Установка и подключение розеток/выключателей</th>
        </tr>
        {socketsSwitches.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{getCurrentPrice(value.price)}</td>
            </tr>
          )
        })}
        <tr>
          <th>Установка и подключение счетчика, автоматических выключателей, УЗО</th>
        </tr>
        {modularDevices.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{getCurrentPrice(value.price)}</td>
            </tr>
          )
        })}
        <tr>
          <th>Разные электромонтажные работы</th>
        </tr>
        {variousServices.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{getCurrentPrice(value.price)}</td>
            </tr>
          )
        })}
        <tr>
          <th>Монтаж труб, кабель-каналов</th>
        </tr>
        {pipesCableChannels.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{getCurrentPrice(value.price)}</td>
            </tr>
          )
        })}
        <tr>
          <th>Монтаж лотков</th>
        </tr>
        {trays.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{getCurrentPrice(value.price)}</td>
            </tr>
          )
        })}
        <tr>
          <th>Изготовление борозд</th>
        </tr>
        {furrowMaking.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{getCurrentPrice(value.price)}</td>
            </tr>
          )
        })}
        <tr>
          <th>Сквозное сверление стен</th>
        </tr>
        {drillingWalls.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{getCurrentPrice(value.price)}</td>
            </tr>
          )
        })}
        <tr>
          <th>Высверливание гнезд под монтажную, распределительную коробку О68 мм</th>
        </tr>
        {landingNests.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{getCurrentPrice(value.price)}</td>
            </tr>
          )
        })}
        <tr>
          <th>Установка монтажных, распределительных коробок</th>
        </tr>
        {junctionBox.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{getCurrentPrice(value.price)}</td>
            </tr>
          )
        })}
        <tr>
          <th>Монтаж кабеля, провода</th>
        </tr>
        {cable.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{getCurrentPrice(value.price)}</td>
            </tr>
          )
        })}
        <tr>
          <th>Штробление ниши под электрощит, монтаж щитов</th>
        </tr>
        {productionNiches.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{getCurrentPrice(value.price)}</td>
            </tr>
          )
        })}
        <tr>
          <th>Демонтажные работы</th>
        </tr>
        {dismantling.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{getCurrentPrice(value.price)}</td>
            </tr>
          )
        })}
        <tr>
          <th>Монтаж ретро проводки</th>
        </tr>
        {retroWiring.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{getCurrentPrice(value.price)}</td>
            </tr>
          )
        })}
        <tr>
          <th>Монтаж гильз</th>
        </tr>
        {bushing.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{getCurrentPrice(value.price)}</td>
            </tr>
          )
        })}
        <tr>
          <th>Земляные работы</th>
        </tr>
        {earthworks.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{getCurrentPrice(value.price)}</td>
            </tr>
          )
        })}
        <tr>
          <th>Разное</th>
        </tr>
        {note.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{getCurrentPrice(value.price)}</td>
            </tr>
          )
        })}
      </table>
    </section>
  )
}

export default Services
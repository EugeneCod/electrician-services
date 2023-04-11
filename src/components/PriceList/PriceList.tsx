import React from 'react';
import styles from './PriceList.module.scss';
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
  note,
} from '../../data/services';
import priceList from '../../assets/documents/price-list.xlsx';
import excelIcon from '../../assets/images/icon_excel.svg';

const PriceList: React.FC = () => {
  function getCurrentPrice(price: number): number {
    return Math.ceil(Math.floor(price * inflationRate) / 5) * 5;
  }

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Перечень цен и услуг</h2>
          <a className={styles.priceListLink} href={priceList} download>
            <img className={styles.priceListIcon} src={excelIcon} alt="Exel" />
            <p className={styles.priceListDescription}>Скачать прайс-лист</p>
          </a>
        </div>
        <table className={styles.table}>
          <tr className={styles.tableRow}>
            <th className={styles.tableHeader}>Наименования услуг</th>
            <th className={styles.tableHeader}>Ед. изм.</th>
            <th className={styles.tableHeader}>Стоимость (руб.)</th>
          </tr>
          <tr className={styles.tableRow}>
            <th colSpan={3} className={styles.tableHeaderSection}>Установка и подлючение осветительных приборов</th>
          </tr>
          {lightingDevices.map((value) => {
            return (
              <tr className={styles.tableRow}>
                <td className={styles.name}>{value.name}</td>
                <td className={styles.unit}>{value.unit}</td>
                <td className={styles.price}>{getCurrentPrice(value.price)}</td>
              </tr>
            );
          })}
          <tr className={styles.tableRow}>
            <th colSpan={3} className={styles.tableHeaderSection}>Установка и подключение розеток/выключателей</th>
          </tr>
          {socketsSwitches.map((value) => {
            return (
              <tr className={styles.tableRow}>
                <td className={styles.name}>{value.name}</td>
                <td className={styles.unit}>{value.unit}</td>
                <td className={styles.price}>{getCurrentPrice(value.price)}</td>
              </tr>
            );
          })}
          <tr className={styles.tableRow}>
            <th colSpan={3} className={styles.tableHeaderSection}>Установка и подключение счетчика, автоматических выключателей, УЗО</th>
          </tr>
          {modularDevices.map((value) => {
            return (
              <tr className={styles.tableRow}>
                <td className={styles.name}>{value.name}</td>
                <td className={styles.unit}>{value.unit}</td>
                <td className={styles.price}>{getCurrentPrice(value.price)}</td>
              </tr>
            );
          })}
          <tr className={styles.tableRow}>
            <th colSpan={3} className={styles.tableHeaderSection}>Разные электромонтажные работы</th>
          </tr>
          {variousServices.map((value) => {
            return (
              <tr className={styles.tableRow}>
                <td className={styles.name}>{value.name}</td>
                <td className={styles.unit}>{value.unit}</td>
                <td className={styles.price}>{getCurrentPrice(value.price)}</td>
              </tr>
            );
          })}
          <tr className={styles.tableRow}>
            <th colSpan={3} className={styles.tableHeaderSection}>Монтаж труб, кабель-каналов</th>
          </tr>
          {pipesCableChannels.map((value) => {
            return (
              <tr className={styles.tableRow}>
                <td className={styles.name}>{value.name}</td>
                <td className={styles.unit}>{value.unit}</td>
                <td className={styles.price}>{getCurrentPrice(value.price)}</td>
              </tr>
            );
          })}
          <tr className={styles.tableRow}>
            <th colSpan={3} className={styles.tableHeaderSection}>Монтаж лотков</th>
          </tr>
          {trays.map((value) => {
            return (
              <tr className={styles.tableRow}>
                <td className={styles.name}>{value.name}</td>
                <td className={styles.unit}>{value.unit}</td>
                <td className={styles.price}>{getCurrentPrice(value.price)}</td>
              </tr>
            );
          })}
          <tr className={styles.tableRow}>
            <th colSpan={3} className={styles.tableHeaderSection}>Изготовление борозд</th>
          </tr>
          {furrowMaking.map((value) => {
            return (
              <tr className={styles.tableRow}>
                <td className={styles.name}>{value.name}</td>
                <td className={styles.unit}>{value.unit}</td>
                <td className={styles.price}>{getCurrentPrice(value.price)}</td>
              </tr>
            );
          })}
          <tr className={styles.tableRow}>
            <th colSpan={3} className={styles.tableHeaderSection}>Сквозное сверление стен</th>
          </tr>
          {drillingWalls.map((value) => {
            return (
              <tr className={styles.tableRow}>
                <td className={styles.name}>{value.name}</td>
                <td className={styles.unit}>{value.unit}</td>
                <td className={styles.price}>{getCurrentPrice(value.price)}</td>
              </tr>
            );
          })}
          <tr className={styles.tableRow}>
            <th colSpan={3} className={styles.tableHeaderSection}>Высверливание гнезд под монтажную, распределительную коробку О68 мм</th>
          </tr>
          {landingNests.map((value) => {
            return (
              <tr className={styles.tableRow}>
                <td className={styles.name}>{value.name}</td>
                <td className={styles.unit}>{value.unit}</td>
                <td className={styles.price}>{getCurrentPrice(value.price)}</td>
              </tr>
            );
          })}
          <tr className={styles.tableRow}>
            <th colSpan={3} className={styles.tableHeaderSection}>Установка монтажных, распределительных коробок</th>
          </tr>
          {junctionBox.map((value) => {
            return (
              <tr className={styles.tableRow}>
                <td className={styles.name}>{value.name}</td>
                <td className={styles.unit}>{value.unit}</td>
                <td className={styles.price}>{getCurrentPrice(value.price)}</td>
              </tr>
            );
          })}
          <tr className={styles.tableRow}>
            <th colSpan={3} className={styles.tableHeaderSection}>Монтаж кабеля, провода</th>
          </tr>
          {cable.map((value) => {
            return (
              <tr className={styles.tableRow}>
                <td className={styles.name}>{value.name}</td>
                <td className={styles.unit}>{value.unit}</td>
                <td className={styles.price}>{getCurrentPrice(value.price)}</td>
              </tr>
            );
          })}
          <tr className={styles.tableRow}>
            <th colSpan={3} className={styles.tableHeaderSection}>Штробление ниши под электрощит, монтаж щитов</th>
          </tr>
          {productionNiches.map((value) => {
            return (
              <tr className={styles.tableRow}>
                <td className={styles.name}>{value.name}</td>
                <td className={styles.unit}>{value.unit}</td>
                <td className={styles.price}>{getCurrentPrice(value.price)}</td>
              </tr>
            );
          })}
          <tr className={styles.tableRow}>
            <th colSpan={3} className={styles.tableHeaderSection}>Демонтажные работы</th>
          </tr>
          {dismantling.map((value) => {
            return (
              <tr className={styles.tableRow}>
                <td className={styles.name}>{value.name}</td>
                <td className={styles.unit}>{value.unit}</td>
                <td className={styles.price}>{getCurrentPrice(value.price)}</td>
              </tr>
            );
          })}
          <tr className={styles.tableRow}>
            <th colSpan={3} className={styles.tableHeaderSection}>Монтаж ретро проводки</th>
          </tr>
          {retroWiring.map((value) => {
            return (
              <tr className={styles.tableRow}>
                <td className={styles.name}>{value.name}</td>
                <td className={styles.unit}>{value.unit}</td>
                <td className={styles.price}>{getCurrentPrice(value.price)}</td>
              </tr>
            );
          })}
          <tr className={styles.tableRow}>
            <th colSpan={3} className={styles.tableHeaderSection}>Монтаж гильз</th>
          </tr>
          {bushing.map((value) => {
            return (
              <tr className={styles.tableRow}>
                <td className={styles.name}>{value.name}</td>
                <td className={styles.unit}>{value.unit}</td>
                <td className={styles.price}>{getCurrentPrice(value.price)}</td>
              </tr>
            );
          })}
          <tr className={styles.tableRow}>
            <th colSpan={3} className={styles.tableHeaderSection}>Земляные работы</th>
          </tr>
          {earthworks.map((value) => {
            return (
              <tr className={styles.tableRow}>
                <td className={styles.name}>{value.name}</td>
                <td className={styles.unit}>{value.unit}</td>
                <td className={styles.price}>{getCurrentPrice(value.price)}</td>
              </tr>
            );
          })}
          <tr className={styles.tableRow}>
            <th colSpan={3} className={styles.tableHeaderSection}>Разное</th>
          </tr>
          {note.map((value) => {
            return (
              <tr className={styles.tableRow}>
                <td className={styles.name}>{value.name}</td>
                <td className={styles.unit}>{value.unit}</td>
                <td className={styles.price}>{getCurrentPrice(value.price)}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </section>
  );
};

export default PriceList;

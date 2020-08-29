import React from 'react';
import styles from './AboutData.module.css';

const Presentation = () => {
    return (
      <div id="about" className={styles.app__about__data}>
        <h3>
          ISFKA Y-AGI USSAND SƔUR{" "}
          <a className={styles.about__link} href="https://www.disease.sh">
            Open Disease Data
          </a>
        </h3>
        <h4>UṬṬUNEN-AGI TTBEDDILEN DIMA </h4>
        <p>
          Ayen idittbanen d uṭṭenen-agi yezmer yenqqes imi mazzal ayen adibanen.
          Isfka ttassend sɣur:{" "}
          <a
            className={styles.about__link}
            href="https://github.com/CSSEGISandData/COVID-19"
          >
            TASDAWIT N JOHNS HOPKINS
          </a>
          ,{" "}
          <a
            className={styles.about__link}
            href="https://github.com/nytimes/covid-19-data"
          >
            AƔMIS N NEWS YORK TIMES
          </a>
          ,{" "}
          <a
            className={styles.about__link}
            href="https://www.worldometers.info/coronavirus/"
          >
            WORLDOMETERS
          </a>
          , IKKED{" "}
          <a
            className={styles.about__link}
            href="https://github.com/ActiveConclusion/COVID19_mobility"
          >
            IṚABULEN N APPLE
          </a>{" "}
          Iwakken attsɛum tamuɣli tahrawant af ayen yetarrun di kuẓ (4) n tiɣmar
          n dunnit.
        </p>
        <h4>MGARADENT TLIWA ANSI IDUSANT ISFKA Y-AGI?</h4>
        <p>
          Yell amḍiq ansi id-yezdem uṭṭenen yerna ttcagiɛend di lewqat
          yemgaraden. Daymi idittban umgarad seg tiɣmert ar tayeḍ.
        </p>
        <h1>AMAWAL</h1>
        <p>TIGGTIN: K = 1000, M = 1000000</p>
        <ul>
          <li>
            AMḌFAR AGREƔLAN W ANFAFAD AMAYNUT N CURUNA 19 = TRAQUEUR
            INTERNATIONAL DU NOUVEL CORONAVIRUS 19
          </li>
          <li>TAGERTILT N DUNNIT = CARTE GEOGRAPHIQUE DU MONDE</li>
          <li>TIGGTIN = UNITES</li>
          <li>IRABULLEN = RAPORTS</li>
          <li>ISEFKA = DONNEES</li>
          <li>ANFAFAD = VIRUS</li>
          <li>UṬṬUNEN = NOMBRES</li>
          <li>TIMẒṚIT = TABLEAU</li>
          <li>ARNU ẒER = SAVOIR PLUS</li>
        </ul>
      </div>
    );
}

export default Presentation;

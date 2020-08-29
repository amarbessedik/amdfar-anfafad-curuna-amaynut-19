import React from 'react';
import styles from './AboutData.module.css';

const Presentation = () => {
    return (
      <div id="about" className={styles.app__about__data}>
        <h3>
          ISFKAYAGI ZEDMAƔTEN-ID DI{" "}
          <a className={styles.about__link} href="https://www.disease.sh">
            Open Disease Data
          </a>{" "}
          (UṬṬUNEN-NSEN TTBEDDILEN DIMA)
        </h3>
        <p>
          Ayen idittbanen deg uṭṭenen-agi yezmer yenqqes imi mazzal ayen
          adibanen aka ar daqqal, w anectagi atas n tikkal di 24 n tisaɛtin. Ma
          d isfka ttassend srid iyimanen-nsen s ttawil u aẓeḍḍa n internet,
          mebla ma yegred u amdan imanis aken aten isekcem neɣ aten ibeddel s
          ufus deg aseɣẓan-agi, wa anectagi yeḍrud yal ma yelli fkanten-id tmura
          ar tisqamuyin garasent:{" "}
          <ol>
            <li>
              <a
                className={styles.about__link}
                href="https://github.com/CSSEGISandData/COVID-19"
              >
                TASDAWIT N JOHNS HOPKINS
              </a>
            </li>
            <li>
              <a
                className={styles.about__link}
                href="https://github.com/nytimes/covid-19-data"
              >
                AƔMIS N NEW YORK TIMES
              </a>
            </li>
            <li>
              <a
                className={styles.about__link}
                href="https://www.worldometers.info/coronavirus/"
              >
                WORLDOMETERS
              </a>
            </li>
            <li>
              <a
                className={styles.about__link}
                href="https://github.com/ActiveConclusion/COVID19_mobility"
              >
                IṚABULEN N APPLE.
              </a>
            </li>
          </ol>
          Sarameɣ anectagi aken yejj attsɛum tamuɣli s tehri af ayen yetarrun di
          kuẓ (4) n tiɣmar n umaḍal.
        </p>
        <h4 id="amawal">
          MA YELLA MGARADEN W UṬṬUNEN SI TESQAMUTT AR TAYEḌ, D TTILIWA ANSI
          IDTTAWINT ISFKA IGEMGARADEN
        </h4>
        <p>
          Yell amḍiq ansi id-yezdem uṭṭenen yerna ttcagiɛend di lewqat
          yemgaraden. Daymi idittban umgarad seg tiɣmert ar tayeḍ.
        </p>
        <br />
        <br />
        <h3>AMAWAL: </h3>
        <span>
          Tamaziɣt tezmmer ula d nettat atteḍfer tamusni tatrart (Aselkiman) am
          nettat am timslayin niḍen.
        </span>
        <p>TIGGTIN: K = 1000, M = 1000000</p>
        <ul>
          <li>
            AMḌFAR AGREƔLAN W ANFAFAD AMAYNUT N CURUNA 19 = TRAQUEUR
            INTERNATIONAL DU NOUVEL CORONAVIRUS 19
          </li>
          <li>TTAGERTILT UMAḌAL = CARTE GEOGRAPHIQUE DU MONDE</li>
          <li>TIGGTIN = UNITES</li>
          <li>IRABULLEN = RAPORTS</li>
          <li>ISEFKA = DONNEES</li>
          <li>ANFAFAD = VIRUS</li>
          <li>UṬṬUNEN = NOMBRES</li>
          <li>TIMẒṚIT = TABLEAU</li>
          <li>ARNU ẒER = SAVOIR PLUS</li>
          <li>AKIT = TOTAL</li>
          <li>URMIDEN = ACTIFS</li>
          <li>ASEƔẒAN = LOGICIEL</li>
          <li>UZDAY: LIEN</li>
        </ul>
      </div>
    );
}

export default Presentation;

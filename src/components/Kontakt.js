
//Google Maps Api = AIzaSyBCOKrBYGCeqYd63lJV34t5QFtH8DvalG4
import React from "react";
//import "./App.css";



function Kontakt() {
  return (
    <div className="Kontakt">
        <div className="KontaktWrap">
          <div className="KontaktTextWrap">
            <h2 className="Blue">Kontakty</h2>
            <div className="KontaktCell">
              <p className="TitulKontakt">Technická a výkonná ředitelka soutěže:</p>
              <p className="JmenoKontakt">Mgr. Tereza Králová Ph.D.</p>
              <p className="igOsoba">@tekihammer</p>
              <p className="kontaktOsoba">teki@email.cz</p>
            </div>
            <div className="KontaktCell">
              <p className="TitulKontakt">Marketingový ředitel soutěže:</p>
              <p className="JmenoKontakt">Mgr. Martin Kutý</p>
              <p className="igOsoba">@coach_kuty_the_rapist</p>
              <p className="kontaktOsoba">kuty.martin@seznam.cz</p>
            </div>
            <div className="KontaktCell">
              <p className="TitulKontakt">Content & design manager:</p>
              <p className="JmenoKontakt">Bc. Tomáš Malcher</p>
              <p className="igOsoba">@tommalcher</p>
              <p className="kontaktOsoba">malchertom@gmail.com</p>
            </div>
            <div className="KontaktCell">
              <p className="TitulKontakt">Obecný kontakt:</p>
              <p className="kontaktOsoba">czechweightliftingopen@gmail.com</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Kontakt;
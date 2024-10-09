//import { useState } from "react";
import { useEffect, useState } from "react";

import Prav from './Prav.js';
import HK from './HK.js';


function Pravidla() {
  const [PravidlaSwitch, setPravidlaSwitch] = useState('Pravidla')
  const [pravidlaPage, setpravidlaPage] = useState('Vse')

  useEffect(() => {
    if (pravidlaPage==="Pravidla"){
    }else if(pravidlaPage==="HK"){
    }
},[pravidlaPage])


  return (
    <div className="Pravidla">
      <div className="PravidlaWrap">
      <div className="PravSelection">
        <p className={`PravSelect ${PravidlaSwitch === 'Pravidla'? 'active' : ''}`} onClick={()=>setPravidlaSwitch("Pravidla")}>Pravidla a soutěžní řád</p>
        <p className={`PravSelect ${PravidlaSwitch === 'HK'? 'active' : ''}`} onClick={()=>setPravidlaSwitch("HK")}>Soutěžní kategorie</p>
      </div>
      <div className="PravRendered">
                {PravidlaSwitch==="Pravidla" && <Prav />}
                {PravidlaSwitch==="HK" && <HK />}
            </div>
      
      </div>
    </div>
  );
}

export default Pravidla;
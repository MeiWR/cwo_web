

function HK() {
  return (
    <div className="HK">
      <div className="HK_BigWrap">
      <div className="HK_wrap">

        <h3 className="Blue">Jednotlivci - ženy:</h3>
        <p>Kategorie jednotlivci ženy je určena pro ženy a dívky každého věku, avšak s minimálním možným věkem závodnice - 15 let dovršených v kalendářním roce konání daného ročníku soutěže. 

        Tato kategorie je dle pravidel IWF a tedy i ČSV rozdělena do hmotnostních skupin závodnic, odpovídající hmotnosti závodnice v den soutěže, a to konkrétně:</p>

        <ol class="weight_list">
          <li>1. - 45 kg</li>
          <li>2. - 49 kg</li>
          <li>3. - 55 kg</li>
          <li>4. - 59 kg</li>
          <li>5. - 64 kg</li>
          <li>6. - 71 kg</li>
          <li>7. - 76 kg</li>
          <li>8. - 81 kg</li>
          <li>9. - 87 kg</li>
          <li>10. + 87 kg</li>
        </ol>

        
        <p className="HK_small">
        (pravidla vážení závodnic i závodníků najdete v sekci “Pravidla a soutěžní řád ČSV”)
        </p>

        <p>
        Minimální počet závodnic pro otevření dané hmotností skupiny je vždy 5. Při nižším počtu než 5 závodnic registrovaných do dané hmotnostní skupiny si pořadatel vyhrazuje právo sloučit hmotnostní skupiny dle předem stanovených počtů v nejbližších hmotnostních skupinách. Typicky pak směrem vzhůru v hierarchii hmotnostních skupin.

        Výsledné pořadí každé závodnice v rámci dané hmotnostní skupiny je určeno seřazením nejvyšších dosažených hodnot platného dvojboje v soutěži.
        </p>

        </div>


        <div className="HK_wrap">
        <h3 className="Blue">Jednotlivci - muži:</h3>
        <p>
        Kategorie jednotlivci muži je určena pro muže a chlapce každého věku, avšak s minimálním možným věkem závodníka  - 15 let dovršených v kalendářním roce konání daného ročníku soutěže. 

        Tato kategorie je dle pravidel IWF a tedy i ČSV rozdělena do hmotnostních skupin závodníků ,odpovídající hmotnosti závodníka v den soutěže, a to konkrétně:</p>

        <ol class="weight_list">
          <li>1. - 55 kg</li>
          <li>2. - 61 kg</li>
          <li>3. - 67 kg</li>
          <li>4. - 73 kg</li>
          <li>5. - 81 kg</li>
          <li>6. - 89 kg</li>
          <li>7. - 96 kg</li>
          <li>8. - 102 kg</li>
          <li>9. - 109 kg</li>
          <li>10. + 109 kg</li>
        </ol>

        <p className="HK_small">
        (pravidla vážení závodnic i závodníků najdete v sekci “Pravidla a soutěžní řád ČSV”)
        </p>

        <p>
        Minimální počet závodníků pro otevření dané hmotností skupiny je vždy 5. Při nižším počtu než 5 závodníků registrovaných do dané hmotnostní skupiny si pořadatel vyhrazuje právo sloučit hmotnostní skupiny dle předem stanovených počtů v nejbližších hmotnostních skupinách. Typicky pak směrem vzhůru v hierarchii hmotnostních skupin.

        Výsledné pořadí každého závodníka v rámci dané hmotnostní skupiny je určeno seřazením nejvyšších dosažených hodnot platného dvojboje v soutěži.
        </p>


        </div>
        <div className="HK_wrap">
        <h3 className="Blue">Team Open:</h3>
        <p>
        Kategorie Team Open je určena pro čtyřčlenné týmy ve variabilním složení:
        </p>


        <ol class="weight_list">
          <li>4 ženy</li>
          <li>3 ženy + 1 muž</li>
          <li>2 ženy + 2 muži</li>
          <li>1 žena + 3 muži</li>
          <li>4 muži</li>

        </ol>
       
        <p>
        Tyto kombinace mohou být napříč všemi hmotnostními i věkovými skupinami.

        Výsledné pořadí všech týmů v rámci kategorie Team Open je určeno seřazením hodnot Sinclairových bodů týmů. Sinclairovy body celého týmu jsou výsledkem součtů všech SB každého člena daného týmu.
        </p>

        </div>
        <div className="HK_wrap">
        <h3 className="Blue">Team Open - DeadWeight:</h3>
        <p>
        Kategorie Team Open - DeadWeight je určena pro jakýkoliv tým z kategorie Team Open. jehož členové se rozhodnou změřit síly navíc také v soutěži mrtvého tahu a nejen v klasickém vzpírání.
        </p>
        <p>
        Každý tým této kategorie má možnost doplnit svou čtveřici o jednoho dalšího hostujícího člena, závodícího pouze v soutěži mrtvého tahu. 
        
        V případě, že se daný tým rozhodne soutěžit v kategorii Team Open - DeadWeight bez možnosti doplnit tým o hostujícího siláka, může libovolně zvolit jednoho závodníka/závodnici ze svého týmu, který/á se soutěže v mrtvém tahu zúčastní za svůj tým. 
        Tyto kombinace mohou být napříč všemi hmotnostními i věkovými skupinami.
        </p>

        <p>
        Výsledné pořadí všech týmů v soutěži je určeno seřazením součtu bodů, který tvoří aritmetický průměr Sinclairových bodů čtyř vzpěračů a Wilksových bodů jednoho atleta za deadlift.
        </p>
        </div>
        </div>
    </div>
  );
}

export default HK;
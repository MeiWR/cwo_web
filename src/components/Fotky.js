import list from './Fotky.json'
import Galerie from "./Galerie";

import { useEffect, useState } from "react";


function Fotky() {
    const [portfolioPage] = useState('Vse')
    const [ImageList, setImageList] = useState(list)

    useEffect(() => {
            setImageList({"CWO": list["CWO"]})
    },[portfolioPage])
  return (
    <div className="Fotky">
        <div className='FotkyHeaderWrap'>
            <h2 className='Blue'>Galerie CWO 2023</h2>
        </div>
        <Galerie listObr={ImageList} />
    </div>
  );
}

export default Fotky;
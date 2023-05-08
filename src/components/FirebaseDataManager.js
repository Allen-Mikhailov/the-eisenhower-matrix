import { getJsonData, storeData } from '../modules/firebasestorage.js';
import { useEffect, useState } from 'react';
import { store } from "../modules/store.js"

function FirebaseDataChild({ datakey, name })
{
    const [ data, setData ] = store.useState(name)
    const [ gotData, setGotData ] = useState(false)

    useEffect(() => {
        getJsonData(datakey[0], datakey[1]).then((d) => {
          setGotData(true)
          if (d)
            setData(d)
        })
      }, [])

      useEffect(() => {
        if (!gotData) {return}
        storeData(datakey[0], datakey[1], data).then(() => { })
      }, [data])

    return <><div></div></>
}

function FirebaseDataManager({ dataKeys })
{
  return <>
    {Object.keys(dataKeys).map(name => {
      return <FirebaseDataChild datakey={dataKeys[name]} name={name} key={name}/>
    })}
  </>
}

export default FirebaseDataManager
import React from 'react'

const Kurssi = (props) => {
    const otsikko = props.kurssi.nimi
    const osat = props.kurssi.osat
    return(
      <div>
        <Otsikko otsikko={otsikko}/>
        <Sisalto osat={osat} />
        <Yhteensa osat={osat} />
      </div>
    )
}
const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>
const Otsikko = (props) => <h1>{props.otsikko}</h1>
const Sisalto = (props) => {
  const osat = props.osat
  return(
    <div>
      {osat.map(function(osa) {
        return <Osa key={osa.id} osa={osa.nimi} tehtavia={osa.tehtavia} />
      })}
    </div>
  )
}
const Yhteensa = (props) => {
  const osat = props.osat
  
  return(
    <p>yhteensä {osat.reduce(function(sum, osa) {
      return sum + osa.tehtavia
    }, 0)} tehtävää</p>
  )
}

export default Kurssi
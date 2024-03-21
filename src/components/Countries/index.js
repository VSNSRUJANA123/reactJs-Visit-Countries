const Countries = props => {
  const {items, visitBtn} = props
  const visitBtnId = () => {
    visitBtn(items.id)
  }
  return (
    <li className="visit-list">
      <p>{items.name}</p>
      {items.isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button onClick={visitBtnId}>Visit</button>
      )}
    </li>
  )
}

export default Countries

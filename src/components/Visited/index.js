const Visited = props => {
  const {items, removeBtnId} = props
  const removeBtn = () => {
    removeBtnId(items.id)
  }

  return (
    <li>
      <img src={items.imageUrl} alt="thumbnail" />
      <div className="visitedBtn-container">
        <p>{items.name}</p>
        <button onClick={removeBtn} className="remove">
          Remove
        </button>
      </div>
    </li>
  )
}
export default Visited

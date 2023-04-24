import './index.css'

const HistoryItems = props => {
  const {userDetails, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="user-card-container">
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt={title} />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button onClick={onDelete} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItems

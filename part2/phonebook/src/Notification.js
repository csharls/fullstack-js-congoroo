const Notification = ({ message, type }) => {
  if (message === '') {
    return null
  }

  return (
    <div className="box">
      <div className={`alert ${type}`}>
        <div className="alert-body">
        {message}
        </div>
      </div>
    </div>
  )
}

export default Notification





export const MenuItem = ({id, name, description, image}) => {


  return (
    <div className="col-6 mt-3 mb-2">
        <div className="card" id="card-item">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
        </div>
        </div>
    </div>
  )
}

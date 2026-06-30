function Car({ cars }) {
  return (
    <div className="container">
      <div className="row">
        {cars.length === 0 ? (
          <div className="text-center text-muted p-4">No results</div>
        ) : (
          cars.map((car, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card">
                <div className="d-flex justify-content-between p-2">
                  <span>{car.data}</span>
                  <button type="button" className="btn btn-link p-0">
                    Reviews {car.reviews}
                  </button>
                </div>
                <h5 className="card-title mt-4 p-2">
                  {car.carname} ({car.type})
                </h5>
                <img
                  src={car.image}
                  className="card-img-top"
                  alt={`${car.carname} image`}
                />
                <div className="card-body d-flex flex-column gap-3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>Mileage</p>
                      {car.milage}
                    </div>
                    <div>
                      <p>Location</p>
                      {car.location}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>Engine</p>
                      {car.engine}
                    </div>
                    <div>
                      <p>Transmission</p>
                      {car.transmission}
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">{car.price}</h5>
                  <button type="button" className="btn btn-primary">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Car;

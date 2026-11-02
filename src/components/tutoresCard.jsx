const TutorCard = ({ tutor }) => {
    return (
        <div className="card h-100 shadow-sm border-0 text-center p-4  ">
            <img
                src={tutor.picture.large}
                alt="Foto del tutor"
                className="rounded-circle mx-auto mb-3"
                style={{ width: '120px', height: '120px', objectFit: 'cover' }}
            />
            <div className="card-body p-0">
                <h5 className="card-title fw-bold">
                    {tutor.name.first} {tutor.name.last}
                </h5>

                <span className="badge bg-primary bg-opacity-10 text-primary border border-primary-subtle rounded-pill px-3 py-2">
                    Speaking Tutor
                </span>
            </div>
        </div>
    );
};

export default TutorCard;
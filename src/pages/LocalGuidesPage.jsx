import React from "react";

const guides = [
  {
    id: 1,
    name: "Rahul Sharma",
    state: "Himachal Pradesh",
    city: "Shimla",
    experience: 6,
    languages: ["Hindi", "English"],
    rating: 4.7,
    specialties: "Heritage walks, city sightseeing, café trails",
    phone: "+91 98765 43210",
    email: "rahul.sharma.guides@example.com",
  },
  {
    id: 2,
    name: "Pooja Verma",
    state: "Himachal Pradesh",
    city: "Manali",
    experience: 4,
    languages: ["Hindi", "English"],
    rating: 4.5,
    specialties: "Adventure activities, snow treks, local culture tours",
    phone: "+91 99887 66554",
    email: "pooja.verma.guide@example.com",
  },
  {
    id: 3,
    name: "Vikram Thakur",
    state: "Himachal Pradesh",
    city: "Dharamshala",
    experience: 8,
    languages: ["Hindi", "English"],
    rating: 4.9,
    specialties: "Trekking, monastery visits, village homestay experiences",
    phone: "+91 91234 56789",
    email: "vikram.thakur.guide@example.com",
  },
  {
    id: 4,
    name: "Anita Negi",
    state: "Himachal Pradesh",
    city: "Kasol",
    experience: 3,
    languages: ["Hindi", "English"],
    rating: 4.3,
    specialties: "Café hopping, riverside walks, easy hikes",
    phone: "+91 90123 45678",
    email: "anita.negi.guide@example.com",
  },
];

export default function LocalGuidesPage() {
  const stateName = "Himachal Pradesh";

  return (
    <section className="py-5">
      <div className="container">

        <h2 className="mb-3 text-center text-info">
          Local Guides in {stateName}
        </h2>

        <p className="text-info text-center mb-4">
          Trusted local guides to help you explore homestays, hidden spots, and
          authentic experiences in Himachal Pradesh. Contact them directly to
          plan your trip.
        </p>

        <div className="row">
          {guides.map((guide) => (
            <div key={guide.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card bg-dark text-light h-100 shadow-sm">
                <div className="card-body d-flex flex-column">

                  <h5 className="card-title mb-1 text-info">{guide.name}</h5>
                  <p className="mb-1 text-secondary">
                    {guide.city}, {guide.state}
                  </p>

                  <p className="mb-1">
                    <strong>Experience:</strong> {guide.experience}+ years
                  </p>

                  <p className="mb-1">
                    <strong>Languages:</strong> {guide.languages.join(", ")}
                  </p>

                  <p className="mb-1">
                    <strong>Rating:</strong> {guide.rating.toFixed(1)}{" "}
                    <span>{"★".repeat(Math.round(guide.rating))}</span>
                  </p>

                  <p className="mb-2">
                    <strong>Specialties:</strong> {guide.specialties}
                  </p>

                  <div className="mt-auto small">
                    <p className="mb-1">
                      <strong>Phone:</strong> {guide.phone}
                    </p>
                    <p className="mb-0">
                      <strong>Email:</strong> {guide.email}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="alert alert-info mt-3 small">
          <strong>Note:</strong> This is sample data. You can replace it with
          real local guides later.
        </div>
      </div>
    </section>
  );
}

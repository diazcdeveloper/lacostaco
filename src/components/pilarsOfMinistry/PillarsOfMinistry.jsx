import "./pillarsOfMinistry.css";
import "./responsivePillarsOfMinistry.css";

export default function PillarsOfMinistry() {
  return (
    <section className="pillars">
      <h2>Pillars of Ministry</h2>
      <div className="cards">
        <div className="card">
          <h3>Training</h3>
          <p>
            Minister training and encouragement through partnership with local
            congregations and missions.
          </p>
        </div>
        <div className="card">
          <h3>Sports Outreach</h3>
          <p>
            Sports outreach through partnership with FUNDEPCAR sports ministry.
          </p>
        </div>
        <div className="card">
          <h3>Medical Outreach</h3>
          <p>Medical outreach through partnership with FAME.</p>
        </div>
        <div className="card">
          <h3>Feeding Program</h3>
          <p>
            Feeding children through partnership with local missions and IDES.
          </p>
        </div>
        <div className="card">
          <h3>Community Health</h3>
          <p>
            Community Health through partnership with local missions, FAME, IDES
            and Agri Stewards.
          </p>
        </div>
        <div className="card">
          <h3>Scholarship Fund</h3>
          <p>
            Scholarships for deserving young people in secondary, University or
            Post Graduate schools.
          </p>
        </div>
      </div>
    </section>
  );
}

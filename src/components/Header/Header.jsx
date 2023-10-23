import "./header.css";
import "./responsiveHeader.css";

export default function Header() {
  return (
    <section className="header">
      <div className="left_header">
        <img className="bg_responsive" src="bgResponsiveHeader2.png" alt="" />
        <h1>LA COSTA COLOMBIA</h1>
        <h2>FUNDATION</h2>
        <p className="parrafo">
          Suporting, encouraging and training Colombian lead missions on the
          north and west coasts of Colombia
        </p>
      </div>
      <div className="right_header">
        <div className="header_card">
          <h3>10+</h3>
          <p>entidades trabajando</p>
        </div>
        <div className="header_card">
          <h3>8+</h3>
          <p>Ministerios apoyados</p>
        </div>
        <div className="header_card">
          <h3>7+</h3>
          <p>Años trabajando</p>
        </div>
      </div>
    </section>
  );
}

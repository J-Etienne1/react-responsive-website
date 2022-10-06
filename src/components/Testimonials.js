import React from "react";
import Lid from "./images/Lid.jpg";
import tes1 from "./images/tes1.jpg";
import tes2 from "./images/tes2.jpg";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonals" id="testimonals">
      <div className="container">
        <h2>Testimonials</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={Lid} alt="Lidia" />
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p>
              <span>Lydia Deetz</span>
            </p>
            <p>I wanna be dead too.</p>
          </div>
          <div className="card">
            <img src={tes1} alt="Lidia" />
            <p>
              sf ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p>
              <span>Barbara Maitland</span>
            </p>
            <p> Recently Deceased</p>
          </div>
          <div className="card">
            <img src={tes2} alt="Lidia" />
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p>
              <span>Adam Maitland</span>
            </p>
            <p> Recently Deceased</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

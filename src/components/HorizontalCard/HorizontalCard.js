import React from "react";

export default function HorizontalCard() {
  return (
    <div>
      <div className="col-3">
        <div className="grey-border-bottom mb-3"></div>
        <h3 className="black-text card-head-hor">More in this Series</h3>
        <div className="grey-border-bottom mb-3"></div>
      </div>
      <div className="card hori-card ">
        <div className="card-img-hori ">
          <img
            className="responsive-img img-hori"
            src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129803.jpg?w=740"
          />
        </div>
        <div className="card-body flex-column">
          <h4 className=" aqua-text-dark pl-1">
            Porta Parturient Fermentum Euismod
          </h4>
          <p className="pl-1">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui
          </p>
        </div>
      </div>
      <div className="card hori-card ">
        <div className="card-img-hori ">
          <img
            className="responsive-img img-hori"
            src="https://media.istockphoto.com/photos/kitchen-utensil-picture-id476392316?k=20&m=476392316&s=612x612&w=0&h=ZRITFwJHbJ1rzJYepXzLcgV3VjpZ5Kp5kbRR28sWqEo="
          />
        </div>
        <div className="card-body flex-column">
          <h4 className=" aqua-text-dark pl-1">Euismod Fermentum Ornare</h4>
          <p className="pl-1">
            Aenia lacenia enim ipsam voluptatem quia voluptas sit aspernatur aut
            odit aut fugit, sed quia consequuntur magni dolores
          </p>
        </div>
      </div>
    </div>
  );
}

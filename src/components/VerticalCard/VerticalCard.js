import React from "react";

export const products = [
  {
    _id: 11,
    title: "Lorem Crasbspensm",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit aut fugit, sed quia consequuntur magni dolores eos qui",
    productImg:
      "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129803.jpg?w=740",
  },
  {
    _id: 22,
    title: "Bibendum Sit Elit",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit aut fugit, sed quia consequuntur magni dolores eos qui",
    productImg:
      "https://media.istockphoto.com/photos/kitchen-utensil-picture-id476392316?k=20&m=476392316&s=612x612&w=0&h=ZRITFwJHbJ1rzJYepXzLcgV3VjpZ5Kp5kbRR28sWqEo=",
  },
  {
    _id: 33,
    title: "Malesuada Consecte",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit aut fugit, sed quia consequuntur magni dolores eos qui",
    productImg:
      "https://media.istockphoto.com/photos/smart-home-picture-id1020969630?k=20&m=1020969630&s=612x612&w=0&h=oaIPzwIkHY7_SYz17ihWgFqm48IO3MhxLvGpBQsStro=",
  },
  {
    _id: 44,
    title: "Inceptos Justo Tristi ",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit aut fugit, sed quia consequuntur magni dolores eos qui",
    productImg:
      "https://img.freepik.com/free-photo/modern-dining-room-interior-design-with-white-wall_41470-3331.jpg?t=st=1647774781~exp=1647775381~hmac=c7975bf97f83c7d56511026676ba11efd366dea0eb0a6fda80581a3df5328afd&w=740",
  },
  {
    _id: 55,
    title: "Etiam Mattis Vuputate ",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit aut fugit, sed quia consequuntur magni dolores eos qui",
    productImg:
      "https://img.freepik.com/free-psd/interior-room-with-shelves-decoration_176382-526.jpg?t=st=1647775070~exp=1647775670~hmac=48518de4df8dcb094ce973d62214999c3a3e5aa746623c0f070bfd812f81e85a&w=740",
  },
];

export default function VerticalCard() {
  return (
    <div className="content-container">
      <div className="col-3-eq">
        <div className="grey-border-bottom mb-3"></div>
        <h3 className="black-text card-head-hor">Related Articles</h3>
        <div className="grey-border-bottom mb-3"></div>
      </div>
      <div className="d-flex flex-wrap vert-card-container">
        {products.map((product) => {
          return (
            <div class="card flex-column card-vert grey-border">
              <img
                src={product.productImg}
                class="card-img-vert"
                img="product image"
              />
              <div class="card-body">
                <h4 className=" aqua-text-dark pl-1">{product.title}</h4>
                <p className="pl-1  pb-2">{product.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

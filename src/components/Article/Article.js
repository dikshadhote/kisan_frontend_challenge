import React from "react";

export default function Article() {
  return (
    <article className="mt-2">
      <h3 className="black-text">Justo Vultputate Tortor Sem</h3>
      <header className="fs-3 mt-1 mr-1 black-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </header>
      <p className="mt-1 mr-1 black-text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>
      <p className="mt-2 mr-1 mb-3 black-text">
        Cras justo odio vero eos et accusamus et iusto odio dignissimos ducimus
        qui blanditiis praesentium voluptatum deleniti atque corrupti quos
        dolores et quas molestias excepturi sint occaecati cupiditate non
        provident, similique sunt in culpa
        <figure class="quote-container pl-2 pt-2 pb-2">
          <blockquote className="italic fs-3 grey-text">
            Purus sociis rerum hic tenetur a sapiente delectus, ut aut
            reiciendis voluptatibus maiores qui officia deserunt mollitia animi,
            id est.
          </blockquote>
          <figcaption className="d-flex flex-justify-end">
            <p>- Jane Doe</p>
          </figcaption>
        </figure>
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
        impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
        assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et
        aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
        voluptates repudiandae sint et molestiae non recusandae. Itaque earum
        rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
        maiores alias consequatur aut perferendis doloribus asperiores repellat.
      </p>
    </article>
  );
}

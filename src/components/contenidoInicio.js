import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

const CotenidoInicio = () => {

    const informacion = useStaticQuery(graphql`
        query {

allDatoCmsPagina(filter : {slog: {eq: "inicio"}}){
	nodes {
		titulo
    contenido
    imagen {
			fluid {
                ...GatsbyDatoCmsFluid
            }
    }
  }
}
        }
`)

    const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0]
    return (
        <>
            <h2>{titulo}</h2>

            <div>
                <p>{contenido}</p>
                <img src={imagen.fluid.src} />
            </div>
        </>
    );
}

export default CotenidoInicio;
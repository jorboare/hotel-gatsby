import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Image from 'gatsby-image'
import { css } from '@emotion/react'

export const query = graphql`
    query($slog: String!) {
        allDatoCmsHabitacion(filter: {slog: {eq: $slog}}){
            nodes{
                titulo
                id
                slog
                contenido
                imagen {
                    fluid(maxWidth: 1200){
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`


const HabitacionTemplate = ({ data: { allDatoCmsHabitacion: { nodes } } }) => {

    const { titulo, contenido, imagen } = nodes[0]

    return (
        <Layout>
            <main
                css={css`
                margin: 0 auto;
                max-width: 1200px;
                width: 95%;
            `}>
                <h1
                    css={css`
                    text-align: center;
                    margin-top: 4rem;
                `}>{titulo}</h1>

                <p>{contenido}</p>

                <Image fluid={imagen.fluid} />
            </main>
        </Layout>
    );
}

export default HabitacionTemplate;
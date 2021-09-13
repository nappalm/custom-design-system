import React from 'react';
import Example from '../__component/example';
import { Typography } from '../../components';
import style from './index.css';

const Preview: React.FC<any> = () => (
  <div>
    <div className="example">
      <Example title="Typography Text">
        <div className={style.gridTypography}>
          <Typography.Text>
            (default) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
          <Typography.Text underline>
            (underline) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
          <Typography.Text bold>
            (bold) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
          <Typography.Text italic>
            (italic) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
          <Typography.Text code style={{ width: 'fit-content' }}>
            (code) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
          <Typography.Link href="https://www.google.com" target="__blank">
            Go to google.com
          </Typography.Link>
        </div>
      </Example>
      <Example title="Typography types">
        <div className={style.gridTypography}>
          <Typography.Text type="primary">
            (primary) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
          <Typography.Text type="gray">
            (seconday) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
          <Typography.Text type="danger">
            (danger) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
          <Typography.Text type="warning">
            (warning) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
        </div>
      </Example>
      <Example title="Typography Title">
        <Typography.Title size={1}>
          h1 Typography
        </Typography.Title>
        <Typography.Title size={2}>
          h2 Typography
        </Typography.Title>
        <Typography.Title size={3}>
          h3 Typography
        </Typography.Title>
        <Typography.Title size={4}>
          h4 Typography
        </Typography.Title>
        <Typography.Title size={5}>
          h5 Typography
        </Typography.Title>
      </Example>
      <Example title="Typography Paragraph">
        <Typography.Paragraph>
          Es un hecho establecido hace demasiado tiempo que un
          lector se distraerá con el contenido del texto de un
          sitio mientras que mira su diseño. El punto de usar
          Lorem Ipsum es que tiene una distribución más o menos
          normal de las letras, al contrario de usar textos como
          por ejemplo Contenido aquí, contenido aquí.
        </Typography.Paragraph>
      </Example>
      <Example title="Typography Paragraph Ellipsis">
        <Typography.Paragraph ellipsis>
          Es un hecho establecido hace demasiado tiempo que un
          lector se distraerá con el contenido del texto de un
          sitio mientras que mira su diseño. El punto de usar
          Lorem Ipsum es que tiene una distribución más o menos
          normal de las letras, al contrario de usar textos como
          por ejemplo Contenido aquí, contenido aquí.
        </Typography.Paragraph>
      </Example>
      <Example title="Typography Paragraph Ellipsis Multiline">
        <Typography.Paragraph ellipsis={{ rows: 3, expand: false }}>
          Es un hecho establecido hace demasiado tiempo que un
          lector se distraerá con el contenido del texto de un
          sitio mientras que mira su diseño. El punto de usar
          Lorem Ipsum es que tiene una distribución más o menos
          normal de las letras, al contrario de usar textos como
          por ejemplo Contenido aquí, contenido aquí.
          Estos textos hacen parecerlo un español que se puede leer.
          Muchos paquetes de autoedición y editores de páginas web
          usan el Lorem Ipsum como su texto por defecto,
          y al hacer una búsqueda de Lorem Ipsum va a dar
          por resultado muchos sitios web que usan este
          texto si se encuentran en estado de desarrollo.
          Muchas versiones han evolucionado a través de los años,
          algunas veces por accidente, otras veces a
          (por ejemplo insertándole humor y cosas por el estilo).
        </Typography.Paragraph>
      </Example>
    </div>
  </div>
);

export default Preview;

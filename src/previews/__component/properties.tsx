import React from 'react';

type ArrayProps = {
  prop?: string;
  type?: string;
  default?: string;
}

type PropertiesProps = {
  list?: Array<ArrayProps>,
}

const Properties: React.FC<PropertiesProps> = (props) => {
  return(
    <div>
      <h2>🪧 Propiedades</h2>
      <table>
        <tr>
          <th>Propiedad</th>
          <th>Tipo</th>
          <th>Default</th>
        </tr>
        <tbody>
          { props.list
            && props.list.map((prop) => (
            <tr>
              <td>{prop.prop}</td>
              <td>{prop.type}</td>
              <td>{prop.default}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Properties;
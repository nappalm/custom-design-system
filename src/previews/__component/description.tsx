import React from 'react';

type DescriptionProps = {
  list?: Array<string>,
}

const Description: React.FC<DescriptionProps> = (props) => {
  return(
    <div>
      <h2>⛑️ Información de componente</h2>
      <ul>
        { props.list
          && props.list.map((item) => (
            <li>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Description;
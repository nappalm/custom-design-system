import React from 'react';
import Description from '../__component/description';
import Properties from '../__component/properties';
const Home: React.FC<any> = () => {
  return (
    <div>
      <div className="example">

      </div>
      <Description 
        list={[
          'Primary: indica la acción principal, un botón principal como máximo en una sección.',
          'Secondary: indica una serie de acciones sin prioridad.',
          'Text: se utiliza para la acción más secundaria.',
          'Link: se utiliza para enlaces externos.',
        ]}
      />
      <Properties 
        list={[
          {
            prop: 'disabled',
            type: 'boolean',
            default: 'false'
          },
          {
            prop: 'loading',
            type: 'boolean',
            default: 'false'
          },
          {
            prop: 'type',
            type: 'primary secondary link text',
            default: 'secondary'
          },
          {
            prop: 'size',
            type: 'sm md lg',
            default: 'md'
          }
        ]}
      />
    </div>
  )
}

export default Home;
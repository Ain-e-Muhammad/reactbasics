import React from 'react';
import Card from '../card/card.component'
import './card-list.styles.css'

const CardList = (props) =>{
    return(
        <div className="card-list">        
        {
          props.monsters.map( (monster) => 
          <Card key={monster.id} monster={monster}/>
            // <h1>as</h1>
          )
        }
        </div>
    )
}
export default CardList
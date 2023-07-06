import React, {FC} from 'react';
import ServicesCard from './components/ServicesCard/ServicesCard'
import Container from './components/Container/Container';
import { ReactComponent as Card } from './assets/icons/card.svg'

const App: FC = ()=> {
  return(
    <div>
      <Container>
        {/* <img src={cardNumberBackground} alt={"card number background"}/> */}
        <Card/>
        <ServicesCard 
          description={"There are many variations of passages of Lorem Ipsum available, but the majority have"} 
          title={"UI/UX Design"} 
          cardNumber={"01"} 
          icon={<></>}
          link={""}
        />
        <ServicesCard 
          description={"There are many variations of passages of Lorem Ipsum available, but the majority have"} 
          title={"Web Development"} 
          cardNumber={"02"} 
          icon={<></>}
          link={""}
        />
      </Container>
    </div>
  )
}

export default App;

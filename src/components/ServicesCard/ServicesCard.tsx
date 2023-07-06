import {FC} from 'react';
import styled from './ServicesCard.module.scss'

interface ServicesCardProps {
    cardNumber: string;
    icon: JSX.Element;
    title: string;
    description: string;
    link: string;
}
const ServicesCard: FC<ServicesCardProps> = ({cardNumber, icon, title, description, link})=> {
    return(
        <div className={styled.element}>
        {icon}
        </div>
    )
}
export default ServicesCard;
import React, {FC} from 'react';
import styled from './Container.module.scss'
interface ContainerProps {
    children: React.ReactNode
}
const Container:FC<ContainerProps> = ({children})=> {
    return(
        <div className={styled.element}>
            {children}
        </div>
    )
}
export default Container;
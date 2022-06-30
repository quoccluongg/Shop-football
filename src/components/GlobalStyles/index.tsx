import * as React from 'react';
import './GlobalStyles.scss'

export interface GlobalStylesProps {
    children:React.ReactNode
}

export default function App ({children}: GlobalStylesProps) {
  return (
    <React.Fragment>
    {children}
    </React.Fragment>
  )
}

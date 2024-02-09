import React from 'react';
import Button from './components/Button';
import CO2Tag from './components/CO2Tag';
import { CustomTooltip } from './components/CustomTooltip';
import Title from './components/Title';

function App() {
  return (
    <>
    <Title />
    <Button />
    <CO2Tag positive wording='TEST CO2TAG'/>
    <CO2Tag positive={false} wording="CO2" />
    <CustomTooltip dark hover content="This is a tooltip" />
    <CustomTooltip content="This is a tooltip" />
    </>
  )
}

export default App;

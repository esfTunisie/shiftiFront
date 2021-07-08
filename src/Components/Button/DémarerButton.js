import React from 'react';
import {Button} from "reactstrap";
const Demarer = ({ DemarerText, buttonRef, showModal }) => {
  return (
    <Button
      className="nav-link d-none d-lg-block"
      color="primary"
      ref={buttonRef}
      onClick={showModal}
      style={{marginLeft:"40%"}}
    >
      {DemarerText}
    </Button>
  );
};
export default Demarer;
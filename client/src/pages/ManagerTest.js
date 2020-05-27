import React from "react";
// import Wrapper from "../components/Wrapper";
import AddProduce from "../components/Manager/AddProduce";
import RemoveProduce from "../components/Manager/RemoveProduce";

const ManagerTest = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-5">
          <AddProduce />
        </div>
        <div className="col-sm-5">
          <RemoveProduce />
        </div>
      </div>
    </>
  );
};

export default ManagerTest;

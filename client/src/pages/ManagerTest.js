import React from "react";
import Wrapper from "../components/Wrapper";
import AddProduce from "../components/Manager/AddProduce";

const ManagerTest = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-5">
          <AddProduce />
        </div>
      </div>
    </>
  );
};

export default ManagerTest;

import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTasks from "../other/AllTasks";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;

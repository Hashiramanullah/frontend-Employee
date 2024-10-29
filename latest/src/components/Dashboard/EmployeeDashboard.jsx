import React from 'react';
import Header from '../other/Header';
import TaskListNumber from '../other/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  const { employeeData, user, changeUser,emply } = props; // Destructure all props here
  console.log(employeeData);  
  
  return (
    <div className=' bg-slate-700 w-full h-screen dark:text-white p-7'>
      <Header data={employeeData} user={user} changeUser={props.changeUser} />
      <TaskListNumber data={employeeData} />
      <TaskList data={employeeData}/>
    </div>
  );
};

export default EmployeeDashboard;

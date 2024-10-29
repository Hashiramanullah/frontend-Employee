import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  // Use optional chaining to safely extract tasks or fallback to an empty array
  const tasks = data?.tasks || [];

  console.log(data);
  console.log(tasks);

  return (
    <div
      id="tasklist"
      className="h-[45%] rounded-md bg-[#0a0909de] mt-5 overflow-x-auto items-center flex justify-start gap-5 p-3 flex-nowrap py-5 w-full"
    >
      {tasks.length > 0 ? (
        tasks.map((elem, idx) => {
          if (elem.active) {
            return <AcceptTask data={elem} key={idx} />;
          } else if (elem.newTask) {
            return <NewTask data={elem} key={idx} />;
          } else if (elem.completed) {
            return <CompleteTask data={elem} key={idx} />;
          } else if (elem.failedTask) {
            return <FailedTask data={elem} key={idx} />;
          }
          return null;
        })
      ) : (
        <p className="text-white">No tasks available</p>
      )}
      {/* Example task card for layout purposes */}
      <div className="h-full flex-shrink-0 w-[300px] p-5 bg-blue-300 rounded-xl">
        <div className="flex justify-between">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className="mt-2 text-xl font-semibold">Make Youtube video</h2>
        <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem atque tempore id ullam suscipit pariatur hic ipsum ea quasi odit.</p>
        <div className="flex justify-between mt-4">
          <button className="bg-green-500 py-1 px-2 text-sm">Mark as Completed</button>
          <button className="bg-red-500 py-1 px-2 text-sm">Mark as Failed</button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;

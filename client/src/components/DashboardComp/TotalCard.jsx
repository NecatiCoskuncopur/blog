import { HiArrowNarrowUp } from 'react-icons/hi';

const TotalCard = ({ item }) => {
  return (
    <div className="flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-96 w-full rounded-md shadow-md">
      <div className="flex justify-between">
        <div>
          <h3 className="text-gray-500 text-md uppercase">{item.title}</h3>
          <p className="text-2xl">{item.total}</p>
        </div>
        {item.icon}
      </div>
      <div className="flex gap-2 text-sm">
        <span className="text-green-500 flex items-center">
          <HiArrowNarrowUp />
          {item.lastMonth}
        </span>
        <div className="text-gray-500">Last Month</div>
      </div>
    </div>
  );
};

export default TotalCard;

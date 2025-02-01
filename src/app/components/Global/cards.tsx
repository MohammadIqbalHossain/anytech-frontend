import { ICardsData } from "@/libs/data";
import { cn } from "@/libs/utlis/cn";
import { FC } from "react";

interface ICards {
  _DATA: ICardsData[];
  className?: string;
  innerClassName?: string;
}

const Cards: FC<ICards> = ({ _DATA, className, innerClassName }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full flex-wrap my-10",
        className
      )}
    >
      {(_DATA || []).map((_, index) => (
        <div
          key={index}
          className={cn(
            "flex flex-col space-y-8 mx-2 max-w-[400px] bg-[#F8FCFF] rounded-lg p-8 my-5",
            innerClassName
          )}
        >
          <div
            className="flex items-center justify-center w-10 h-10 text-center rounded-full"
            style={{ backgroundColor: _.iconBackground }}
          >
            <_.icon />
          </div>
          <h2 className="text-2xl font-bold">{_.title}</h2>
          <p>{_.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;

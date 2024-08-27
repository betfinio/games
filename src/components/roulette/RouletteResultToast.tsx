import { getColor } from "@/src/lib/roulette";
import { RouletteBet } from "@/src/lib/roulette/types";
import { valueToNumber } from "@betfinio/abi";
import { BetLogo } from "@betfinio/ui/dist/icons";
import { cn } from "betfinio_app/lib/utils";

interface IRouletteResultToastProp {
  rouletteBet: RouletteBet;
}
export const RouletteResultToast: React.FC<IRouletteResultToastProp> = ({ rouletteBet }) => {

  const result = valueToNumber(rouletteBet.result);
  const winNumber =rouletteBet.winNumber
  

  return (
    <div className={"games flex flex-col"}>
      <div className={"flex flex-col w-full items-center border-b border-gray-800 p-2"}>
        <span className={"text-sm"}>Winning</span>
        <div className={"flex flex-row gap-2 justify-center text-lg items-center font-semibold"}>
          <BetLogo className={"w-4 h-4"} />
          <span className={cn(rouletteBet.result > 0n ? "text-green-400" : "text-red-500")}>
            {valueToNumber(rouletteBet.result)}
          </span>{" "}
          BET
        </div>
      </div>
      <div className={"w-full flex flex-row items-center"}>
        <div className={"w-1/2 flex flex-col items-center font-semibold p-2 gap-2 border-r border-gray-800"}>
          <span className={"text-sm"}>Bet</span>
          <div className={"flex flex-row gap-2 justify-center text-lg items-center font-semibold"}>
            <span className={"text-white"}>{valueToNumber(rouletteBet.amount)}</span> BET
          </div>
        </div>
        <div className={"w-1/2 flex flex-col items-center font-semibold p-2 gap-2"}>
          <span className={"text-sm"}>Win number</span>
          <span
            className={cn(
              "text-white w-8 h-8 rounded-xl flex justify-center whitespace-nowrap font-semibold items-center p-3",
              {
                "bg-red-roulette": getColor(winNumber) === "RED",
                "bg-gray-800": getColor(winNumber) === "BLACK",
                "bg-green-400": getColor(winNumber) === "GREEN",
              }
            )}
          >
            {winNumber}
          </span>
        </div>
      </div>
    </div>
  );
};

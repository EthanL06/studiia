import React from "react";

enum StatType {
  Learning = "Learning",
  Reviewing = "Reviewing",
  Mastered = "Mastered",
}

type StatsGroupProps = {
  learning: number;
  reviewing: number;
  mastered: number;
};

const StatsGroup = ({ learning, reviewing, mastered }: StatsGroupProps) => {
  return (
    <div className="mt-4 flex flex-row justify-around">
      <Stat type={StatType.Learning} value={learning} />
      <Stat type={StatType.Reviewing} value={reviewing} />
      <Stat type={StatType.Mastered} value={mastered} />
    </div>
  );
};

const Stat = ({ type, value }: { type: StatType; value: number }) => {
  let color = "";

  switch (type) {
    case StatType.Learning:
      color = "bg-secondary";
      break;
    case StatType.Reviewing:
      color = "bg-slate-300";
      break;
    case StatType.Mastered:
      color = "bg-green-400";
      break;
  }

  return (
    <div className="flex flex-col items-center gap-y-2">
      <div className={`h-3 w-3 rounded-full ${color}`}></div>
      <div className="text-sm font-medium text-slate-400">{type}</div>
      <div className="text-2xl font-medium">{value}</div>
    </div>
  );
};

export default StatsGroup;

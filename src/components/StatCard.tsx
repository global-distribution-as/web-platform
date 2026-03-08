import { ReactNode } from "react";

const StatCard = ({ label, value, icon }: { label: string; value: string | number; icon?: ReactNode }) => (
  <div className="bg-card rounded-xl border border-border p-5">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
      </div>
      {icon && <div className="text-gold">{icon}</div>}
    </div>
  </div>
);

export default StatCard;

import { cn } from "@/lib/utils";

type StatusType = 'in-stock' | 'low-stock' | 'on-order' | 'pending' | 'confirmed' | 'cancelled' | 'pre-order' | 'processing' | 'dispatched' | 'in-transit' | 'arrived' | 'delivered' | 'quote-sent' | 'negotiating' | 'expired' | 'pending-review' | 'limited';

const statusConfig: Record<StatusType, { label: string; className: string }> = {
  'in-stock': { label: 'In Stock', className: 'bg-emerald-100 text-emerald-800' },
  'low-stock': { label: 'Low Stock', className: 'bg-amber-100 text-amber-800' },
  'on-order': { label: 'On Order', className: 'bg-blue-100 text-blue-800' },
  'pending': { label: 'Pending', className: 'bg-amber-100 text-amber-800' },
  'confirmed': { label: 'Confirmed', className: 'bg-emerald-100 text-emerald-800' },
  'cancelled': { label: 'Cancelled', className: 'bg-red-100 text-red-800' },
  'pre-order': { label: 'Pre-Order', className: 'bg-blue-100 text-blue-800' },
  'processing': { label: 'Processing', className: 'bg-amber-100 text-amber-800' },
  'dispatched': { label: 'Dispatched', className: 'bg-blue-100 text-blue-800' },
  'in-transit': { label: 'In Transit', className: 'bg-blue-100 text-blue-800' },
  'arrived': { label: 'Arrived', className: 'bg-emerald-100 text-emerald-800' },
  'delivered': { label: 'Delivered', className: 'bg-emerald-100 text-emerald-800' },
  'quote-sent': { label: 'Quote Sent', className: 'bg-blue-100 text-blue-800' },
  'negotiating': { label: 'Negotiating', className: 'bg-amber-100 text-amber-800' },
  'expired': { label: 'Expired', className: 'bg-red-100 text-red-800' },
  'pending-review': { label: 'Pending Review', className: 'bg-amber-100 text-amber-800' },
  'limited': { label: 'Limited Stock', className: 'bg-amber-100 text-amber-800' },
};

const StatusBadge = ({ status }: { status: StatusType }) => {
  const config = statusConfig[status] || { label: status, className: 'bg-gray-100 text-gray-800' };
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", config.className)}>
      {config.label}
    </span>
  );
};

export default StatusBadge;
export type { StatusType };

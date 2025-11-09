import { Order } from "@/types/food";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface OrderTrackerProps {
  order?: Order;
}

const steps = [
  { id: "placed", label: "Order Placed" },
  { id: "preparing", label: "Preparing" },
  { id: "out-for-delivery", label: "Out for Delivery" },
  { id: "delivered", label: "Delivered" },
];

const OrderTracker = ({ order }: OrderTrackerProps) => {
  const currentStepIndex = order
    ? steps.findIndex((step) => step.id === order.status)
    : -1;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute left-0 top-1/2 h-1 w-full bg-muted -translate-y-1/2 -z-10" />
        <div
          className="absolute left-0 top-1/2 h-1 bg-primary -translate-y-1/2 -z-10 transition-all duration-1000"
          style={{
            width: currentStepIndex >= 0 ? `${(currentStepIndex / (steps.length - 1)) * 100}%` : "0%",
          }}
        />

        {steps.map((step, index) => {
          const isActive = index <= currentStepIndex;
          const isCurrent = index === currentStepIndex;

          return (
            <div key={step.id} className="flex flex-col items-center flex-1">
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-smooth",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg scale-110"
                    : "bg-muted text-muted-foreground",
                  isCurrent && "animate-pulse-slow"
                )}
              >
                {isActive && <Check className="h-6 w-6" />}
              </div>
              <span
                className={cn(
                  "text-sm font-medium text-center transition-smooth",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTracker;

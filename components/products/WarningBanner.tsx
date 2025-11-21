import React from "react";
import { AlertTriangle } from "lucide-react";

const WarningBanner = () => {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 w-full shadow-sm mb-5">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <AlertTriangle
            className="h-5 w-5 text-amber-600"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm text-amber-700 font-medium">
            The shop is not running yet, this is just a programming project in
            sandbox mode for now. Please stay tuned for the actual opening of
            the shop in the near future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WarningBanner;

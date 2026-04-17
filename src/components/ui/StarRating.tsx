"use client";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
}

export function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  showValue = false,
  className,
}: StarRatingProps) {
  const sizes = { sm: "w-3 h-3", md: "w-4 h-4", lg: "w-5 h-5" };
  const textSizes = { sm: "text-xs", md: "text-sm", lg: "text-base" };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxRating }).map((_, i) => {
          const fill = Math.min(1, Math.max(0, rating - i));
          return (
            <div key={i} className="relative">
              <Star className={cn(sizes[size], "text-gray-200 fill-gray-200")} />
              {fill > 0 && (
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${fill * 100}%` }}
                >
                  <Star
                    className={cn(
                      sizes[size],
                      "text-amber-400 fill-amber-400"
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {showValue && (
        <span
          className={cn("font-semibold text-gray-700", textSizes[size])}
        >
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}

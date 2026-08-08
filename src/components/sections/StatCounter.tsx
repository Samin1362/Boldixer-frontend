"use client";

import { Icon } from "@/components/ui";
import { useCountUp } from "@/hooks/useCountUp";
import type { IconName } from "@/lib/icons";

type StatCounterProps = {
  value: number;
  suffix: string;
  label: string;
  icon: IconName;
  active: boolean;
};

/**
 * Figma: icon 70x70, number 45px/700 white, "+" and label 22px in the accent.
 * Number and label are one text node in the design, split here so the number
 * can animate. Gold-bright rather than gold: this sits on dark photography.
 */
export function StatCounter({
  value,
  suffix,
  label,
  icon,
  active,
}: StatCounterProps) {
  const current = useCountUp(value, active);

  return (
    <div>
      <Icon name={icon} size={54} className="text-gold-bright" />
      <p className="mt-4 leading-none">
        {/* aria-label carries the final figure so SR users never hear a partial count. */}
        <span
          className="text-[34px] font-bold text-white lg:text-[45px]"
          aria-label={`${value}${suffix}`}
        >
          <span aria-hidden="true">{current.toLocaleString("en-US")}</span>
        </span>
        <span aria-hidden="true" className="text-gold-bright text-lg font-bold">
          {suffix}
        </span>
      </p>
      <p className="text-gold-bright mt-1 text-lg font-bold">{label}</p>
    </div>
  );
}

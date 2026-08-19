"use client";

import { TODO_FILTERS, type TodoFilter } from "@/lib/types";
import { VintageButton } from "@/components/vintage-button";

interface TodoFilterProps {
  value: TodoFilter;
  onChange: (filter: TodoFilter) => void;
}

export function TodoFilter({ value, onChange }: TodoFilterProps) {
  return (
    <div role="radiogroup" aria-label="필터" className="flex gap-1">
      {TODO_FILTERS.map((item) => {
        const selected = item.value === value;
        return (
          <VintageButton
            key={item.value}
            type="button"
            size="sm"
            variant={selected ? "default" : "outline"}
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(item.value)}
          >
            {item.label}
          </VintageButton>
        );
      })}
    </div>
  );
}

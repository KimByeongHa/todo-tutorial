"use client";

import { VintageInput } from "@/components/vintage-input";

interface TodoSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function TodoSearch({ value, onChange }: TodoSearchProps) {
  return (
    <VintageInput
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="제목으로 검색"
      aria-label="검색"
    />
  );
}

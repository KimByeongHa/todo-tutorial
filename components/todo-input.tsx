"use client";

import { useState } from "react";
import {
  CATEGORIES,
  DEFAULT_PRIORITY,
  PRIORITIES,
  type Category,
  type Priority,
} from "@/lib/types";
import { VintageButton } from "@/components/vintage-button";
import { VintageInput } from "@/components/vintage-input";
import { VintagePanel } from "@/components/vintage-panel";

interface TodoInputProps {
  onAdd: (
    text: string,
    priority: Priority,
    dueDate?: string,
    category?: Category
  ) => void;
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [value, setValue] = useState("");
  const [priority, setPriority] = useState<Priority>(DEFAULT_PRIORITY);
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState<Category | undefined>(undefined);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // 빈/공백 입력이면 추가하지 않고 선택값(우선순위·마감일·카테고리)도 유지한다.
    if (!value.trim()) return;
    onAdd(value, priority, dueDate || undefined, category);
    setValue("");
    setPriority(DEFAULT_PRIORITY);
    setDueDate("");
    setCategory(undefined);
  }

  return (
    <form onSubmit={handleSubmit}>
      <VintagePanel className="flex flex-col gap-3">
        <p className="font-heading text-sm font-bold">할 일 추가</p>

        <VintageInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="할 일을 입력하고 Enter를 누르세요"
          aria-label="새 할 일"
        />

        <VintageInput
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          aria-label="마감일"
          className="w-auto"
        />

        <div role="radiogroup" aria-label="우선순위" className="flex gap-1">
          {PRIORITIES.map((item) => {
            const selected = item.value === priority;
            return (
              <VintageButton
                key={item.value}
                type="button"
                size="sm"
                variant={selected ? "default" : "outline"}
                role="radio"
                aria-checked={selected}
                onClick={() => setPriority(item.value)}
              >
                {item.label}
              </VintageButton>
            );
          })}
        </div>

        <div role="radiogroup" aria-label="카테고리" className="flex gap-1">
          <VintageButton
            type="button"
            size="sm"
            variant={category === undefined ? "default" : "outline"}
            role="radio"
            aria-checked={category === undefined}
            onClick={() => setCategory(undefined)}
          >
            없음
          </VintageButton>
          {CATEGORIES.map((item) => {
            const selected = item.value === category;
            return (
              <VintageButton
                key={item.value}
                type="button"
                size="sm"
                variant={selected ? "default" : "outline"}
                role="radio"
                aria-checked={selected}
                onClick={() => setCategory(item.value)}
              >
                {item.label}
              </VintageButton>
            );
          })}
        </div>

        <VintageButton type="submit" className="w-full">
          추가
        </VintageButton>
      </VintagePanel>
    </form>
  );
}

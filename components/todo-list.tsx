"use client";

import { useState } from "react";
import type {
  CategoryFilter,
  SortBy,
  TodoFilter as TodoFilterValue,
} from "@/lib/types";
import { matchesSearch, sortTodos } from "@/lib/todo-utils";
import { useTodos } from "@/hooks/use-todos";
import { TodoInput } from "@/components/todo-input";
import { TodoFilter } from "@/components/todo-filter";
import { TodoCategoryFilter } from "@/components/todo-category-filter";
import { TodoSort } from "@/components/todo-sort";
import { TodoSearch } from "@/components/todo-search";
import { TodoItem } from "@/components/todo-item";
import { VintagePanel } from "@/components/vintage-panel";

export function TodoList() {
  const { todos, loaded, addTodo, toggleTodo, deleteTodo, editTodo } =
    useTodos();
  const [filter, setFilter] = useState<TodoFilterValue>("all");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");
  const [sortBy, setSortBy] = useState<SortBy>("created");
  const [query, setQuery] = useState("");

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    })
    .filter(
      (todo) => categoryFilter === "all" || todo.category === categoryFilter
    )
    .filter((todo) => matchesSearch(todo, query));
  const visibleTodos = sortTodos(filteredTodos, sortBy);

  return (
    <div className="flex flex-col gap-4">
      <TodoInput onAdd={addTodo} />

      <VintagePanel className="flex flex-col gap-3">
        <TodoSearch value={query} onChange={setQuery} />

        <div className="flex flex-wrap items-center justify-between gap-2">
          <TodoFilter value={filter} onChange={setFilter} />
          <TodoSort value={sortBy} onChange={setSortBy} />
        </div>

        <TodoCategoryFilter value={categoryFilter} onChange={setCategoryFilter} />
      </VintagePanel>

      <div className="border-2 border-t-black/60 border-l-black/60 border-r-white border-b-white bg-input">
        {loaded && visibleTodos.length === 0 ? (
          <p className="px-3 py-6 text-center text-sm text-muted-foreground">
            아직 할 일이 없습니다. 위에 입력해 추가해보세요.
          </p>
        ) : (
          <ul className="flex flex-col divide-y-2 divide-border">
            {visibleTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

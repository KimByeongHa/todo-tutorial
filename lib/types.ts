export type Priority = "high" | "medium" | "low";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
  /** 생성 시각(ms). 생성일순 정렬에 사용한다. */
  createdAt: number;
  /** 마감일 "YYYY-MM-DD". 지정하지 않으면 undefined. */
  dueDate?: string;
  /** 카테고리 태그. 지정하지 않으면 undefined. */
  category?: Category;
}

export const DEFAULT_PRIORITY: Priority = "medium";

export interface PriorityMeta {
  value: Priority;
  label: string;
  /** 목록 뱃지에 적용할 Tailwind 색상 클래스 */
  badgeClass: string;
}

// 우선순위 목록(높음 → 낮음 순). 선택 UI와 뱃지가 공유한다.
export const PRIORITIES: PriorityMeta[] = [
  {
    value: "high",
    label: "높음",
    badgeClass: "border-destructive bg-destructive/20 text-destructive",
  },
  {
    value: "medium",
    label: "보통",
    badgeClass: "border-warning bg-warning/20 text-warning",
  },
  {
    value: "low",
    label: "낮음",
    badgeClass: "border-success bg-success/20 text-success",
  },
];

export const PRIORITY_META: Record<Priority, PriorityMeta> = Object.fromEntries(
  PRIORITIES.map((meta) => [meta.value, meta])
) as Record<Priority, PriorityMeta>;

export type Category = "work" | "personal" | "shopping";

export interface CategoryMeta {
  value: Category;
  label: string;
  /** 목록 뱃지에 적용할 Tailwind 색상 클래스 */
  badgeClass: string;
}

// 카테고리 목록. 선택 UI와 뱃지, 필터가 공유한다.
export const CATEGORIES: CategoryMeta[] = [
  {
    value: "work",
    label: "업무",
    badgeClass:
      "border-blue-700 bg-blue-500/20 text-blue-700 dark:border-blue-300 dark:text-blue-300",
  },
  {
    value: "personal",
    label: "개인",
    badgeClass:
      "border-emerald-700 bg-emerald-500/20 text-emerald-700 dark:border-emerald-300 dark:text-emerald-300",
  },
  {
    value: "shopping",
    label: "쇼핑",
    badgeClass:
      "border-violet-700 bg-violet-500/20 text-violet-700 dark:border-violet-300 dark:text-violet-300",
  },
];

export const CATEGORY_META: Record<Category, CategoryMeta> =
  Object.fromEntries(
    CATEGORIES.map((meta) => [meta.value, meta])
  ) as Record<Category, CategoryMeta>;

// 카테고리별 표시 필터. "all"은 필터 해제(전체 표시).
export type CategoryFilter = "all" | Category;

export const CATEGORY_FILTERS: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "전체" },
  ...CATEGORIES.map((meta) => ({ value: meta.value, label: meta.label })),
];

// 목록 정렬 기준. localStorage에 저장하지 않는 화면 표시용 상태.
export type SortBy = "created" | "name" | "due";

export const SORT_OPTIONS: { value: SortBy; label: string }[] = [
  { value: "created", label: "생성일순" },
  { value: "name", label: "이름순" },
  { value: "due", label: "마감일순" },
];

// 목록 표시 필터. URL/localStorage에 저장하지 않는 화면 표시용 상태.
export type TodoFilter = "all" | "active" | "completed";

export const TODO_FILTERS: { value: TodoFilter; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "active", label: "진행중" },
  { value: "completed", label: "완료" },
];

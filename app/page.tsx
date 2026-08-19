import { TodoList } from "@/components/todo-list"
import { VintagePanel } from "@/components/vintage-panel"

export default function Page() {
  return (
    <div className="flex min-h-svh justify-center p-6">
      <div className="flex w-full max-w-md min-w-0 flex-col">
        <VintagePanel className="p-0" role="group" aria-label="오늘의 할 일 앱">
          <div className="flex items-center gap-2 border-b-2 border-b-black/60 bg-primary px-3 py-1.5 text-primary-foreground">
            <span aria-hidden>💾</span>
            <h1 className="font-heading text-sm font-bold tracking-wide">
              오늘의 할 일
            </h1>
          </div>

          <div className="flex flex-col gap-4 p-4">
            <p className="font-mono text-xs text-muted-foreground">
              (Press <kbd>d</kbd> to toggle dark mode)
            </p>
            <TodoList />
          </div>
        </VintagePanel>
      </div>
    </div>
  )
}

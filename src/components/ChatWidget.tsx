export function ChatWidget() {
  return (
    <button
      type="button"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#22c55e] to-[#2563eb] text-white shadow-lg transition hover:scale-105"
      aria-label="Chat support"
    >
      <span className="flex gap-0.5">
        <span className="h-2 w-2 rounded-full bg-white" />
        <span className="h-2 w-2 rounded-full bg-white" />
      </span>
    </button>
  );
}

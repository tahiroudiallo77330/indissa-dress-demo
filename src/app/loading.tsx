export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#fef9f1] flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-[48px] h-[48px] rounded-full border border-[#1d1c17]/20 flex items-center justify-center">
          <span className="font-serif text-[12px] tracking-[0.06em] text-[#1d1c17]/40 animate-pulse">ID</span>
        </div>
      </div>
    </div>
  );
}

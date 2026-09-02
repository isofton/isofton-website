export function SoftBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <span className="orb left-[-80px] top-16 h-56 w-56 bg-[#c9b8e6]/35" />
      <span className="orb right-[-60px] top-40 h-64 w-64 bg-[#7ec8e8]/28" />
      <span className="orb bottom-24 left-[40%] h-40 w-40 bg-[#d8d4ee]/20" />
    </div>
  );
}

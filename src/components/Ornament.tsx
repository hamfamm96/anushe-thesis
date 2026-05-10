type Props = { className?: string };

/**
 * Decorative gold ornament — used as a section accent.
 * Two thin lines flanking a small lozenge diamond.
 */
export default function Ornament({ className = "" }: Props) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C99420]/55" />
      <span className="block w-[6px] h-[6px] rotate-45 bg-[#C99420]/80" />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C99420]/55" />
    </div>
  );
}

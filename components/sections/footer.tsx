export function Footer() {
  return (
    <footer className="relative z-[1] pb-12 pt-10 t-small text-mute">
      <div
        className="
          mx-auto flex max-w-[1120px] flex-wrap
          justify-between gap-4
          border-t border-border
          px-6 pt-6
          max-sm:px-[18px]
        "
      >
        <span>
          © 2026 Aarav Mehta. Always test with permission.
        </span>

        <span>
          aarav@securemail.example
        </span>
      </div>
    </footer>
  );
}
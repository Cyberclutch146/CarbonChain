export default function Footer() {
  return (
    <footer className="border-t border-surface-hover bg-background mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-accent flex items-center justify-center font-bold text-background text-xs">
              C
            </div>
            <span className="font-semibold text-gray-300">CarbonChain Protocol</span>
          </div>
          <div className="text-sm text-gray-500">
            © 2026 CarbonChain. Open Source Hackathon Prototype.
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-surface-hover bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center font-bold text-background">
                C
              </div>
              <span className="font-bold text-xl tracking-tight text-white">CarbonChain</span>
            </Link>
            <div className="hidden md:flex gap-6">
              <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">Marketplace</Link>
              <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</Link>
              <Link href="/retire" className="text-gray-300 hover:text-white transition-colors">Retire Credits</Link>
            </div>
          </div>
          <div className="flex items-center">
            {/* Wallet Connect Placeholder */}
            <button className="bg-surface-hover hover:bg-gray-700 text-white px-4 py-2 rounded-md font-medium transition-colors border border-gray-700">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

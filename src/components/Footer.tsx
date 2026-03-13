export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            BANI<span className="text-purple-500">.</span>
          </span>
          <p className="text-sm text-gray-500 mt-2">© {new Date().getFullYear()} BANI Agency. All rights reserved.</p>
        </div>
        
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Dribbble</a>
        </div>
      </div>
    </footer>
  );
}

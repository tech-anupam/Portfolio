import { Terminal } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="bg-[#111319] border border-[#1E232F] rounded-2xl p-6 sm:p-8 max-w-sm w-full font-mono shadow-2xl">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1E232F]">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
          <span className="text-[11px] text-[#586274] ml-2 flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-[#10B981]" />
            system.exec
          </span>
        </div>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2 text-[#5EEAA0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
            <span>Resolving view buffer...</span>
          </div>
          <div className="text-[11px] text-[#586274]">
            [ OK ] Staging visual compositor
          </div>
        </div>
      </div>
    </div>
  );
}

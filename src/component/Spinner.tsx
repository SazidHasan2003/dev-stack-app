export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20 w-full col-span-full">
      <div className="w-12 h-12 border-4 border-slate-200 border-t-[#D91B7E] rounded-full animate-spin"></div>

      <p className="mt-4 text-sm font-medium text-slate-500 animate-pulse">
        Loading technologies...
      </p>
    </div>
  );
}

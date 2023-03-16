function Term({ term, definition }: { term: string; definition: string }) {
  return (
    <div className="group relative flex flex-col justify-between gap-y-4 gap-x-4 rounded-lg border-2 border-slate-200 bg-white p-4 transition-colors duration-100 hover:border-secondary sm:flex-row">
      <div className="break-words text-xl font-semibold sm:w-[40%] sm:min-w-[40%] sm:max-w-[40%]">
        {term}
      </div>
      <div className="hidden rounded border-l-4 transition-colors duration-100 group-hover:border-secondary sm:block"></div>
      <div className="flex-grow break-words text-base font-normal">
        {definition}
      </div>
    </div>
  );
}

export default Term;

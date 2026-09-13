function FilterBar({
  query,
  userFollowers,
  handleQueryChange,
  handleUserFollowersChange,
  onSearch,
  onClear,
}) {
  return (
    <form
      className="mb-6"
      onSubmit={(e) => {
        e.preventDefault()
        onSearch()
      }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4">
        <label className="flex min-w-0 flex-1 flex-col gap-1.5">
          <span className="text-sm text-slate-700">ค้นหา (login หรือ name)</span>
          <input
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-100"
            type="text"
            value={query}
            onChange={(e) => {
              handleQueryChange(e.target.value)
            }}
            placeholder="เช่น torvalds, dan..."
          />
        </label>

        <label className="flex w-full flex-col gap-1.5 sm:w-40">
          <span className="text-sm text-slate-700">ผู้ติดตามขั้นต่ำ</span>
          <input
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-100"
            type="number"
            min={0}
            value={userFollowers}
            onChange={(e) => {
              handleUserFollowersChange(Number(e.target.value))
            }}
            placeholder="0"
          />
        </label>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-end gap-2">
        <button
          type="submit"
          className="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 hover:bg-sky-200"
        >
          Search
        </button>
        {onClear && (
          <button
            type="button"
            onClick={onClear}
            className="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 hover:bg-sky-200"
          >
            ล้างตัวกรอง
          </button>
        )}
      </div>
    </form>
  )
}

export default FilterBar

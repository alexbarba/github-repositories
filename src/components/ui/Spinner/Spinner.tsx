const Spinner = ({ className = '' }) => (
  <div className="flex items-center justify-center w-full h-full">
    <div
      className={`border-t-4 border-b-4 border-black rounded-full animate-spin w-32 h-32 dark:border-white ${className}`}
    />
  </div>
)

export default Spinner

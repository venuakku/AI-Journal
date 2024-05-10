const EntryCard = ({ entry }) => {
    const date = new Date(entry.createdAt).toDateString()
    return (
      <div className=" h-[200px] divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5">{date}</div>
        <div className="px-4 py-4">{entry.content}</div>
      </div>
    )
  }
  
  export default EntryCard
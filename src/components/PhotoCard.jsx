export default function PhotoCard({ photo, isFav, dispatch }) {
  return (
    <div className="bg-white shadow rounded p-3">
      <img
        src={photo.download_url}
        className="w-full h-48 object-cover rounded"
      />

      <div className="flex justify-between items-center mt-2">
        <p className="text-sm font-semibold">{photo.author}</p>

        <button
          onClick={() =>
            dispatch({ type: "TOGGLE_FAV", payload: photo.id })
          }
          className="text-xl"
        >
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}
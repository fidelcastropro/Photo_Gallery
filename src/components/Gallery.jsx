import { useReducer, useState, useMemo, useCallback } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import Spinner from "./Spinner";
import PhotoCard from "./Photocard";
import { favouritesReducer, initialState } from "../reducer/favouritesReducer";

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  const [state, dispatch] = useReducer(favouritesReducer, initialState);
  const [search, setSearch] = useState("");

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((p) =>
      p.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);

  if (loading) return <Spinner />;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-5">
      <input
        type="text"
        placeholder="Search by author..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={handleSearch}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            dispatch={dispatch}
            isFav={state.favourites.includes(photo.id)}
          />
        ))}
      </div>
    </div>
  );
}
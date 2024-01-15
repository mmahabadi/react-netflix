import { useCurrentUser } from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";
import React, { useCallback, useMemo } from "react";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import axios from "axios";

interface FavoriteButtonProps {
  movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: curretUser, mutate: mutateUser } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = curretUser?.favoriteIds || [];
    return list.includes(movieId);
  }, [curretUser, movieId]);
  console.log("isFavorite", curretUser?.favoriteIds, movieId);
  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = await axios.delete(`/api/favorite`, { data: { movieId } });
    } else {
      response = await axios.post(`/api/favorite`, { movieId });
    }

    const updatedFavoriteIds = await response?.data?.favoriteIds;
    mutateUser({
      ...curretUser,
      favoriteIds: updatedFavoriteIds,
    });

    mutateFavorites();
  }, [movieId, isFavorite, curretUser, mutateFavorites, mutateUser]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;
  return (
    <div
      onClick={toggleFavorites}
      className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
    </div>
  );
};

export default FavoriteButton;

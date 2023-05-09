import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IconButton } from "@chakra-ui/react";
import {
  useSavedLibStore,
  savedSongsSelector,
  addToSavedSelector,
  removeFromSavedSelector,
} from "../../store";

const AddToSavedBtn = ({
  dataToSave = {},
  onAddedToSaved = () => {},
  onRemovedFromSaved = () => {},
}) => {
  const savedSongs = useSavedLibStore(savedSongsSelector);
  const isInSaved = savedSongs.some((item) => item.id === dataToSave.id);

  const addToSaved = useSavedLibStore(addToSavedSelector);
  const removeFromSaved = useSavedLibStore(removeFromSavedSelector);

  const toggleToSaved = async () => {
    if (isInSaved) {
      await removeFromSaved(dataToSave.id);
      onRemovedFromSaved();
    } else {
      await addToSaved(dataToSave);
      onAddedToSaved();
    }
  };

  return (
    <IconButton
      aria-label="Add song to saved"
      type="button"
      bg="transparent"
      icon={
        isInSaved ? <AiFillHeart size="24" /> : <AiOutlineHeart size="24" />
      }
      onClick={toggleToSaved}
    />
  );
};

export { AddToSavedBtn };

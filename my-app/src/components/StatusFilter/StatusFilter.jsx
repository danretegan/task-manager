import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
// Importăm hook-ul:
import { useSelector } from "react-redux";
// Importăm obiectul cu valorile filtrelor:
import { statusFilters } from "../../redux/constants";

export const StatusFilter = () => {
  // Obținem valoarea filtrului din starea Redux:
const filter = useSelector( state => state.filters.status );

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};

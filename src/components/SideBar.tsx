import { Button } from "../components/Button";
import "../styles/sidebar.scss";
interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface Geners {
  typeGenre: GenreResponseProps[];
  selectedId: number;
  onButtonClick: (id: number) => void;
}

export function SideBar({ typeGenre, selectedId, onButtonClick }: Geners) {
  // Complete aqui
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {typeGenre.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onButtonClick(genre.id)}
            selected={selectedId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}

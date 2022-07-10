import { Button } from "./Button";
import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  onClickButton: (id: number) => void
}

export function SideBar({ genres, onClickButton, selectedGenreId }: SideBarProps) {
  // Complete aqui
  return (
    <nav className="sidebar">
      <span>Loca<p>Me</p></span>

      <div className="buttons-container">
        {genres.map((genre, index) => (
          <div key={index}>
            <Button
              title={genre.title}
              iconName={genre.name}
              onClick={() => onClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          </div>
        ))}
      </div>

    </nav>
  )
}
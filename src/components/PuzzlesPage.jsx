import { Link } from 'react-router-dom';
import ParallaxHeader from '../components/Parallaxheader';

export default function PuzzlesPage() {
  const puzzles = JSON.parse(localStorage.getItem('chessPuzzles') || '[]');

  return (
    <div className="p-8">
      <ParallaxHeader
        title="Puzzles"
        breadcrumbs={[{ title: 'Puzzles', path: '/puzzles' }]}
        backgroundImage="/images/aboutheader.jpg"
      />
      <h1 className="text-2xl text-gray-900 font-bold mb-6">Chess Puzzles</h1>
      
      {puzzles.length === 0 ? (
        <p>No puzzles available yet.</p>
      ) : (
        <div className="grid gap-4">
          {puzzles.map((puzzle) => (
            <a 
              key={puzzle.id} 
              href={puzzle.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded hover:bg-gray-50"
            >
              <h3 className="font-medium text-gray-900">Puzzle {puzzle.id}</h3>
              <p className="text-sm text-gray-500">
                Added on {new Date(puzzle.date).toLocaleDateString()}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminUpload() {
  const [puzzleLink, setPuzzleLink] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('isAdminAuthenticated')) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      let savedPuzzles = [];
      const puzzlesData = localStorage.getItem('chessPuzzles');
      
      if (puzzlesData) {
        try {
          savedPuzzles = JSON.parse(puzzlesData);
          if (!Array.isArray(savedPuzzles)) {
            savedPuzzles = []; // Reset if corrupted data
          }
        } catch (parseError) {
          console.error('Error parsing puzzles:', parseError);
          savedPuzzles = []; // Fallback to empty array
        }
      }

      const newPuzzle = {
        link: puzzleLink,
        id: Date.now(),
        date: new Date().toISOString()
      };

      const newPuzzles = [...savedPuzzles, newPuzzle];
      
      localStorage.setItem('chessPuzzles', JSON.stringify(newPuzzles));
      setMessage('Puzzle uploaded successfully!');
      setPuzzleLink('');
    } catch (error) {
      console.error('Error saving puzzle:', error);
      setMessage('Failed to save puzzle. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Admin Puzzle Upload</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Puzzle Link:</label>
            <input
              type="text"
              value={puzzleLink}
              onChange={(e) => setPuzzleLink(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Upload Puzzle
          </button>
        </form>
        
        {message && (
          <div className={`p-4 rounded-md ${
            message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
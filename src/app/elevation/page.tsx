import React, { useState, useRef } from 'react';

export default function Page() {
  const [tab, setTab] = useState('upload');
  const [name, setName] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [coordinates, setCoordinates] = useState([{ lat: '', lng: '' }]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  type Field = 'lat' | 'lng';

  const handleCoordinateChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const newCoordinates = [...coordinates];

    if (field === 'lat' && parseInt(value) > 90) {
      value = '90';
    }

    if (field === 'lat' && parseInt(value) < -90) {
      value = '-90';
    }

    if (field != 'lat' && field != 'lng') {
      return;
    }
    const field_ = field as Field;

    newCoordinates[index][field_] = value;
    setCoordinates(newCoordinates);
  };

  const handleAddCoordinate = () => {
    setCoordinates([...coordinates, { lat: '', lng: '' }]);
  };

  const handleRemoveCoordinate = (index: number) => {
    const newCoordinates = [...coordinates];
    newCoordinates.splice(index, 1);
    setCoordinates(newCoordinates);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic
  };

  return (
    <div className="w-full flex flex-wrap p-4">
      <h1>Elevation</h1>
      <div className="w-full mt-4">
        <div className="flex mb-4">
          <button
            className={`px-4 py-2 ${
              tab === 'upload' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setTab('upload')}
          >
            Upload JSON
          </button>
          <button
            className={`px-4 py-2 ${
              tab === 'coordinates' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setTab('json')}
          >
            Enter Coordinates
          </button>
        </div>
        {tab === 'upload' ? (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              File:
              <input
                type="file"
                accept=".json"
                ref={fileInputRef}
                onChange={handleFileChange}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            {coordinates.map((coordinate, index) => (
              <div key={index}>
                <label>
                  Latitude:
                  <input
                    type="number"
                    value={coordinate.lat}
                    onChange={(e) =>
                      handleCoordinateChange(index, 'lat', e.target.value)
                    }
                    required
                  />
                </label>
                <label>
                  Longitude:
                  <input
                    type="number"
                    value={coordinate.lng}
                    onChange={(e) =>
                      handleCoordinateChange(index, 'lng', e.target.value)
                    }
                    required
                  />
                </label>
                <button
                  type="button"
                  onClick={() => handleRemoveCoordinate(index)}
                >
                  -
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddCoordinate}>
              +
            </button>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

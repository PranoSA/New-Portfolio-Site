//For Now, Just Get All The Elevation Data
import Link from 'next/link';
import '../../styles/globals.css';

type ElevationData = {
  id: string;
  userid: string;
  email: string;
  name: string;
  path: {
    long: string;
    lat: string;
    elevation: string;
  }[];
};

const getElevationChartData = async () => {
  const response = await fetch(`${process.env.DOMAIN}/api/auth/elevation`);
  const data = await response.json();
  return data;
};

const ElevationCard = (elevationData: ElevationData) => {
  return (
    <div
      className="w-full md:w-1/2  border-5 border-gray-500  flex flex-col justify-center items-center p-5 m-5 bg-gray-100 rounded-lg shadow-lg"
      key={elevationData.id}
    >
      <div className="w-full p-5 items-center">
        <h1>{elevationData.name}</h1>
      </div>
      <div className="w-full items-center p-5">
        <h3> Submmited By : {elevationData.email}</h3>
      </div>
      <Link href={`/elevation/${elevationData.id}`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Chart
        </button>
      </Link>
    </div>
  );
};

export default async function Home() {
  const data: ElevationData[] = await getElevationChartData(); //Later Add Pagination
  console.log(data);

  return (
    <div className="flex w-flex flex-wrap w-full">
      <div className="w-full h-20 items-center">
        <h1 className="text-center text-2xl font-bold">
          {' '}
          Submitted Elevations Charts{' '}
        </h1>
      </div>
      {data.map((elevationData) => ElevationCard(elevationData))}
    </div>
  );
}

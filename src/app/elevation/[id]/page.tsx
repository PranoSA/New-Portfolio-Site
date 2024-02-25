import { useRouter } from 'next/router';

import '../../styles/globals.css';

type CoordinateWithElevation = {
  lat: number;
  long: number;
  elevation: number;
};

type ElevationData = {
  id: string;
  coordinates: CoordinateWithElevation[];
};

async function getData(id: string) {
  console.log(process.env.DOMAIN);
  // fetch data
  try {
    const res = await fetch(`${process.env.DOMAIN}/api/auth/elevation/${id}`);

    console.log(res.status);

    if (!res.ok) {
      return null;
    }

    // parse json
    const data: ElevationData = await res.json();

    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getData(id);

  if (!data) {
    return <h1>Not Found</h1>;
  }

  return (
    <div>
      <h1>Elevation {id} </h1>
    </div>
  );
}

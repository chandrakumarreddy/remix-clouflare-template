import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/photos");
  const json = await resp.json();
  return json;
};

export default function Index() {
  const photos = useLoaderData();
  return (
    <div>
      {photos.map((photo) => (
        <img
          src={photo.thumbnailUrl}
          key={photo.id}
          alt="sample"
          width="100%"
          height="100%"
        />
      ))}
    </div>
  );
}

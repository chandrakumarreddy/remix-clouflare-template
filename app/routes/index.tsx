import { useLoaderData } from "@remix-run/react";

import styles from "~/styles/home.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export const loader = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/photos");
  const json = await resp.json();
  return json;
};

export default function Index() {
  const photos = useLoaderData();
  return (
    <div className="container">
      {photos.map((photo) => (
        <img
          src={photo.thumbnailUrl}
          key={photo.id}
          alt="sample"
          width="100%"
          height="300px"
        />
      ))}
    </div>
  );
}

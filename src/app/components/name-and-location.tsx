type TProps = {
  name: string;
  location: string;
};

export const NameAndLocation = ({ name, location }: TProps) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg font-semibold">{name}</h1>
      <h2 className="text-green text-base">{location}</h2>
    </div>
  );
};

type TProps = {
  quote: string;
};

export const Quote = ({ quote }: TProps) => {
  return <p className="text-base font-light">{`"${quote}"`}</p>;
};

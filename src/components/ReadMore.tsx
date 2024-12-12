import { Link } from "react-router-dom";

interface ReadMoreProps {
  str: string;
  url?: string;
}

const ReadMore = ({ str, url = "" }: ReadMoreProps) => {
  return (
    <>
      {str.length > 0 && (
        <p className="font-light">
          {`${str}...`}
          <Link to={url} className="text-blue-400 font-medium">
            อ่านเพิ่มเติม
          </Link>
        </p>
      )}
    </>
  );
};

export { ReadMore };

import { string, number } from "prop-types";

import { Card, CardHeader, CardFooter, CardBody } from "grommet";
import { View } from "grommet-icons";
import Infopop from "./Infopop";

const GameCard = ({ image, title, short, platform, url }) => {
  return (
    <>
      <Card
        height="small"
        width="medium"
        className="relative flex flex-col justify-center"
      >
        <CardBody pad="none" className="bg-center bg-black">
          <CardHeader
            alignContent="center"
            className="text-sm  px-2 py-1  font-bold text-center bg-black w-full text-white z-20 mb-2"
          >
            <span className="truncate">{title}</span>
            <span className="truncate text-xs text-blue-400" title={platform}>
              {platform}
            </span>
          </CardHeader>
          <div
            className=" bg-cover bg-no-repeat bg-top bg-red-200 h-full w-full "
            style={{ backgroundImage: `url("${image}")` }}
          ></div>
        </CardBody>
        <CardFooter className="z-10  bg-white">
          <Infopop text="Ver/Jugar">
            <p className="p-3 w-60">{short}</p>
          </Infopop>
          <a href={url} target="_blank" rel="noreferrer">
            <View
              color="black"
              size="medium"
              className="hover:bg-gray-200 m-2 p-1 bg-white rounded-full cursor-pointer"
            />
          </a>
        </CardFooter>
      </Card>
    </>
  );
};

GameCard.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  image: string.isRequired,
  short: string.isRequired,
  platform: string.isRequired,
  url: string.isRequired,
};

export default GameCard;

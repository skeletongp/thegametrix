import { string, number } from "prop-types";

import { Card, CardHeader, CardFooter, CardBody } from "grommet";
import { View } from "grommet-icons";
import { Link } from "react-router-dom";

const CatCard = ({ image, name, value, id }) => {
  return (
    <>
      <Card
        height="small"
        width="medium"
        className=" flex flex-col justify-center"
      >
        <CardBody pad="none" className="bg-center">
          <CardHeader
            alignContent="center"
            className="text-sm  px-2 py-1  font-bold text-center bg-black w-full text-white z-20 "
          >
            <span className="truncate">{name}</span>
            
          </CardHeader>
          <div
            className=" bg-no-repeat bg-cover bg-center  w-full h-full "
            style={{ backgroundImage: `url("${image}")` }}
          ></div>
        </CardBody>
        <CardFooter className="z-10  bg-transparent">
          
          <Link to={`bycat?${value}`}>
            <View
              color="black"
              size="medium"
              className="hover:bg-gray-200 m-2 p-1 bg-white rounded-full cursor-pointer"
            />
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

CatCard.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  image: string.isRequired,
  value: string.isRequired,
};

export default CatCard;

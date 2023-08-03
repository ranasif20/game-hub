import PlatformIconList from './PlatformiconList';
import { Game } from './hooks/useGames';
import { Card, Image, CardBody, Heading, Text } from '@chakra-ui/react';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        {/* <PlatformiconList
          platforms={game.parent_platform.map((p) => p.platform)}
        /> */}
        <PlatformIconList
          platforms={game.parent_platform?.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;

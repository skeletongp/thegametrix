import GameCard from "./GameCard";

const Banner = ({ data, range }) => {
  return (
    <div className="w-full p-4 bg-white relative shadow-xl my-2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {data &&
        data
          .slice(range.start, range.end)
          .map((g) => (
            <GameCard
              key={g.id}
              title={g.title}
              image={g.thumbnail}
              short={g.short_description}
              url={g.game_url}
              platform={g.platform}
              id={g.id}
            />
          ))}
    </div>
  );
};

export default Banner;

import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <div className="flex p-4 gap-4 items-center justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg ">
      <NavItem title="Top Rated" param="fetchTopRated" />
      <NavItem title="Trending" param="fetchTrending" />
    </div>
  );
}

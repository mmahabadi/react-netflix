interface MobileNavbarProps {
  visible: boolean;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hiover:underline">Home</div>
        <div className="px-3 text-center text-white hiover:underline">
          Series
        </div>
        <div className="px-3 text-center text-white hiover:underline">
          Movies
        </div>
        <div className="px-3 text-center text-white hiover:underline">
          New & Popular
        </div>
        <div className="px-3 text-center text-white hiover:underline">
          My List
        </div>
        <div className="px-3 text-center text-white hiover:underline">
          Browse by Languages
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;

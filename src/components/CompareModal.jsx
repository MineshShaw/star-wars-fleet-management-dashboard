const CompareModal = ({ setIsModalOpen, selectedRows }) => {
  return (
    <div className="compare-modal z-10 fixed top-0 left-0 w-full h-full orbitron bg-[rgba(0,0,0,0.5)] text-white flex justify-center items-center">
      <div
        className="modal flex items-center justify-center flex-col relative w-[80%] h-[80%] bg-black p-4 rounded-2xl shadow-[5px_5px_20px_#402fb5,-5px_-5px_20px_#cf30aa]
"
      >
        <button
          className="close-btn top-[10px] right-[10px] absolute cursor-pointer "
          onClick={() => setIsModalOpen(false)}
        >
          Close
        </button>
        <div className="flex items-center justify-center gap-1 w-[100%] h-[100%] bg-black p-4 rounded-2xl ">
          {Object.keys(selectedRows).map((key) => (
            <div
              key={key}
              className="w-[33%] gap-1 flex flex-col h-[100%] bg-black p-4 border text-wrap border-gray-700 rounded-lg"
            >
              <h1 className="text-2xl underline">{selectedRows[key].name}</h1>
              <div>
                <h3>Model: </h3>
                <p>{selectedRows[key].model}</p>
              </div>
              <div>
                <h3>Manufacturer: </h3>
                <p>{selectedRows[key].manufacturer}</p>
              </div>
              <div>
                <h3>Crew Size: </h3>
                <p>{selectedRows[key].crew}</p>
              </div>
              <div>
                <h3>Passenger Capacity: </h3>
                <p>{selectedRows[key].passengers}</p>
              </div>
              <div>
                <h3>Cargo Capacity: </h3>
                <p>{selectedRows[key].cargo_capacity}</p>
              </div>
              <div>
                <h3>Consumables Storage: </h3>
                <p>{selectedRows[key].consumables}</p>
              </div>
              <div>
                <h3>HyperDrive Rating: </h3>
                <p>{selectedRows[key].hyperdrive_rating}</p>
              </div>
              <div>
                <h3>Starship Class: </h3>
                <p>{selectedRows[key].starship_class}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompareModal;

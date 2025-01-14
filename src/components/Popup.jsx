import React, { useEffect, useState } from "react";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const popupData = localStorage.getItem("popupShown");
        const expiryTime = 24 * 60 * 60 * 1000;

        if (popupData) {
            const { expiry } = JSON.parse(popupData);
            const now = new Date().getTime();

            if(now > expiry) {
                localStorage.removeItem("popupShown");
                setShowPopup(true);
                setLocalStorageWithExpiry(expiryTime);
            }
        } else {
            setShowPopup(true);
            setLocalStorageWithExpiry(expiryTime);
        }
    }, []);

    const setLocalStorageWithExpiry = (expiryTime) => {
        const now = new Date().getTime();
        const data = {
            expiry: now + expiryTime,
        };
        localStorage.setItem("popupShown", JSON.stringify(data));
    };

    const handleClose = () => {
        setShowPopup(false);
    };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4">
            <h2 className="text-xl font-bold">Welcome to the website!</h2>
            <div className="flex justify-center items-center gap-2">
                <img src="/warning.png" alt="" className="w-6 h-6" />
                <p className="text-gray-600 text-sm">The Backend may work slowly</p>
            </div>
            <button onClick={handleClose} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition" >
              Close
            </button>
            <p className="text-sm text-gray-600">Try refreshing the website 
                <span className="text-red-500" > (after 30 sec.)</span> 
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;

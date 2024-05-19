import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/SplashScreen.css";

const SplashScreen = () => {
  const [loadingDone, setLoadingDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingDone(true);
      navigate('/welcome'); // Mengarahkan ke halaman '/welcome'
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      {!loadingDone && (
        <div className="loading-container">
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;


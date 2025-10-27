import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateGoldRate } from "../redux/goldSlice";

const GoldRateBanner = () => {
  const dispatch = useDispatch();
  const goldRate = useSelector((state) => state.gold.rate);

  useEffect(() => {
    const fetchGoldRate = async () => {
      // Simulating API
      const rate = Math.floor(6000 + Math.random() * 500);
      dispatch(updateGoldRate(rate));
    };

    fetchGoldRate();
    const interval = setInterval(fetchGoldRate, 300000); // 5 min
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="bg-yellow-200 p-3 rounded-lg text-center font-semibold">
      💰 Live Gold Rate: ₹{goldRate}/gm
    </div>
  );
};

export default GoldRateBanner;

import { useEffect } from "react";
import { useGetBitcoinPriceQuery } from "./cryptoApi";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { setLastPrice } from "./cryptoSlice";

export default function CryptoPriceCard() {
  const dispatch = useDispatch();

  const { data, isFetching } = useGetBitcoinPriceQuery();
  const lastPriceUSD = useSelector(
    (state: RootState) => state.crypto.lastPriceUSD
  );
  const lastPriceEUR = useSelector(
    (state: RootState) => state.crypto.lastPriceEUR
  );
  const lastUpdated = useSelector(
    (state: RootState) => state.crypto.lastUpdated
  );

  useEffect(() => {
    if (data && data.bitcoin) {
      dispatch(setLastPrice(data.bitcoin));
    }
  }, [data, dispatch]);

  return (
    <div
      style={{
       backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://tse3.mm.bing.net/th/id/OIP.SJWD9UUZKDsA70rH6N_TCQHaEJ?pid=Api&P=0&h=180")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: 20,
        border: "2px solid #797a148f",
        borderRadius: 12,
        maxWidth: 920,
        margin: "20px auto",
        color: "#fff", // ja fonā tumšāka bilde, lai teksts būtu saredzams
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ color: "#edf3f8ff", marginBottom: 15 }}>Bitcoin price</h2>

      {isFetching && (
        <p style={{ fontStyle: "italic", color: "#2a1891ff" }}>Loading...</p>
      )}

      <p style={{ margin: "5px 0" }}>
        <strong>Actual price USD:</strong>{" "}
        <span style={{ color: "#f4f7f8ff" }}>
          {data?.bitcoin?.usd ?? "–"} USD
        </span>
      </p>

      <p style={{ margin: "5px 0" }}>
        <strong>Actual price EUR:</strong>{" "}
        <span style={{ color: "#0ae665ff" }}>
          {data?.bitcoin?.eur ?? "–"} EUR
        </span>
      </p>

      <hr style={{ margin: "15px 0", borderColor: "#CCC" }} />

      <p style={{ margin: "5px 0" }}>
        <strong>Last saved price USD:</strong>{" "}
        <span style={{ color: "#f4f7f8ff" }}>{lastPriceUSD ?? "–"} USD</span>
      </p>

      <p style={{ margin: "5px 0" }}>
        <strong>Last saved price EUR:</strong>{" "}
        <span style={{ color: "#0ae665ff" }}>{lastPriceEUR ?? "–"} EUR</span>
      </p>

      <p style={{ marginTop: 10, fontSize: 12, color: "#cfcacaff" }}>
        Last updated: {lastUpdated ?? "–"}
      </p>
    </div>
  );
}

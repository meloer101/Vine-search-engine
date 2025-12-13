import { useContext } from "react";
import { ResultContext } from "./ResultContextProvider";

export const useResultContext = () => useContext(ResultContext);

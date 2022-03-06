import { HomePage } from "../views/HomePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHistory, getLinks, getTags } from "../redux/actions";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from 'axios'
export default function Home() {
  const Links = useSelector((state) => state.links);
  const hi = useSelector((state) => state.history);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLinks());
  }, []);
  useEffect(() => {
    dispatch(getHistory());
    console.log(hi);
  }, [Links]);
  useEffect(() => {
    dispatch(getTags());
  }, [Links]);

  return <HomePage />;
}

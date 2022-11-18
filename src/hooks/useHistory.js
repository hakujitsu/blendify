import { useMemo, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { goBack, goForward, goToPage } from "../store/slices/history";

const useHistory = () => {
  const { history, future } = useSelector((state) => state.history)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const canNavigateBack = useMemo(() => history > 0, [history])
  const canNavigateForward = useMemo(() => future > 0, [future])

  const navigateBack = () => {
    dispatch(goBack())
    navigate(-1);
  }

  const navigateForward = () => {
    dispatch(goForward())
    navigate(1)
  }

  const navigateTo = (path) => {
    dispatch(goToPage())
    navigate(path)
  }

  return {
    canNavigateBack,
    canNavigateForward,
    navigateBack,
    navigateForward,
    navigateTo
  }
}

export default useHistory;
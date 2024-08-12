import { useQuery, useMutation } from '@tanstack/react-query'
import { useDispatch } from "react-redux";
import { setUser } from '../redux/usersSlice';
import { getRentProductById, getRentProducts, 
         signInWithEmailPassword, registerWithEmailPassword, updateProfile,
         getActivities,getActivityById } from "../api";

export const useActivities = (url) => {
    const { data, isLoading } = useQuery([url], getActivities)
    return { data, isLoading };
 };

 export const useActivitiesById = (activityId) => {
   const { data, isLoading } = useQuery([activityId], getActivityById)
   return { data, isLoading };
}

export const useRentProducts = (url) => {
   const { data, isLoading } = useQuery([url], getRentProducts)
   return { data, isLoading };
};

export const useRentProductById = (rentproductId) => {
   const { data, isLoading } = useQuery([rentproductId], getRentProductById)
   return { data, isLoading };
}

export const useSignInWithEmailPassword = () => {
   const dispatch = useDispatch();
   const { mutate, isLoading, isSuccess, isError, data, error, status } = useMutation(signInWithEmailPassword, {
      onSuccess: (data) => dispatch(setUser(data.data))
   });
   return { mutate, isLoading, isSuccess, isError, data, error, status };
}

export const useRegisterWithEmailPassword = () => {
   const dispatch = useDispatch();
   const { mutate, isLoading, isSuccess, isError, data, error, status } = useMutation(registerWithEmailPassword, {
      onSuccess: (data) => dispatch(setUser(data.data))
   });
   return { mutate, isLoading, isSuccess, isError, data, error, status };
}

export const useUpdateProfile = () => {
   const dispatch = useDispatch();
   const { mutate, isLoading, isSuccess, isError, data, error, status } = useMutation(updateProfile, {
      onSuccess: (data) => dispatch(setUser(data.data))
   });
   return { mutate, isLoading, isSuccess, isError, data, error, status };
}
import axios from "axios"
const URL = "https://finalbackend-production-43e6.up.railway.app"
//const URL = "http://127.0.0.1:5000/api/v1"

export const getActivities = async ({ queryKey }) => {
    const [url] = queryKey;
    let data;
    if (url === "")
      data = await axios.get(`${URL}/activities/all`);
    else
      data = await axios.get(`${URL}/activities/${url}`);
  
    return data;
}

export const getActivityById = async ({ queryKey }) => {
  const [activityId] = queryKey;
  let data = await axios.get(`${URL}/activities/id/${activityId}`);
  return data.data;
}

export const getRentProductById = async ({ queryKey }) => {
  const [rentproductId] = queryKey;
  let data = await axios.get(`${URL}/rents/id/${rentproductId}`);
  return data.data;
}

export const getRentProducts = async ({ queryKey }) => {
  const [url] = queryKey;
  let data;
  if (url === "")
    data = await axios.get(`${URL}/rents/all`);
  else
    data = await axios.get(`${URL}/rents/${url}`);

  return data;
}

export const signInWithEmailPassword = async ({ email, password }) => {
  return await axios.post(`${URL}/users/signin`, {
    email,
    password,
  });
};

export const registerWithEmailPassword = async ({ email, password, username }) => {
  const data =  await axios.post(`${URL}/users/register`, {
    email,
    password,
    username,
  });
  console.log('register response = ')
  console.log(data)
  return data;
};

export const updateProfile = async ({ username, password, address, tel, access_token, user_id }) => {
  return await axios.put(
    `${URL}/users/update`,
    {
      user_id,
      username,
      password,
      address,
      tel,
    },
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );
}
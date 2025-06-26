// get Api/user

export const getUserData = async (req, res, next) => {
  try {
    const role = req.user.role;
    const recentSearchCities = req.user.recentSearchCities;

    res.status(200).json({ role, recentSearchCities });
  } catch (err) {
    next(err);
  }
};

// store the user recent search cities
export const storeRecentSearchCities = async (req, res, next) => {
  try {
    const { recentSearchCities } = req.body;
    const user = await req.user;

  if (user.recentSearchCities.length < 3) {
    user.recentSearchCities.push(recentSearchCities);
  } else {
    user.recentSearchCities.shift();
    user.recentSearchCities.push(recentSearchCities);
  }

  await user.save();
  res.status(200).json({ message: "Search cities stored successfully" });
  } catch (err) {
    next(err);
  }
};
export const linkedStores = () => {
  // Create instances of all stores which need linking here

  const stores = {};

  //Link all the stores

  return Object.keys(stores).map(key => stores[key]);
};

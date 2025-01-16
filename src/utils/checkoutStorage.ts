type CheckoutDetails = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  newsletter?: boolean;
  show?: {
    title: string;
    date: string;
    time: string;
    price: string;
  };
  timestamp: string;
};

export const storeCheckoutDetails = (details: Omit<CheckoutDetails, "timestamp">) => {
  const checkoutHistory = getCheckoutHistory();
  const newEntry = {
    ...details,
    timestamp: new Date().toISOString(),
  };
  
  checkoutHistory.push(newEntry);
  localStorage.setItem('checkoutHistory', JSON.stringify(checkoutHistory));
  console.log('Stored checkout details:', newEntry);
};

export const getCheckoutHistory = (): CheckoutDetails[] => {
  const stored = localStorage.getItem('checkoutHistory');
  return stored ? JSON.parse(stored) : [];
};
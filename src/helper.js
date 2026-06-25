export async function Ajax(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Something Went Wrong");
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export const storeInLocalStorage = function (name, data) {
  localStorage.setItem(`${name}`, JSON.stringify(data));
};
export const deleteFromLocalStorage = function (name) {
  localStorage.removeItem(name);
};
export const getFromLocalStorage = function (name) {
  return JSON.parse(localStorage.getItem(`${name}`));
};

export const formatCurrency = function (currency, amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: currency,
  }).format(amount);
};

export const postJson = async function (url, body) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok)
      throw new Error(data.message || `Request failed (${res.status})`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

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

export function timeAgo(date) {
  const diff = Date.now() - new Date(date).getTime();
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;

  if (diff < minute) return "Just Now";
  if (diff < hour) {
    const n = Math.floor(diff / minute);
    return `${n} Minute${n === 1 ? "" : "s"} Ago`;
  }
  if (diff < day) {
    const n = Math.floor(diff / hour);
    return `${n} Hour${n === 1 ? "" : "s"} Ago`;
  }
  if (diff < week) {
    const n = Math.floor(diff / day);
    return `${n} Day${n === 1 ? "" : "s"} Ago`;
  }
  if (diff < month) {
    const n = Math.floor(diff / week);
    return `${n} Week${n === 1 ? "" : "s"} Ago`;
  }
  if (diff < year) {
    const n = Math.floor(diff / month);
    return `${n} Month${n === 1 ? "" : "s"} Ago`;
  }
  const n = Math.floor(diff / year);
  return `${n} Year${n === 1 ? "" : "s"} Ago`;
}
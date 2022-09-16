const baseURL = "https://warm-badlands-20332.herokuapp.com";

export async function login(email,password) {
  try {
    const response = await fetch(`${baseURL}/api/login/${email}/${password}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllItems() {
    try {
      const response = await fetch(`https://warm-badlands-20332.herokuapp.com/api/item/get_all`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      });
      const json = await response.json();
      console.log("GET ITEMS RESPONSE==>",json)
      return json;
    } catch (error) {
      console.error(error);
    }
  }

  
export async function createItem(type,name,price,stock) {
    try {
      const response = await fetch(`https://warm-badlands-20332.herokuapp.com/api/item/add/${type}/${name}/${price}/${stock}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      });
      const json = await response.json();
      console.log("GET ITEMS RESPONSE==>",json)
      return json;
    } catch (error) {
      console.error(error);
    }
  }
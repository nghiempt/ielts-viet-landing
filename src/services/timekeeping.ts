import { API } from "@/utils/api";

const getAll = async () => {
  try {
    const response = await fetch(API.GET_ALL_TEACHER, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Failed - Status: ${response.status}`);
    }
    const data = await response.json();

    return data.data;
  } catch (error: any) {
    console.error("========= Error Get All Sliders:", error);
    return false;
  }
};

const createTeacher = async (payload: any) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch(API.CREATE_TEACHER, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(payload),
      redirect: "follow",
    });
    if (!response.ok) {
      throw new Error(`Failed - Status: ${response.status}`);
    }
    return true;
  } catch (error: any) {
    console.error("========= Error Create Slider:", error);
    return false;
  }
};

// const updateTeacher = async (id: string, payload: any) => {
//   try {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const response = await fetch(`${API.UPDATE_TEACHER}/${id}`, {
//       method: "PUT",
//       headers: myHeaders,
//       body: JSON.stringify(payload),
//       redirect: "follow",
//     });
//     if (!response.ok) {
//       throw new Error(`Failed - Status: ${response.status}`);
//     }
//     return true;
//   } catch (error: any) {
//     console.error("========= Error Create Slider:", error);
//     return false;
//   }
// };

// const deleteTeacher = async (id: any) => {
//   try {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     const response = await fetch(`${API.DELETE_TEACHER}/${id}`, {
//       method: "DELETE",
//       headers: myHeaders,
//       redirect: "follow",
//       body: JSON.stringify({}),
//     });
//     if (!response.ok) {
//       throw new Error(`Failed - Status: ${response.status}`);
//     }
//     return true;
//   } catch (error: any) {
//     console.error("========= Error Delete Slider:", error);
//     return false;
//   }
// };

export const TimekeepingService = {
  getAll,
  createTeacher,
};

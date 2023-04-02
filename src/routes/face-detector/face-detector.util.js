export const returnClarifaiRequestOptions = (imageUrl) => {
    const PAT = "ef0c5bb8a8834601ae520ce0e8547d87";
    const USER_ID = "a-m-e-n-0917";
    const APP_ID = "my-first-application";
    const IMAGE_URL = imageUrl;
  
    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });
  
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };
  
    return requestOptions;
  };
export const customFetch = () => {
  const controller = new AbortController();
  const { signal } = controller;

  const cancellableFetch = (url, option) => fetch(url, { ...option, signal });
  const abort = () => controller.abort();

  return [cancellableFetch, abort];
};

export const fetchOption = (methodType, body) => {
    return {
      method: methodType,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
  };
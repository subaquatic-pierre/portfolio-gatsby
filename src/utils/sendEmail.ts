type EmailHelper = (url: string, data: any) => Promise<any>;

export const handleSendEmail: EmailHelper = async function (
  url: string,
  data = {}
): Promise<any> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(data),
  });
  return response.json();
};

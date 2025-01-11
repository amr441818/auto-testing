import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3000/api/test", () => {
    console.log('mena')
    return HttpResponse.json([{id:1, name: "amrro"}]);

  }),
];
 
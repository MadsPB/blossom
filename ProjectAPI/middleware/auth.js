const baseUrl = 'http://localhost:3000'
export default async (ctx,next) =>
{
  try{
    const url = `${process.env.AUTH_URL ?? baseUrl}/auth`;
    const result = await fetch(url, { headers: {cookie: ctx.request.headers.cookie} }); // mode: 'cors',

    if(result.status === 200)
    {
      ctx.request.session = result;
      await next();
      return;
    }
  } catch (error)
  {
    console.log(error);
  }


  ctx.response.status = 403;
  ctx.response.body = "No Access";
}
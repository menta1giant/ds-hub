export default defineEventHandler((event) => {
  if (!getHeader(event, "Authorization")) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized",
    });
  }
});

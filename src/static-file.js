import send from 'koa-send'

function isFileRequest(url) {
  return url.lastIndexOf('.') > url.lastIndexOf('/')
}

export default function staticFile(publicPath) {
  return async (ctx, next) => {
    if (isFileRequest(ctx.path)) {
      try {
        await send(ctx, ctx.path, { root: publicPath })
      } catch (error) {
        ctx.throw((error.status === 404) ? 404 : 500)
      }
    } else {
      await next()
    }
  }
}

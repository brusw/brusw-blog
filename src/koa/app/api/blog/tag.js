const Router = require('koa-router')

const { PositiveIntegerValidator } = require('@validator/common')

const { TagDao } = require('@dao/tag')

const tagApi = new Router({
  prefix: '/v1/blog/tag'
})

const TagDto = new TagDao()

// 获取标签详情
tagApi.get('/', async (ctx) => {
  const v = await new PositiveIntegerValidator().validate(ctx)
  const tag = await TagDto.getTag(v.get('query.id'))

  ctx.body = tag
})

// 获取所有标签
tagApi.get('/tags', async (ctx) => {
  const tags = await TagDto.getTags()
  ctx.body = tags
})

module.exports = tagApi
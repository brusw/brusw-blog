import {
  get
} from '@/services/http/axios'

class Tag {
  // 获取所有标签
  async getTags() {
    const res = await get('v1/blog/tag/tags')
    return res
  }

  // 获取标签详情
  async getTag(id) {
    const res = await get('v1/blog/tag', {
      id
    })
    return res
  }
}

export default new Tag()

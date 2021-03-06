import request from '@/utils/request'
export function getList(query) {
  return request({
    url: 'resource',
    method: 'get',
    params: query
  })
}

export function destroy(id) {
  return request({
    url: 'resource/destroy/' + id,
    method: 'post'
  })
}


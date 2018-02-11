import { fetchArticleDetail, fetchList } from '~/fetch/fetch'

// 获取文章列表
export function FETCH_ARTICLE_LIST ({ commit, state }, { type }) {
  commit('SET_ACTIVE_TOPICS_TYPE', { type })
  return fetchList({
    page: state.pageIndex,
    limit: state.pageLimit,
    tab: type
  })
  .then(({data}) => commit('SET_ARTICLE_LIST', { list: data.data }))
}


export function FETCH_ARTICLE_DETAIL ({ commit, state }, { id }) {
  return fetchArticleDetail(id)
  .then(({data}) => commit('SET_ARTICLE_DETAIL', { data: data.data }))
}

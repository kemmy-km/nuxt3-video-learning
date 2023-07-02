/** 動画一覧ページリクエスト */
export type VideoRequest = {
  /** 動画コード */
  videoCode: number
  /** 所属するコース */
  courseId: number
}

/** 動画一覧ページレスポンス */
export type VideoResponse = {
  /** 動画コード */
  videoCode: number
  /** コースID */
  courseId: number
  /** vimeoID */
  videoNumber: string
  /** 動画タイトル */
  title: string
  /** 概要 */
  overview: string
  /** サムネイル画像 */
  imageSrc: string

  createdAt: string
  updatedAt: string
}

/** 動画詳細ページリクエスト */
export type VideoDetailRequest = {
  /** 動画コード */
  videoCode: number
}

/** コースに所属する動画Listの取得Request */
export type VideosByCourseIdRequest = {
  /** コースID */
  courseId: number
}

/** コースに所属する動画Listの取得Response */
export type VideosByCourseIdResponse = {
  /** 特定のコースIDに紐づく動画List */
  videoList: VideoResponse[]
}

/** 動画一覧ページリクエスト */
export type VideoRequest = {
  /** 動画コード */
  videoCode: number
  /** 所属するコース */
  courseId: string
}

/** 動画一覧ページレスポンス */
export type VideoResponse = {
  /** 動画コード */
  videoCode: number
  /** コースID */
  courseId: string
  /** vimeoID */
  videoNumber: string
  /** 動画タイトル */
  title: string
  /** サムネイル画像 */
  imageSrc: string
}

/** 動画詳細ページリクエスト */
export type VideoDetailRequest = {
  /** 動画コード */
  videoCode: number
  /** 所属するコース */
  courseId: string
  // これは、コースの一覧画面から特定の動画を視聴したい際
}
// それともコース単位？コース＝動画のひとかたまり、とも言える

/** コースに所属する動画Listの取得Request */
export type VideoByCourseIdRequest = {
  /** コースID */
  courseId: string
}

/** コースに所属する動画Listの取得Response */
export type VideoByCourseIdResponse = {
  videoList: VideoDetailRequest[]
}

/** 動画詳細ページレスポンス */
export type VideoDetailResponse = {
  /** 動画コード */
  videoCode: number
  /** コースID */
  courseId: string
  /** vimeoID */
  videoNumber: string
  /** 動画タイトル */
  title: string
  /** サムネイル画像 */
  imageSrc: string
}

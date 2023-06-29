/** 動画一覧ページリクエスト */
export type VideoRequest = {
  /** 動画コード */
  code: string
  /** 所属するコース */
  courseId: string
}

/** 動画一覧ページレスポンス */
export type VideoResponse = {
  /** 動画コード */
  code: string
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
  code: string
  /** 所属するコース */
  courseId: string
  // これは、コースの一覧画面から特定の動画を視聴したい際
}
// それともコース単位？コース＝動画のひとかたまり、とも言える

/** 動画詳細ページレスポンス */
export type VideoDetailResponse = {
  /** 動画コード */
  code: string
  /** vimeoID */
  videoNumber: string
  /** 動画タイトル */
  title: string
  /** サムネイル画像 */
  imageSrc: string
}

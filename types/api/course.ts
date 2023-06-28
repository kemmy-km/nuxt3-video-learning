/** コース一覧ページリクエスト */
export type CourseRequest = {
  code: string
  /** 所属するコース */
  // courseCode: string
}

/** コース一覧ページレスポンス */
export type CourseResponse = {
  code: string
  // courseId: string
  /** 動画タイトル */
  title: string
  /** サムネイル画像 */
  imgSrc: string
}

/**  コース詳細ページリクエスト */
export type CourseDetailRequest = {
  code: string
  // courseCode: string
  // これは、コースの一覧画面から特定の動画を視聴したい際
}
// それともコース単位？コース＝動画のひとかたまり、とも言える

/** 動画詳細ページレスポンス */
export type CourseDetailResponse = {
  /** コースコード */
  code: string
  /** コースタイトル */
  title: string
  /** サムネイル画像 */
  imgSrc: string
}

/** コース一覧ページリクエスト */
// export type CourseRequest = {
//   code: number
//   /** 所属するコース */
//   // courseId: number
// }

/** コース一覧ページレスポンス */
export type CourseResponse = {
  /** コースID */
  courseId: number
  /** コース名 */
  name: string
  /** 難易度 */
  difficulty: string
  /** 概要 */
  leadSentence: string
  /** サムネイル画像 */
  imageSrc: string

  createdAt: string
  updatedAt: string
}

/** コース詳細ページリクエスト */
export type CourseDetailRequest = {
  /** コースID */
  courseId: number
  // これは、コースの一覧画面から特定の動画を視聴したい際
}

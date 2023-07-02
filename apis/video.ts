import { API_BASE_URL } from "~/constants/common"
import { VideoResponse } from "types/api/video"

/** 動画一覧取得 */
export const fetchVideos = async (): // data: VideoRequest
Promise<VideoResponse[] | undefined> => {
  const response = await $fetch<VideoResponse[]>(`${API_BASE_URL}/videos2`)
  if (!response) return

  return response
}

/** コース毎の動画一覧取得 */
export const fetchVideosByCourseId = async (
  courseId: number
): // data: VideoRequest
Promise<VideoResponse[] | undefined> => {
  const response = await $fetch<VideoResponse[]>(
    `${API_BASE_URL}/course/videos/${courseId}`
  )
  if (!response) return

  return response
}

/** 動画詳細取得 */
export const fetchVideoDetail = async (
  // currentVideoCode: VideoRequest
  currentVideoCode: number
): Promise<VideoResponse | undefined> => {
  const response = await $fetch<VideoResponse>(
    `${API_BASE_URL}/video/${currentVideoCode}`
  )
  if (!response) return

  return response
}

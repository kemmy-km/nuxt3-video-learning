import { API_BASE_URL } from "~/constants/common"
import { CourseResponse } from "types/api/course"

// const API_BASE_URL = useRuntimeConfig().public.apiUrl

/** コース一覧取得 */
export const fetchCourses = async (): // data: VideoRequest
Promise<CourseResponse[] | undefined> => {
  const response = await $fetch<CourseResponse[]>(`${API_BASE_URL}/courses2`)
  if (!response) return

  return response
}

/** コースの情報を取得 */
export const fetchCourseDetail = async (
  currentCourseCode: number
): // data: VideoRequest
Promise<CourseResponse | undefined> => {
  const response = await $fetch<CourseResponse>(
    `${API_BASE_URL}/course/${currentCourseCode}`
  )
  if (!response) return

  return response
}

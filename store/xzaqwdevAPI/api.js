import axios from "axios"
const xzaqwdevAPI = axios.create({
  baseURL: "https://xzaqw22-dev-111193.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return xzaqwdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_cderr_list(payload) {
  return xzaqwdevAPI.get(`/api/v1/cderr/`)
}
function api_v1_cderr_create(payload) {
  return xzaqwdevAPI.post(`/api/v1/cderr/`, payload)
}
function api_v1_cderr_retrieve(payload) {
  return xzaqwdevAPI.get(`/api/v1/cderr/${payload.id}/`)
}
function api_v1_cderr_update(payload) {
  return xzaqwdevAPI.put(`/api/v1/cderr/${payload.id}/`, payload)
}
function api_v1_cderr_partial_update(payload) {
  return xzaqwdevAPI.patch(`/api/v1/cderr/${payload.id}/`, payload)
}
function api_v1_cderr_destroy(payload) {
  return xzaqwdevAPI.delete(`/api/v1/cderr/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return xzaqwdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return xzaqwdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return xzaqwdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return xzaqwdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return xzaqwdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return xzaqwdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return xzaqwdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return xzaqwdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return xzaqwdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return xzaqwdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return xzaqwdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return xzaqwdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return xzaqwdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_cderr_list,
  api_v1_cderr_create,
  api_v1_cderr_retrieve,
  api_v1_cderr_update,
  api_v1_cderr_partial_update,
  api_v1_cderr_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}

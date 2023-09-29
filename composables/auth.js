export const useAuthToken = () => {
    return useState('auth_token', () => null)
}
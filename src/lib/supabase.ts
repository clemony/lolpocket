import { AuthRoleJwtPayload } from '@/types/utilityTypes'
import { createClient } from '@supabase/supabase-js'
import { jwtDecode } from 'jwt-decode'

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

const {
    data: { subscription: authListener },
} = supabase.auth.onAuthStateChange(async (event, session) => {
    if (session) {
    }
})

export const getUserRole = () => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
        if (session) {
            let decodedJwt: AuthRoleJwtPayload = jwtDecode<AuthRoleJwtPayload>(
                session.access_token
            )
            console.log(
                '💠 - const{data}=supabase.auth.onAuthStateChange - decodedJwt:',
                decodedJwt
            )
            const userRole = decodedJwt.user_role
        }
    })
}

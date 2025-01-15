import { jwtDecode } from 'jwt-decode';

import { toast } from 'vue-sonner';

export const getUserRole = () => {
  const { auth } = useSupabaseClient();

  const { data } = auth.onAuthStateChange(async (event, session) => {
    if (session) {
      useTempStore().sessionInfo = session;
      let decodedJwt: AuthRoleJwtPayload = jwtDecode<AuthRoleJwtPayload>(session.access_token);

      useTempStore().userRole = decodedJwt.app_metadata.user_role;
      console.log('👑 - Hi', useTempStore().userRole);
    }
  });
};

export async function signOut() {
  const { auth } = useSupabaseClient();

  const { error } = await auth.signOut();
  console.log('😰 - Signed Out');

  useTempStore().userRole = null;
  useTempStore().sessionInfo = null;
  toast.success('Successfully logged out');
}

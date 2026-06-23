import type { InjectionKey, Ref } from "vue"
import { inject, provide } from "vue"

type ProfileScrollBody = Readonly<Ref<HTMLElement | null>>

const ProfileScrollBodyKey: InjectionKey<ProfileScrollBody> = Symbol(
  "ProfileScrollBody"
)

export function provideProfileScrollBody(body: ProfileScrollBody) {
  provide(ProfileScrollBodyKey, body)
}

export function useProfileScrollBody() {
  return inject(ProfileScrollBodyKey, null)
}
